var parent0 = {
    "ivs": [false,false,false,false,false,false],
    "gender": "",
    "item": "",
    "nature": false,
    "ability": false
};
var parent1 = {
    "ivs": [false,false,false,false,false,false],
    "gender": "",
    "item": "",
    "nature": false,
    "ability": false
};
var parents = [parent0, parent1];
var desired = {
    "ivs": false,
    "shiny": false,
    "gender": false,
    "nature": false,
    "ability": false
};
var manual = {
    "ivs": false,
    "gender": false,
    "nature": false,
    "ability": false
}
var goal_ivs = [false,false,false,false,false,false];
var goal_gender = 0.5;
var ability_choices = 2.0;
var region_difference = false;
var shiny_charm = false;


function randInt(min, max) {
    return ~~(Math.random() * (max - min)) + min;
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
    /*  Splits any IV spreads that had multiple options
        because of inheritance, then passes them to finishIVs(). */
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
        // we need to split up the power items' influence properly
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
    /* Narrows down chosen_ivs based on power items held by the parents */
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
    var chosen_ivs = [
        [0,1,2],[0,1,3],[0,1,4],[0,1,5],
        [0,2,3],[0,2,4],[0,2,5],
        [0,3,4],[0,3,5],[0,4,5],
        [1,2,3],[1,2,4],[1,2,5],
        [1,3,4],[1,3,5],[1,4,5],
        [2,3,4],[2,3,5],[2,4,5],[3,4,5]
    ];
    var iv_spreads = [];
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
                    // and the other has a different power item
                    one_spread[chosen_ivs[j][k]] = [15, 31];
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
        iv_spreads = splitIVs(one_spread.slice(),
            chosen_ivs[j], iv_spreads);
    }

    return iv_spreads;
}


function compareIVs(wanted_ivs, possible_ivs) {
    /*  Should populate matching_ivs with a list from possible_ivs
        that includes and/or exceeds wanted_ivs. */
    var matching_ivs = []
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


function pushResults(total_probability, probabilities) {
    /*  Updates the doc's results section with a breakdown of the
        probabilities, e.g. of hatching a shiny egg with perfect ivs */
    var doc_results = document.getElementById("results");
    var result_block = "<h3>Overall Result</h3>\n\n <p><b>" +
        "The chance of you hatching your desired pok&eacute;mon is " +
        (total_probability * 100) + "%!</b> ";

    result_block += "If you were to hatch 50 eggs, the chance would be " +
        (total_probability * 5000) + "%. If you were to hatch 100, " +
        "the chance would be " + (total_probability * 10000) + "%.</p>\n\n";

    result_block += "<h3>Breakdown</h3>\n\n";

    if (desired.ivs) {
        result_block += "<p><b>IVs:</b> The chance of you hatching a " +
            "pok&eacute;mon with your desired IVs is " +
            (probabilities["ivs"] * 100) + "%.</p>\n\n";
    }

    if (desired.shiny) {
        result_block += "<p><b>Shiny:</b> The chance of you hatching a " +
            "shiny pok&eacute;mon is " + (probabilities["shiny"] * 100) +
            "%.</p>\n\n";
    }

    if (desired.nature) {
        result_block += "<p><b>Nature:</b> The chance of you hatching a " +
            "pok&eacute;mon with your desired nature is " +
            (probabilities["nature"] * 100) + "%.</p>\n\n";
    }

    if (desired.ability) {
        result_block += "<p><b>Ability:</b> The chance of you hatching a " +
            "pok&eacute;mon with your desired ability is " +
            (probabilities["ability"] * 100) + "%.</p>\n\n";
    }

    doc_results.innerHTML = result_block;
}


function calculateResults() {
    /*  Determines the likelihood of hatching an egg with the desired
        iv, nature, etc. as the user's goals, based on the parents' stats. */
    var total_probability = 1.0;
    var probabilities = [];
    if (desired.ivs) {
        var iv_probability = 1.0;
        iv_spreads = generateIVs();
        iv_probability = compareIVs(goal_ivs.slice(), iv_spreads);
        total_probability *= iv_probability;
        probabilities["ivs"] = iv_probability;
    }

    if (desired.shiny) {
        var shiny_probability = 1.0 / 8192.0;
        if (region_difference && shiny_charm) {
            shiny_probability = 1.0 / 512.0;
        }
        else if (shiny_charm) {
            shiny_probability = 3.0 / 8192.0;
        }
        else if (region_difference) {
            shiny_probability = 5.0 / 8192.0;
        }
        total_probability *= shiny_probability;
        probabilities["shiny"] = shiny_probability;
    }

    if (desired.nature) {
        var nature_probability = 1.0
        if (!(parents[0].item === "everstone" ||
                parents[1].item === "everstone")) {
            nature_probability = 1.0 / 25.0;
        }
        total_probability *= nature_probability;
        probabilities["nature"] = nature_probability;
    }

    if (desired.ability) {
        var ability_probability = 1 / ability_choices;
        if (ability_choices === 3 &&
                !(parents[0].ability || parents[1].ability)) {
            ability_probability = 0.0;
        }
        else if (ability_choices > 1) {
            for (var x = 0; x < 2; x += 1) {
                if (parents[x].gender === "female" && parents[x].ability) {
                    ability_probability += (0.8 * ability_probability);
                }
                else if (parents[x].gender === "male" && parents[x].ability) {
                    ability_probability += (0.2 * ability_probability);
                }
            }
        }
        total_probability *= ability_probability;
        probabilities["ability"] = ability_probability;
    }
    pushResults(total_probability, probabilities);
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

    else if (part === "nature" || part === "ability" || part === "shiny") {
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
                    if (doc_ivs[j].checked) {
                        goal_ivs[j] = true;
                    }
                    else {
                        goal_ivs[j] = false;
                    }
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

            if (doc_region.checked) {
                region_difference = true;
            }
            else {
                region_difference = false;
            }

            if (doc_charm.checked) {
                shiny_charm = true;
            }
            else {
                shiny_charm = false;
            }
            pushGoals("shiny");
        }
        else {
            desired.shiny = false;
        }
    }

    else if (part === "nature" || part === "ability") {
        if (!manual[part] && push_from_parents) {
            // Only push from parents if the user hasn't set stats manually
            desired[part] = true;
            pushGoals(part);
        }
        else if (!push_from_parents && !unchecking) {
            desired[part] = true;
            if (part === "ability") {
                doc_choices =
                    document.getElementsByName("goal-ability-number")[0];
                ability_choices = parseFloat(doc_choices);
                pushGoals("ability");
            }
        }
        else {
            desired[part] = false;
        }
    }
}

