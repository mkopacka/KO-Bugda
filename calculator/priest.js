function calculate_ap_priest(isIntBp, weaponNameRight) {
    // AP of weapon in right hand
    var rightWeaponAp = !window.isNullOrUndefined(window.equiped.rightHand) ? +window.equiped.rightHand.itemStat.attackPower : 0;

    // Check character level. (84 means 83/1, 85 means 83/2 etc.) - Level 83 is max
    var levelDropDown = $("#level").data('kendoDropDownList');
    if (!levelDropDown) return 0;

    var lvl = +levelDropDown.value();
    if (lvl > 83)
        lvl = 83;

    // Base value in stat. For example 255(+150) means 255 base stat. 
    // For str BP it is strength and for int BP it is intelligence
    var baseStat = 0;
    
    // Bonus stat. For example 255(+150) means 150 as bonus stat. It is number which will return sum of all those objects
    var bonusStat = 0;
    
    if (isIntBp) {
        baseStat = +window.statPoints.int;
        bonusStat = +window.statPoints.bonusInt + +window.statPoints.rebithInt +
            +window.setBonusKrowaz.int +
            +window.setBonusMithril.int +
            +window.setBonusSecret.int +
            +window.setBonusHolyKnight.int +
            +window.achievement.int + 
            +window.setBonusRosetta.int;
    } else {
        baseStat = +window.statPoints.str;
        bonusStat = +window.statPoints.bonusStr + +window.statPoints.rebithStr +
            +window.setBonusKrowaz.str +
            +window.setBonusMithril.str +
            +window.setBonusSecret.str +
            +window.setBonusHolyKnight.str +
            +window.achievement.str + 
            +window.setBonusRosetta.str;
    }

    // Check if wolf or some other buff is active
    var isWolf = $("#wolfDropDown").data('kendoMobileSwitch').value();
    var isBook = $("#priestBookDropDown").data('kendoMobileSwitch').value();
    var isEnchant = $("#wepDropDown").data('kendoMobileSwitch').value();
    var isRedPotion = $("#redPotionOnOff").data('kendoMobileSwitch').value();
    var isCommanderDetermination = $("#commanderDeterminationBuffDropDown").data('kendoMobileSwitch').value();

    var leftPathos = !window.isNullOrUndefined(window.equiped.leftPathos) ? window.equiped.leftPathos.itemStat.damagePercentage : 0;
    var rightPathos = !window.isNullOrUndefined(window.equiped.rightPathos) ? window.equiped.rightPathos.itemStat.damagePercentage : 0;
    var tattoo = !window.isNullOrUndefined(window.equiped.tattoo) ? window.equiped.tattoo.itemStat.damagePercentage : 0;
    var wings = !window.isNullOrUndefined(window.equiped.wings) ? window.equiped.wings.itemStat.damagePercentage : 0;
    var emblem = !window.isNullOrUndefined(window.equiped.emblem) ? window.equiped.emblem.itemStat.damagePercentage : 0;

    // coefficient id is based on level. 1-9 = 0, 10-59 = 1, 60+= 2
    var coefficientId = 0;
    if (lvl >= 10) coefficientId++;
    if (lvl >= 60) coefficientId++;

    // Base AP, based on str or int value
    var baseap = 0;
    if (baseStat > 150) baseap = baseStat - 150;
    if (baseStat === 160) baseap--;

    // total value of base stat
    var totalStat = baseStat + bonusStat;

    // find coefficient value based on level (coefficientId) and type of weapon (method is in coefficients.js)
    var coeff = getPriestCoefficients(coefficientId, 'sword');
    if (weaponNameRight === 'Club - 1H' || weaponNameRight === 'Club - 2H') {
        coeff = getPriestCoefficients(coefficientId, 'club');
    }
    
    // get weapon strength
    var wep = rightWeaponAp;

    // Check if "Weapon Enchant Scroll" is active. It adds 5 AP to the weapon AP
    if (isEnchant) {
        wep += 5;
    }

    // 3 is minimum
    if (wep < 3) wep = 3;

    // Now need sum bonuses (like wolf, tattoo, pathos gloves etc)
    var bonus = 0;
    bonus += leftPathos;
    bonus += rightPathos;
    bonus += tattoo;
    bonus += wings;
    bonus += emblem;

    if (isWolf)
        bonus += 20;

    if (isCommanderDetermination)
        bonus += 30;

    if (isBook)
        bonus += 50;

    if (isRedPotion)
        bonus += 10;

    // Make multiplication coefficient from bonus value
    var totalBonus = (bonus + 100) / 100;

    // And use above values to calculate results
    var result = Math.floor(Math.floor((0.005 * wep * (totalStat + 40)) + (coeff * wep * lvl * totalStat) + 3) * totalBonus) + baseap;

    // With "Weapon enchant scroll" it adds 1 AP to the result in the end
    if (isEnchant) {
        result += 1;
    }
    
    result += window.achievement.ap;

    return result;
}
