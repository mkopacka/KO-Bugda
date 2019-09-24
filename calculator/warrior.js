function calculate_ap_warrior() {
    // AP of weapon in right hand
    var rightWeaponAp = !window.isNullOrUndefined(window.equiped.rightHand) ? +window.equiped.rightHand.itemStat.attackPower : 0;
    // AP of weapon in left hand
    var leftWeaponAp = !window.isNullOrUndefined(window.equiped.leftHand) ? +window.equiped.leftHand.itemStat.attackPower : 0;

    // Check character level. (84 means 83/1, 85 means 83/2 etc.) - Level 83 is max
    var levelDropDown = $("#level").data('kendoDropDownList');
    if (!levelDropDown) return 0;

    var lvl = +levelDropDown.value();
    if (lvl > 83)
        lvl = 83;

    // Base strength in stat. For example 255(+150) means 255 base strength
    var baseStr = +window.statPoints.str;
    // Bonus strength. For example 255(+150) means 150 as bonus strength. It is number which will return sum of all those objects
    var bonusStr = +window.statPoints.bonusStr + +window.statPoints.rebithStr +
        +window.setBonusKrowaz.str +
        +window.setBonusMithril.str +
        +window.setBonusSecret.str +
        +window.setBonusHolyKnight.str +
        +window.achievement.str +
        +window.setBonusRosetta.str;

    // Check if wolf or some other buff is active
    var isWolf = $("#wolfDropDown").data('kendoMobileSwitch').value();
    var isEnchant = $("#wepDropDown").data('kendoMobileSwitch').value();
    var isRedPotion = $("#redPotionOnOff").data('kendoMobileSwitch').value();
    var isBerserker = $("#berserkerBuffDropDown").data('kendoMobileSwitch').value();
    var isMassive = $("#massiveOnOff").data('kendoMobileSwitch').value();
    var isSubside = $("#subsideOnOff").data('kendoMobileSwitch').value();
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

    // Base AP based on strength
    var baseap = 0;
    if (baseStr > 150) baseap = baseStr - 150;
    if (baseStr === 160) baseap--;

    // total value of dexterity
    var totalStr = baseStr + bonusStr;

    // find coefficient value based on level (coefficientId) and type of weapon (method is in coefficients.js)
    var coeff = getWarriorCoefficients(coefficientId, 'axe');

    // Check if "Weapon Enchant Scroll" is active. It adds 5 AP to the weapon AP
    if (isEnchant) {
        rightWeaponAp += 5;
    }

    // Check your weapon damage
    var wep = rightWeaponAp;

    // Left weapon AP is divided by 2
    wep += Math.floor(leftWeaponAp * 0.5);

    // 3 is minimum
    if (wep < 3) wep = 3;

    // Now need sum bonuses (like wolf, tattoo, pathos gloves etc)
    var bonus = 0;

    bonus += leftPathos;
    bonus += rightPathos;
    bonus += tattoo;
    bonus += wings;
    bonus += emblem;

    if (isMassive || isSubside) {
        bonus -= 20;
    } else {
        if (isWolf)
            bonus += 20;
        if (isCommanderDetermination)
            bonus += 30;
    }

    if (isRedPotion)
        bonus += 10;

    if (isBerserker)
        bonus += 20;

    // Make multiplication coefficient from bonus value
    var totalBonus = (bonus + 100) / 100;

    // And use above values to calculate results
    var result = Math.floor(Math.floor((0.005 * wep * (totalStr + 40)) + (coeff * wep * lvl * totalStr) + 3) * totalBonus) + baseap;

    // With "Weapon enchant scroll" it adds 1 AP to the result in the end
    if (isEnchant)
        result += 1;

    result += window.achievement.ap;

    return result;
}
