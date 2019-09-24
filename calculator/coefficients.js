var ROGUE_COEFFICIENTS = [
    [{ name: "dagger", value: 0.00015 }, { name: "bow", value: 0.00015 }, { name: "hp", value: 0.0005 }, { name: "mana", value: 0.0015 }], // Level 1-9
    [{ name: "dagger", value: 0.00025 }, { name: "bow", value: 0.00035 }, { name: "hp", value: 0.0015 }, { name: "mana", value: 0.003 }], // Level 10-59
    [{ name: "dagger", value: 0.00032 }, { name: "bow", value: 0.00038 }, { name: "hp", value: 0.0015 }, { name: "mana", value: 0.003 }]  // Level 60+
];

var WARRIOR_COEFFICIENTS = [
    [{ name: "axe", value: 0.00013 }, { name: "club", value: 0.00013 }, { name: "spear", value: 0.00013 }, { name: "sword", value: 0.00013 }, { name: "hp", value: 0.0015 }, { name: "mana", value: 0.0015 }], // Level 1-9
    [{ name: "axe", value: 0.00025 }, { name: "club", value: 0.00025 }, { name: "spear", value: 0.00025 }, { name: "sword", value: 0.00025 }, { name: "hp", value: 0.003 }, { name: "mana", value: 0.003 }], // Level 10-59
    [{ name: "axe", value: 0.00032 }, { name: "club", value: 0.00032 }, { name: "spear", value: 0.00032 }, { name: "sword", value: 0.00032 }, { name: "hp", value: 0.003 }, { name: "mana", value: 0.003 }]  // Level 60+
];

var PRIEST_COEFFICIENTS = [
    [{ name: "club", value: 0.00005 }, { name: "staff", value: 0.0001 }, { name: "sword", value: 0 }, { name: "spear", value: 0 }, { name: "priest weapon", value: 0.00005 }, { name: "hp", value: 0.001 }, { name: "mana", value: 0.0015 }], // Level 1-9
    [{ name: "club", value: 0.0002 }, { name: "staff", value: 0.0001 }, { name: "sword", value: 0 }, { name: "spear", value: 0 }, { name: "priest weapon", value: 0.0002 }, { name: "hp", value: 0.0012 }, { name: "mana", value: 0.0015 }], // Level 10-59
    [{ name: "club", value: 0.00025 }, { name: "staff", value: 0.0001 }, { name: "sword", value: 0.00025 }, { name: "spear", value: 0 }, { name: "priest weapon", value: 0.00025 }, { name: "hp", value: 0.0015 }, { name: "mana", value: 0.0015 }]  // Level 60+
];

//hp coefficients!!
//mana coefficient!!
var KURIAN_COEFFICIENTS = [
    [{ name: "sword", value: 0.0001 }, { name: "club", value: 0.0001 }, { name: "spear", value: 0.0001 }, { name: "axe", value: 0.0001 }, { name: "hp", value: 0.0015 }, { name: "mana", value: 0.0005 }], // Level 1-9
    [{ name: "sword", value: 0.00020 }, { name: "club", value: 0.00020 }, { name: "spear", value: 0.00020 }, { name: "axe", value: 0.00020 }, { name: "hp", value: 0.003 }, { name: "mana", value: 0.0005 }], // Level 10-59
    [{ name: "sword", value: 0.00020 }, { name: "club", value: 0.00020 }, { name: "spear", value: 0.00020 }, { name: "axe", value: 0.00020 }, { name: "hp", value: 0.002 }, { name: "mana", value: 0.0032 }]  // Level 60+
];

var MAGE_COEFFICIENTS = [
    [{ name: "staff", value: 0.0001 }, { name: "hp", value: 0.0004 }, { name: "mana", value: 0.0015 }], // Level 1-9
    [{ name: "staff", value: 0.00015 }, { name: "hp", value: 0.0008 }, { name: "mana", value: 0.0015 }], // Level 10-59
    [{ name: "staff", value: 0.00015 }, { name: "hp", value: 0.001 }, { name: "mana", value: 0.0018 }]  // Level 60+
];

function getRogueCoefficients(coefficientId, coefficientName)
{
    var coeff = ROGUE_COEFFICIENTS[coefficientId].filter(function (obj) {
        return obj.name == coefficientName;
    })[0].value;

    return coeff;
}

function getWarriorCoefficients(coefficientId, coefficientName) {
    var coeff = WARRIOR_COEFFICIENTS[coefficientId].filter(function (obj) {
        return obj.name == coefficientName;
    })[0].value;

    return coeff;
}

function getMageCoefficients(coefficientId, coefficientName) {
    var coeff = MAGE_COEFFICIENTS[coefficientId].filter(function (obj) {
        return obj.name == coefficientName;
    })[0].value;

    return coeff;
}

function getKurianCoefficients(coefficientId, coefficientName) {
    var coeff = KURIAN_COEFFICIENTS[coefficientId].filter(function (obj) {
        return obj.name == coefficientName;
    })[0].value;

    return coeff;
}

function getPriestCoefficients(coefficientId, coefficientName) {
    var coeff = PRIEST_COEFFICIENTS[coefficientId].filter(function (obj) {
        return obj.name == coefficientName;
    })[0].value;

    return coeff;
}
