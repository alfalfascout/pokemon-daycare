/* For the parents[], think of false as "the pokemon doesn't have
the value the user wants in this stat". true means "has" or "is perfect" */
var parent0 = {
    "species": {
        "name": "Pokemon",
        "gender": 0.5,
        "family": 0,
        "abilities": {
            "0": "Hidden",
            "1": "Regular",
            "2": "Regular"
        }},
    "ivs": [false,false,false,false,false,false],
    "item": "",
    "nature": false,
    "ability": 1
};
var parent1 = {
    "ivs": [false,false,false,false,false,false],
    "item": "",
    "nature": false,
};
var parents = [parent0, parent1];
/* For desired, false means don't show output for these or calculate their
 probabilities unless told otherwise */
var desired = {
    "ivs": false,
    "shiny": false,
    "gender": false,
    "nature": false,
    "ability": false
};
/* For manual, false means update the goals section when the user updates the
 parents section. When the user makes changes in the goals section,
 manual.(section) changes to true and parent changes no longer change goals */
var manual = {
    "ivs": false,
    "nature": false,
    "ability": false
};
/* This pokedex is populated when the program loads */
var breedable_pokedex = [];
/* The rest of these globals are set by the user in the goals section. */
var goal_ivs = [false,false,false,false,false,false];
var goal_gender = "x";
var goal_ability = 1;
var two_regions = false;
var shiny_charm = false;


