function calculate_ac() {
    var isWarrior = $("#class").data('kendoDropDownList').value() === 'Warrior';
    var isKurian = $("#class").data('kendoDropDownList').value() === 'Kurian';
    
    var isBluePotion = $("#bluePotionOnOff").data('kendoMobileSwitch').value();
    var isBerserker = $("#berserkerBuffDropDown").data('kendoMobileSwitch').value();
    var isGemOfDefense = $("#gemDefDropDown").data('kendoMobileSwitch').value();

    var levelDropDown = $("#level").data('kendoDropDownList');
    if (!levelDropDown) return 0;

    var lvl = +levelDropDown.value();
    if (lvl > 83)
        lvl = 83;

    var isMalice = $("#maliceOnOff").data('kendoMobileSwitch').value();
    var isTorment = $("#tormentOnOff").data('kendoMobileSwitch').value();

    window.resultCalc.ac = lvl;

    if (!isKurian) {
        if (window.statPoints.hp > 100)
            window.resultCalc.ac += (window.statPoints.hp - 100);
    }

    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.rightHand) ? window.equiped.rightHand.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.leftHand) ? window.equiped.leftHand.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.helm) ? window.equiped.helm.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.pauldron) ? window.equiped.pauldron.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.pads) ? window.equiped.pads.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.boots) ? window.equiped.boots.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.gauntlets) ? window.equiped.gauntlets.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.rightEarring) ? window.equiped.rightEarring.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.leftEarring) ? window.equiped.leftEarring.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.necklace) ? window.equiped.necklace.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.belt) ? window.equiped.belt.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.rightRing) ? window.equiped.rightRing.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.leftRing) ? window.equiped.leftRing.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.rightPathos) ? window.equiped.rightPathos.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.leftPathos) ? window.equiped.leftPathos.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.valkirieHelm) ? window.equiped.valkirieHelm.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.valkiriePauldron) ? window.equiped.valkiriePauldron.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.wings) ? window.equiped.wings.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.tattoo) ? window.equiped.tattoo.itemStat.defense : 0;
    window.resultCalc.ac += !window.isNullOrUndefined(window.equiped.emblem) ? window.equiped.emblem.itemStat.defense : 0;
    window.resultCalc.ac += window.setBonusKrowaz.ac;
    window.resultCalc.ac += window.setBonusKrowazKurian.ac;
    window.resultCalc.ac += window.setBonusHolyKnight.ac;
    window.resultCalc.ac += window.setBonusHolyKnightKurian.ac;
    window.resultCalc.ac += window.setBonusMithril.ac;
    window.resultCalc.ac += window.setBonusSecret.ac;
    window.resultCalc.ac += window.setBonusRosetta.ac;

    if (isBluePotion) {
        window.resultCalc.ac += 60;
    }

    if (isGemOfDefense) {
        window.resultCalc.ac += 25;
    }

    if (isWarrior) {
        var div = 2;
        if (!window.isNullOrUndefined(window.equiped.leftHand) && window.equiped.leftHand.item.ItemTypeId === 21) {
            div = 1;
        }

        var passiveWarriorDefense = $("#warriorDefenseDropDown").data('kendoDropDownList');

        var acpercent = 0;
        if (passiveWarriorDefense) {
            var passiveValue = +passiveWarriorDefense.value();

            if (passiveValue === 1) {
                acpercent = 0.20;
            }
            else if (passiveValue === 2) {
                acpercent = 0.30;
            }
            else if (passiveValue === 3) {
                acpercent = 0.40;
            }
            else if (passiveValue === 4) {
                acpercent = 0.50;
            }
            else if (passiveValue === 5) {
                acpercent = 0.60;
            }
            else if (passiveValue === 6) {
                acpercent = 0.80;
            }
        }

        if (acpercent > 0) {
            var increase = 0;
            if (window.statPoints.hp > 100) increase += window.statPoints.hp - 100;
            window.resultCalc.ac += Math.floor((lvl * acpercent / div) + ((window.resultCalc.ac - lvl - increase) * acpercent / div));
        }

        if (isBerserker) {
            window.resultCalc.ac -= 300;
        }
    }

    // Kurian calculation doesn't work correct. I didn't manage to get correct equations, unforutely.
    if (isKurian) {
        var passiveKurianDefense = $("#kurianDefenseDropDown").data('kendoDropDownList');

        var acpercentKurian = 0;
        if (passiveKurianDefense) {
            var passiveValueKurian = +passiveKurianDefense.value();

            if (passiveValueKurian === 1) {
                acpercentKurian = 0.05;
            }
            else if (passiveValueKurian === 2) {
                acpercentKurian = 0.08;
            }
            else if (passiveValueKurian === 3) {
                acpercentKurian = 0.10;
            }
            else if (passiveValueKurian === 4) {
                acpercentKurian = 0.13;
            }
            else if (passiveValueKurian === 5) {
                acpercentKurian = 0.15;
            }
            else if (passiveValueKurian === 6) {
                acpercentKurian = 0.20;
            }
        }

        var bonusAcKurian = 0;
        if (acpercentKurian > 0) {
            //var increaseKurian = 0;
            //if (window.statPoints.hp > 100) increaseKurian += window.statPoints.hp - 100;

            bonusAcKurian = Math.floor((lvl * acpercentKurian) + ((window.resultCalc.ac - lvl/* - increaseKurian*/) * acpercentKurian));
        }

        // if (lvl < 60) {
        window.resultCalc.ac = Math.floor(window.resultCalc.ac * 0.8 + bonusAcKurian);
        /* } else {
             window.resultCalc.ac = Math.floor(window.resultCalc.ac * 1.15 + bonusAcKurian);
         }*/
    }

    var wings = !window.isNullOrUndefined(window.equiped.wings) ? window.equiped.wings.itemStat.defensePercentage : 0;

    if (wings > 0) {
        var totalAcBonus = (wings + 100) / 100;

        window.resultCalc.ac *= totalAcBonus;

        window.resultCalc.ac = Math.floor(window.resultCalc.ac);
    }

    if (!isMalice && !isTorment) {
        var acBuffId = +$("#acBuffDropDown").data('kendoDropDownList').value();
        if (acBuffId === 2)
            window.resultCalc.ac += 300;
        else if (acBuffId === 3)
            window.resultCalc.ac += 350;
        else if (acBuffId === 4)
            window.resultCalc.ac += 200;

        var isFrozenArmor = $("#mageFrozenArmorDropDown").data('kendoMobileSwitch').value();
        var isFrozenShell = $("#mageFrozenShellDropDown").data('kendoMobileSwitch').value();
        var isIceBarrier = $("#mageIceBarrierDropDown").data('kendoMobileSwitch').value();

        if (isFrozenArmor) {
            window.resultCalc.ac += 60;
        }
        else if (isFrozenShell) {
            window.resultCalc.ac += 120;
        }
        else if (isIceBarrier) {
            window.resultCalc.ac += 180;
        }
    }

    var isArmorEnchantScroll = $("#aesDropDown").data('kendoMobileSwitch').value();
    if (isArmorEnchantScroll)
        window.resultCalc.ac += 31;

    window.resultCalc.ac += window.achievement.ac;

    if (isMalice || isTorment) {
        var multiplier = isMalice ? 0.75 : 0.7;
        window.resultCalc.ac = Math.ceil(window.resultCalc.ac * multiplier);
    }

    return window.resultCalc;
}