function updateOrUncheck(part) {
    /*  Called from the goals section. Determines whether the element changed
        has just been unchecked, and calls updateGoals accordingly. */
    var checked_string = "goal-" + part;
    var doc_checked = document.getElementsByName(checked_string)[0].checked;

    if (desired[part] && !doc_checked) {
        updateGoals(part, false, true);
    }
    else {
        updateGoals(part);
    }
}

function updateParent(pn, part) {
    /* Translates the webpage's parent information into
        variables local to the javascript program,
        so egg probabilities can be calculated. */
    var doc_parent = document.getElementsByClassName("parent")[pn];

    if (part === "ivs") {
        var parent_ivs = doc_parent.getElementsByClassName("iv-box");
        for(var j = 0; j < parent_ivs.length; j += 1) {
            if (parent_ivs[j].checked) {
                parents[pn].ivs[j] = true;
            }
            else {
                parents[pn].ivs[j] = false;
            }
        }
        updateGoals("ivs", true)
    }

    else if (part === "gender") {
        var parent_gender = doc_parent.getElementsByClassName("gender-menu")[0];
        selected_gender = parent_gender.selectedIndex;
        parents[pn].gender = parent_gender.options[selected_gender].value;
    }

    else if (part === "item") {
        var parent_item = doc_parent.getElementsByClassName("held-item-menu")[0];
        selected_item = parent_item.selectedIndex;
        parents[pn].item = parent_item.options[selected_item].value;
        if (parents[pn].item.includes("power")) {
            parents[pn].item = parseInt(parents[pn].item[6], 10);
        }
    }

    else if (part === "nature") {
        var parent_nature = doc_parent.getElementsByClassName("nature-box")[0];
        if (parent_nature.checked) {
            parents[pn].nature = true;
        }
        else {
            parents[pn].nature = false;
        }
        updateGoals("nature", true);
    }

    else if (part === "ability") {
        var parent_ability = doc_parent.getElementsByClassName("ability-box")[0];
        if (parent_ability.checked) {
            parents[pn].ability = true;
        }
        else {
            parents[pn].ability = false;
        }
        updateGoals("ability", true);
    }

    else {
        updateParent(pn, "ivs");
        updateParent(pn, "gender");
        updateParent(pn, "item");
        updateParent(pn, "nature");
        updateParent(pn, "ability");
    }
}