function round(value, decimals) {
    /* Rounds a float to specified decimal places */
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


function pbtyX(pbty, repeat_trials) {
    /*  Calculates the probability of success if we do something
        the same way x number of times. */
    fail_pbty = 1 - pbty;
    new_fail_pbty = 1;
    for (var x = 0; x < repeat_trials; x += 1) {
        new_fail_pbty = new_fail_pbty * fail_pbty;
    }
    return 1 - new_fail_pbty;
}


function finishIVs(one_spread, taken_ivs, iv_spreads) {
    /*  Should iterate through all possible random ivs,
        given the already chosen ivs, and return them in iv_spreads */
    var free_ivs = [];
    for (var x = 0; x < 6; x += 1) {
        if (taken_ivs.indexOf(x) === -1) {
            free_ivs.push(x);
        }
    }

    if (free_ivs.length === 1) {
        for (var x = 0; x < 32; x += 1) {
            one_spread[free_ivs[0]] = x;
            iv_spreads.push(one_spread.slice());
        }
    }
    else {
        for (var x = 0; x < 32; x += 1) {
            one_spread[free_ivs[0]] = x;
            for (var y = 0; y < 32; y += 1) {
                one_spread[free_ivs[1]] = y;
                for (var z = 0; z < 32; z += 1) {
                    one_spread[free_ivs[2]] = z;
                    iv_spreads.push(one_spread.slice());
                }
            }
        }
    }

    return iv_spreads;
}


function splitIVs(one_spread, taken_ivs, iv_spreads, this_stat) {
    /*  Recursively splits any IV spreads that had multiple options
        because of inheritance, starting at the 0th stat in the thread.
        When it reaches the 5th stat, then passes them to finishIVs(). */
    this_stat = this_stat || 0;

    if (Number.isInteger(one_spread[this_stat])) {
        // the current iv in this spread is just an integer
        var flat_spread = one_spread.slice();
        if (this_stat === 5) {
            finishIVs(flat_spread, taken_ivs, iv_spreads);
        }
        else {
            splitIVs(flat_spread, taken_ivs, iv_spreads, (this_stat + 1));
        }
    }
    else if ((Number.isInteger(parents[0].item) &&
            Number.isInteger(parents[1].item)) &&
            !(parents[0].item === parents[1].item)) {
        // both parents have different power items, one is this stat
        var flat_spread_one = one_spread.slice();
        var flat_spread_two = one_spread.slice();
        flat_spread_one[parents[0].item] = 31;
        flat_spread_one[parents[1].item] = 15;
        flat_spread_two[parents[1].item] = 31;
        flat_spread_two[parents[0].item] = 15;
        if (this_stat === 5) {
            finishIVs(flat_spread_one, taken_ivs, iv_spreads);
            finishIVs(flat_spread_two, taken_ivs, iv_spreads);
        }
        else {
            splitIVs(flat_spread_one, taken_ivs, iv_spreads, (this_stat + 1));
            splitIVs(flat_spread_two, taken_ivs, iv_spreads, (this_stat + 1));
        }
    }
    else {
        // there were two numbers for a stat unrelated to power items
        var flat_spread_one = one_spread.slice();
        var flat_spread_two = one_spread.slice();
        flat_spread_one[this_stat] = one_spread[this_stat][0];
        flat_spread_two[this_stat] = one_spread[this_stat][1];
        if (this_stat === 5) {
            finishIVs(flat_spread_one, taken_ivs, iv_spreads);
            finishIVs(flat_spread_two, taken_ivs, iv_spreads);
        }
        else {
            splitIVs(flat_spread_one, taken_ivs, iv_spreads, (this_stat + 1));
            splitIVs(flat_spread_two, taken_ivs, iv_spreads, (this_stat + 1));
        }
    }
    return iv_spreads;
}


function powerItemChecker(chosen_ivs) {
    /*  Narrows down chosen_ivs based on power items held by the parents.
        If a parent has a power item, chosen_ivs must include that stat. */
    var narrowed_ivs = [];
    if ((Number.isInteger(parents[0].item) ||
            Number.isInteger(parents[1].item))) {
        for (var x = 0; x < chosen_ivs.length; x += 1) {
            if (chosen_ivs[x].includes(parents[0].item) ||
                    chosen_ivs[x].includes(parents[1].item)) {
                narrowed_ivs.push(chosen_ivs[x].slice());
            }
        }
    }
    else {
        narrowed_ivs = chosen_ivs.slice();
    }
    return narrowed_ivs;
}


function generateIVs() {
    /*  Generates every possible IV spread,
        given the parents' IVs and held items.
        Could return as many as 5 million or as few as 192 IV spreads */
    // iv_spreads are all the possible spreads
    var iv_spreads = [];
    // chosen_ivs are what the egg could inherit
    var chosen_ivs = [
        [0,1,2],[0,1,3],[0,1,4],[0,1,5],
        [0,2,3],[0,2,4],[0,2,5],
        [0,3,4],[0,3,5],[0,4,5],
        [1,2,3],[1,2,4],[1,2,5],
        [1,3,4],[1,3,5],[1,4,5],
        [2,3,4],[2,3,5],[2,4,5],[3,4,5]
    ];
    if (parents[0].item === "destiny-knot" ||
            parents[1].item === "destiny-knot") {
        chosen_ivs = [
            [0,1,2,3,4],[0,1,2,3,5],[0,1,2,4,5],
            [0,1,3,4,5],[0,2,3,4,5],[1,2,3,4,5]
        ];
    }
    chosen_ivs = powerItemChecker(chosen_ivs);

    for (var j = 0; j < chosen_ivs.length; j += 1) {
        var one_spread = [0,0,0,0,0,0];
        for (var k = 0; k < chosen_ivs[j].length; k += 1) {
            /* I keep confusing myself with this:
                [j] is the current IV SET, [k] is the IV INSIDE THE SET. */
            if (chosen_ivs[j][k] === parents[0].item === parents[1].item) {
                // if they both have the power item in this stat...
                if (parents[0].ivs[chosen_ivs[j][k]] &&
                        parents[1].ivs[chosen_ivs[j][k]]) {
                    // and they both have perfect ivs
                    one_spread[chosen_ivs[j][k]] = 31;
                }
                else if (parents[0].ivs[chosen_ivs[j][k]] ||
                        parents[1].ivs[chosen_ivs[j][k]]) {
                    // and one of them has a perfect iv
                    one_spread[chosen_ivs[j][k]] = [15, 31];
                }
                else {
                    // and neither have a perfect iv
                    one_spread[chosen_ivs[j][k]] = [10, 20];
                }
            }
            else if (chosen_ivs[j][k] === parents[0].item ||
                    chosen_ivs[j][k] === parents[1].item ) {
                // if one parent has a power item in this stat...
                if ((chosen_ivs[j][k] === parents[0].item &&
                        Number.isInteger(parents[1].item)) ||
                        (chosen_ivs[j][k] === parents[1].item &&
                        Number.isInteger(parents[0].item))) {
                    // and the other has a different power item...
                    if (chosen_ivs[j].includes(parents[0].item) &&
                            chosen_ivs[j].includes(parents[1].item)) {
                        // and both stats are in this chosen spread
                        one_spread[chosen_ivs[j][k]] = [15, 31];
                    }
                    else {
                        // and only one stat is in this chosen spread
                        one_spread[chosen_ivs[j][k]] = 31;
                    }

                }
                else {
                    // and the other has no power item
                    one_spread[chosen_ivs[j][k]] = 31;
                }
            }
            else if (parents[0].ivs[chosen_ivs[j][k]] &&
                    parents[1].ivs[chosen_ivs[j][k]]) {
                // if neither has the stat's item but both ivs are perfect
                one_spread[chosen_ivs[j][k]] = 31;
            }
            else if ((parents[0].ivs[chosen_ivs[j][k]] ||
                    parents[1].ivs[chosen_ivs[j][k]])) {
                // if neither has the stat's item and one has a perfect iv
                one_spread[chosen_ivs[j][k]] = [15, 31];
            }
            else {
                // if neither have the stat's item or a perfect iv
                one_spread[chosen_ivs[j][k]] = [10, 20];
            }
        }
        iv_spreads = splitIVs(one_spread.slice(), chosen_ivs[j], iv_spreads);
    }

    return iv_spreads;
}


function compareIVs(wanted_ivs, possible_ivs) {
    /*  Should populate matching_ivs with a list from possible_ivs
        that includes and/or exceeds wanted_ivs. */
    var matching_ivs = [];
    for (var x = 0; x < possible_ivs.length; x += 1) {
        var spread = possible_ivs[x];
        var matched_spread = true;
        for (var y = 0; y < 6; y += 1) {
            if (wanted_ivs[y] && !(spread[y] === 31)) {
                matched_spread = false;
            }
        }
        if (matched_spread) {
            matching_ivs.push(spread.slice());
        }
    }
    return (matching_ivs.length / possible_ivs.length);
}


function pushGoals(part) {
    /*  Called by updateGoals(). Pushes changes from the indented options
        (ivs, shiny probability aids, ability choices) to check the
        corresponding stat's box. Also called for parent stat changes,
        if the user hasn't changed the corresponding goals manually. */
    if (part === "ivs") {
        doc_iv_super = document.getElementsByName("goal-ivs")[0];
        doc_iv_super.checked = desired.ivs;
        doc_goals = document.getElementById("goals");
        doc_ivs = doc_goals.getElementsByClassName("iv-box");
        for(var j = 0; j < doc_ivs.length; j += 1) {
            doc_ivs[j].checked = goal_ivs[j];
        }
    }

    else if (part === "nature" || part === "ability" ||
            part === "shiny" || part === "gender") {
        var part_string = "goal-" + part;
        doc_part = document.getElementsByName(part_string)[0];
        doc_part.checked = desired[part];
    }
}


function updateGoals(part, push_from_parents, unchecking) {
    /*  If the user specifies stats from the parents (ivs, nature, etc.),
        push them to the goals section. If the user checks or unchecks
        in the goals section, disable updating that stat from the parents.
        Finally, pushGoals() to the webpage if relevant. */
    push_from_parents = push_from_parents || false;
    unchecking = unchecking || false;
    doc_goals = document.getElementById("goals");

    if (part === "ivs") {
        if (!manual.ivs && push_from_parents) {
            // Only push from parents if the user hasn't set stats manually
            desired.ivs = true;
            for(var j = 0; j < goal_ivs.length; j += 1) {
                // Goal ivs auto-set to both parents' best ivs
                goal_ivs[j] = parents[0].ivs[j] || parents[1].ivs[j];
            }
            pushGoals("ivs");
        }
        else if (!push_from_parents) {
            // If the change isn't from parents, the user set it manually
            manual.ivs = true;
            if (!unchecking) {
                // Manual goal ivs set to whatever's in the doc goals
                desired.ivs = true;
                doc_ivs = doc_goals.getElementsByClassName("iv-box");
                for(var j = 0; j < doc_ivs.length; j += 1) {
                    goal_ivs[j] = doc_ivs[j].checked;
                }
                pushGoals("ivs");
            }
            else {
                desired.ivs = false;
            }
        }
    }

    else if (part === "shiny") {
        if (!unchecking) {
            desired.shiny = true;
            doc_region = document.getElementsByName("goal-shiny-region")[0];
            doc_charm = document.getElementsByName("goal-shiny-charm")[0];

            two_regions = doc_region.checked;
            shiny_charm = doc_charm.checked;

            pushGoals("shiny");
        }
        else {
            desired.shiny = false;
        }
    }

    else if (part === "nature" || part === "ability" || part === "gender") {
        if (!manual[part] && push_from_parents) {
            // Only push from parents if the user hasn't set stats manually
            desired[part] = true;
            pushGoals(part);
        }
        else if (!push_from_parents && !unchecking) {
            desired[part] = true;
            manual[part] = true;
            if (part === "ability" || part === "gender") {
                doc_choices =
                    document.getElementsByName("goal-" + part + "-menu")[0];
                if (part === "gender") {
                    goal_gender = doc_choices.value;
                }
                else {
                    goal_ability = parseInt(doc_choices.value);
                }
                pushGoals(part);
            }
        }
        else if (unchecking) {
            desired[part] = false;
            manual[part] = true;
        }
    }
}


function updateOrUncheck(part) {
    /*  Called from the goals section. Determines whether the element changed
        has just been unchecked, and calls updateGoals accordingly. */
    manual[part] = true;
    var checked_string = "goal-" + part;
    var doc_checked = document.getElementsByName(checked_string)[0].checked;

    if (desired[part] && !doc_checked) {
        updateGoals(part, false, true);
    }
    else {
        updateGoals(part);
    }
}


function pushSpeciesChanges() {
    /*  Called when the user sets a species. Changes ability & gender menus
        to include only options relevant to the current species */
    var doc_goal_genders = document.getElementById("goal-gender-menu");
    var doc_parent_abilities =
        document.getElementsByClassName("ability-menu")[0];
    var doc_goal_abilities = document.getElementById("goal-ability-menu");
    var gender_block = "";
    var goal_ability_block = "";
    var parent_ability_block = "";
    var this_species = parents[0].species;
    var this_family = pokedex[this_species.family];

    if (this_family.gender === "x") {
        gender_block = "<option value='x'>None</option>";
    }
    else {
        if (this_family.gender > 0) {
            gender_block += "<option value='f'>Female</option>";
        }
        if (this_family.gender < 1) {
            gender_block += "<option value='m'>Male</option>";
        }
    }
    doc_goal_genders.innerHTML = gender_block;

    if (this_species.abilities["0"]) {
        parent_ability_block += "<option value='0'>" +
            this_species.abilities["0"] + " (Hidden Ability)</option>";
        goal_ability_block += "<option value='0'>" +
            this_family.abilities["0"] + " (Hidden Ability)</option>";
    }
    parent_ability_block += "<option value='1' selected>" +
        this_species.abilities["1"];
    goal_ability_block += "<option value='1' selected>" +
        this_family.abilities["1"];
    if (this_species.abilities["2"]) {
        parent_ability_block += " (Regular Ability 1)</option>" +
            "<option value='2'>" + this_species.abilities["2"] +
            " (Regular Ability 2)</option>";
        goal_ability_block += " (Regular Ability 1)</option>" +
            "<option value='2'>" + this_family.abilities["2"] +
            " (Regular Ability 2)</option>";
    }
    else {
        parent_ability_block += " (Regular Ability)</option>";
        goal_ability_block += " (Regular Ability)</option>";
    }
    doc_parent_abilities.innerHTML = parent_ability_block;
    doc_goal_abilities.innerHTML = goal_ability_block;

    // now make sure the js variables match the webpage
    parents[0].ability = parseInt(doc_parent_abilities.value);
    goal_gender = doc_goal_genders.value;
    goal_ability = parseInt(doc_goal_abilities.value);
}


function updateParent(pn, part) {
    /* Translates the webpage's parent information into
        variables local to the javascript program,
        so egg probabilities can be calculated. */
    var doc_parent = document.getElementsByClassName("parent")[pn];

    if (part === "species") {
        var doc_parent_species =
            doc_parent.getElementsByClassName("species-menu")[0];
        parents[pn].species = pokedex[doc_parent_species.value];
        pushSpeciesChanges();
    }

    if (part === "ivs") {
        var doc_parent_ivs = doc_parent.getElementsByClassName("iv-box");
        for(var j = 0; j < doc_parent_ivs.length; j += 1) {
            parents[pn].ivs[j] = doc_parent_ivs[j].checked;
        }
        updateGoals("ivs", true);
    }

    else if (part === "item") {
        var doc_parent_item =
            doc_parent.getElementsByClassName("held-item-menu")[0];
        parents[pn].item = doc_parent_item.value;
        if (parents[pn].item.includes("power")) {
            parents[pn].item = parseInt(parents[pn].item[6], 10);
        }
    }

    else if (part === "nature") {
        var doc_parent_nature =
            doc_parent.getElementsByClassName("nature-box")[0];
        parents[pn].nature = doc_parent_nature.checked;
        updateGoals("nature", true);
    }

    else if (part === "ability") {
        var doc_parent_ability =
            doc_parent.getElementsByClassName("ability-menu")[0];
        parents[0].ability = parseInt(doc_parent_ability.value);
        updateGoals("ability", true);
    }
}


function pushResults(total_pbty, pbtys) {
    /*  Updates the doc's results section with a breakdown of the
        probabilities, e.g. of hatching a shiny egg with perfect ivs */
    var doc_results = document.getElementById("results");
    var result_block = "<h3>Overall Result</h3>\n\n <p><b>" +
        "The chance of you hatching your desired pok&eacute;mon is " +
        round(total_pbty * 100, 4) + "%!</b> ";

    result_block += "If you were to hatch 10 eggs, the chance would be ~" +
        round(pbtyX(total_pbty, 10) * 100, 4) +
        "%. If you were to hatch 50, the chance would be ~" +
        round(pbtyX(total_pbty, 50) * 100, 4) + "%.</p>\n\n";

    result_block += "<h3>Breakdown</h3>\n\n";

    if (desired.ivs) {
        result_block += "<p><b>IVs:</b> The chance of you hatching a " +
            "pok&eacute;mon with your desired IVs is " +
            round(pbtys["ivs"] * 100, 4) + "%.</p>\n\n";
    }

    if (desired.shiny) {
        result_block += "<p><b>Shiny:</b> The chance of you hatching a " +
            "shiny pok&eacute;mon is " +
            round(pbtys["shiny"] * 100, 4) + "%.</p>\n\n";
    }

    if (desired.nature) {
        result_block += "<p><b>Nature:</b> The chance of you hatching a " +
            "pok&eacute;mon with your desired nature is " +
            round(pbtys["nature"] * 100, 4) + "%.</p>\n\n";
    }

    if (desired.ability) {
        result_block += "<p><b>Ability:</b> The chance of you hatching a " +
            "pok&eacute;mon with your desired ability is " +
            round(pbtys["ability"] * 100, 4) + "%.</p>\n\n";
    }

    if (desired.gender) {
        result_block += "<p><b>Gender:</b> The chance of you hatching a " +
            "pok&eacute;mon with your desired gender is " +
            round(pbtys["gender"] * 100, 4) + "%.</p>\n\n";
    }

    doc_results.innerHTML = result_block;
    doc_button = document.getElementsByName("goal-calculate")[0];
    doc_button.innerHTML = "Calculate!";
}


function calculateResults() {
    /*  Determines the likelihood of hatching an egg with the desired
        iv, nature, etc. as the user's goals, based on the parents' stats. */
    doc_button = document.getElementsByName("goal-calculate")[0];
    doc_button.innerHTML = "Calculating...";

    var total_pbty = 1.0;
    var pbtys = [];
    if (desired.ivs) {
        var iv_pbty = 1.0;
        iv_spreads = generateIVs();
        iv_pbty = compareIVs(goal_ivs.slice(), iv_spreads);
        total_pbty *= iv_pbty;
        pbtys["ivs"] = iv_pbty;
    }

    if (desired.shiny) {
        var shiny_pbty = 1.0 / 8192.0;
        if (two_regions && shiny_charm) {
            shiny_pbty = 1.0 / 512.0;
        }
        else if (shiny_charm) {
            shiny_pbty = 3.0 / 8192.0;
        }
        else if (two_regions) {
            shiny_pbty = 5.0 / 8192.0;
        }
        total_pbty *= shiny_pbty;
        pbtys["shiny"] = shiny_pbty;
    }

    if (desired.nature) {
        var nature_pbty = 1.0;
        if (!((parents[0].item === "everstone" && parents[0].nature) ||
                (parents[1].item === "everstone" && parents[1].nature))) {
            nature_pbty = 1.0 / 25.0;
        }
        total_pbty *= nature_pbty;
        pbtys["nature"] = nature_pbty;
    }

    if (desired.ability) {
        var ability_pbty = 1.0; // 100% base chance
        if (parents[0].species.abilities[2]) {
            // if more than one regular ability possible, 50% base chance
            ability_pbty = 0.5;
        }
        if (goal_ability === 0) {
            // if goal is hidden ability, 0% base chance
            ability_pbty = 0.0;
        }
        if (parents[0].ability === goal_ability) {
            // if primary parent has ability, 60% likely to inherit
            ability_pbty = 0.6 + (0.4 * ability_pbty);
        }
        else {
            // if primary parent doesn't, 60% not likely ???
            ability_pbty = 0.4 * ability_pbty;
        }
        total_pbty *= ability_pbty;
        pbtys["ability"] = ability_pbty;
    }

    if (desired.gender) {
        var gender_pbty = 1.0;
        if (goal_gender != "x") {
            gender_pbty = parents[0].species.gender;
            if (goal_gender === "m") {
                gender_pbty = 1 - gender_pbty;
            }
        }
        total_pbty *= gender_pbty;
        pbtys["gender"] = gender_pbty;
    }
    pushResults(total_pbty, pbtys);
}


function populatePokedex() {
    /*  Gets every breedable pokemon species from pokedex.js
        and updates species-menu with that list */
    var doc_species_menu = document.getElementsByName("species-menu")[0];
    var species_block = "<option value='0' selected>Select Species</option>";
    for (var p of pokedex) {
        if (pokedex.indexOf(p) > 0 && !(p.breeds === "NO")) {
            var this_index = pokedex.indexOf(p);
            species_block += "<option value='" + this_index.toString() +
                "'>" + p.name + " (" + this_index.toString() + ")</option>";
            breedable_pokedex[this_index] = p.name;
        }
    }
    doc_species_menu.innerHTML = species_block;
}


function matchFields(part) {
    /*  TODO: Autocompletes the menu with full or partial matches
        from the text field. So far, only necessary for species. */
    if (part === "species") {
        var user_input =
            document.getElementById("species-text").value.toLowerCase();
        var doc_species = document.getElementById("species-menu");
        var best_match = 100;
        var best_match_data = 0;
        for (var p in breedable_pokedex) {
            var this_match =
                breedable_pokedex[p].toLowerCase().indexOf(user_input);
            if ((this_match != -1) && (this_match < best_match)) {
                best_match = this_match;
                best_match_data = p;
            }
        }
    doc_species.value = best_match_data;
    updateParent(0, "species");
    }
}


populatePokedex();
