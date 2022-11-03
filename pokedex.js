//Legendaries/ditto cannot breed, so their data is empty in the array but the element still exists
//This is how there are number jumps within this Pokedex
//Baby Pokemon have attribute ' "breeds": "NO" '
var pokedex = [
    {
        "name": "Pokemon",
        "gender": 0.5,
        "family": 0,
        "abilities":
        {
            "0": "Hidden",
            "1": "Regular",
            "2": "Regular"
        }
    },
    {
        "name": "Bulbasaur",
        "gender": 0.125,
        "family": 1,
        "abilities":
        {
            "0": "Chlorophyll",
            "1": "Overgrow"
        }
    },
    {
        "name": "Ivysaur",
        "gender": 0.125,
        "family": 1,
        "abilities":
        {
            "0": "Chlorophyll",
            "1": "Overgrow"
        }
    },
    {
        "name": "Venusaur",
        "gender": 0.125,
        "family": 1,
        "abilities":
        {
            "0": "Chlorophyll",
            "1": "Overgrow"
        }
    },
    {
        "name": "Charmander",
        "gender": 0.125,
        "family": 4,
        "abilities":
        {
            "0": "Solar Power",
            "1": "Blaze"
        }
    },
    {
        "name": "Charmeleon",
        "gender": 0.125,
        "family": 4,
        "abilities":
        {
            "0": "Solar Power",
            "1": "Blaze"
        }
    },
    {
        "name": "Charizard",
        "gender": 0.125,
        "family": 4,
        "abilities":
        {
            "0": "Solar Power",
            "1": "Blaze"
        }
    },
    {
        "name": "Squirtle",
        "gender": 0.125,
        "family": 7,
        "abilities":
        {
            "0": "Rain Dish",
            "1": "Torrent"
        }
    },
    {
        "name": "Wartortle",
        "gender": 0.125,
        "family": 7,
        "abilities":
        {
            "0": "Rain Dish",
            "1": "Torrent"
        }
    },
    {
        "name": "Blastoise",
        "gender": 0.125,
        "family": 7,
        "abilities":
        {
            "0": "Rain Dish",
            "1": "Torrent"
        }
    },
    {
        "name": "Caterpie",
        "gender": 0.5,
        "family": 10,
        "abilities":
        {
            "0": "Run Away",
            "1": "Shield Dust"
        }
    },
    {
        "name": "Metapod",
        "gender": 0.5,
        "family": 10,
        "abilities":
        {
            "0": "Shed Skin",
            "1": "Shed Skin"
        }
    },
    {
        "name": "Butterfree",
        "gender": 0.5,
        "family": 10,
        "abilities":
        {
            "0": "Tinted Lens",
            "1": "Compound Eyes"
        }
    },
    {
        "name": "Weedle",
        "gender": 0.5,
        "family": 13,
        "abilities":
        {
            "0": "Run Away",
            "1": "Shield Dust"
        }
    },
    {
        "name": "Kakuna",
        "gender": 0.5,
        "family": 13,
        "abilities":
        {
            "0": "Shed Skin",
            "1": "Shed Skin"
        }
    },
    {
        "name": "Beedrill",
        "gender": 0.5,
        "family": 13,
        "abilities":
        {
            "0": "Sniper",
            "1": "Swarm"
        }
    },
    {
        "name": "Pidgey",
        "gender": 0.5,
        "family": 16,
        "abilities":
        {
            "0": "Big Pecks",
            "1": "Keen Eye",
            "2": "Tangled Feet"
        }
    },
    {
        "name": "Pidgeotto",
        "gender": 0.5,
        "family": 16,
        "abilities":
        {
            "0": "Big Pecks",
            "1": "Keen Eye",
            "2": "Tangled Feet"
        }
    },
    {
        "name": "Pidgeot",
        "gender": 0.5,
        "family": 16,
        "abilities":
        {
            "0": "Big Pecks",
            "1": "Keen Eye",
            "2": "Tangled Feet"
        }
    },
    {
        "name": "Rattata",
        "gender": 0.5,
        "family": 19,
        "abilities":
        {
            "0": "Hustle",
            "1": "Run Away",
            "2": "Guts"
        }
    },
    {
        "name": "Raticate",
        "gender": 0.5,
        "family": 19,
        "abilities":
        {
            "0": "Hustle",
            "1": "Run Away",
            "2": "Guts"
        }
    },
    {
        "name": "Spearow",
        "gender": 0.5,
        "family": 21,
        "abilities":
        {
            "0": "Sniper",
            "1": "Keen Eye"
        }
    },
    {
        "name": "Fearow",
        "gender": 0.5,
        "family": 21,
        "abilities":
        {
            "0": "Sniper",
            "1": "Keen Eye"
        }
    },
    {
        "name": "Ekans",
        "gender": 0.5,
        "family": 23,
        "abilities":
        {
            "0": "Unnerve",
            "1": "Intimidate",
            "2": "Shed Skin"
        }
    },
    {
        "name": "Arbok",
        "gender": 0.5,
        "family": 23,
        "abilities":
        {
            "0": "Unnerve",
            "1": "Intimidate",
            "2": "Shed Skin"
        }
    },
    {
        "name": "Pikachu",
        "gender": 0.5,
        "family": 172,
        "abilities":
        {
            "0": "Lightning Rod",
            "1": "Static"
        }
    },
    {
        "name": "Raichu",
        "gender": 0.5,
        "family": 172,
        "abilities":
        {
            "0": "Lightning Rod",
            "1": "Static"
        }
    },
    {
        "name": "Sandshrew",
        "gender": 0.5,
        "family": 27,
        "abilities":
        {
            "0": "Sand Rush",
            "1": "Sand Veil"
        }
    },
    {
        "name": "Sandslash",
        "gender": 0.5,
        "family": 27,
        "abilities":
        {
            "0": "Sand Rush",
            "1": "Sand Veil"
        }
    },
    {
        "name": "Nidoran",
        "gender": 0.5,
        "family": 29,
        "abilities":
        {
            "0": "Hustle",
            "1": "Poison Point",
            "2": "Rivalry"
        }
    },,,
    {
        "name": "Nidoran",
        "gender": 0.5,
        "family": 29,
        "abilities":
        {
            "0": "Hustle",
            "1": "Poison Point",
            "2": "Rivalry"
        }
    },
    {
        "name": "Nidorino",
        "gender": 0.5,
        "family": 29,
        "abilities":
        {
            "0": "Hustle",
            "1": "Poison Point",
            "2": "Rivalry"
        }
    },
    {
        "name": "Nidoking",
        "gender": 0.5,
        "family": 29,
        "abilities":
        {
            "0": "Sheer Force",
            "1": "Poison Point",
            "2": "Rivalry"
        }
    },
    {
        "name": "Clefairy",
        "gender": 0.75,
        "family": 173,
        "abilities":
        {
            "0": "Friend Guard",
            "1": "Cute Charm",
            "2": "Magic Guard"
        }
    },
    {
        "name": "Clefable",
        "gender": 0.75,
        "family": 173,
        "abilities":
        {
            "0": "Unaware",
            "1": "Cute Charm",
            "2": "Magic Guard"
        }
    },
    {
        "name": "Vulpix",
        "gender": 0.75,
        "family": 37,
        "abilities":
        {
            "0": "Drought",
            "1": "Flash Fire"
        }
    },
    {
        "name": "Ninetales",
        "gender": 0.75,
        "family": 37,
        "abilities":
        {
            "0": "Drought",
            "1": "Flash Fire"
        }
    },
    {
        "name": "Jigglypuff",
        "gender": 0.75,
        "family": 174,
        "abilities":
        {
            "0": "Friend Guard",
            "1": "Cute Charm",
            "2": "Competitive"
        }
    },
    {
        "name": "Wigglytuff",
        "gender": 0.75,
        "family": 174,
        "abilities":
        {
            "0": "Frisk",
            "1": "Cute Charm",
            "2": "Competitive"
        }
    },
    {
        "name": "Zubat",
        "gender": 0.5,
        "family": 41,
        "abilities":
        {
            "0": "Infiltrator",
            "1": "Inner Focus"
        }
    },
    {
        "name": "Golbat",
        "gender": 0.5,
        "family": 41,
        "abilities":
        {
            "0": "Infiltrator",
            "1": "Inner Focus"
        }
    },
    {
        "name": "Oddish",
        "gender": 0.5,
        "family": 43,
        "abilities":
        {
            "0": "Run Away",
            "1": "Chlorophyll"
        }
    },
    {
        "name": "Gloom",
        "gender": 0.5,
        "family": 43,
        "abilities":
        {
            "0": "Stench",
            "1": "Chlorophyll"
        }
    },
    {
        "name": "Vileplume",
        "gender": 0.5,
        "family": 43,
        "abilities":
        {
            "0": "Effect Spore",
            "1": "Chlorophyll"
        }
    },
    {
        "name": "Paras",
        "gender": 0.5,
        "family": 46,
        "abilities":
        {
            "0": "Damp",
            "1": "Effect Spore",
            "2": "Dry Skin"
        }
    },
    {
        "name": "Parasect",
        "gender": 0.5,
        "family": 46,
        "abilities":
        {
            "0": "Damp",
            "1": "Effect Spore",
            "2": "Dry Skin"
        }
    },
    {
        "name": "Venonat",
        "gender": 0.5,
        "family": 48,
        "abilities":
        {
            "0": "Run Away",
            "1": "Compound Eyes",
            "2": "Tinted Lens"
        }
    },
    {
        "name": "Venomoth",
        "gender": 0.5,
        "family": 48,
        "abilities":
        {
            "0": "Wonder Skin",
            "1": "Shield Dust",
            "2": "Tinted Lens"
        }
    },
    {
        "name": "Diglett",
        "gender": 0.5,
        "family": 50,
        "abilities":
        {
            "0": "Sand Force",
            "1": "Sand Veil",
            "2": "Arena Trap"
        }
    },
    {
        "name": "Dugtrio",
        "gender": 0.5,
        "family": 50,
        "abilities":
        {
            "0": "Sand Force",
            "1": "Sand Veil",
            "2": "Arena Trap"
        }
    },
    {
        "name": "Meowth",
        "gender": 0.5,
        "family": 52,
        "abilities":
        {
            "0": "Unnerve",
            "1": "Pickup",
            "2": "Technician"
        }
    },
    {
        "name": "Persian",
        "gender": 0.5,
        "family": 52,
        "abilities":
        {
            "0": "Unnerve",
            "1": "Limber",
            "2": "Technician"
        }
    },
    {
        "name": "Psyduck",
        "gender": 0.5,
        "family": 54,
        "abilities":
        {
            "0": "Swift Swim",
            "1": "Damp",
            "2": "Cloud Nine"
        }
    },
    {
        "name": "Golduck",
        "gender": 0.5,
        "family": 54,
        "abilities":
        {
            "0": "Swift Swim",
            "1": "Damp",
            "2": "Cloud Nine"
        }
    },
    {
        "name": "Mankey",
        "gender": 0.5,
        "family": 56,
        "abilities":
        {
            "0": "Defiant",
            "1": "Vital Spirit",
            "2": "Anger Point"
        }
    },
    {
        "name": "Primeape",
        "gender": 0.5,
        "family": 56,
        "abilities":
        {
            "0": "Defiant",
            "1": "Vital Spirit",
            "2": "Anger Point"
        }
    },
    {
        "name": "Growlithe",
        "gender": 0.25,
        "family": 58,
        "abilities":
        {
            "0": "Justified",
            "1": "Intimidate",
            "2": "Flash Fire"
        }
    },
    {
        "name": "Arcanine",
        "gender": 0.25,
        "family": 58,
        "abilities":
        {
            "0": "Justified",
            "1": "Intimidate",
            "2": "Flash Fire"
        }
    },
    {
        "name": "Poliwag",
        "gender": 0.5,
        "family": 60,
        "abilities":
        {
            "0": "Swift Swim",
            "1": "Water Absorb",
            "2": "Damp"
        }
    },
    {
        "name": "Poliwhirl",
        "gender": 0.5,
        "family": 60,
        "abilities":
        {
            "0": "Swift Swim",
            "1": "Water Absorb",
            "2": "Damp"
        }
    },
    {
        "name": "Poliwrath",
        "gender": 0.5,
        "family": 60,
        "abilities":
        {
            "0": "Swift Swim",
            "1": "Water Absorb",
            "2": "Damp"
        }
    },
    {
        "name": "Abra",
        "gender": 0.25,
        "family": 63,
        "abilities":
        {
            "0": "Magic Guard",
            "1": "Synchronize",
            "2": "Inner Focus"
        }
    },
    {
        "name": "Kadabra",
        "gender": 0.25,
        "family": 63,
        "abilities":
        {
            "0": "Magic Guard",
            "1": "Synchronize",
            "2": "Inner Focus"
        }
    },
    {
        "name": "Alakazam",
        "gender": 0.25,
        "family": 63,
        "abilities":
        {
            "0": "Magic Guard",
            "1": "Synchronize",
            "2": "Inner Focus"
        }
    },
    {
        "name": "Machop",
        "gender": 0.25,
        "family": 66,
        "abilities":
        {
            "0": "Steadfast",
            "1": "Guts",
            "2": "No Guard"
        }
    },
    {
        "name": "Machoke",
        "gender": 0.25,
        "family": 66,
        "abilities":
        {
            "0": "Steadfast",
            "1": "Guts",
            "2": "No Guard"
        }
    },
    {
        "name": "Machamp",
        "gender": 0.25,
        "family": 66,
        "abilities":
        {
            "0": "Steadfast",
            "1": "Guts",
            "2": "No Guard"
        }
    },
    {
        "name": "Bellsprout",
        "gender": 0.5,
        "family": 69,
        "abilities":
        {
            "0": "Gluttony",
            "1": "Chlorophyll"
        }
    },
    {
        "name": "Weepinbell",
        "gender": 0.5,
        "family": 69,
        "abilities":
        {
            "0": "Gluttony",
            "1": "Chlorophyll"
        }
    },
    {
        "name": "Victreebel",
        "gender": 0.5,
        "family": 69,
        "abilities":
        {
            "0": "Gluttony",
            "1": "Chlorophyll"
        }
    },
    {
        "name": "Tentacool",
        "gender": 0.5,
        "family": 72,
        "abilities":
        {
            "0": "Rain Dish",
            "1": "Clear Body",
            "2": "Liquid Ooze"
        }
    },
    {
        "name": "Tentacruel",
        "gender": 0.5,
        "family": 72,
        "abilities":
        {
            "0": "Rain Dish",
            "1": "Clear Body",
            "2": "Liquid Ooze"
        }
    },
    {
        "name": "Geodude",
        "gender": 0.5,
        "family": 74,
        "abilities":
        {
            "0": "Sand Veil",
            "1": "Rock Head",
            "2": "Sturdy"
        }
    },
    {
        "name": "Graveler",
        "gender": 0.5,
        "family": 74,
        "abilities":
        {
            "0": "Sand Veil",
            "1": "Rock Head",
            "2": "Sturdy"
        }
    },
    {
        "name": "Golem",
        "gender": 0.5,
        "family": 74,
        "abilities":
        {
            "0": "Sand Veil",
            "1": "Rock Head",
            "2": "Sturdy"
        }
    },
    {
        "name": "Ponyta",
        "gender": 0.5,
        "family": 77,
        "abilities":
        {
            "0": "Flame Body",
            "1": "Run Away",
            "2": "Flash Fire"
        }
    },
    {
        "name": "Rapidash",
        "gender": 0.5,
        "family": 77,
        "abilities":
        {
            "0": "Flame Body",
            "1": "Run Away",
            "2": "Flash Fire"
        }
    },
    {
        "name": "Slowpoke",
        "gender": 0.5,
        "family": 79,
        "abilities":
        {
            "0": "Regenerator",
            "1": "Oblivious",
            "2": "Own Tempo"
        }
    },
    {
        "name": "Slowbro",
        "gender": 0.5,
        "family": 79,
        "abilities":
        {
            "0": "Regenerator",
            "1": "Oblivious",
            "2": "Own Tempo"
        }
    },
    {
        "name": "Magnemite",
        "gender": 'x',
        "family": 81,
        "abilities":
        {
            "0": "Analytic",
            "1": "Magnet Pull",
            "2": "Sturdy"
        }
    },
    {
        "name": "Magneton",
        "gender": 'x',
        "family": 81,
        "abilities":
        {
            "0": "Analytic",
            "1": "Magnet Pull",
            "2": "Sturdy"
        }
    },
    {
        "name": "Farfetch'd",
        "gender": 0.5,
        "family": 83,
        "abilities":
        {
            "0": "Defiant",
            "1": "Keen Eye",
            "2": "Inner Focus"
        }
    },
    {
        "name": "Doduo",
        "gender": 0.5,
        "family": 84,
        "abilities":
        {
            "0": "Tangled Feet",
            "1": "Run Away",
            "2": "Early Bird"
        }
    },
    {
        "name": "Dodrio",
        "gender": 0.5,
        "family": 84,
        "abilities":
        {
            "0": "Tangled Feet",
            "1": "Run Away",
            "2": "Early Bird"
        }
    },
    {
        "name": "Seel",
        "gender": 0.5,
        "family": 86,
        "abilities":
        {
            "0": "Ice Body",
            "1": "Thick Fat",
            "2": "Hydration"
        }
    },
    {
        "name": "Dewgong",
        "gender": 0.5,
        "family": 86,
        "abilities":
        {
            "0": "Ice Body",
            "1": "Thick Fat",
            "2": "Hydration"
        }
    },
    {
        "name": "Grimer",
        "gender": 0.5,
        "family": 88,
        "abilities":
        {
            "0": "Poison Touch",
            "1": "Stench",
            "2": "Sticky Hold"
        }
    },
    {
        "name": "Muk",
        "gender": 0.5,
        "family": 88,
        "abilities":
        {
            "0": "Poison Touch",
            "1": "Stench",
            "2": "Sticky Hold"
        }
    },
    {
        "name": "Shellder",
        "gender": 0.5,
        "family": 90,
        "abilities":
        {
            "0": "Overcoat",
            "1": "Shell Armor",
            "2": "Skill Link"
        }
    },
    {
        "name": "Cloyster",
        "gender": 0.5,
        "family": 90,
        "abilities":
        {
            "0": "Overcoat",
            "1": "Shell Armor",
            "2": "Skill Link"
        }
    },
    {
        "name": "Gastly",
        "gender": 0.5,
        "family": 92,
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Haunter",
        "gender": 0.5,
        "family": 92,
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Gengar",
        "gender": 0.5,
        "family": 92,
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Onix",
        "gender": 0.5,
        "family": 95,
        "abilities":
        {
            "0": "Weak Armor",
            "1": "Rock Head",
            "2": "Sturdy"
        }
    },
    {
        "name": "Drowzee",
        "gender": 0.5,
        "family": 96,
        "abilities":
        {
            "0": "Inner Focus",
            "1": "Insomnia",
            "2": "Forewarn"
        }
    },
    {
        "name": "Hypno",
        "gender": 0.5,
        "family": 96,
        "abilities":
        {
            "0": "Inner Focus",
            "1": "Insomnia",
            "2": "Forewarn"
        }
    },
    {
        "name": "Krabby",
        "gender": 0.5,
        "family": 98,
        "abilities":
        {
            "0": "Sheer Force",
            "1": "Hyper Cutter",
            "2": "Shell Armor"
        }
    },
    {
        "name": "Kingler",
        "gender": 0.5,
        "family": 98,
        "abilities":
        {
            "0": "Sheer Force",
            "1": "Hyper Cutter",
            "2": "Shell Armor"
        }
    },
    {
        "name": "Voltorb",
        "gender": 'x',
        "family": 100,
        "abilities":
        {
            "0": "Aftermath",
            "1": "Soundproof",
            "2": "Static"
        }
    },
    {
        "name": "Electrode",
        "gender": 'x',
        "family": 100,
        "abilities":
        {
            "0": "Aftermath",
            "1": "Soundproof",
            "2": "Static"
        }
    },
    {
        "name": "Exceggcute",
        "gender": 0.5,
        "family": 102,
        "abilities":
        {
            "0": "Harvest",
            "1": "Chlorophyll"
        }
    },
    {
        "name": "Exeggutor",
        "gender": 0.5,
        "family": 102,
        "abilities":
        {
            "0": "Harvest",
            "1": "Chlorophyll"
        }
    },
    {
        "name": "Cubone",
        "gender": 0.5,
        "family": 104,
        "abilities":
        {
            "0": "Battle Armor",
            "1": "Rock Head",
            "2": "Lightning Rod"
        }
    },
    {
        "name": "Marowak",
        "gender": 0.5,
        "family": 104,
        "abilities":
        {
            "0": "Battle Armor",
            "1": "Rock Head",
            "2": "Lightning Rod"
        }
    },
    {
        "name": "Hitmonlee",
        "gender": 0,
        "family": 236,
        "abilities":
        {
            "0": "Unburden",
            "1": "Limber",
            "2": "Reckless"
        }
    },
    {
        "name": "Hitmonchan",
        "gender": 0,
        "family": 236,
        "abilities":
        {
            "0": "Inner Focus",
            "1": "Keen Eye",
            "2": "Iron Fist"
        }
    },
    {
        "name": "Lickitung",
        "gender": 0.5,
        "family": 108,
        "abilities":
        {
            "0": "Cloud Nine",
            "1": "Own Tempo",
            "2": "Oblivious"
        }
    },
    {
        "name": "Koffing",
        "gender": 0.5,
        "family": 109,
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Weezing",
        "gender": 0.5,
        "family": 109,
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Rhyhorn",
        "gender": 0.5,
        "family": 111,
        "abilities":
        {
            "0": "Reckless",
            "1": "Lightning Rod",
            "2": "Rock Head"
        }
    },
    {
        "name": "Rhydon",
        "gender": 0.5,
        "family": 111,
        "abilities":
        {
            "0": "Reckless",
            "1": "Lightning Rod",
            "2": "Rock Head"
        }
    },
    {
        "name": "Chansey",
        "gender": 1.0,
        "family": 113,
        "abilities":
        {
            "0": "Healer",
            "1": "Natural Cure",
            "2": "Serene Grace"
        }
    },
    {
        "name": "Tangela",
        "gender": 0.5,
        "family": 114,
        "abilities":
        {
            "0": "Regenerator",
            "1": "Chlorophyll",
            "2": "Leaf Guard"
        }
    },
    {
        "name": "Kangaskhan",
        "gender": 1.0,
        "family": 115,
        "abilities":
        {
            "0": "Inner Focus",
            "1": "Early Bird",
            "2": "Scrappy"
        }
    },
    {
        "name": "Horsea",
        "gender": 0.5,
        "family": 116,
        "abilities":
        {
            "0": "Damp",
            "1": "Swift Swim",
            "2": "Sniper"
        }
    },
    {
        "name": "Seadra",
        "gender": 0.5,
        "family": 116,
        "abilities":
        {
            "0": "Damp",
            "1": "Poison Point",
            "2": "Sniper"
        }
    },
    {
        "name": "Goldeen",
        "gender": 0.5,
        "family": 118,
        "abilities":
        {
            "0": "Lightning Rod",
            "1": "Swift Swim",
            "2": "Water Veil"
        }
    },
    {
        "name": "Seaking",
        "gender": 0.5,
        "family": 118,
        "abilities":
        {
            "0": "Lightning Rod",
            "1": "Swift Swim",
            "2": "Water Veil"
        }
    },
    {
        "name": "Staryu",
        "gender": 'x',
        "family": 120,
        "abilities":
        {
            "0": "Analytic",
            "1": "Illuminate",
            "2": "Natural Cure"
        }
    },
    {
        "name": "Starmie",
        "gender": 'x',
        "family": 120,
        "abilities":
        {
            "0": "Analytic",
            "1": "Illuminate",
            "2": "Natural Cure"
        }
    },
    {
        "name": "Mr. Mime",
        "gender": 0.5,
        "family": 122,
        "abilities":
        {
            "0": "Technician",
            "1": "Soundproof",
            "2": "Filter"
        }
    },
    {
        "name": "Scyther",
        "gender": 0.5,
        "family": 123,
        "abilities":
        {
            "0": "Steadfast",
            "1": "Swarm",
            "2": "Technician"
        }
    },
    {
        "name": "Jynx",
        "gender": 1,
        "family": 238,
        "abilities":
        {
            "0": "Dry Skin",
            "1": "Oblivious",
            "2": "Forewarn"
        }
    },
    {
        "name": "Electabuzz",
        "gender": 0.25,
        "family": 239,
        "abilities":
        {
            "0": "Vital Spirit",
            "1": "Static"
        }
    },
    {
        "name": "Magmar",
        "gender": 0.25,
        "family": 240,
        "abilities":
        {
            "0": "Vital Spirit",
            "1": "Flame Body"
        }
    },
    {
        "name": "Pinsir",
        "gender": 0.5,
        "family": 127,
        "abilities":
        {
            "0": "Moxie",
            "1": "Hyper Cutter",
            "2": "Mold Breaker"
        }
    },
    {
        "name": "Tauros",
        "gender": 0.0,
        "family": 128,
        "abilities":
        {
            "0": "Sheer Force",
            "1": "Intimidate",
            "2": "Anger Point"
        }
    },
    {
        "name": "Magikarp",
        "gender": 0.5,
        "family": 129,
        "abilities":
        {
            "0": "Rattled",
            "1": "Swift Swim"
        }
    },
    {
        "name": "Gyarados",
        "gender": 0.5,
        "family": 129,
        "abilities":
        {
            "0": "Moxie",
            "1": "Intimidate"
        }
    },
    {
        "name": "Lapras",
        "gender": 0.5,
        "family": 131,
        "abilities":
        {
            "0": "Hydration",
            "1": "Water Absorb",
            "2": "Shell Armor"
        }
    },,
    {
        "name": "Eevee",
        "gender": 0.125,
        "family": 133,
        "abilities":
        {
            "0": "Anticipation",
            "1": "Run Away",
            "2": "Adaptability"
        }
    },
    {
        "name": "Vaporeon",
        "gender": 0.125,
        "family": 133,
        "abilities":
        {
            "0": "Hydration",
            "1": "Water Absorb",
            "2": "Water Absorb"
        }
    },
    {
        "name": "Jolteon",
        "gender": 0.125,
        "family": 133,
        "abilities":
        {
            "0": "Quick Feet",
            "1": "Volt Absorb",
            "2": "Volt Absorb"
        }
    },
    {
        "name": "Flareon",
        "gender": 0.125,
        "family": 133,
        "abilities":
        {
            "0": "Guts",
            "1": "Flash Fire",
            "2": "Flash Fire"
        }
    },
    {
        "name": "Porygon",
        "gender": 'x',
        "family": 137,
        "abilities":
        {
            "0": "Analytic",
            "1": "Trace",
            "2": "Download"
        }
    },
    {
        "name": "Omanyte",
        "gender": 0.125,
        "family": 138,
        "abilities":
        {
            "0": "Weak Armor",
            "1": "Swift Swim",
            "2": "Shell Armor"
        }
    },
    {
        "name": "Omastar",
        "gender": 0.125,
        "family": 138,
        "abilities":
        {
            "0": "Weak Armor",
            "1": "Swift Swim",
            "2": "Shell Armor"
        }
    },
    {
        "name": "Kabuto",
        "gender": 0.125,
        "family": 140,
        "abilities":
        {
            "0": "Weak Armor",
            "1": "Swift Swim",
            "2": "Battle Armor"
        }
    },
    {
        "name": "Kabutops",
        "gender": 0.125,
        "family": 140,
        "abilities":
        {
            "0": "Weak Armor",
            "1": "Swift Swim",
            "2": "Battle Armor"
        }
    },
    {
        "name": "Aerodactyl",
        "gender": 0.125,
        "family": 142,
        "abilities":
        {
            "0": "Unnerve",
            "1": "Rock Head",
            "2": "Pressure"
        }
    },
    {
        "name": "Snorlax",
        "gender": 0.125,
        "family": 143,
        "abilities":
        {
            "0": "Gluttony",
            "1": "Immunity",
            "2": "Thick Fat"
        }
    },,,,
    {
        "name": "Dratini",
        "gender": 0.5,
        "family": 147,
        "abilities":
        {
            "0": "Marvel Scale",
            "1": "Shed Skin"
        }
    },
    {
        "name": "Dragonair",
        "gender": 0.5,
        "family": 147,
        "abilities":
        {
            "0": "Marvel Scale",
            "1": "Shed Skin"
        }
    },
    {
        "name": "Dragonite",
        "gender": 0.5,
        "family": 147,
        "abilities":
        {
            "0": "Multiscale",
            "1": "Inner Focus"
        }
    },,,
    {
        "name": "Chikorita",
        "gender": 0.125,
        "family": 152,
        "abilities":
        {
            "0": "Leaf Guard",
            "1": "Overgrowth"
        }
    },
    {
        "name": "Bayleef",
        "gender": 0.125,
        "family": 152,
        "abilities":
        {
            "0": "Leaf Guard",
            "1": "Overgrowth"
        }
    },
    {
        "name": "Meganium",
        "gender": 0.125,
        "family": 152,
        "abilities":
        {
            "0": "Leaf Guard",
            "1": "Overgrowth"
        }
    },
    {
        "name": "Cyndaquil",
        "gender": 0.125,
        "family": 155,
        "abilities":
        {
            "0": "Flash Fire",
            "1": "Blaze"
        }
    },
    {
        "name": "Quilava",
        "gender": 0.125,
        "family": 155,
        "abilities":
        {
            "0": "Flash Fire",
            "1": "Blaze"
        }
    },
    {
        "name": "Typhlosion",
        "gender": 0.125,
        "family": 155,
        "abilities":
        {
            "0": "Flash Fire",
            "1": "Blaze"
        }
    },
    {
        "name": "Totodile",
        "gender": 0.125,
        "family": 158,
        "abilities":
        {
            "0": "Sheer Force",
            "1": "Torrent"
        }
    },
    {
        "name": "Croconaw",
        "gender": 0.125,
        "family": 158,
        "abilities":
        {
            "0": "Sheer Force",
            "1": "Torrent"
        }
    },
    {
        "name": "Feraligatr",
        "gender": 0.125,
        "family": 158,
        "abilities":
        {
            "0": "Sheer Force",
            "1": "Torrent"
        }
    },
    {
        "name": "Sentret",
        "gender": 0.5,
        "family": 161,
        "abilities":
        {
            "0": "Frisk",
            "1": "Run Away",
            "2": "Keen Eye"
        }
    },
    {
        "name": "Furret",
        "gender": 0.5,
        "family": 161,
        "abilities":
        {
            "0": "Frisk",
            "1": "Run Away",
            "2": "Keen Eye"
        }
    },
    {
        "name": "Hoothoot",
        "gender": 0.5,
        "family": 163,
        "abilities":
        {
            "0": "Tinted Lens",
            "1": "Insomnia",
            "2": "Keen Eye"
        }
    },
    {
        "name": "Noctowl",
        "gender": 0.5,
        "family": 163,
        "abilities":
        {
            "0": "Tinted Lens",
            "1": "Insomnia",
            "2": "Keen Eye"
        }
    },
    {
        "name": "Ledyba",
        "gender": 0.5,
        "family": 165,
        "abilities":
        {
            "0": "Rattled",
            "1": "Swarm",
            "2": "Early Bird"
        }
    },
    {
        "name": "Ledian",
        "gender": 0.5,
        "family": 165,
        "abilities":
        {
            "0": "Iron Fist",
            "1": "Swarm",
            "2": "Early Bird"
        }
    },
    {
        "name": "Spinarak",
        "gender": 0.5,
        "family": 167,
        "abilities":
        {
            "0": "Sniper",
            "1": "Swarm",
            "2": "Insomnia"
        }
    },
    {
        "name": "Ariados",
        "gender": 0.5,
        "family": 167,
        "abilities":
        {
            "0": "Sniper",
            "1": "Swarm",
            "2": "Insomnia"
        }
    },
    {
        "name": "Crobat",
        "gender": 0.5,
        "family": 41,
        "abilities":
        {
            "0": "Infiltrator",
            "1": "Inner Focus"
        }
    },
    {
        "name": "Chinchou",
        "gender": 0.5,
        "family": 170,
        "abilities":
        {
            "0": "Water Absorb",
            "1": "Volt Absorb",
            "2": "Illuminate"
        }
    },
    {
        "name": "Lanturn",
        "gender": 0.5,
        "family": 170,
        "abilities":
        {
            "0": "Water Absorb",
            "1": "Volt Absorb",
            "2": "Illuminate"
        }
    },
    {
        "name": "Pichu",
        "gender": 0.5,
        "family": 172,
        "breeds": "NO",
        "abilities":
        {
            "0": "Lightning Rod",
            "1": "Static"
        }
    },
    {
        "name": "Cleffa",
        "gender": 0.75,
        "family": 173,
        "breeds": "NO",
        "abilities":
        {
            "0": "Friend Guard",
            "1": "Cute Charm",
            "2": "Magic Guard"
        }
    },
    {
        "name": "Igglybuff",
        "gender": 0.75,
        "family": 174,
        "breeds": "NO",
        "abilities":
        {
            "0": "Friend Guard",
            "1": "Cute Charm",
            "2": "Competitive"
        }
    },
    {
        "name": "Togepi",
        "gender": 0.125,
        "family": 175,
        "breeds": "NO",
        "abilities":
        {
            "0": "Super Luck",
            "1": "Hustle",
            "2": "Serene Grace"
        }
    },
    {
        "name": "Togetic",
        "gender": 0.125,
        "family": 175,
        "abilities":
        {
            "0": "Super Luck",
            "1": "Hustle",
            "2": "Serene Grace"
        }
    },
    {
        "name": "Natu",
        "gender": 0.5,
        "family": 177,
        "abilities":
        {
            "0": "Magic Bounce",
            "1": "Synchronize",
            "2": "Early Bird"
        }
    },
    {
        "name": "Xatu",
        "gender": 0.5,
        "family": 177,
        "abilities":
        {
            "0": "Magic Bounce",
            "1": "Synchronize",
            "2": "Early Bird"
        }
    },
    {
        "name": "Mareep",
        "gender": 0.5,
        "family": 179,
        "abilities":
        {
            "0": "Plus",
            "1": "Static"
        }
    },
    {
        "name": "Flaaffy",
        "gender": 0.5,
        "family": 179,
        "abilities":
        {
            "0": "Plus",
            "1": "Static"
        }
    },
    {
        "name": "Ampharos",
        "gender": 0.5,
        "family": 179,
        "abilities":
        {
            "0": "Plus",
            "1": "Static"
        }
    },
    {
        "name": "Bellossom",
        "gender": 0.5,
        "family": 43,
        "abilities":
        {
            "0": "Healer",
            "1": "Chlorophyll"
        }
    },
    {
        "name": "Marill",
        "gender": 0.5,
        "family": 183,
        "abilities":
        {
            "0": "Sap Sipper",
            "1": "Thick Fat",
            "2": "Huge Power"
        }
    },
    {
        "name": "Azumarill",
        "gender": 0.5,
        "family": 183,
        "abilities":
        {
            "0": "Sap Sipper",
            "1": "Thick Fat",
            "2": "Huge Power"
        }
    },
    {
        "name": "Sudowoodo",
        "gender": 0.5,
        "family": 185,
        "abilities":
        {
            "0": "Rattled",
            "1": "Sturdy",
            "2": "Rock Head"
        }
    },
    {
        "name": "Politoed",
        "gender": 0.5,
        "family": 60,
        "abilities":
        {
            "0": "Drizzle",
            "1": "Water Absorb",
            "2": "Damp"
        }
    },
    {
        "name": "Hoppip",
        "gender": 0.5,
        "family": 187,
        "abilities":
        {
            "0": "Infilitrator",
            "1": "Chlorophyll",
            "2": "Leaf Guard"
        }
    },
    {
        "name": "Skiploom",
        "gender": 0.5,
        "family": 187,
        "abilities":
        {
            "0": "Infilitrator",
            "1": "Chlorophyll",
            "2": "Leaf Guard"
        }
    },
    {
        "name": "Jumpluff",
        "gender": 0.5,
        "family": 187,
        "abilities":
        {
            "0": "Infilitrator",
            "1": "Chlorophyll",
            "2": "Leaf Guard"
        }
    },
    {
        "name": "Aipom",
        "gender": 0.5,
        "family": 190,
        "abilities":
        {
            "0": "Skill Link",
            "1": "Run Away",
            "2": "Pickup"
        }
    },
    {
        "name": "Sunkern",
        "gender": 0.5,
        "family": 191,
        "abilities":
        {
            "0": "Early Bird",
            "1": "Chlorophyll",
            "2": "Solar Power"
        }
    },
    {
        "name": "Sunflora",
        "gender": 0.5,
        "family": 191,
        "abilities":
        {
            "0": "Early Bird",
            "1": "Chlorophyll",
            "2": "Solar Power"
        }
    },
    {
        "name": "Yanma",
        "gender": 0.5,
        "family": 193,
        "abilities":
        {
            "0": "Frisk",
            "1": "Speed Boost",
            "2": "Compound Eyes"
        }
    },
    {
        "name": "Wooper",
        "gender": 0.5,
        "family": 194,
        "abilities":
        {
            "0": "Unaware",
            "1": "Damp",
            "2": "Water Absorb"
        }
    },
    {
        "name": "Quagsire",
        "gender": 0.5,
        "family": 194,
        "abilities":
        {
            "0": "Unaware",
            "1": "Damp",
            "2": "Water Absorb"
        }
    },
    {
        "name": "Espeon",
        "gender": 0.125,
        "family": 133,
        "abilities":
        {
            "0": "Magic Bounce",
            "1": "Synchronize",
            "2": "Synchronize"
        }
    },
    {
        "name": "Umbreon",
        "gender": 0.125,
        "family": 133,
        "abilities":
        {
            "0": "Inner Focus",
            "1": "Synchronize",
            "2": "Synchronize"
        }
    },
    {
        "name": "Murkrow",
        "gender": 0.5,
        "family": 198,
        "abilities":
        {
            "0": "Prankster",
            "1": "Insomnia",
            "2": "Super Luck"
        }
    },
    {
        "name": "Slowking",
        "gender": 0.5,
        "family": 79,
        "abilities":
        {
            "0": "Regenerator",
            "1": "Oblivious",
            "2": "Own Tempo"
        }
    },
    {
        "name": "Misdreavus",
        "gender": 0.5,
        "family": 200,
        "abilities":
        {
            "1": "Levitate"
        }
    },,
    {
        "name": "Wobbuffet",
        "gender": 0.5,
        "family": 202,
        "abilities":
        {
            "0": "Telepathy",
            "1": "Shadow Tag"
        }
    },
    {
        "name": "Girafarig",
        "gender": 0.5,
        "family": 203,
        "abilities":
        {
            "0": "Sap Sipper",
            "1": "Inner Focus",
            "2": "Early Bird"
        }
    },
    {
        "name": "Pineco",
        "gender": 0.5,
        "family": 204,
        "abilities":
        {
            "0": "Overcoat",
            "1": "Sturdy"
        }
    },
    {
        "name": "Forretress",
        "gender": 0.5,
        "family": 204,
        "abilities":
        {
            "0": "Overcoat",
            "1": "Sturdy"
        }
    },
    {
        "name": "Dunsparce",
        "gender": 0.5,
        "family": 206,
        "abilities":
        {
            "0": "Rattled",
            "1": "Serene Grace",
            "2": "Run Away"
        }
    },
    {
        "name": "Gligar",
        "gender": 0.5,
        "family": 207,
        "abilities":
        {
            "0": "Immunity",
            "1": "Hyper Cutter",
            "2": "Sand Veil"
        }
    },
    {
        "name": "Steelix",
        "gender": 0.5,
        "family": 95,
        "abilities":
        {
            "0": "Sheer Force",
            "1": "Rock Head",
            "2": "Sturdy"
        }
    },
    {
        "name": "Snubbull",
        "gender": 0.5,
        "family": 209,
        "abilities":
        {
            "0": "Rattled",
            "1": "Intimidate",
            "2": "Run Away"
        }
    },
    {
        "name": "Granbull",
        "gender": 0.5,
        "family": 209,
        "abilities":
        {
            "0": "Rattled",
            "1": "Intimidate",
            "2": "Quick Feet"
        }
    },
    {
        "name": "Qwilfish",
        "gender": 0.5,
        "family": 211,
        "abilities":
        {
            "0": "Intimidate",
            "1": "Poison Point",
            "2": "Swift Swim"
        }
    },
    {
        "name": "Scizor",
        "gender": 0.5,
        "family": 123,
        "abilities":
        {
            "0": "Light Metal",
            "1": "Swarm",
            "2": "Technician"
        }
    },
    {
        "name": "Shuckle",
        "gender": 0.5,
        "family": 213,
        "abilities":
        {
            "0": "Contrary",
            "1": "Sturdy",
            "2": "Gluttony"
        }
    },
    {
        "name": "Heracross",
        "gender": 0.5,
        "family": 214,
        "abilities":
        {
            "0": "Moxie",
            "1": "Swarm",
            "2": "Guts"
        }
    },
    {
        "name": "Sneasel",
        "gender": 0.5,
        "family": 215,
        "abilities":
        {
            "0": "Pickpocket",
            "1": "Inner Focus",
            "2": "Keen Eye"
        }
    },
    {
        "name": "Teddiursa",
        "gender": 0.5,
        "family": 216,
        "abilities":
        {
            "0": "Honey Gather",
            "1": "Pickup",
            "2": "Quick Feet"
        }
    },
    {
        "name": "Ursaring",
        "gender": 0.5,
        "family": 216,
        "abilities":
        {
            "0": "Honey Gather",
            "1": "Guts",
            "2": "Quick Feet"
        }
    },
    {
        "name": "Slugma",
        "gender": 0.5,
        "family": 218,
        "abilities":
        {
            "0": "Weak Armor",
            "1": "Magma Armor",
            "2": "Flame Body"
        }
    },
    {
        "name": "Magcargo",
        "gender": 0.5,
        "family": 218,
        "abilities":
        {
            "0": "Weak Armor",
            "1": "Magma Armor",
            "2": "Flame Body"
        }
    },
    {
        "name": "Swinub",
        "gender": 0.5,
        "family": 220,
        "abilities":
        {
            "0": "Thick Fat",
            "1": "Oblivious",
            "2": "Snow Cloak"
        }
    },
    {
        "name": "Piloswine",
        "gender": 0.5,
        "family": 220,
        "abilities":
        {
            "0": "Thick Fat",
            "1": "Oblivious",
            "2": "Snow Cloak"
        }
    },
    {
        "name": "Corsola",
        "gender": 0.75,
        "family": 222,
        "abilities":
        {
            "0": "Regenerator",
            "1": "Hustle",
            "2": "Natural Cure"
        }
    },
    {
        "name": "Remoraid",
        "gender": 0.5,
        "family": 223,
        "abilities":
        {
            "0": "Moody",
            "1": "Hustle",
            "2": "Sniper"
        }
    },
    {
        "name": "Octillery",
        "gender": 0.5,
        "family": 223,
        "abilities":
        {
            "0": "Moody",
            "1": "Suction Cups",
            "2": "Sniper"
        }
    },
    {
        "name": "Delibird",
        "gender": 0.5,
        "family": 225,
        "abilities":
        {
            "0": "Insomnia",
            "1": "Vital Spirit",
            "2": "Hustle"
        }
    },
    {
        "name": "Mantine",
        "gender": 0.5,
        "family": 226,
        "abilities":
        {
            "0": "Water Veil",
            "1": "Swift Swim",
            "2": "Water Absorb"
        }
    },
    {
        "name": "Skarmory",
        "gender": 0.5,
        "family": 227,
        "abilities":
        {
            "0": "Weak Armor",
            "1": "Keen Eye",
            "2": "Sturdy"
        }
    },
    {
        "name": "Houndour",
        "gender": 0.5,
        "family": 228,
        "abilities":
        {
            "0": "Unnerve",
            "1": "Early Bird",
            "2": "Flash Fire"
        }
    },
    {
        "name": "Houndoom",
        "gender": 0.5,
        "family": 228,
        "abilities":
        {
            "0": "Unnerve",
            "1": "Early Bird",
            "2": "Flash Fire"
        }
    },
    {
        "name": "Kingdra",
        "gender": 0.5,
        "family": 116,
        "abilities":
        {
            "0": "Damp",
            "1": "Swift Swim",
            "2": "Sniper"
        }
    },
    {
        "name": "Phanpy",
        "gender": 0.5,
        "family": 231,
        "abilities":
        {
            "0": "Sand Veil",
            "1": "Pickup"
        }
    },
    {
        "name": "Donphan",
        "gender": 0.5,
        "family": 231,
        "abilities":
        {
            "0": "Sand Veil",
            "1": "Sturdy"
        }
    },
    {
        "name": "Porygon2",
        "gender": 'x',
        "family": 137,
        "abilities":
        {
            "0": "Analytic",
            "1": "Trace",
            "2": "Download"
        }
    },
    {
        "name": "Stantler",
        "gender": 0.5,
        "family": 234,
        "abilities":
        {
            "0": "Sap Sipper",
            "1": "Intimidate",
            "2": "Frisk"
        }
    },
    {
        "name": "Smeargle",
        "gender": 0.5,
        "family": 235,
        "abilities":
        {
            "0": "Moody",
            "1": "Own Tempo",
            "2": "Technician"
        }
    },
    {
        "name": "Tyrogue",
        "gender": 0,
        "family": 236,
        "breeds": "NO",
        "abilities":
        {
            "0": "Vital Spirit",
            "1": "Guts",
            "2": "Steadfast"
        }
    },
    {
        "name": "Hitmontop",
        "gender": 0,
        "family": 236,
        "abilities":
        {
            "0": "Steadfast",
            "1": "Intimidate",
            "2": "Technician"
        }
    },
    {
        "name": "Smoochum",
        "gender": 1,
        "family": 238,
        "breeds": "NO",
        "abilities":
        {
            "0": "Hydration",
            "1": "Oblivious",
            "2": "Forewarn"
        }
    },
    {
        "name": "Elekid",
        "gender": 0.25,
        "family": 239,
        "breeds": "NO",
        "abilities":
        {
            "0": "Vital Spirit",
            "1": "Static"
        }
    },
    {
        "name": "Magby",
        "gender": 0.25,
        "family": 240,
        "breeds": "NO",
        "abilities":
        {
            "0": "Vital Spirit",
            "1": "Flame Body"
        }
    },
    {
        "name": "Miltank",
        "gender": 1.0,
        "family": 241,
        "abilities":
        {
            "0": "Sap Sipper",
            "1": "Thick Fat",
            "2": "Scrappy"
        }
    },
    {
        "name": "Blissey",
        "gender": 1.0,
        "family": 113,
        "abilities":
        {
            "0": "Healer",
            "1": "Natural Cure",
            "2": "Serene Grace"
        }
    },,,,
    {
        "name": "Larvitar",
        "gender": 0.5,
        "family": 246,
        "abilities":
        {
            "0": "Sand Veil",
            "1": "Guts"
        }
    },
    {
        "name": "Pupitar",
        "gender": 0.5,
        "family": 246,
        "abilities":
        {
            "0": "Shed Skin",
            "1": "Shed Skin"
        }
    },
    {
        "name": "Tyranitar",
        "gender": 0.5,
        "family": 246,
        "abilities":
        {
            "0": "Unnerve",
            "1": "Sand Stream"
        }
    },,,,
    {
        "name": "Treecko",
        "gender": 0.125,
        "family": 252,
        "abilities":
        {
            "0": "Unburden",
            "1": "Overgrow"
        }
    },
    {
        "name": "Grovyle",
        "gender": 0.125,
        "family": 252,
        "abilities":
        {
            "0": "Unburden",
            "1": "Overgrow"
        }
    },
    {
        "name": "Sceptile",
        "gender": 0.125,
        "family": 252,
        "abilities":
        {
            "0": "Unburden",
            "1": "Overgrow"
        }
    },
    {
        "name": "Torchic",
        "gender": 0.125,
        "family": 255,
        "abilities":
        {
            "0": "Speed Boost",
            "1": "Blaze"
        }
    },
    {
        "name": "Combusken",
        "gender": 0.125,
        "family": 255,
        "abilities":
        {
            "0": "Speed Boost",
            "1": "Blaze"
        }
    },
    {
        "name": "Blaziken",
        "gender": 0.125,
        "family": 255,
        "abilities":
        {
            "0": "Speed Boost",
            "1": "Blaze"
        }
    },
    {
        "name": "Mudkip",
        "gender": 0.125,
        "family": 258,
        "abilities":
        {
            "0": "Damp",
            "1": "Torrent"
        }
    },
    {
        "name": "Marshtomp",
        "gender": 0.125,
        "family": 258,
        "abilities":
        {
            "0": "Damp",
            "1": "Torrent"
        }
    },
    {
        "name": "Swampert",
        "gender": 0.125,
        "family": 258,
        "abilities":
        {
            "0": "Damp",
            "1": "Torrent"
        }
    },
    {
        "name": "Poochyena",
        "gender": 0.5,
        "family": 261,
        "abilities":
        {
            "0": "Rattled",
            "1": "Run Away",
            "2": "Quick Feet"
        }
    },
    {
        "name": "Mightyena",
        "gender": 0.5,
        "family": 261,
        "abilities":
        {
            "0": "Moxie",
            "1": "Intimidate",
            "2": "Quick Feet"
        }
    },
    {
        "name": "Zigzagoon",
        "gender": 0.5,
        "family": 263,
        "abilities":
        {
            "0": "Quick Feet",
            "1": "Pickup",
            "2": "Gluttony"
        }
    },
    {
        "name": "Linoone",
        "gender": 0.5,
        "family": 263,
        "abilities":
        {
            "0": "Quick Feet",
            "1": "Pickup",
            "2": "Gluttony"
        }
    },
    {
        "name": "Wurmple",
        "gender": 0.5,
        "family": 265,
        "abilities":
        {
            "0": "Run Away",
            "1": "Shield Dust"
        }
    },
    {
        "name": "Silcoon",
        "gender": 0.5,
        "family": 265,
        "abilities":
        {
            "0": "Shed Skin",
            "1": "Shed Skin"
        }
    },
    {
        "name": "Beautifly",
        "gender": 0.5,
        "family": 265,
        "abilities":
        {
            "0": "Rivalry",
            "1": "Swarm"
        }
    },
    {
        "name": "Cascoon",
        "gender": 0.5,
        "family": 265,
        "abilities":
        {
            "0": "Shed Skin",
            "1": "Shed Skin"
        }
    },
    {
        "name": "Dustox",
        "gender": 0.5,
        "family": 265,
        "abilities":
        {
            "0": "Compound Eyes",
            "1": "Shield Dust"
        }
    },
    {
        "name": "Lotad",
        "gender": 0.5,
        "family": 270,
        "abilities":
        {
            "0": "Own Tempo",
            "1": "Swift Swim",
            "2": "Rain Dish"
        }
    },
    {
        "name": "Lombre",
        "gender": 0.5,
        "family": 270,
        "abilities":
        {
            "0": "Own Tempo",
            "1": "Swift Swim",
            "2": "Rain Dish"
        }
    },
    {
        "name": "Ludicolo",
        "gender": 0.5,
        "family": 270,
        "abilities":
        {
            "0": "Own Tempo",
            "1": "Swift Swim",
            "2": "Rain Dish"
        }
    },
    {
        "name": "Seedot",
        "gender": 0.5,
        "family": 273,
        "abilities":
        {
            "0": "Pickpocket",
            "1": "Chlorophyll",
            "2": "Early Bird"
        }
    },
    {
        "name": "Nuzleaf",
        "gender": 0.5,
        "family": 273,
        "abilities":
        {
            "0": "Pickpocket",
            "1": "Chlorophyll",
            "2": "Early Bird"
        }
    },
    {
        "name": "Shiftry",
        "gender": 0.5,
        "family": 273,
        "abilities":
        {
            "0": "Pickpocket",
            "1": "Chlorophyll",
            "2": "Early Bird"
        }
    },
    {
        "name": "Taillow",
        "gender": 0.5,
        "family": 276,
        "abilities":
        {
            "0": "Scrappy",
            "1": "Guts"
        }
    },
    {
        "name": "Swellow",
        "gender": 0.5,
        "family": 276,
        "abilities":
        {
            "0": "Scrappy",
            "1": "Guts"
        }
    },
    {
        "name": "Wingull",
        "gender": 0.5,
        "family": 278,
        "abilities":
        {
            "0": "Rain Dish",
            "1": "Keen Eye"
        }
    },
    {
        "name": "Pelipper",
        "gender": 0.5,
        "family": 278,
        "abilities":
        {
            "0": "Rain Dish",
            "1": "Keen Eye"
        }
    },
    {
        "name": "Ralts",
        "gender": 0.5,
        "family": 280,
        "abilities":
        {
            "0": "Telepathy",
            "1": "Synchronize",
            "2": "Trace"
        }
    },
    {
        "name": "Kirlia",
        "gender": 0.5,
        "family": 280,
        "abilities":
        {
            "0": "Telepathy",
            "1": "Synchronize",
            "2": "Trace"
        }
    },
    {
        "name": "Gardevoir",
        "gender": 0.5,
        "family": 280,
        "abilities":
        {
            "0": "Telepathy",
            "1": "Synchronize",
            "2": "Trace"
        }
    },
    {
        "name": "Surskit",
        "gender": 0.5,
        "family": 283,
        "abilities":
        {
            "0": "Rain Dish",
            "1": "Swift Swim"
        }
    },
    {
        "name": "Masquerain",
        "gender": 0.5,
        "family": 283,
        "abilities":
        {
            "0": "Unnerve",
            "1": "Intimidate"
        }
    },
    {
        "name": "Shroomish",
        "gender": 0.5,
        "family": 285,
        "abilities":
        {
            "0": "Quick Feet",
            "1": "Effect Spore",
            "2": "Poison Heal"
        }
    },
    {
        "name": "Breloom",
        "gender": 0.5,
        "family": 285,
        "abilities":
        {
            "0": "Technician",
            "1": "Effect Spore",
            "2": "Poison Heal"
        }
    },
    {
        "name": "Slakoth",
        "gender": 0.5,
        "family": 287,
        "abilities":
        {
            "1": "Truant"
        }
    },
    {
        "name": "Vigoroth",
        "gender": 0.5,
        "family": 287,
        "abilities":
        {
            "1": "Vital Spirit"
        }
    },
    {
        "name": "Slaking",
        "gender": 0.5,
        "family": 287,
        "abilities":
        {
            "1": "Truant"
        }
    },
    {
        "name": "Nincada",
        "gender": 0.5,
        "family": 290,
        "abilities":
        {
            "0": "Run Away",
            "1": "Compound Eyes"
        }
    },
    {
        "name": "Ninjask",
        "gender": 0.5,
        "family": 290,
        "abilities":
        {
            "0": "Infiltrator",
            "1": "Speed Boost"
        }
    },
    {
        "name": "Shedinja",
        "gender": 0.5,
        "family": 290,
        "abilities":
        {
            "0": "Wonder Guard",
            "1": "Wonder Guard"
        }
    },
    {
        "name": "Whismur",
        "gender": 0.5,
        "family": 293,
        "abilities":
        {
            "0": "Rattled",
            "1": "Soundproof"
        }
    },
    {
        "name": "Loudred",
        "gender": 0.5,
        "family": 293,
        "abilities":
        {
            "0": "Scrappy",
            "1": "Soundproof"
        }
    },
    {
        "name": "Exploud",
        "gender": 0.5,
        "family": 293,
        "abilities":
        {
            "0": "Scrappy",
            "1": "Soundproof"
        }
    },
    {
        "name": "Makuhita",
        "gender": 0.25,
        "family": 296,
        "abilities":
        {
            "0": "Sheer Force",
            "1": "Thick Fat",
            "2": "Guts"
        }
    },
    {
        "name": "Hariyama",
        "gender": 0.25,
        "family": 296,
        "abilities":
        {
            "0": "Sheer Force",
            "1": "Thick Fat",
            "2": "Guts"
        }
    },
    {
        "name": "Azurill",
        "gender": 0.75,
        "family": 183,
        "breeds": "NO",
        "abilities":
        {
            "0": "Sap Sipper",
            "1": "Thick Fat",
            "2": "Huge Power"
        }
    },
    {
        "name": "Nosepass",
        "gender": 0.5,
        "family": 299,
        "abilities":
        {
            "0": "Sand Force",
            "1": "Sturdy",
            "2": "Magnet Pull"
        }
    },
    {
        "name": "Skitty",
        "gender": 0.75,
        "family": 300,
        "abilities":
        {
            "0": "Wonder Skin",
            "1": "Cute Charm",
            "2": "Normalize"
        }
    },
    {
        "name": "Delcatty",
        "gender": 0.75,
        "family": 300,
        "abilities":
        {
            "0": "Wonder Skin",
            "1": "Cute Charm",
            "2": "Normalize"
        }
    },
    {
        "name": "Sableye",
        "gender": 0.5,
        "family": 302,
        "abilities":
        {
            "0": "Prankster",
            "1": "Keen Eye",
            "2": "Stall"
        }
    },
    {
        "name": "Mawile",
        "gender": 0.5,
        "family": 303,
        "abilities":
        {
            "0": "Sheer Force",
            "1": "Hyper Cutter",
            "2": "Intimidate"
        }
    },
    {
        "name": "Aron",
        "gender": 0.5,
        "family": 304,
        "abilities":
        {
            "0": "Heavy Metal",
            "1": "Sturdy",
            "2": "Rock Head"
        }
    },
    {
        "name": "Lairon",
        "gender": 0.5,
        "family": 304,
        "abilities":
        {
            "0": "Heavy Metal",
            "1": "Sturdy",
            "2": "Rock Head"
        }
    },
    {
        "name": "Aggron",
        "gender": 0.5,
        "family": 304,
        "abilities":
        {
            "0": "Heavy Metal",
            "1": "Sturdy",
            "2": "Rock Head"
        }
    },
    {
        "name": "Meditite",
        "gender": 0.5,
        "family": 307,
        "abilities":
        {
            "0": "Telepathy",
            "1": "Pure Power"
        }
    },
    {
        "name": "Medicham",
        "gender": 0.5,
        "family": 307,
        "abilities":
        {
            "0": "Telepathy",
            "1": "Pure Power"
        }
    },
    {
        "name": "Electrike",
        "gender": 0.5,
        "family": 309,
        "abilities":
        {
            "0": "Minus",
            "1": "Static",
            "2": "Lightning Rod"
        }
    },
    {
        "name": "Manectric",
        "gender": 0.5,
        "family": 309,
        "abilities":
        {
            "0": "Minus",
            "1": "Static",
            "2": "Lightning Rod"
        }
    },
    {
        "name": "Plusle",
        "gender": 0.5,
        "family": 311,
        "abilities":
        {
            "0": "Lightning Rod",
            "1": "Plus"
        }
    },
    {
        "name": "Minun",
        "gender": 0.5,
        "family": 312,
        "abilities":
        {
            "0": "Volt Absorb",
            "1": "Minus"
        }
    },
    {
        "name": "Volbeat",
        "gender": 0.5,
        "family": 313,
        "abilities":
        {
            "0": "Prankster",
            "1": "Illuminate",
            "2": "Swarm"
        }
    },
    {
        "name": "Illumise",
        "gender": 0.5,
        "family": 314,
        "abilities":
        {
            "0": "Prankster",
            "1": "Oblivious",
            "2": "Tinted Lens"
        }
    },
    {
        "name": "Roselia",
        "gender": 0.5,
        "family": 315,
        "abilities":
        {
            "0": "Leaf Guard",
            "1": "Natural Cure",
            "2": "Poison Point"
        }
    },
    {
        "name": "Gulpin",
        "gender": 0.5,
        "family": 316,
        "abilities":
        {
            "0": "Gluttony",
            "1": "Liquid Ooze",
            "2": "Sticky Hold"
        }
    },
    {
        "name": "Swalot",
        "gender": 0.5,
        "family": 316,
        "abilities":
        {
            "0": "Gluttony",
            "1": "Liquid Ooze",
            "2": "Sticky Hold"
        }
    },
    {
        "name": "Carvanha",
        "gender": 0.5,
        "family": 318,
        "abilities":
        {
            "0": "Speed Boost",
            "1": "Rough Skin"
        }
    },
    {
        "name": "Sharpedo",
        "gender": 0.5,
        "family": 318,
        "abilities":
        {
            "0": "Speed Boost",
            "1": "Rough Skin"
        }
    },
    {
        "name": "Wailmer",
        "gender": 0.5,
        "family": 320,
        "abilities":
        {
            "0": "Pressure",
            "1": "Water Veil",
            "2": "Oblivious"
        }
    },
    {
        "name": "Wailord",
        "gender": 0.5,
        "family": 320,
        "abilities":
        {
            "0": "Pressure",
            "1": "Water Veil",
            "2": "Oblivious"
        }
    },
    {
        "name": "Numel",
        "gender": 0.5,
        "family": 322,
        "abilities":
        {
            "0": "Own Tempo",
            "1": "Oblivious",
            "2": "Simple"
        }
    },
    {
        "name": "Camerupt",
        "gender": 0.5,
        "family": 322,
        "abilities":
        {
            "0": "Anger Point",
            "1": "Magma Armor",
            "2": "Solid Rock"
        }
    },
    {
        "name": "Torkoal",
        "gender": 0.5,
        "family": 324,
        "abilities":
        {
            "0": "Shell Armor",
            "1": "White Smoke"
        }
    },
    {
        "name": "Spoink",
        "gender": 0.5,
        "family": 325,
        "abilities":
        {
            "0": "Gluttony",
            "1": "Thick Fat",
            "2": "Own Tempo"
        }
    },
    {
        "name": "Grumpig",
        "gender": 0.5,
        "family": 325,
        "abilities":
        {
            "0": "Gluttony",
            "1": "Thick Fat",
            "2": "Own Tempo"
        }
    },
    {
        "name": "Spinda",
        "gender": 0.5,
        "family": 327,
        "abilities":
        {
            "0": "Contrary",
            "1": "Own Tempo",
            "2": "Tangled Feet"
        }
    },
    {
        "name": "Trapinch",
        "gender": 0.5,
        "family": 328,
        "abilities":
        {
            "0": "Sheer Force",
            "1": "Hyper Cutter",
            "2": "Arena Trap"
        }
    },
    {
        "name": "Vibrava",
        "gender": 0.5,
        "family": 328,
        "abilities":
        {
            "0": "Levitate",
            "1": "Levitate",
            "2": "Levitate"
        }
    },
    {
        "name": "Flygon",
        "gender": 0.5,
        "family": 328,
        "abilities":
        {
            "0": "Levitate",
            "1": "Levitate",
            "2": "Levitate"
        }
    },
    {
        "name": "Cacnea",
        "gender": 0.5,
        "family": 331,
        "abilities":
        {
            "0": "Water Absorb",
            "1": "Sand Veil"
        }
    },
    {
        "name": "Cacturne",
        "gender": 0.5,
        "family": 331,
        "abilities":
        {
            "0": "Water Absorb",
            "1": "Sand Veil"
        }
    },
    {
        "name": "Swablu",
        "gender": 0.5,
        "family": 333,
        "abilities":
        {
            "0": "Cloud Nine",
            "1": "Natural Cure"
        }
    },
    {
        "name": "Altaria",
        "gender": 0.5,
        "family": 333,
        "abilities":
        {
            "0": "Cloud Nine",
            "1": "Natural Cure"
        }
    },
    {
        "name": "Zangoose",
        "gender": 0.5,
        "family": 335,
        "abilities":
        {
            "0": "Toxic Boost",
            "1": "Immunity"
        }
    },
    {
        "name": "Seviper",
        "gender": 0.5,
        "family": 336,
        "abilities":
        {
            "0": "Infiltrator",
            "1": "Shed Skin"
        }
    },
    {
        "name": "Lunatone",
        "gender": 'x',
        "family": 337,
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Solrock",
        "gender": 'x',
        "family": 338,
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Barboach",
        "gender": 0.5,
        "family": 339,
        "abilities":
        {
            "0": "Hydration",
            "1": "Oblivious",
            "2": "Anticipation"
        }
    },
    {
        "name": "Whiscash",
        "gender": 0.5,
        "family": 339,
        "abilities":
        {
            "0": "Hydration",
            "1": "Oblivious",
            "2": "Anticipation"
        }
    },
    {
        "name": "Corphish",
        "gender": 0.5,
        "family": 341,
        "abilities":
        {
            "0": "Adaptability",
            "1": "Hyper Cutter",
            "2": "Shell Armor"
        }
    },
    {
        "name": "Crawdaunt",
        "gender": 0.5,
        "family": 341,
        "abilities":
        {
            "0": "Adaptability",
            "1": "Hyper Cutter",
            "2": "Shell Armor"
        }
    },
    {
        "name": "Baltoy",
        "gender": 'x',
        "family": 343,
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Claydol",
        "gender": 'x',
        "family": 343,
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Lileep",
        "gender": 0.125,
        "family": 345,
        "abilities":
        {
            "0": "Storm Drain",
            "1": "Suction Cups",
            "2": "..."
        }
    },
    {
        "name": "Cradily",
        "gender": 0.125,
        "family": 345,
        "abilities":
        {
            "0": "Storm Drain",
            "1": "Suction Cups",
            "2": "..."
        }
    },
    {
        "name": "Anorith",
        "gender": 0.125,
        "family": 347,
        "abilities":
        {
            "0": "Swift Swim",
            "1": "Battle Armor"
        }
    },
    {
        "name": "Armaldo",
        "gender": 0.125,
        "family": 347,
        "abilities":
        {
            "0": "Swift Swim",
            "1": "Battle Armor"
        }
    },
    {
        "name": "Feebas",
        "gender": 0.5,
        "family": 349,
        "abilities":
        {
            "0": "Adaptability",
            "1": "Swift Swim",
            "2": "Oblivious"
        }
    },
    {
        "name": "Milotic",
        "gender": 0.5,
        "family": 349,
        "abilities":
        {
            "0": "Cute Charm",
            "1": "Marvel Scale",
            "2": "Competitive"
        }
    },
    {
        "name": "Castform",
        "gender": 0.5,
        "family": 351,
        "abilities":
        {
            "1": "Forecast"
        }
    },
    {
        "name": "Kecleon",
        "gender": 0.5,
        "family": 352,
        "abilities":
        {
            "0": "Protean",
            "1": "Color Change"
        }
    },
    {
        "name": "Shuppet",
        "gender": 0.5,
        "family": 353,
        "abilities":
        {
            "0": "Cursed Body",
            "1": "Insomnia",
            "2": "Frisk"
        }
    },
    {
        "name": "Banette",
        "gender": 0.5,
        "family": 353,
        "abilities":
        {
            "0": "Cursed Body",
            "1": "Insomnia",
            "2": "Frisk"
        }
    },
    {
        "name": "Duskull",
        "gender": 0.5,
        "family": 355,
        "abilities":
        {
            "0": "Frisk",
            "1": "Levitate"
        }
    },
    {
        "name": "Dusclops",
        "gender": 0.5,
        "family": 355,
        "abilities":
        {
            "0": "Frisk",
            "1": "Pressure"
        }
    },
    {
        "name": "Tropius",
        "gender": 0.5,
        "family": 357,
        "abilities":
        {
            "0": "Harvest",
            "1": "Chlorophyll",
            "2": "Solar Power"
        }
    },
    {
        "name": "Chimecho",
        "gender": 0.5,
        "family": 358,
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Absol",
        "gender": 0.5,
        "family": 359,
        "abilities":
        {
            "0": "Justified",
            "1": "Pressure",
            "2": "Super Luck"
        }
    },
    {
        "name": "Wynaut",
        "gender": 0.5,
        "family": 202,
        "breeds": "NO",
        "abilities":
        {
            "0": "Telepathy",
            "1": "Shadow Tag"
        }
    },
    {
        "name": "Snorunt",
        "gender": 0.5,
        "family": 361,
        "abilities":
        {
            "0": "Moody",
            "1": "Inner Focus",
            "2": "Ice Body"
        }
    },
    {
        "name": "Glalie",
        "gender": 0.5,
        "family": 361,
        "abilities":
        {
            "0": "Moody",
            "1": "Inner Focus",
            "2": "Ice Body"
        }
    },
    {
        "name": "Spheal",
        "gender": 0.5,
        "family": 363,
        "abilities":
        {
            "0": "Oblivious",
            "1": "Thick Fat",
            "2": "Ice Body"
        }
    },
    {
        "name": "Sealeo",
        "gender": 0.5,
        "family": 363,
        "abilities":
        {
            "0": "Oblivious",
            "1": "Thick Fat",
            "2": "Ice Body"
        }
    },
    {
        "name": "Walrein",
        "gender": 0.5,
        "family": 363,
        "abilities":
        {
            "0": "Oblivious",
            "1": "Thick Fat",
            "2": "Ice Body"
        }
    },
    {
        "name": "Clamperl",
        "gender": 0.5,
        "family": 366,
        "abilities":
        {
            "0": "Rattled",
            "1": "Shell Armor"
        }
    },
    {
        "name": "Huntail",
        "gender": 0.5,
        "family": 366,
        "abilities":
        {
            "0": "Water Veil",
            "1": "Swift Swim"
        }
    },
    {
        "name": "Gorebyss",
        "gender": 0.5,
        "family": 366,
        "abilities":
        {
            "0": "Hydration",
            "1": "Swift Swim"
        }
    },
    {
        "name": "Relicanth",
        "gender": 0.125,
        "family": 369,
        "abilities":
        {
            "0": "Sturdy",
            "1": "Swift Swim",
            "2": "Rock Head"
        }
    },
    {
        "name": "Luvdisc",
        "gender": 0.75,
        "family": 370,
        "abilities":
        {
            "0": "Hydration",
            "1": "Swift Swim"
        }
    },
    {
        "name": "Bagon",
        "gender": 0.5,
        "family": 371,
        "abilities":
        {
            "0": "Sheer Force",
            "1": "Rock Head"
        }
    },
    {
        "name": "Shelgon",
        "gender": 0.5,
        "family": 371,
        "abilities":
        {
            "0": "Overcoat",
            "1": "Rock Head"
        }
    },
    {
        "name": "Salamence",
        "gender": 0.5,
        "family": 371,
        "abilities":
        {
            "0": "Moxie",
            "1": "Intimidate"
        }
    },
    {
        "name": "Beldum",
        "gender": 'x',
        "family": 374,
        "abilities":
        {
            "0": "Light Metal",
            "1": "Clear Body"
        }
    },
    {
        "name": "Metang",
        "gender": 'x',
        "family": 374,
        "abilities":
        {
            "0": "Light Metal",
            "1": "Clear Body"
        }
    },
    {
        "name": "Metagross",
        "gender": 'x',
        "family": 374,
        "abilities":
        {
            "0": "Light Metal",
            "1": "Clear Body"
        }
    },,,,,,,,,,,
    {
        "name": "Turtwig",
        "gender": 0.125,
        "family": 387,
        "abilities":
        {
            "0": "Shell Armor",
            "1": "Overgrow"
        }
    },
    {
        "name": "Grotle",
        "gender": 0.125,
        "family": 387,
        "abilities":
        {
            "0": "Shell Armor",
            "1": "Overgrow"
        }
    },
    {
        "name": "Torterra",
        "gender": 0.125,
        "family": 387,
        "abilities":
        {
            "0": "Shell Armor",
            "1": "Overgrow"
        }
    },
    {
        "name": "Chimchar",
        "gender": 0.125,
        "family": 390,
        "abilities":
        {
            "0": "Iron Fist",
            "1": "Blaze"
        }
    },
    {
        "name": "Monferno",
        "gender": 0.125,
        "family": 390,
        "abilities":
        {
            "0": "Iron Fist",
            "1": "Blaze"
        }
    },
    {
        "name": "Infernape",
        "gender": 0.125,
        "family": 390,
        "abilities":
        {
            "0": "Iron Fist",
            "1": "Blaze"
        }
    },
    {
        "name": "Piplup",
        "gender": 0.125,
        "family": 393,
        "abilities":
        {
            "0": "Defiant",
            "1": "Torrent"
        }
    },
    {
        "name": "Prinplup",
        "gender": 0.125,
        "family": 393,
        "abilities":
        {
            "0": "Defiant",
            "1": "Torrent"
        }
    },
    {
        "name": "Empoleon",
        "gender": 0.125,
        "family": 393,
        "abilities":
        {
            "0": "Defiant",
            "1": "Torrent"
        }
    },
    {
        "name": "Starly",
        "gender": 0.5,
        "family": 396,
        "abilities":
        {
            "0": "Reckless",
            "1": "Keen Eye"
        }
    },
    {
        "name": "Staravia",
        "gender": 0.5,
        "family": 396,
        "abilities":
        {
            "0": "Reckless",
            "1": "Intimidate"
        }
    },
    {
        "name": "Staraptor",
        "gender": 0.5,
        "family": 396,
        "abilities":
        {
            "0": "Reckless",
            "1": "Intimidate"
        }
    },
    {
        "name": "Bidoof",
        "gender": 0.5,
        "family": 399,
        "abilities":
        {
            "0": "Moody",
            "1": "Simple",
            "2": "Unaware"
        }
    },
    {
        "name": "Bibarel",
        "gender": 0.5,
        "family": 399,
        "abilities":
        {
            "0": "Moody",
            "1": "Simple",
            "2": "Unaware"
        }
    },
    {
        "name": "Kricketot",
        "gender": 0.5,
        "family": 401,
        "abilities":
        {
            "0": "Run Away",
            "1": "Shed Skin"
        }
    },
    {
        "name": "Kricketune",
        "gender": 0.5,
        "family": 401,
        "abilities":
        {
            "0": "Technician",
            "1": "Swarm"
        }
    },
    {
        "name": "Shinx",
        "gender": 0.5,
        "family": 403,
        "abilities":
        {
            "0": "Guts",
            "1": "Rivalry",
            "2": "Intimidate"
        }
    },
    {
        "name": "Luxio",
        "gender": 0.5,
        "family": 403,
        "abilities":
        {
            "0": "Guts",
            "1": "Rivalry",
            "2": "Intimidate"
        }
    },
    {
        "name": "Luxray",
        "gender": 0.5,
        "family": 403,
        "abilities":
        {
            "0": "Guts",
            "1": "Rivalry",
            "2": "Intimidate"
        }
    },
    {
        "name": "Budew",
        "gender": 0.5,
        "family": 315,
        "breeds": "NO",
        "abilities":
        {
            "0": "Leaf Guard",
            "1": "Natural Cure",
            "2": "Poison Point"
        }
    },
    {
        "name": "Roserade",
        "gender": 0.5,
        "family": 315,
        "abilities":
        {
            "0": "Technician",
            "1": "Natural Cure",
            "2": "Poison Point"
        }
    },
    {
        "name": "Cranidos",
        "gender": 0.125,
        "family": 408,
        "abilities":
        {
            "0": "Sheer Force",
            "1": "Mold Breaker"
        }
    },
    {
        "name": "Rampardos",
        "gender": 0.125,
        "family": 408,
        "abilities":
        {
            "0": "Sheer Force",
            "1": "Mold Breaker"
        }
    },
    {
        "name": "Shieldon",
        "gender": 0.125,
        "family": 410,
        "abilities":
        {
            "0": "Soundproof",
            "1": "Sturdy"
        }
    },
    {
        "name": "Bastiodon",
        "gender": 0.125,
        "family": 410,
        "abilities":
        {
            "0": "Soundproof",
            "1": "Sturdy"
        }
    },
    {
        "name": "Burmy",
        "gender": 0.5,
        "family": 412,
        "abilities":
        {
            "0": "Overcoat",
            "1": "Shed Skin"
        }
    },
    {
        "name": "Wormadam",
        "gender": 0.5,
        "family": 412,
        "abilities":
        {
            "0": "Overcoat",
            "1": "Anticipation"
        }
    },
    {
        "name": "Mothim",
        "gender": 0.5,
        "family": 412,
        "abilities":
        {
            "0": "Tinted Lens",
            "1": "Swarm"
        }
    },
    {
        "name": "Combee",
        "gender": 0.125,
        "family": 415,
        "abilities":
        {
            "0": "Hustle",
            "1": "Honey Gather"
        }
    },
    {
        "name": "Vespiquen",
        "gender": 0.125,
        "family": 415,
        "abilities":
        {
            "0": "Unnerve",
            "1": "Pressure"
        }
    },
    {
        "name": "Pachirisu",
        "gender": 0.5,
        "family": 417,
        "abilities":
        {
            "0": "Volt Absorb",
            "1": "Run Away",
            "2": "Pickup"
        }
    },
    {
        "name": "Buizel",
        "gender": 0.5,
        "family": 418,
        "abilities":
        {
            "0": "Water Veil",
            "1": "Swift Swim"
        }
    },
    {
        "name": "Floatzel",
        "gender": 0.5,
        "family": 418,
        "abilities":
        {
            "0": "Water Veil",
            "1": "Swift Swim"
        }
    },
    {
        "name": "Cherubi",
        "gender": 0.5,
        "family": 420,
        "abilities":
        {
            "1": "Chlorophyll"
        }
    },
    {
        "name": "Cherrim",
        "gender": 0.5,
        "family": 420,
        "abilities":
        {
            "1": "Flower Gift"
        }
    },
    {
        "name": "Shellos",
        "gender": 0.5,
        "family": 422,
        "abilities":
        {
            "0": "Sand Force",
            "1": "Sticky Hold",
            "2": "Storm Drain"
        }
    },
    {
        "name": "Gastrodon",
        "gender": 0.5,
        "family": 422,
        "abilities":
        {
            "0": "Sand Force",
            "1": "Sticky Hold",
            "2": "Storm Drain"
        }
    },
    {
        "name": "Ambipom",
        "gender": 0.5,
        "family": 190,
        "abilities":
        {
            "0": "Skill Link",
            "1": "Technician",
            "2": "Pickup"
        }
    },
    {
        "name": "Drifloon",
        "gender": 0.5,
        "family": 425,
        "abilities":
        {
            "0": "Flare Boost",
            "1": "Aftermath",
            "2": "Unburden"
        }
    },
    {
        "name": "Drifblim",
        "gender": 0.5,
        "family": 425,
        "abilities":
        {
            "0": "Flare Boost",
            "1": "Aftermath",
            "2": "Unburden"
        }
    },
    {
        "name": "Buneary",
        "gender": 0.5,
        "family": 427,
        "abilities":
        {
            "0": "Limber",
            "1": "Run Away",
            "2": "Klutz"
        }
    },
    {
        "name": "Lopunny",
        "gender": 0.5,
        "family": 427,
        "abilities":
        {
            "0": "Limber",
            "1": "Cute Charm",
            "2": "Klutz"
        }
    },
    {
        "name": "Mismagius",
        "gender": 0.5,
        "family": 200,
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Honchkrow",
        "gender": 0.5,
        "family": 198,
        "abilities":
        {
            "0": "Moxie",
            "1": "Insomnia",
            "2": "Super Luck"
        }
    },
    {
        "name": "Glameow",
        "gender": 0.75,
        "family": 431,
        "abilities":
        {
            "0": "Keen Eye",
            "1": "Limber",
            "2": "Own Tempo"
        }
    },
    {
        "name": "Purugly",
        "gender": 0.75,
        "family": 431,
        "abilities":
        {
            "0": "Defiant",
            "1": "Thick Fat",
            "2": "Own Tempo"
        }
    },
    {
        "name": "Chingling",
        "gender": 0.5,
        "family": 358,
        "breeds": "NO",
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Stunky",
        "gender": 0.5,
        "family": 434,
        "abilities":
        {
            "0": "Keen Eye",
            "1": "Stench",
            "2": "Aftermath"
        }
    },
    {
        "name": "Skuntank",
        "gender": 0.5,
        "family": 434,
        "abilities":
        {
            "0": "Keen Eye",
            "1": "Stench",
            "2": "Aftermath"
        }
    },
    {
        "name": "Bronzor",
        "gender": 'x',
        "family": 436,
        "abilities":
        {
            "0": "Heavy Metal",
            "1": "Levitate",
            "2": "Heatproof"
        }
    },
    {
        "name": "Bronzong",
        "gender": 'x',
        "family": 436,
        "abilities":
        {
            "0": "Heavy Metal",
            "1": "Levitate",
            "2": "Heatproof"
        }
    },
    {
        "name": "Bonsly",
        "gender": 0.5,
        "family": 185,
        "breeds": "NO",
        "abilities":
        {
            "0": "Rattled",
            "1": "Sturdy",
            "2": "Rock Head"
        }
    },
    {
        "name": "Mime Jr.",
        "gender": 0.5,
        "family": 122,
        "breeds": "NO",
        "abilities":
        {
            "0": "Technician",
            "1": "Soundproof",
            "2": "Filter"
        }
    },
    {
        "name": "Happiny",
        "gender": 1,
        "family": 113,
        "breeds": "NO",
        "abilities":
        {
            "0": "Friend Guard",
            "1": "Natural Cure",
            "2": "Serene Grace"
        }
    },
    {
        "name": "Chatot",
        "gender": 0.5,
        "family": 441,
        "abilities":
        {
            "0": "Big Pecks",
            "1": "Keen Eye",
            "2": "Tangled Feet"
        }
    },
    {
        "name": "Spiritomb",
        "gender": 0.5,
        "family": 442,
        "abilities":
        {
            "0": "Infiltrator",
            "1": "Pressure"
        }
    },
    {
        "name": "Gible",
        "gender": 0.5,
        "family": 443,
        "abilities":
        {
            "0": "Rough Skin",
            "1": "Sand Veil"
        }
    },
    {
        "name": "Gabite",
        "gender": 0.5,
        "family": 443,
        "abilities":
        {
            "0": "Rough Skin",
            "1": "Sand Veil"
        }
    },
    {
        "name": "Garchomp",
        "gender": 0.5,
        "family": 443,
        "abilities":
        {
            "0": "Rough Skin",
            "1": "Sand Veil"
        }
    },
    {
        "name": "Munchlax",
        "gender": 0.125,
        "family": 143,
        "breeds": "NO",
        "abilities":
        {
            "0": "Gluttony",
            "1": "Pickup",
            "2": "Thick Fat"
        }
    },
    {
        "name": "Riolu",
        "gender": 0.125,
        "family": 447,
        "breeds": "NO",
        "abilities":
        {
            "0": "Prankster",
            "1": "Steadfast",
            "2": "Inner Focus"
        }
    },
    {
        "name": "Lucario",
        "gender": 0.125,
        "family": 447,
        "abilities":
        {
            "0": "Justified",
            "1": "Steadfast",
            "2": "Inner Focus"
        }
    },
    {
        "name": "Hippopotas",
        "gender": 0.5,
        "family": 449,
        "abilities":
        {
            "0": "Sand Force",
            "1": "Sand Stream"
        }
    },
    {
        "name": "Hippowdon",
        "gender": 0.5,
        "family": 449,
        "abilities":
        {
            "0": "Sand Force",
            "1": "Sand Stream"
        }
    },
    {
        "name": "Skorupi",
        "gender": 0.5,
        "family": 451,
        "abilities":
        {
            "0": "Keen Eye",
            "1": "Battle Armor",
            "2": "Sniper"
        }
    },
    {
        "name": "Drapion",
        "gender": 0.5,
        "family": 451,
        "abilities":
        {
            "0": "Keen Eye",
            "1": "Battle Armor",
            "2": "Sniper"
        }
    },
    {
        "name": "Croagunk",
        "gender": 0.5,
        "family": 453,
        "abilities":
        {
            "0": "Poison Touch",
            "1": "Anticipation",
            "2": "Dry Skin"
        }
    },
    {
        "name": "Toxicroak",
        "gender": 0.5,
        "family": 453,
        "abilities":
        {
            "0": "Poison Touch",
            "1": "Anticipation",
            "2": "Dry Skin"
        }
    },
    {
        "name": "Carnivine",
        "gender": 0.5,
        "family": 455,
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Finneon",
        "gender": 0.5,
        "family": 456,
        "abilities":
        {
            "0": "Water Veil",
            "1": "Swift Swim",
            "2": "Storm Drain"
        }
    },
    {
        "name": "Lumineon",
        "gender": 0.5,
        "family": 456,
        "abilities":
        {
            "0": "Water Veil",
            "1": "Swift Swim",
            "2": "Storm Drain"
        }
    },
    {
        "name": "Mantyke",
        "gender": 0.5,
        "family": 226,
        "breeds": "NO",
        "abilities":
        {
            "0": "Water Veil",
            "1": "Swift Swim",
            "2": "Water Absorb"
        }
    },
    {
        "name": "Snover",
        "gender": 0.5,
        "family": 459,
        "abilities":
        {
            "0": "Soundproof",
            "1": "Snow Warning"
        }
    },
    {
        "name": "Abomasnow",
        "gender": 0.5,
        "family": 459,
        "abilities":
        {
            "0": "Soundproof",
            "1": "Snow Warning"
        }
    },
    {
        "name": "Weavile",
        "gender": 0.5,
        "family": 215,
        "abilities":
        {
            "0": "Pickpocket",
            "1": "Pressure",
            "2": "Pressure"
        }
    },
    {
        "name": "Magnezone",
        "gender": 'x',
        "family": 81,
        "abilities":
        {
            "0": "Analytic",
            "1": "Magnet Pull",
            "2": "Sturdy"
        }
    },
    {
        "name": "Lickilicky",
        "gender": 0.5,
        "family": 108,
        "abilities":
        {
            "0": "Cloud Nine",
            "1": "Own Tempo",
            "2": "Oblivious"
        }
    },
    {
        "name": "Rhyperior",
        "gender": 0.5,
        "family": 111,
        "abilities":
        {
            "0": "Reckless",
            "1": "Lightning Rod",
            "2": "Solid Rock"
        }
    },
    {
        "name": "Tangrowth",
        "gender": 0.5,
        "family": 114,
        "abilities":
        {
            "0": "Regenerator",
            "1": "Chlorophyll",
            "2": "Leaf Guard"
        }
    },
    {
        "name": "Electivire",
        "gender": 0.25,
        "family": 239,
        "abilities":
        {
            "0": "Vital Spirit",
            "1": "Static"
        }
    },
    {
        "name": "Magmortar",
        "gender": 0.25,
        "family": 240,
        "abilities":
        {
            "0": "Vital Spirit",
            "1": "Flame Body"
        }
    },
    {
        "name": "Togekiss",
        "gender": 0.125,
        "family": 175,
        "abilities":
        {
            "0": "Super Luck",
            "1": "Hustle",
            "2": "Serene Grace"
        }
    },
    {
        "name": "Yanmega",
        "gender": 0.5,
        "family": 193,
        "abilities":
        {
            "0": "Frisk",
            "1": "Speed Boost",
            "2": "Tinted Lens"
        }
    },
    {
        "name": "Leafeon",
        "gender": 0.125,
        "family": 133,
        "abilities":
        {
            "0": "Chlorophyll",
            "1": "Leaf Guard",
            "2": "Leaf Guard"
        }
    },
    {
        "name": "Glaceon",
        "gender": 0.125,
        "family": 133,
        "abilities":
        {
            "0": "Ice Body",
            "1": "Snow Cloak",
            "2": "Snow Cloak"
        }
    },
    {
        "name": "Gliscor",
        "gender": 0.5,
        "family": 207,
        "abilities":
        {
            "0": "Poison Heal",
            "1": "Hyper Cutter",
            "2": "Sand Veil"
        }
    },
    {
        "name": "Mamoswine",
        "gender": 0.5,
        "family": 220,
        "abilities":
        {
            "0": "Thick Fat",
            "1": "Oblivious",
            "2": "Snow Cloak"
        }
    },
    {
        "name": "Porygon-Z",
        "gender": 'x',
        "family": 137,
        "abilities":
        {
            "0": "Analytic",
            "1": "Adaptability",
            "2": "Download"
        }
    },
    {
        "name": "Gallade",
        "gender": 0.5,
        "family": 280,
        "abilities":
        {
            "0": "Justified",
            "1": "Steadfast",
            "2": "Steadfast"
        }
    },
    {
        "name": "Probopass",
        "gender": 0.5,
        "family": 299,
        "abilities":
        {
            "0": "Sand Force",
            "1": "Sturdy",
            "2": "Magnet Pull"
        }
    },
    {
        "name": "Dusknoir",
        "gender": 0.5,
        "family": 355,
        "abilities":
        {
            "0": "Frisk",
            "1": "Pressure"
        }
    },
    {
        "name": "Froslass",
        "gender": 0.5,
        "family": 361,
        "abilities":
        {
            "0": "Cursed Body",
            "1": "Snow Cloak",
            "2": "Snow Cloak"
        }
    },
    {
        "name": "Rotom",
        "gender": 'x',
        "family": 479,
        "abilities":
        {
            "1": "Levitate"
        }
    },,,,,,,,,,
    {
        "name": "Phione",
        "gender": 'x',
        "family": 489,
        "abilities":
        {
            "1": "Hydration"
        }
    },
    {
        "name": "Manaphy",
        "gender": 'x',
        "family": 489,
        "abilities":
        {
            "1": "Hydration"
        }
    },,,,,
    {
        "name": "Snivy",
        "gender": 0.125,
        "family": 495,
        "abilities":
        {
            "0": "Contrary",
            "1": "Overgrow"
        }
    },
    {
        "name": "Servine",
        "gender": 0.125,
        "family": 495,
        "abilities":
        {
            "0": "Contrary",
            "1": "Overgrow"
        }
    },
    {
        "name": "Serperior",
        "gender": 0.125,
        "family": 495,
        "abilities":
        {
            "0": "Contrary",
            "1": "Overgrow"
        }
    },
    {
        "name": "Tepig",
        "gender": 0.125,
        "family": 498,
        "abilities":
        {
            "0": "Thick Fat",
            "1": "Blaze"
        }
    },
    {
        "name": "Pignite",
        "gender": 0.125,
        "family": 498,
        "abilities":
        {
            "0": "Thick Fat",
            "1": "Blaze"
        }
    },
    {
        "name": "Emboar",
        "gender": 0.125,
        "family": 498,
        "abilities":
        {
            "0": "Reckless",
            "1": "Blaze"
        }
    },
    {
        "name": "Oshawott",
        "gender": 0.125,
        "family": 501,
        "abilities":
        {
            "0": "Shell Armor",
            "1": "Torrent"
        }
    },
    {
        "name": "Dewott",
        "gender": 0.125,
        "family": 501,
        "abilities":
        {
            "0": "Shell Armor",
            "1": "Torrent"
        }
    },
    {
        "name": "Samurott",
        "gender": 0.125,
        "family": 501,
        "abilities":
        {
            "0": "Shell Armor",
            "1": "Torrent"
        }
    },
    {
        "name": "Patrat",
        "gender": 0.5,
        "family": 504,
        "abilities":
        {
            "0": "Analytic",
            "1": "Run Away",
            "2": "Keen Eye"
        }
    },
    {
        "name": "Watchog",
        "gender": 0.5,
        "family": 504,
        "abilities":
        {
            "0": "Analytic",
            "1": "Illuminate",
            "2": "Keen Eye"
        }
    },
    {
        "name": "Lillipup",
        "gender": 0.5,
        "family": 506,
        "abilities":
        {
            "0": "Run Away",
            "1": "Vital Spirit",
            "2": "Pickup"
        }
    },
    {
        "name": "Herdier",
        "gender": 0.5,
        "family": 506,
        "abilities":
        {
            "0": "Scrappy",
            "1": "Intimidate",
            "2": "Sand Rush"
        }
    },
    {
        "name": "Stoutland",
        "gender": 0.5,
        "family": 506,
        "abilities":
        {
            "0": "Scrappy",
            "1": "Intimidate",
            "2": "Sand Rush"
        }
    },
    {
        "name": "Purrloin",
        "gender": 0.5,
        "family": 509,
        "abilities":
        {
            "0": "Prankster",
            "1": "Limber",
            "2": "Unburden"
        }
    },
    {
        "name": "Liepard",
        "gender": 0.5,
        "family": 509,
        "abilities":
        {
            "0": "Prankster",
            "1": "Limber",
            "2": "Unburden"
        }
    },
    {
        "name": "Pansage",
        "gender": 0.125,
        "family": 511,
        "abilities":
        {
            "0": "Overgrow",
            "1": "Gluttony"
        }
    },
    {
        "name": "Simisage",
        "gender": 0.125,
        "family": 511,
        "abilities":
        {
            "0": "Overgrow",
            "1": "Gluttony"
        }
    },
    {
        "name": "Pansear",
        "gender": 0.125,
        "family": 513,
        "abilities":
        {
            "0": "Blaze",
            "1": "Gluttony"
        }
    },
    {
        "name": "Simisear",
        "gender": 0.125,
        "family": 513,
        "abilities":
        {
            "0": "Blaze",
            "1": "Gluttony"
        }
    },
    {
        "name": "Panpour",
        "gender": 0.125,
        "family": 515,
        "abilities":
        {
            "0": "Torrent",
            "1": "Gluttony"
        }
    },
    {
        "name": "Simipour",
        "gender": 0.125,
        "family": 515,
        "abilities":
        {
            "0": "Torrent",
            "1": "Gluttony"
        }
    },
    {
        "name": "Munna",
        "gender": 0.5,
        "family": 517,
        "abilities":
        {
            "0": "Telepathy",
            "1": "Forewarn",
            "2": "Synchronize"
        }
    },
    {
        "name": "Musharna",
        "gender": 0.5,
        "family": 517,
        "abilities":
        {
            "0": "Telepathy",
            "1": "Forewarn",
            "2": "Synchronize"
        }
    },
    {
        "name": "Pidove",
        "gender": 0.5,
        "family": 519,
        "abilities":
        {
            "0": "Rivalry",
            "1": "Big Pecks",
            "2": "Super Luck"
        }
    },
    {
        "name": "Tranquill",
        "gender": 0.5,
        "family": 519,
        "abilities":
        {
            "0": "Rivalry",
            "1": "Big Pecks",
            "2": "Super Luck"
        }
    },
    {
        "name": "Unfezant",
        "gender": 0.5,
        "family": 519,
        "abilities":
        {
            "0": "Rivalry",
            "1": "Big Pecks",
            "2": "Super Luck"
        }
    },
    {
        "name": "Blitzle",
        "gender": 0.5,
        "family": 522,
        "abilities":
        {
            "0": "Sap Sipper",
            "1": "Lightning Rod",
            "2": "Motor Drive"
        }
    },
    {
        "name": "Zebstrika",
        "gender": 0.5,
        "family": 522,
        "abilities":
        {
            "0": "Sap Sipper",
            "1": "Lightning Rod",
            "2": "Motor Drive"
        }
    },
    {
        "name": "Roggenrola",
        "gender": 0.5,
        "family": 524,
        "abilities":
        {
            "0": "Sand Force",
            "1": "Sturdy"
        }
    },
    {
        "name": "Boldore",
        "gender": 0.5,
        "family": 524,
        "abilities":
        {
            "0": "Sand Force",
            "1": "Sturdy"
        }
    },
    {
        "name": "Gigalith",
        "gender": 0.5,
        "family": 524,
        "abilities":
        {
            "0": "Sand Force",
            "1": "Sturdy"
        }
    },
    {
        "name": "Woobat",
        "gender": 0.5,
        "family": 527,
        "abilities":
        {
            "0": "Simple",
            "1": "Unaware",
            "2": "Klutz"
        }
    },
    {
        "name": "Swoobat",
        "gender": 0.5,
        "family": 527,
        "abilities":
        {
            "0": "Simple",
            "1": "Unaware",
            "2": "Klutz"
        }
    },
    {
        "name": "Drilbur",
        "gender": 0.5,
        "family": 529,
        "abilities":
        {
            "0": "Mold Breaker",
            "1": "Sand Rush",
            "2": "Sand Force"
        }
    },
    {
        "name": "Excadrill",
        "gender": 0.5,
        "family": 529,
        "abilities":
        {
            "0": "Mold Breaker",
            "1": "Sand Rush",
            "2": "Sand Force"
        }
    },
    {
        "name": "Audino",
        "gender": 0.5,
        "family": 531,
        "abilities":
        {
            "0": "Klutz",
            "1": "Healer",
            "2": "Regenerator"
        }
    },
    {
        "name": "Timburr",
        "gender": 0.25,
        "family": 532,
        "abilities":
        {
            "0": "Iron Fist",
            "1": "Guts",
            "2": "Sheer Force"
        }
    },
    {
        "name": "Gurdurr",
        "gender": 0.25,
        "family": 532,
        "abilities":
        {
            "0": "Iron Fist",
            "1": "Guts",
            "2": "Sheer Force"
        }
    },
    {
        "name": "Conkeldurr",
        "gender": 0.25,
        "family": 532,
        "abilities":
        {
            "0": "Iron Fist",
            "1": "Guts",
            "2": "Sheer Force"
        }
    },
    {
        "name": "Tympole",
        "gender": 0.5,
        "family": 535,
        "abilities":
        {
            "0": "Water Absorb",
            "1": "Swift Swim",
            "2": "Hydration"
        }
    },
    {
        "name": "Palpitoad",
        "gender": 0.5,
        "family": 535,
        "abilities":
        {
            "0": "Water Absorb",
            "1": "Swift Swim",
            "2": "Hydration"
        }
    },
    {
        "name": "Seismitoad",
        "gender": 0.5,
        "family": 535,
        "abilities":
        {
            "0": "Poison Touch",
            "1": "Swift Swim",
            "2": "Water Absorb"
        }
    },
    {
        "name": "Throh",
        "gender": 0.0,
        "family": 538,
        "abilities":
        {
            "0": "Mold Breaker",
            "1": "Guts",
            "2": "Inner Focus"
        }
    },
    {
        "name": "Sawk",
        "gender": 0.0,
        "family": 539,
        "abilities":
        {
            "0": "Mold Breaker",
            "1": "Sturdy",
            "2": "Inner Focus"
        }
    },
    {
        "name": "Sewaddle",
        "gender": 0.5,
        "family": 540,
        "abilities":
        {
            "0": "Overcoat",
            "1": "Swarm",
            "2": "Chlorophyll"
        }
    },
    {
        "name": "Swadloon",
        "gender": 0.5,
        "family": 540,
        "abilities":
        {
            "0": "Overcoat",
            "1": "Swarm",
            "2": "Chlorophyll"
        }
    },
    {
        "name": "Leavanny",
        "gender": 0.5,
        "family": 540,
        "abilities":
        {
            "0": "Overcoat",
            "1": "Swarm",
            "2": "Chlorophyll"
        }
    },
    {
        "name": "Venipede",
        "gender": 0.5,
        "family": 543,
        "abilities":
        {
            "0": "Speed Boost",
            "1": "Poison Point",
            "2": "Swarm"
        }
    },
    {
        "name": "Whirlipede",
        "gender": 0.5,
        "family": 543,
        "abilities":
        {
            "0": "Speed Boost",
            "1": "Poison Point",
            "2": "Swarm"
        }
    },
    {
        "name": "Scolipede",
        "gender": 0.5,
        "family": 543,
        "abilities":
        {
            "0": "Speed Boost",
            "1": "Poison Point",
            "2": "Swarm"
        }
    },
    {
        "name": "Cottonee",
        "gender": 0.5,
        "family": 546,
        "abilities":
        {
            "0": "Chlorophyll",
            "1": "Prankster",
            "2": "Infiltrator"
        }
    },
    {
        "name": "Whimsicott",
        "gender": 0.5,
        "family": 546,
        "abilities":
        {
            "0": "Chlorophyll",
            "1": "Prankster",
            "2": "Infiltrator"
        }
    },
    {
        "name": "Petilil",
        "gender": 1.0,
        "family": 548,
        "abilities":
        {
            "0": "Leaf Guard",
            "1": "Chlorophyll",
            "2": "Own Tempo"
        }
    },
    {
        "name": "Lilligant",
        "gender": 1.0,
        "family": 548,
        "abilities":
        {
            "0": "Leaf Guard",
            "1": "Chlorophyll",
            "2": "Own Tempo"
        }
    },
    {
        "name": "Basculin",
        "gender": 0.5,
        "family": 550,
        "abilities":
        {
            "0": "Mold Breaker",
            "1": "Reckless/Rock Head",
            "2": "Adaptability"
        }
    },
    {
        "name": "Sandile",
        "gender": 0.5,
        "family": 551,
        "abilities":
        {
            "0": "Anger Point",
            "1": "Intimidate",
            "2": "Moxie"
        }
    },
    {
        "name": "Krokorok",
        "gender": 0.5,
        "family": 551,
        "abilities":
        {
            "0": "Anger Point",
            "1": "Intimidate",
            "2": "Moxie"
        }
    },
    {
        "name": "Krookodile",
        "gender": 0.5,
        "family": 551,
        "abilities":
        {
            "0": "Anger Point",
            "1": "Intimidate",
            "2": "Moxie"
        }
    },
    {
        "name": "Darumaka",
        "gender": 0.5,
        "family": 554,
        "abilities":
        {
            "0": "Inner Focus",
            "1": "Hustle"
        }
    },
    {
        "name": "Darmanitan",
        "gender": 0.5,
        "family": 554,
        "abilities":
        {
            "0": "Zen Mode",
            "1": "Sheer Force"
        }
    },
    {
        "name": "Maractus",
        "gender": 0.5,
        "family": 556,
        "abilities":
        {
            "0": "Storm Drain",
            "1": "Water Absorb",
            "2": "Chlorophyll"
        }
    },
    {
        "name": "Dwebble",
        "gender": 0.5,
        "family": 557,
        "abilities":
        {
            "0": "Weak Armor",
            "1": "Sturdy",
            "2": "Shell Armor"
        }
    },
    {
        "name": "Crustle",
        "gender": 0.5,
        "family": 557,
        "abilities":
        {
            "0": "Weak Armor",
            "1": "Sturdy",
            "2": "Shell Armor"
        }
    },
    {
        "name": "Scraggy",
        "gender": 0.5,
        "family": 559,
        "abilities":
        {
            "0": "Intimidate",
            "1": "Shed Skin",
            "2": "Moxie"
        }
    },
    {
        "name": "Scrafty",
        "gender": 0.5,
        "family": 559,
        "abilities":
        {
            "0": "Intimidate",
            "1": "Shed Skin",
            "2": "Moxie"
        }
    },
    {
        "name": "Sigilyph",
        "gender": 0.5,
        "family": 561,
        "abilities":
        {
            "0": "Tinted Lens",
            "1": "Wonder Skin",
            "2": "Magic Guard"
        }
    },
    {
        "name": "Yamask",
        "gender": 0.5,
        "family": 562,
        "abilities":
        {
            "1": "Mummy"
        }
    },
    {
        "name": "Cofagrigus",
        "gender": 0.5,
        "family": 562,
        "abilities":
        {
            "1": "Mummy"
        }
    },
    {
        "name": "Tirtouga",
        "gender": 0.125,
        "family": 564,
        "abilities":
        {
            "0": "Swift Swim",
            "1": "Solid Rock",
            "2": "Sturdy"
        }
    },
    {
        "name": "Carracosta",
        "gender": 0.125,
        "family": 564,
        "abilities":
        {
            "0": "Swift Swim",
            "1": "Solid Rock",
            "2": "Sturdy"
        }
    },
    {
        "name": "Archen",
        "gender": 0.125,
        "family": 566,
        "abilities":
        {
            "1": "Defeatist"
        }
    },
    {
        "name": "Archeops",
        "gender": 0.125,
        "family": 566,
        "abilities":
        {
            "1": "Defeatist"
        }
    },
    {
        "name": "Trubbish",
        "gender": 0.5,
        "family": 568,
        "abilities":
        {
            "0": "Aftermath",
            "1": "Stench",
            "2": "Sticky Hold"
        }
    },
    {
        "name": "Garbodor",
        "gender": 0.5,
        "family": 568,
        "abilities":
        {
            "0": "Aftermath",
            "1": "Stench",
            "2": "Weak Armor"
        }
    },
    {
        "name": "Zorua",
        "gender": 0.125,
        "family": 570,
        "abilities":
        {
            "1": "Illusion"
        }
    },
    {
        "name": "Zoroark",
        "gender": 0.125,
        "family": 570,
        "abilities":
        {
            "1": "Illusion"
        }
    },
    {
        "name": "Minccino",
        "gender": 0.75,
        "family": 572,
        "abilities":
        {
            "0": "Technician",
            "1": "Cute Charm",
            "2": "Skill Link"
        }
    },
    {
        "name": "Cinccino",
        "gender": 0.75,
        "family": 572,
        "abilities":
        {
            "0": "Technician",
            "1": "Cute Charm",
            "2": "Skill Link"
        }
    },
    {
        "name": "Gothita",
        "gender": 0.75,
        "family": 574,
        "abilities":
        {
            "0": "Shadow Tag",
            "1": "Frisk",
            "2": "Competitive"
        }
    },
    {
        "name": "Gothorita",
        "gender": 0.75,
        "family": 574,
        "abilities":
        {
            "0": "Shadow Tag",
            "1": "Frisk",
            "2": "Competitive"
        }
    },
    {
        "name": "Gothitelle",
        "gender": 0.75,
        "family": 574,
        "abilities":
        {
            "0": "Shadow Tag",
            "1": "Frisk",
            "2": "Competitive"
        }
    },
    {
        "name": "Solosis",
        "gender": 0.5,
        "family": 577,
        "abilities":
        {
            "0": "Regenerator",
            "1": "Overcoat",
            "2": "Magic Guard"
        }
    },
    {
        "name": "Duosion",
        "gender": 0.5,
        "family": 577,
        "abilities":
        {
            "0": "Regenerator",
            "1": "Overcoat",
            "2": "Magic Guard"
        }
    },
    {
        "name": "Reuniclus",
        "gender": 0.5,
        "family": 577,
        "abilities":
        {
            "0": "Regenerator",
            "1": "Overcoat",
            "2": "Magic Guard"
        }
    },
    {
        "name": "Ducklett",
        "gender": 0.5,
        "family": 580,
        "abilities":
        {
            "0": "Hydration",
            "1": "Keen Eye",
            "2": "Big Pecks"
        }
    },
    {
        "name": "Swanna",
        "gender": 0.5,
        "family": 580,
        "abilities":
        {
            "0": "Hydration",
            "1": "Keen Eye",
            "2": "Big Pecks"
        }
    },
    {
        "name": "Vanillite",
        "gender": 0.5,
        "family": 582,
        "abilities":
        {
            "0": "Weak Armor",
            "1": "Ice Body"
        }
    },
    {
        "name": "Vanillish",
        "gender": 0.5,
        "family": 582,
        "abilities":
        {
            "0": "Weak Armor",
            "1": "Ice Body"
        }
    },
    {
        "name": "Vanilluxe",
        "gender": 0.5,
        "family": 582,
        "abilities":
        {
            "0": "Weak Armor",
            "1": "Ice Body"
        }
    },
    {
        "name": "Deerling",
        "gender": 0.5,
        "family": 585,
        "abilities":
        {
            "0": "Serene Grace",
            "1": "Chlorophyll",
            "2": "Sap Sipper"
        }
    },
    {
        "name": "Sawsbuck",
        "gender": 0.5,
        "family": 585,
        "abilities":
        {
            "0": "Serene Grace",
            "1": "Chlorophyll",
            "2": "Sap Sipper"
        }
    },
    {
        "name": "Emolga",
        "gender": 0.5,
        "family": 587,
        "abilities":
        {
            "0": "Motor Drive",
            "1": "Static"
        }
    },
    {
        "name": "Karrablast",
        "gender": 0.5,
        "family": 588,
        "abilities":
        {
            "0": "No Guard",
            "1": "Swarm",
            "2": "Shed Skin"
        }
    },
    {
        "name": "Escavalier",
        "gender": 0.5,
        "family": 588,
        "abilities":
        {
            "0": "Overcoat",
            "1": "Swarm",
            "2": "Shell Armor"
        }
    },
    {
        "name": "Foongus",
        "gender": 0.5,
        "family": 590,
        "abilities":
        {
            "0": "Regenerator",
            "1": "Effect Spore"
        }
    },
    {
        "name": "Amoonguss",
        "gender": 0.5,
        "family": 590,
        "abilities":
        {
            "0": "Regenerator",
            "1": "Effect Spore"
        }
    },
    {
        "name": "Frillish",
        "gender": 0.5,
        "family": 592,
        "abilities":
        {
            "0": "Damp",
            "1": "Water Absorb",
            "2": "Cursed Body"
        }
    },
    {
        "name": "Jellicent",
        "gender": 0.5,
        "family": 592,
        "abilities":
        {
            "0": "Damp",
            "1": "Water Absorb",
            "2": "Cursed Body"
        }
    },
    {
        "name": "Alomomola",
        "gender": 0.5,
        "family": 594,
        "abilities":
        {
            "0": "Regenerator",
            "1": "Healer",
            "2": "Hydration"
        }
    },
    {
        "name": "Joltik",
        "gender": 0.5,
        "family": 595,
        "abilities":
        {
            "0": "Swarm",
            "1": "Compound Eyes",
            "2": "Unnerve"
        }
    },
    {
        "name": "Galvantula",
        "gender": 0.5,
        "family": 595,
        "abilities":
        {
            "0": "Swarm",
            "1": "Compound Eyes",
            "2": "Unnerve"
        }
    },
    {
        "name": "Ferroseed",
        "gender": 0.5,
        "family": 597,
        "abilities":
        {
            "0": "Iron Barbs",
            "1": "Iron Barbs"
        }
    },
    {
        "name": "Ferrothorn",
        "gender": 0.5,
        "family": 597,
        "abilities":
        {
            "0": "Anticipation",
            "1": "Iron Barbs"
        }
    },
    {
        "name": "Klink",
        "gender": 'x',
        "family": 599,
        "abilities":
        {
            "0": "Minus",
            "1": "Plus",
            "2": "Clear Body"
        }
    },
    {
        "name": "Klang",
        "gender": 'x',
        "family": 599,
        "abilities":
        {
            "0": "Minus",
            "1": "Plus",
            "2": "Clear Body"
        }
    },
    {
        "name": "Klinklang",
        "gender": 'x',
        "family": 599,
        "abilities":
        {
            "0": "Minus",
            "1": "Plus",
            "2": "Clear Body"
        }
    },
    {
        "name": "Tynamo",
        "gender": 0.5,
        "family": 602,
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Eelektrik",
        "gender": 0.5,
        "family": 602,
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Eelektross",
        "gender": 0.5,
        "family": 602,
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Elgyem",
        "gender": 0.5,
        "family": 605,
        "abilities":
        {
            "0": "Analytic",
            "1": "Telepathy",
            "2": "Synchronize"
        }
    },
    {
        "name": "Beheeyem",
        "gender": 0.5,
        "family": 605,
        "abilities":
        {
            "0": "Analytic",
            "1": "Telepathy",
            "2": "Synchronize"
        }
    },
    {
        "name": "Litwick",
        "gender": 0.5,
        "family": 607,
        "abilities":
        {
            "0": "Infiltrator",
            "1": "Flash Fire",
            "2": "Flame Body"
        }
    },
    {
        "name": "Lampent",
        "gender": 0.5,
        "family": 607,
        "abilities":
        {
            "0": "Infiltrator",
            "1": "Flash Fire",
            "2": "Flame Body"
        }
    },
    {
        "name": "Chandelure",
        "gender": 0.5,
        "family": 607,
        "abilities":
        {
            "0": "Infiltrator",
            "1": "Flash Fire",
            "2": "Flame Body"
        }
    },
    {
        "name": "Axew",
        "gender": 0.5,
        "family": 610,
        "abilities":
        {
            "0": "Unnerve",
            "1": "Rivalry",
            "2": "Mold Breaker"
        }
    },
    {
        "name": "Fraxure",
        "gender": 0.5,
        "family": 610,
        "abilities":
        {
            "0": "Unnerve",
            "1": "Rivalry",
            "2": "Mold Breaker"
        }
    },
    {
        "name": "Haxorus",
        "gender": 0.5,
        "family": 610,
        "abilities":
        {
            "0": "Unnerve",
            "1": "Rivalry",
            "2": "Mold Breaker"
        }
    },
    {
        "name": "Cubchoo",
        "gender": 0.5,
        "family": 613,
        "abilities":
        {
            "0": "Rattled",
            "1": "Snow Cloak"
        }
    },
    {
        "name": "Beartic",
        "gender": 0.5,
        "family": 613,
        "abilities":
        {
            "0": "Swift Swim",
            "1": "Snow Cloak"
        }
    },
    {
        "name": "Cryogonal",
        "gender": 'x',
        "family": 615,
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Shelmet",
        "gender": 0.5,
        "family": 616,
        "abilities":
        {
            "0": "Overcoat",
            "1": "Hydration",
            "2": "Shell Armor"
        }
    },
    {
        "name": "Accelgor",
        "gender": 0.5,
        "family": 616,
        "abilities":
        {
            "0": "Unburden",
            "1": "Hydration",
            "2": "Sticky Hold"
        }
    },
    {
        "name": "Stunfisk",
        "gender": 0.5,
        "family": 618,
        "abilities":
        {
            "0": "Sand Veil",
            "1": "Static",
            "2": "Limber"
        }
    },
    {
        "name": "Meinfoo",
        "gender": 0.5,
        "family": 619,
        "abilities":
        {
            "0": "Reckless",
            "1": "Inner Focus",
            "2": "Regenerator"
        }
    },
    {
        "name": "Meinshao",
        "gender": 0.5,
        "family": 619,
        "abilities":
        {
            "0": "Reckless",
            "1": "Inner Focus",
            "2": "Regenerator"
        }
    },
    {
        "name": "Druddigon",
        "gender": 0.5,
        "family": 621,
        "abilities":
        {
            "0": "Mold Breaker",
            "1": "Rough Skin",
            "2": "Sheer Force"
        }
    },
    {
        "name": "Golett",
        "gender": 'x',
        "family": 622,
        "abilities":
        {
            "0": "No Guard",
            "1": "Iron Fist",
            "2": "Klutz"
        }
    },
    {
        "name": "Golurk",
        "gender": 'x',
        "family": 622,
        "abilities":
        {
            "0": "No Guard",
            "1": "Iron Fist",
            "2": "Klutz"
        }
    },
    {
        "name": "Pawniard",
        "gender": 0.5,
        "family": 624,
        "abilities":
        {
            "0": "Pressure",
            "1": "Defiant",
            "2": "Inner Focus"
        }
    },
    {
        "name": "Bisharp",
        "gender": 0.5,
        "family": 624,
        "abilities":
        {
            "0": "Pressure",
            "1": "Defiant",
            "2": "Inner Focus"
        }
    },
    {
        "name": "Bouffalant",
        "gender": 0.5,
        "family": 626,
        "abilities":
        {
            "0": "Soundproof",
            "1": "Reckless",
            "2": "Sap Sipper"
        }
    },
    {
        "name": "Rufflet",
        "gender": 0.0,
        "family": 627,
        "abilities":
        {
            "0": "Hustle",
            "1": "Keen Eye",
            "2": "Sheer Force"
        }
    },
    {
        "name": "Braviary",
        "gender": 0.0,
        "family": 627,
        "abilities":
        {
            "0": "Defiant",
            "1": "Keen Eye",
            "2": "Sheer Force"
        }
    },
    {
        "name": "Vullaby",
        "gender": 1.0,
        "family": 629,
        "abilities":
        {
            "0": "Weak Armor",
            "1": "Big Pecks",
            "2": "Overcoat"
        }
    },
    {
        "name": "Mandibuzz",
        "gender": 1.0,
        "family": 629,
        "abilities":
        {
            "0": "Weak Armor",
            "1": "Big Pecks",
            "2": "Overcoat"
        }
    },
    {
        "name": "Heatmor",
        "gender": 0.5,
        "family": 631,
        "abilities":
        {
            "0": "White Smoke",
            "1": "Gluttony",
            "2": "Flash Fire"
        }
    },
    {
        "name": "Durant",
        "gender": 0.5,
        "family": 632,
        "abilities":
        {
            "0": "Truant",
            "1": "Swarm",
            "2": "Hustle"
        }
    },
    {
        "name": "Deino",
        "gender": 0.5,
        "family": 633,
        "abilities":
        {
            "1": "Hustle"
        }
    },
    {
        "name": "Zweilous",
        "gender": 0.5,
        "family": 633,
        "abilities":
        {
            "1": "Hustle"
        }
    },
    {
        "name": "Hydreigon",
        "gender": 0.5,
        "family": 633,
        "abilities":
        {
            "1": "Levitate"
        }
    },
    {
        "name": "Larvesta",
        "gender": 0.5,
        "family": 636,
        "abilities":
        {
            "0": "Swarm",
            "1": "Flame Body"
        }
    },
    {
        "name": "Volcarona",
        "gender": 0.5,
        "family": 636,
        "abilities":
        {
            "0": "Swarm",
            "1": "Flame Body"
        }
    },,,,,,,,,,,,,
    {
        "name": "Chespin",
        "gender": 0.125,
        "family": 650,
        "abilities":
        {
            "0": "Bulletproof",
            "1": "Overgrow"
        }
    },
    {
        "name": "Quilladin",
        "gender": 0.125,
        "family": 650,
        "abilities":
        {
            "0": "Bulletproof",
            "1": "Overgrow"
        }
    },
    {
        "name": "Chesnaught",
        "gender": 0.125,
        "family": 650,
        "abilities":
        {
            "0": "Bulletproof",
            "1": "Overgrow"
        }
    },
    {
        "name": "Fennekin",
        "gender": 0.125,
        "family": 653,
        "abilities":
        {
            "0": "Magician",
            "1": "Blaze"
        }
    },
    {
        "name": "Braixen",
        "gender": 0.125,
        "family": 653,
        "abilities":
        {
            "0": "Magician",
            "1": "Blaze"
        }
    },
    {
        "name": "Delphox",
        "gender": 0.125,
        "family": 653,
        "abilities":
        {
            "0": "Magician",
            "1": "Blaze"
        }
    },
    {
        "name": "Froakie",
        "gender": 0.125,
        "family": 656,
        "abilities":
        {
            "0": "Protean",
            "1": "Torrent"
        }
    },
    {
        "name": "Frogadier",
        "gender": 0.125,
        "family": 656,
        "abilities":
        {
            "0": "Protean",
            "1": "Torrent"
        }
    },
    {
        "name": "Greninja",
        "gender": 0.125,
        "family": 656,
        "abilities":
        {
            "0": "Protean",
            "1": "Torrent"
        }
    },
    {
        "name": "Bunnelby",
        "gender": 0.5,
        "family": 659,
        "abilities":
        {
            "0": "Huge Power",
            "1": "Pickup",
            "2": "Cheek Pouch"
        }
    },
    {
        "name": "Diggersby",
        "gender": 0.5,
        "family": 659,
        "abilities":
        {
            "0": "Huge Power",
            "1": "Pickup",
            "2": "Cheek Pouch"
        }
    },
    {
        "name": "Fletchling",
        "gender": 0.5,
        "family": 661,
        "abilities":
        {
            "0": "Gale Wings",
            "1": "Big Pecks"
        }
    },
    {
        "name": "Fletchinder",
        "gender": 0.5,
        "family": 661,
        "abilities":
        {
            "0": "Gale Wings",
            "1": "Flame Body"
        }
    },
    {
        "name": "Talonflame",
        "gender": 0.5,
        "family": 661,
        "abilities":
        {
            "0": "Gale Wings",
            "1": "Flame Body"
        }
    },
    {
        "name": "Scatterbug",
        "gender": 0.5,
        "family": 664,
        "abilities":
        {
            "0": "Friend Guard",
            "1": "Shield Dust",
            "2": "Compound Eyes"
        }
    },
    {
        "name": "Spewpa",
        "gender": 0.5,
        "family": 664,
        "abilities":
        {
            "0": "Friend Guard",
            "1": "Shed Skin",
            "2": "Shed Skin"
        }
    },
    {
        "name": "Vivillon",
        "gender": 0.5,
        "family": 664,
        "abilities":
        {
            "0": "Friend Guard",
            "1": "Shield Dust",
            "2": "Compound Eyes"
        }
    },
    {
        "name": "Litleo",
        "gender": 0.75,
        "family": 667,
        "abilities":
        {
            "0": "Moxie",
            "1": "Rivalry",
            "2": "Unnerve"
        }
    },
    {
        "name": "Pyroar",
        "gender": 0.75,
        "family": 667,
        "abilities":
        {
            "0": "Moxie",
            "1": "Rivalry",
            "2": "Unnerve"
        }
    },
    {
        "name": "Flab&eacute;b&eacute;",
        "gender": 1.0,
        "family": 669,
        "abilities":
        {
            "0": "Symbiosis",
            "1": "Flower Veil"
        }
    },
    {
        "name": "Floette",
        "gender": 1.0,
        "family": 669,
        "abilities":
        {
            "0": "Symbiosis",
            "1": "Flower Veil"
        }
    },
    {
        "name": "Florges",
        "gender": 1.0,
        "family": 669,
        "abilities":
        {
            "0": "Symbiosis",
            "1": "Flower Veil"
        }
    },
    {
        "name": "Skiddo",
        "gender": 0.5,
        "family": 672,
        "abilities":
        {
            "0": "Grass Pelt",
            "1": "Sap Sipper"
        }
    },
    {
        "name": "Gogoat",
        "gender": 0.5,
        "family": 672,
        "abilities":
        {
            "0": "Grass Pelt",
            "1": "Sap Sipper"
        }
    },
    {
        "name": "Pancham",
        "gender": 0.5,
        "family": 674,
        "abilities":
        {
            "0": "Scrappy",
            "1": "Iron Fist",
            "2": "Mold Breaker"
        }
    },
    {
        "name": "Pangoro",
        "gender": 0.5,
        "family": 674,
        "abilities":
        {
            "0": "Scrappy",
            "1": "Iron Fist",
            "2": "Mold Breaker"
        }
    },
    {
        "name": "Furfrou",
        "gender": 0.5,
        "family": 676,
        "abilities":
        {
            "1": "Fur Coat"
        }
    },
    {
        "name": "Espurr",
        "gender": 0.5,
        "family": 677,
        "abilities":
        {
            "0": "Own Tempo",
            "1": "Keen Eye",
            "2": "Infiltrator"
        }
    },
    {
        "name": "Meowstic",
        "gender": 0.5,
        "family": 677,
        "abilities":
        {
            "0": "Prankster/Competitive",
            "1": "Keen Eye",
            "2": "Infiltrator"
        }
    },
    {
        "name": "Honedge",
        "gender": 0.5,
        "family": 679,
        "abilities":
        {
            "1": "No Guard"
        }
    },
    {
        "name": "Doublade",
        "gender": 0.5,
        "family": 679,
        "abilities":
        {
            "1": "No Guard"
        }
    },
    {
        "name": "Aegislash",
        "gender": 0.5,
        "family": 679,
        "abilities":
        {
            "1": "Stance Change"
        }
    },
    {
        "name": "Spritzee",
        "gender": 0.5,
        "family": 682,
        "abilities":
        {
            "0": "Aroma Veil",
            "1": "Healer"
        }
    },
    {
        "name": "Aromatisse",
        "gender": 0.5,
        "family": 682,
        "abilities":
        {
            "0": "Aroma Veil",
            "1": "Healer"
        }
    },
    {
        "name": "Swirlix",
        "gender": 0.5,
        "family": 684,
        "abilities":
        {
            "0": "Unburden",
            "1": "Sweet Veil"
        }
    },
    {
        "name": "Slurpuff",
        "gender": 0.5,
        "family": 684,
        "abilities":
        {
            "0": "Unburden",
            "1": "Sweet Veil"
        }
    },
    {
        "name": "Inkay",
        "gender": 0.5,
        "family": 686,
        "abilities":
        {
            "0": "Infiltrator",
            "1": "Contrary",
            "2": "Suction Cups"
        }
    },
    {
        "name": "Malamar",
        "gender": 0.5,
        "family": 686,
        "abilities":
        {
            "0": "Infiltrator",
            "1": "Contrary",
            "2": "Suction Cups"
        }
    },
    {
        "name": "Binacle",
        "gender": 0.5,
        "family": 688,
        "abilities":
        {
            "0": "Pickpocket",
            "1": "Tough Claws",
            "2": "Sniper"
        }
    },
    {
        "name": "Barbaracle",
        "gender": 0.5,
        "family": 688,
        "abilities":
        {
            "0": "Pickpocket",
            "1": "Tough Claws",
            "2": "Sniper"
        }
    },
    {
        "name": "Skrelp",
        "gender": 0.5,
        "family": 690,
        "abilities":
        {
            "0": "Adaptability",
            "1": "Poison Point",
            "2": "Poison Touch"
        }
    },
    {
        "name": "Dragalge",
        "gender": 0.5,
        "family": 690,
        "abilities":
        {
            "0": "Adaptability",
            "1": "Poison Point",
            "2": "Poison Touch"
        }
    },
    {
        "name": "Clauncher",
        "gender": 0.5,
        "family": 692,
        "abilities":
        {
            "1": "Mega Launcher"
        }
    },
    {
        "name": "Clawitzer",
        "gender": 0.5,
        "family": 692,
        "abilities":
        {
            "1": "Mega Launcher"
        }
    },
    {
        "name": "Helioptile",
        "gender": 0.5,
        "family": 694,
        "abilities":
        {
            "0": "Solar Power",
            "1": "Dry Skin",
            "2": "Sand Veil"
        }
    },
    {
        "name": "Heliolisk",
        "gender": 0.5,
        "family": 694,
        "abilities":
        {
            "0": "Solar Power",
            "1": "Dry Skin",
            "2": "Sand Veil"
        }
    },
    {
        "name": "Tyrunt",
        "gender": 0.125,
        "family": 696,
        "abilities":
        {
            "0": "Sturdy",
            "1": "Strong Jaw"
        }
    },
    {
        "name": "Tyrantrum",
        "gender": 0.125,
        "family": 696,
        "abilities":
        {
            "0": "Rock Head",
            "1": "Strong Jaw"
        }
    },
    {
        "name": "Amaura",
        "gender": 0.125,
        "family": 698,
        "abilities":
        {
            "0": "Snow Warning",
            "1": "Refrigerate"
        }
    },
    {
        "name": "Aurorus",
        "gender": 0.125,
        "family": 698,
        "abilities":
        {
            "0": "Snow Warning",
            "1": "Refrigerate"
        }
    },
    {
        "name": "Sylveon",
        "gender": 0.125,
        "family": 133,
        "abilities":
        {
            "0": "Pixilate",
            "1": "Cute Charm",
            "2": "Cute Charm"
        }
    },
    {
        "name": "Hawlucha",
        "gender": 0.5,
        "family": 701,
        "abilities":
        {
            "0": "Mold Breaker",
            "1": "Limber",
            "2": "Unburden"
        }
    },
    {
        "name": "Dedenne",
        "gender": 0.5,
        "family": 702,
        "abilities":
        {
            "0": "Plus",
            "1": "Cheek Pouch",
            "2": "Pickup"
        }
    },
    {
        "name": "Carbink",
        "gender": 'x',
        "family": 703,
        "abilities":
        {
            "0": "Sturdy",
            "1": "Clear Body"
        }
    },
    {
        "name": "Goomy",
        "gender": 0.5,
        "family": 704,
        "abilities":
        {
            "0": "Gooey",
            "1": "Sap Sipper",
            "2": "Hydration"
        }
    },
    {
        "name": "Sliggoo",
        "gender": 0.5,
        "family": 704,
        "abilities":
        {
            "0": "Gooey",
            "1": "Sap Sipper",
            "2": "Hydration"
        }
    },
    {
        "name": "Goodra",
        "gender": 0.5,
        "family": 704,
        "abilities":
        {
            "0": "Gooey",
            "1": "Sap Sipper",
            "2": "Hydration"
        }
    },
    {
        "name": "Klefki",
        "gender": 0.5,
        "family": 707,
        "abilities":
        {
            "0": "Magician",
            "1": "Prankster"
        }
    },
    {
        "name": "Phantump",
        "gender": 0.5,
        "family": 708,
        "abilities":
        {
            "0": "Harvest",
            "1": "Natural Cure",
            "2": "Frisk"
        }
    },
    {
        "name": "Trevenant",
        "gender": 0.5,
        "family": 708,
        "abilities":
        {
            "0": "Harvest",
            "1": "Natural Cure",
            "2": "Frisk"
        }
    },
    {
        "name": "Pumpkaboo",
        "gender": 0.5,
        "family": 710,
        "abilities":
        {
            "0": "Insomnia",
            "1": "Pickup",
            "2": "Frisk"
        }
    },
    {
        "name": "Gourgeist",
        "gender": 0.5,
        "family": 710,
        "abilities":
        {
            "0": "Insomnia",
            "1": "Pickup",
            "2": "Frisk"
        }
    },
    {
        "name": "Bergmite",
        "gender": 0.5,
        "family": 712,
        "abilities":
        {
            "0": "Sturdy",
            "1": "Own Tempo",
            "2": "Ice Body"
        }
    },
    {
        "name": "Avalugg",
        "gender": 0.5,
        "family": 712,
        "abilities":
        {
            "0": "Sturdy",
            "1": "Own Tempo",
            "2": "Ice Body"
        }
    },
    {
        "name": "Noibat",
        "gender": 0.5,
        "family": 714,
        "abilities":
        {
            "0": "Telepathy",
            "1": "Frisk",
            "2": "Infiltrator"
        }
    },
    {
        "name": "Noivern",
        "gender": 0.5,
        "family": 714,
        "abilities":
        {
            "0": "Telepathy",
            "1": "Frisk",
            "2": "Infiltrator"
        }
    },,,,,,,
    {
        "name": "Rowlet",
        "gender": 0.125,
        "family": 722,
        "abilities":
        {
            "0": "Long Reach",
            "1": "Overgrow"
        }

    },
    {
        "name": "Dartrix",
        "gender": 0.125,
        "family": 722,
        "abilities":
        {
            "0": "Long Reach",
            "1": "Overgrow"
        }
    },
    {
        "name": "Decidueye",
        "gender": 0.125,
        "family": 722,
        "abilities":
        {
            "0": "Long Reach",
            "1": "Overgrow",
        }
    },
    {
        "name": "Litten",
        "gender": 0.125,
        "family": 725,
        "abilities":
        {
            "0": "Intimidate",
            "1": "Blaze",
        }
    },
    {
        "name": "Torracat",
        "gender": 0.125,
        "family": 725,
        "abilities":
        {
            "0": "Intimidate",
            "1": "Blaze",
        }
    },
    {
        "name": "Incineroar",
        "gender": 0.125,
        "family": 725,
        "abilities":
        {
            "0": "Intimidate",
            "1": "Blaze",
        }
    },
    {
        "name": "Popplio",
        "gender": 0.125,
        "family": 728,
        "abilities":
        {
            "0": "Liquid Voice",
            "1": "Torrent",
        }
    },
    {
        "name": "Brionne",
        "gender": 0.125,
        "family": 728,
        "abilities":
        {
            "0": "Liquid Voice",
            "1": "Torrent",
        }
    },
    {
        "name": "Primarina",
        "gender": 0.125,
        "family": 728,
        "abilities":
        {
            "0": "Liquid Voice",
            "1": "Torrent",
        }
    },
    {
        "name": "Pikipek",
        "gender": 0.5,
        "family": 731,
        "abilities":
        {
            "0": "Pickup",
            "1": "Keen Eye",
            "2": "Skill Link"
        }
    },
    {
        "name": "Trumbeak",
        "gender": 0.5,
        "family": 731,
        "abilities":
        {
            "0": "Pickup",
            "1": "Keen Eye",
            "2": "Skill Link"
        }
    },
    {
        "name": "Toucannon",
        "gender": 0.5,
        "family": 731,
        "abilities":
        {
            "0": "Sheer Force",
            "1": "Keen Eye",
            "2": "Skill Link"
        }
    },
    {
        "name": "Yungoos",
        "gender": 0.5,
        "family": 734,
        "abilities":
        {
            "0": "Adaptability",
            "1": "Strong Jaw",
            "2": "Stakeout"
        }
    },
    {
        "name": "Gumshoos",
        "gender": 0.5,
        "family": 734,
        "abilities":
        {
            "0": "Adaptability",
            "1": "Strong Jaw",
            "2": "Stakeout"
        }
    },
    {
        "name": "Grubbin",
        "gender": 0.5,
        "family": 736,
        "abilities":
        {
            "0": "Swarm"
        }
    },
    {
        "name": "Charjabug",
        "gender": 0.5,
        "family": 736,
        "abilities":
        {
            "0": "Battery"
        }
    },
    {
        "name": "Vikavolt",
        "gender": 0.5,
        "family": 736,
        "abilities":
        {
            "0": "Levitate"
        }
    },
    {
        "name": "Crabrawler",
        "gender": 0.5,
        "family": 739,
        "abilities":
        {
            "0": "Anger Point",
            "1": "Hyper Cutter",
            "2": "Iron Fist"
        }
    },
    {
        "name": "Crabominable",
        "gender": 0.5,
        "family": 739,
        "abilities":
        {
            "0": "Anger Point",
            "1": "Hyper Cutter",
            "2": "Iron Fist"
        }
    },
    {
        "name": "Oricorio",
        "gender": 0.75,
        "family": 741,
        "abilities":
        {
            "0": "Dancer"
        }
    },
    {
        "name": "Cutiefly",
        "gender": 0.5,
        "family": 742,
        "abilities":
        {
            "0": "Sweet Veil",
            "1": "Honey Gather",
            "2": "Shield Dust"
        }
    },
    {
        "name": "Ribombee",
        "gender": 0.5,
        "family": 742,
        "abilities":
        {
            "0": "Sweet Veil",
            "1": "Honey Gather",
            "2": "Shield Dust"
        }
    },
    {
        "name": "Rockruff",
        "gender": 0.5,
        "family": 744,
        "abilities":
        {
            "0": "Steadfast",
            "1": "Keen Eye",
            "2": "Vital Spirit"
        }
    },
    {
        "name": "Lycanroc",
        "gender": 0.5,
        "family": 744,
        "abilities":
        {
            "0": "Steadfast/No Guard",
            "1": "Keen Eye/Tough Claws",
            "2": "Sand Rush/Vital Spirit"
        }
    },
    {
        "name": "Wishiwashi",
        "gender": 0.5,
        "family": 746,
        "abilities":
        {
            "0": "Schooling"
        }
    },
    {
        "name": "Mareanie",
        "gender": 0.5,
        "family": 747,
        "abilities":
        {
            "0": "Regenerator",
            "1": "Merciless",
            "2": "Limber"
        }
    },
    {
        "name": "Toxapex",
        "gender": 0.5,
        "family": 747,
        "abilities":
        {
            "0": "Regenerator",
            "1": "Merciless",
            "2": "Limber"
        }
    },
    {
        "name": "Mudbray",
        "gender": 0.5,
        "family": 749,
        "abilities":
        {
            "0": "Inner Focus",
            "1": "Own Tempo",
            "2": "Stamina"
        }
    },
    {
        "name": "Mudsdale",
        "gender": 0.5,
        "family": 749,
        "abilities":
        {
            "0": "Inner Focus",
            "1": "Own Tempo",
            "2": "Stamina"
        }
    },
    {
        "name": "Dewpider",
        "gender": 0.5,
        "family": 751,
        "abilities":
        {
            "0": "Water Absorb",
            "1": "Water Bubble"
        }
    },
    {
        "name": "Araquanid",
        "gender": 0.5,
        "family": 751,
        "abilities":
        {
            "0": "Water Absorb",
            "1": "Water Bubble"
        }
    },
    {
        "name": "Fomantis",
        "gender": 0.5,
        "family": 753,
        "abilities":
        {
            "0": "Contrary",
            "1": "Leaf Guard"
        }
    },
    {
        "name": "Lurantis",
        "gender": 0.5,
        "family": 753,
        "abilities":
        {
            "0": "Contrary",
            "1": "Leaf Guard"
        }
    },
    {
        "name": "Morelull",
        "gender": 0.5,
        "family": 755,
        "abilities":
        {
            "0": "Rain Dish",
            "1": "Illuminate",
            "2": "Effect Spore"
        }
    },
    {
        "name": "Shiinotic",
        "gender": 0.5,
        "family": 755,
        "abilities":
        {
            "0": "Rain Dish",
            "1": "Illuminate",
            "2": "Effect Spore"
        }
    },
    {
        "name": "Salandit",
        "gender": 0.125,
        "family": 757,
        "abilities":
        {
            "0": "Oblivious",
            "1": "Corrosion"
        }
    },
    {
        "name": "Salazzle",
        "gender": 1.0,
        "family": 757,
        "abilities":
        {
            "0": "Oblivious",
            "1": "Corrosion"
        }
    },
    {
        "name": "Stufful",
        "gender": 0.5,
        "family": 759,
        "abilities":
        {
            "0": "Cute Charm",
            "1": "Fluffy",
            "2": "Klutz"
        }
    },
    {
        "name": "Bewear",
        "gender": 0.5,
        "family": 759,
        "abilities":
        {
            "0": "Unnerve",
            "1": "Fluffy",
            "2": "Klutz"
        }
    },
    {
        "name": "Bounsweet",
        "gender": 1.0,
        "family": 761,
        "abilities":
        {
            "0": "Sweet Veil",
            "1": "Leaf Guard",
            "2": "Oblivious"
        }
    },
    {
        "name": "Steenee",
        "gender": 1.0,
        "family": 761,
        "abilities":
        {
            "0": "Sweet Veil",
            "1": "Leaf Guard",
            "2": "Oblivious"
        }
    },
    {
        "name": "Tsareena",
        "gender": 1.0,
        "family": 761,
        "abilities":
        {
            "0": "Sweet Veil",
            "1": "Leaf Guard",
            "2": "Queenly Majesty"
        }
    },
    {
        "name": "Comfey",
        "gender": 0.75,
        "family": 764,
        "abilities":
        {
            "0": "Natural Cure",
            "1": "Flower Veil",
            "2": "Triage"
        }
    },
    {
        "name": "Oranguru",
        "gender": 0.5,
        "family": 765,
        "abilities":
        {
            "0": "Symbiosis",
            "1": "Inner Focus",
            "2": "Telepathy"
        }
    },
    {
        "name": "Passimian",
        "gender": 0.5,
        "family": 766,
        "abilities":
        {
            "0": "Defiant",
            "1": "Receiver"
        }
    },
    {
        "name": "Wimpod",
        "gender": 0.5,
        "family": 767,
        "abilities":
        {
            "0": "Wimp Out"
        }
    },
    {
        "name": "Golisopod",
        "gender": 0.5,
        "family": 767,
        "abilities":
        {
            "0": "Emergency Exit"
        }
    },
    {
        "name": "Sandygast",
        "gender": 0.5,
        "family": 769,
        "abilities":
        {
            "0": "Sand Veil",
            "1": "Water Compaction"
        }
    },
    {
        "name": "Palossand",
        "gender": 0.5,
        "family": 769,
        "abilities":
        {
            "0": "Sand Veil",
            "1": "Water Compaction"
        }
    },
    {
        "name": "Pyukumuku",
        "gender": 0.5,
        "family": 771,
        "abilities":
        {
            "0": "Unaware",
            "1": "Innards Out"
        }
    },,,
    {
        "name": "Minior",
        "gender": 'x',
        "family": 774,
        "abilities":
        {
            "0": "Shields Down"
        }
    },
    {
        "name": "Komala",
        "gender": 0.5,
        "family": 775,
        "abilities":
        {
            "0": "Comatose"
        }
    },
    {
        "name": "Turtonator",
        "gender": 0.5,
        "family": 776,
        "abilities":
        {
            "0": "Shell Armor"
        }
    },
    {
        "name": "Togedemaru",
        "gender": 0.5,
        "family": 777,
        "abilities":
        {
            "0": "Sturdy",
            "1": "Iron Barbs",
            "2": "Lightning Rod"
        }
    },
    {
        "name": "Mimikyu",
        "gender": 0.5,
        "family": 778,
        "abilities":
        {
            "0": "Disguise"
        }
    },
    {
        "name": "Bruxish",
        "gender": 0.5,
        "family": 779,
        "abilities":
        {
            "0": "Wonder Skin",
            "1": "Dazzling",
            "2": "Strong Jaw"
        }
    },
    {
        "name": "Drampa",
        "gender": 0.5,
        "family": 780,
        "abilities":
        {
            "0": "Cloud Nine",
            "1": "Berserk",
            "2": "Sap Sipper"
        }
    },
    {
        "name": "Dhelmise",
        "gender": 'x',
        "family": 781,
        "abilities":
        {
            "0": "Steelworker"
        }
    },
    {
        "name": "Jangmo-o",
        "gender": 0.5,
        "family": 782,
        "abilities":
        {
            "0": "Overcoat",
            "1": "Bulletproof",
            "2": "Soundproof"
        }
    },
    {
        "name": "Hakamo-o",
        "gender": 0.5,
        "family": 782,
        "abilities":
        {
            "0": "Overcoat",
            "1": "Bulletproof",
            "2": "Soundproof"
        }
    },
    {
        "name": "Kommo-o",
        "gender": 0.5,
        "family": 782,
        "abilities":
        {
            "0": "Overcoat",
            "1": "Bulletproof",
            "2": "Soundproof"
        }
    },,,,,,,,,,,,,,,,,,,,,,,,,,
    {
        "name": "Grookey",
        "gender": 0.125,
        "family": 810,
        "abilities":
        {
            "0": "Grassy Surge",
            "1": "Overgrow"
        }
    },
    {
        "name": "Thwackey",
        "gender": 0.125,
        "family": 810,
        "abilities":
        {
            "0": "Grassy Surge",
            "1": "Overgrow"
        }
    },
    {
        "name": "Rillaboom",
        "gender": 0.125,
        "family": 810,
        "abilities":
        {
            "0": "Grassy Surge",
            "1": "Overgrow"
        }
    },
    {
        "name": "Scorbunny",
        "gender": 0.125,
        "family": 813,
        "abilities":
        {
            "0": "Libero",
            "1": "Blaze"
        }
    },
    {
        "name": "Raboot",
        "gender": 0.125,
        "family": 813,
        "abilities":
        {
            "0": "Libero",
            "1": "Blaze"
        }
    },
    {
        "name": "Cinderace",
        "gender": 0.125,
        "family": 813,
        "abilities":
        {
            "0": "Libero",
            "1": "Blaze"
        }
    },
    {
        "name": "Sobble",
        "gender": 0.125,
        "family": 816,
        "abilities":
        {
            "0": "Sniper",
            "1": "Torrent"
        }
    },
    {
        "name": "Drizzile",
        "gender": 0.125,
        "family": 816,
        "abilities":
        {
            "0": "Sniper",
            "1": "Torrent"
        }
    },
    {
        "name": "Inteleon",
        "gender": 0.125,
        "family": 816,
        "abilities":
        {
            "0": "Sniper",
            "1": "Torrent"
        }
    },
    {
        "name": "Skwovet",
        "gender": 0.5,
        "family": 819,
        "abilities":
        {
            "0": "Gluttony",
            "1": "Cheek Pouch"
        }
    },
    {
        "name": "Greedent",
        "gender": 0.5,
        "family": 819,
        "abilities":
        {
            "0": "Gluttony",
            "1": "Cheek Pouch"
        }
    },
    {
        "name": "Rookidee",
        "gender": 0.5,
        "family": 821,
        "abilities":
        {
            "0": "Big Pecks",
            "1": "Keen Eye",
            "2": "Unnerve"
        }
    },
    {
        "name": "Corvisquire",
        "gender": 0.5,
        "family": 821,
        "abilities":
        {
            "0": "Big Pecks",
            "1": "Keen Eye",
            "2": "Unnerve"
        }
    },
    {
        "name": "Corviknight",
        "gender": 0.5,
        "family": 821,
        "abilities":
        {
            "0": "Mirror Armor",
            "1": "Pressure",
            "2": "Unnerve"
        }
    },
    {
        "name": "Blipbug",
        "gender": 0.5,
        "family": 824,
        "abilities":
        {
            "0": "Telepathy",
            "1": "Swarm",
            "2": "Compound Eyes"
        }
    },
    {
        "name": "Dottler",
        "gender": 0.5,
        "family": 824,
        "abilities":
        {
            "0": "Telepathy",
            "1": "Swarm",
            "2": "Compound Eyes"
        }
    },
    {
        "name": "Orbeetle",
        "gender": 0.5,
        "family": 824,
        "abilities":
        {
            "0": "Telepathy",
            "1": "Swarm",
            "2": "Frisk"
        }
    },
    {
        "name": "Nickit",
        "gender": 0.5,
        "family": 827,
        "abilities":
        {
            "0": "Stakeout",
            "1": "Run Away",
            "2": "Unburden"
        }
    },
    {
        "name": "Thievul",
        "gender": 0.5,
        "family": 827,
        "abilities":
        {
            "0": "Stakeout",
            "1": "Run Away",
            "2": "Unburden"
        }
    },
    {
        "name": "Gossifleur",
        "gender": 0.5,
        "family": 829,
        "abilities":
        {
            "0": "Effect Spore",
            "1": "Cotton Down",
            "2": "Regenerator"
        }
    },
    {
        "name": "Eldegoss",
        "gender": 0.5,
        "family": 829,
        "abilities":
        {
            "0": "Effect Spore",
            "1": "Cotton Down",
            "2": "Regenerator"
        }
    },
    {
        "name": "Wooloo",
        "gender": 0.5,
        "family": 831,
        "abilities":
        {
            "0": "Bulletproof",
            "1": "Fluffy",
            "2": "Run Away"
        }
    },
    {
        "name": "Dubwool",
        "gender": 0.5,
        "family": 831,
        "abilities":
        {
            "0": "Bulletproof",
            "1": "Fluffy",
            "2": "Steadfast"
        }
    },
    {
        "name": "Chewtle",
        "gender": 0.5,
        "family": 833,
        "abilities":
        {
            "0": "Swift Swim",
            "1": "Strong Jaw",
            "2": "Shell Armor"
        }
    },
    {
        "name": "Drednaw",
        "gender": 0.5,
        "family": 833,
        "abilities":
        {
            "0": "Swift Swim",
            "1": "Strong Jaw",
            "2": "Shell Armor"
        }
    },
    {
        "name": "Yamper",
        "gender": 0.5,
        "family": 835,
        "abilities":
        {
            "0": "Rattled",
            "1": "Ball Fetch"
        }
    },
    {
        "name": "Boltund",
        "gender": 0.5,
        "family": 835,
        "abilities":
        {
            "0": "Competitive",
            "1": "Strong Jaw"
        }
    },
    {
        "name": "Rolycoly",
        "gender": 0.5,
        "family": 837,
        "abilities":
        {
            "0": "Flash Fire",
            "1": "Steam Engine",
            "2": "Heatproof"
        }
    },
    {
        "name": "Carkol",
        "gender": 0.5,
        "family": 837,
        "abilities":
        {
            "0": "Flash Fire",
            "1": "Flame Body",
            "2": "Steam Engine"
        }
    },
    {
        "name": "Coalossal",
        "gender": 0.5,
        "family": 837,
        "abilities":
        {
            "0": "Flash Fire",
            "1": "Steam Engine",
            "2": "Flame Body"
        }
    },
    {
        "name": "Applin",
        "gender": 0.5,
        "family": 840,
        "abilities":
        {
            "0": "Bulletproof",
            "1": "Ripen",
            "2": "Gluttony"
        }
    },
    {
        "name": "Flapple",
        "gender": 0.5,
        "family": 840,
        "abilities":
        {
            "0": "Hustle",
            "1": "Ripen",
            "2": "Gluttony"
        }
    },
    {
        "name": "Appletun",
        "gender": 0.5,
        "family": 840,
        "abilities":
        {
            "0": "Thick Fat",
            "1": "Ripen",
            "2": "Gluttony"
        }
    },
    {
        "name": "Silicobra",
        "gender": 0.5,
        "family": 843,
        "abilities":
        {
            "0": "Sand Veil",
            "1": "Sand Spit",
            "2": "Shed Skin"
        }
    },
    {
        "name": "Sandaconda",
        "gender": 0.5,
        "family": 843,
        "abilities":
        {
            "0": "Sand Veil",
            "1": "Sand Spit",
            "2": "Shed Skin"
        }
    },
    {
        "name": "Cramorant",
        "gender": 0.5,
        "family": 845,
        "abilities":
        {
            "0": "Gulp Missile"
        }
    },
    {
        "name": "Arrokuda",
        "gender": 0.5,
        "family": 846,
        "abilities":
        {
            "0": "Propeller Tail",
            "1": "Swift Swim"
        }
    },
    {
        "name": "Barraskewda",
        "gender": 0.5,
        "family": 847,
        "abilities":
        {
            "0": "Propeller Tail",
            "1": "Swift Swim"
        }
    },
    {
        "name": "Toxel",
        "gender": 0.5,
        "family": 848,
        "breeds": "NO",
        "abilities":
        {
            "0": "Klutz",
            "1": "Rattled",
            "2": "Static"
        }
    },
    {
        "name": "Toxtricity",
        "gender": 0.5,
        "family": 848,
        "abilities":
        {
            "0": "Technician",
            "1": "Punk Rock",
            "2": "Plus/Minus"
        }
    },
    {
        "name": "Sizzlipede",
        "gender": 0.5,
        "family": 850,
        "abilities":
        {
            "0": "Flame Body",
            "1": "Flash",
            "2": "Fire"
        }
    },
    {
        "name": "Centiskorch",
        "gender": 0.5,
        "family": 850,
        "abilities":
        {
            "0": "Flame Body",
            "1": "Flash Fire",
            "2": "White Smoke"
        }
    },
    {
        "name": "Clobbopus",
        "gender": 0.5,
        "family": 852,
        "abilities":
        {
            "0": "Technician",
            "1": "Limber"
        }
    },
    {
        "name": "Grapploct",
        "gender": 0.5,
        "family": 852,
        "abilities":
        {
            "0": "Technician",
            "1": "Limber"
        }
    },
    {
        "name": "Sinistea",
        "gender": 'x',
        "family": 854,
        "abilities":
        {
            "0": "Cursed Body",
            "1": "Weak Armor"
        }
    },
    {
        "name": "Polteageist",
        "gender": 'x',
        "family": 854,
        "abilities":
        {
            "0": "Cursed Body",
            "1": "Weak Armor"
        }
    },
    {
        "name": "Hatenna",
        "gender": 1.0,
        "family": 856,
        "abilities":
        {
            "0": "Magic Bounce",
            "1": "Healer",
            "2": "Anticipation"
        }
    },
    {
        "name": "Hattrem",
        "gender": 1.0,
        "family": 856,
        "abilities":
        {
            "0": "Magic Bounce",
            "1": "Healer",
            "2": "Anticipation"
        }
    },
    {
        "name": "Hatterene",
        "gender": 1.0,
        "family": 856,
        "abilities":
        {
            "0": "Magic Bounce",
            "1": "Healer",
            "2": "Anticipation"
        }
    },
    {
        "name": "Impidimp",
        "gender": 0.0,
        "family": 859,
        "abilities":
        {
            "0": "Pickpocket",
            "1": "Prankster",
            "2": "Frisk"
        }
    },
    {
        "name": "Morgrem",
        "gender": 0.0,
        "family": 859,
        "abilities":
        {
            "0": "Pickpocket",
            "1": "Prankster",
            "2": "Frisk"
        }
    },
    {
        "name": "Grimmsnarl",
        "gender": 0.0,
        "family": 859,
        "abilities":
        {
            "0": "Pickpocket",
            "1": "Prankster",
            "2": "Frisk"
        }
    },
    {
        "name": "Obstagoon",
        "gender": 0.5,
        "family": 263,
        "abilities":
        {
            "0": "Defiant",
            "1": "Reckless",
            "2": "Guts"
        }
    },
    {
        "name": "Perrserker",
        "gender": 0.5,
        "family": 52,
        "abilities":
        {
            "0": "Steely Spirit",
            "1": "Battle Armor",
            "2": "Tough Claws"
        }
    },
    {
        "name": "Cursola",
        "gender": 0.75,
        "family": 222,
        "abilities":
        {
            "0": "Perish Body",
            "1": "Weak Armor"
        }
    },
    {
        "name": "Sirfetch'd",
        "gender": 0.5,
        "family": 83,
        "abilities":
        {
            "0": "Scrappy",
            "1": "Steadfast"
        }
    },
    {
        "name": "Mr. Rime",
        "gender": 0.5,
        "family": 439,
        "abilities":
        {
            "0": "Ice Body",
            "1": "Tangled Body",
            "2": "Screen Cleaner"
        }
    },
    {
        "name": "Runerigus",
        "gender": 0.5,
        "family": 562,
        "abilities":
        {
            "0": "Wandering Spirit"
        }
    },
    {
        "name": "Milcery",
        "gender": 1.0,
        "family": 868,
        "abilities":
        {
            "0": "Aroma Veil",
            "1": "Sweet Veil"
        }
    },
    {
        "name": "Alcremie",
        "gender": 1.0,
        "family": 869,
        "abilities":
        {
            "0": "Aroma Veil",
            "1": "Sweet Veil"
        }
    },
    {
        "name": "Falinks",
        "gender": 'x',
        "family": 870,
        "abilities":
        {
            "0": "Defiant",
            "1": "Battle Armor"
        }
    },
    {
        "name": "Pincurchin",
        "gender": 0.5,
        "family": 871,
        "abilities":
        {
            "0": "Electric Surge",
            "1": "Lightning Rod"
        }
    },
    {
        "name": "Snom",
        "gender": 0.5,
        "family": 872,
        "abilities":
        {
            "0": "Ice Scales",
            "1": "Shield Dust"
        }
    },
    {
        "name": "Frosmoth",
        "gender": 0.5,
        "family": 872,
        "abilities":
        {
            "0": "Ice Scales",
            "1": "Shield Dust"
        }
    },
    {
        "name": "Stonjourner",
        "gender": 0.5,
        "family": 874,
        "abilities":
        {
            "0": "Power Spot"
        }
    },
    {
        "name": "Eiscue",
        "gender": 0.5,
        "family": 875,
        "abilities":
        {
            "0": "Ice Face"
        }
    },
    {
        "name": "Indeedee",
        "gender": 0.5,
        "family": 876,
        "abilities":
        {
            "0": "Psychic Surge",
            "1": "Inner Focus/Own Tempo",
            "2": "Synchronize"
        }
    },
    {
        "name": "Morpeko",
        "gender": 0.5,
        "family": 877,
        "abilities":
        {
            "0": "Hunger Switch"
        }
    },
    {
        "name": "Cufant",
        "gender": 0.5,
        "family": 878,
        "abilities":
        {
            "0": "Heavy Metal",
            "1": "Sheer Force"
        }
    },
    {
        "name": "Copperajah",
        "gender": 0.5,
        "family": 878,
        "abilities":
        {
            "0": "Heavy Metal",
            "1": "Sheer Force"
        }
    },,,,,
    {
        "name": "Duraludon",
        "gender": 0.5,
        "family": 884,
        "abilities":
        {
            "0": "Stalwart",
            "1": "Light Metal",
            "2": "Heavy Metal"
        }
    },
    {
        "name": "Dreepy",
        "gender": 0.5,
        "family": 885,
        "abilities":
        {
            "0": "Cursed Body",
            "1": "Clear Body",
            "2": "Infiltrator"
        }
    },
    {
        "name": "Drakloak",
        "gender": 0.5,
        "family": 885,
        "abilities":
        {
            "0": "Cursed Body",
            "1": "Clear Body",
            "2": "Infiltrator"
        }
    },
    {
        "name": "Dragapult",
        "gender": 0.5,
        "family": 885,
        "abilities":
        {
            "0": "Cursed Body",
            "1": "Clear Body",
            "2": "Infiltrator"
        }
    }];
