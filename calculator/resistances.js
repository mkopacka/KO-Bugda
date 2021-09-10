function calculate_resist() {
    var isWarrior = $("#class").data('kendoDropDownList').value() === 'Warrior';
    var isRogue = $("#class").data('kendoDropDownList').value() === 'Rogue';
    var isKurian = $("#class").data('kendoDropDownList').value() === 'Kurian';

    var baseResists = 0;
    if (window.statPoints.int > 101)
        baseResists = Math.floor((window.statPoints.int - 100) / 2);

    window.resultCalc.resistanceFlame = baseResists;
    window.resultCalc.resistanceGlacier = baseResists;
    window.resultCalc.resistanceLighting = baseResists;
    window.resultCalc.resistancePoison = baseResists;
    window.resultCalc.resistanceDark = baseResists;
    window.resultCalc.resistanceMagic = baseResists;

    if (isWarrior) {
        var div = 2;
        if (!window.isNullOrUndefined(window.equiped.leftHand) && window.equiped.leftHand.item.ItemTypeId === 21) {
            div = 1;
        }

        var passiveWarriorDefense = $("#warriorResistDropDown").data('kendoDropDownList');

        var resBonus = 0;
        if (passiveWarriorDefense) {
            var passiveValue = +passiveWarriorDefense.value();

            if (passiveValue === 1) {
                resBonus = 30 / div;
            }
            else if (passiveValue === 2) {
                resBonus = 60 / div;
            }
            else if (passiveValue === 3) {
                resBonus = 90 / div;
            }
        }

        window.resultCalc.resistanceFlame += resBonus;
        window.resultCalc.resistanceGlacier += resBonus;
        window.resultCalc.resistanceLighting += resBonus;
        window.resultCalc.resistancePoison += resBonus;
        window.resultCalc.resistanceDark += resBonus;
        window.resultCalc.resistanceMagic += resBonus;
    }

    if (isRogue) {
        var isMagicShield = $("#magicShieldBuffDropDown").data('kendoMobileSwitch').value();

        if (isMagicShield) {
            window.resultCalc.resistanceFlame += 120;
            window.resultCalc.resistanceGlacier += 120;
            window.resultCalc.resistanceLighting += 120;
            window.resultCalc.resistancePoison += 120;
            window.resultCalc.resistanceDark += 120;
            window.resultCalc.resistanceMagic += 120;
        }
    }

    if (isKurian) {
        var passiveKurianResist = $("#kurianResistDropDown").data('kendoDropDownList');

        var resBonusKurian = 0;
        if (passiveKurianResist) {
            var passiveValueKurian = +passiveKurianResist.value();

            if (passiveValueKurian === 1) {
                resBonusKurian = 15;
            }
            else if (passiveValueKurian === 2) {
                resBonusKurian = 30;
            }
            else if (passiveValueKurian === 3) {
                resBonusKurian = 45;
            }
        }

        window.resultCalc.resistanceFlame += resBonusKurian;
        window.resultCalc.resistanceGlacier += resBonusKurian;
        window.resultCalc.resistanceLighting += resBonusKurian;
        window.resultCalc.resistancePoison += resBonusKurian;
        window.resultCalc.resistanceDark += resBonusKurian;
        window.resultCalc.resistanceMagic += resBonusKurian;
    }

    var isLr = $("#mageLrDropDown").data('kendoMobileSwitch').value();
    var isIr = $("#mageIrDropDown").data('kendoMobileSwitch').value();
    var isFr = $("#mageFrDropDown").data('kendoMobileSwitch').value();

    //FR
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.rightHand) ? zeroIfNullOrUndefined(window.equiped.rightHand.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.leftHand) ? zeroIfNullOrUndefined(window.equiped.leftHand.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.helm) ? zeroIfNullOrUndefined(window.equiped.helm.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.pauldron) ? zeroIfNullOrUndefined(window.equiped.pauldron.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.pads) ? zeroIfNullOrUndefined(window.equiped.pads.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.boots) ? zeroIfNullOrUndefined(window.equiped.boots.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.gauntlets) ? zeroIfNullOrUndefined(window.equiped.gauntlets.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.rightEarring) ? zeroIfNullOrUndefined(window.equiped.rightEarring.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.leftEarring) ? zeroIfNullOrUndefined(window.equiped.leftEarring.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.necklace) ? zeroIfNullOrUndefined(window.equiped.necklace.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.belt) ? zeroIfNullOrUndefined(window.equiped.belt.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.rightRing) ? zeroIfNullOrUndefined(window.equiped.rightRing.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.leftRing) ? zeroIfNullOrUndefined(window.equiped.leftRing.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.rightPathos) ? zeroIfNullOrUndefined(window.equiped.rightPathos.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.leftPathos) ? zeroIfNullOrUndefined(window.equiped.leftPathos.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.valkirieHelm) ? zeroIfNullOrUndefined(window.equiped.valkirieHelm.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.valkiriePauldron) ? zeroIfNullOrUndefined(window.equiped.valkiriePauldron.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.wings) ? zeroIfNullOrUndefined(window.equiped.wings.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.tattoo) ? zeroIfNullOrUndefined(window.equiped.tattoo.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += !window.isNullOrUndefined(window.equiped.emblem) ? zeroIfNullOrUndefined(window.equiped.emblem.itemStat.resistanceFlame) : 0;
    window.resultCalc.resistanceFlame += window.setBonusKrowaz.flameResist;
    window.resultCalc.resistanceFlame += window.setBonusKrowazKurian.flameResist;
    window.resultCalc.resistanceFlame += window.setBonusHolyKnight.flameResist;
    window.resultCalc.resistanceFlame += window.setBonusHolyKnightKurian.flameResist;
    window.resultCalc.resistanceFlame += window.setBonusSecret.flameResist;
    window.resultCalc.resistanceFlame += window.setBonusMithril.flameResist;
    window.resultCalc.resistanceFlame += window.achievement.flameres;
    window.resultCalc.resistanceFlame += window.setBonusRosetta.flameResist;

    if (isFr) {
        window.resultCalc.resistanceFlame += 80;
    }

    //GR
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.rightHand) ? zeroIfNullOrUndefined(window.equiped.rightHand.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.leftHand) ? zeroIfNullOrUndefined(window.equiped.leftHand.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.helm) ? zeroIfNullOrUndefined(window.equiped.helm.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.pauldron) ? zeroIfNullOrUndefined(window.equiped.pauldron.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.pads) ? zeroIfNullOrUndefined(window.equiped.pads.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.boots) ? zeroIfNullOrUndefined(window.equiped.boots.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.gauntlets) ? zeroIfNullOrUndefined(window.equiped.gauntlets.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.rightEarring) ? zeroIfNullOrUndefined(window.equiped.rightEarring.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.leftEarring) ? zeroIfNullOrUndefined(window.equiped.leftEarring.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.necklace) ? zeroIfNullOrUndefined(window.equiped.necklace.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.belt) ? zeroIfNullOrUndefined(window.equiped.belt.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.rightRing) ? zeroIfNullOrUndefined(window.equiped.rightRing.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.leftRing) ? zeroIfNullOrUndefined(window.equiped.leftRing.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.rightPathos) ? zeroIfNullOrUndefined(window.equiped.rightPathos.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.leftPathos) ? zeroIfNullOrUndefined(window.equiped.leftPathos.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.valkirieHelm) ? zeroIfNullOrUndefined(window.equiped.valkirieHelm.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.valkiriePauldron) ? zeroIfNullOrUndefined(window.equiped.valkiriePauldron.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.wings) ? zeroIfNullOrUndefined(window.equiped.wings.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.tattoo) ? zeroIfNullOrUndefined(window.equiped.tattoo.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += !window.isNullOrUndefined(window.equiped.emblem) ? zeroIfNullOrUndefined(window.equiped.emblem.itemStat.resistanceGlacier) : 0;
    window.resultCalc.resistanceGlacier += window.setBonusKrowaz.glacierResist;
    window.resultCalc.resistanceGlacier += window.setBonusKrowazKurian.glacierResist;
    window.resultCalc.resistanceGlacier += window.setBonusHolyKnight.glacierResist;
    window.resultCalc.resistanceGlacier += window.setBonusHolyKnightKurian.glacierResist;
    window.resultCalc.resistanceGlacier += window.setBonusSecret.glacierResist;
    window.resultCalc.resistanceGlacier += window.setBonusMithril.glacierResist;
    window.resultCalc.resistanceGlacier += window.achievement.iceres;
    window.resultCalc.resistanceGlacier += window.setBonusRosetta.glacierResist;

    if (isIr) {
        window.resultCalc.resistanceGlacier += 80;
    }

    //LR
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.rightHand) ? zeroIfNullOrUndefined(window.equiped.rightHand.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.leftHand) ? zeroIfNullOrUndefined(window.equiped.leftHand.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.helm) ? zeroIfNullOrUndefined(window.equiped.helm.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.pauldron) ? zeroIfNullOrUndefined(window.equiped.pauldron.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.pads) ? zeroIfNullOrUndefined(window.equiped.pads.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.boots) ? zeroIfNullOrUndefined(window.equiped.boots.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.gauntlets) ? zeroIfNullOrUndefined(window.equiped.gauntlets.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.rightEarring) ? zeroIfNullOrUndefined(window.equiped.rightEarring.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.leftEarring) ? zeroIfNullOrUndefined(window.equiped.leftEarring.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.necklace) ? zeroIfNullOrUndefined(window.equiped.necklace.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.belt) ? zeroIfNullOrUndefined(window.equiped.belt.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.rightRing) ? zeroIfNullOrUndefined(window.equiped.rightRing.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.leftRing) ? zeroIfNullOrUndefined(window.equiped.leftRing.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.rightPathos) ? zeroIfNullOrUndefined(window.equiped.rightPathos.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.leftPathos) ? zeroIfNullOrUndefined(window.equiped.leftPathos.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.valkirieHelm) ? zeroIfNullOrUndefined(window.equiped.valkirieHelm.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.valkiriePauldron) ? zeroIfNullOrUndefined(window.equiped.valkiriePauldron.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.wings) ? zeroIfNullOrUndefined(window.equiped.wings.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.tattoo) ? zeroIfNullOrUndefined(window.equiped.tattoo.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += !window.isNullOrUndefined(window.equiped.emblem) ? zeroIfNullOrUndefined(window.equiped.emblem.itemStat.resistanceLighting) : 0;
    window.resultCalc.resistanceLighting += window.setBonusKrowaz.lightingResist;
    window.resultCalc.resistanceLighting += window.setBonusKrowazKurian.lightingResist;
    window.resultCalc.resistanceLighting += window.setBonusHolyKnight.lightingResist;
    window.resultCalc.resistanceLighting += window.setBonusHolyKnightKurian.lightingResist;
    window.resultCalc.resistanceLighting += window.setBonusSecret.lightingResist;
    window.resultCalc.resistanceLighting += window.setBonusMithril.lightingResist;
    window.resultCalc.resistanceLighting += window.achievement.lightingres;
    window.resultCalc.resistanceLighting += window.setBonusRosetta.lightingResist;

    if (isLr) {
        window.resultCalc.resistanceLighting += 80;
    }

    //PR
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.rightHand) ? zeroIfNullOrUndefined(window.equiped.rightHand.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.leftHand) ? zeroIfNullOrUndefined(window.equiped.leftHand.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.helm) ? zeroIfNullOrUndefined(window.equiped.helm.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.pauldron) ? zeroIfNullOrUndefined(window.equiped.pauldron.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.pads) ? zeroIfNullOrUndefined(window.equiped.pads.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.boots) ? zeroIfNullOrUndefined(window.equiped.boots.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.gauntlets) ? zeroIfNullOrUndefined(window.equiped.gauntlets.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.rightEarring) ? zeroIfNullOrUndefined(window.equiped.rightEarring.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.leftEarring) ? zeroIfNullOrUndefined(window.equiped.leftEarring.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.necklace) ? zeroIfNullOrUndefined(window.equiped.necklace.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.belt) ? zeroIfNullOrUndefined(window.equiped.belt.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.rightRing) ? zeroIfNullOrUndefined(window.equiped.rightRing.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.leftRing) ? zeroIfNullOrUndefined(window.equiped.leftRing.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.rightPathos) ? zeroIfNullOrUndefined(window.equiped.rightPathos.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.leftPathos) ? zeroIfNullOrUndefined(window.equiped.leftPathos.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.valkirieHelm) ? zeroIfNullOrUndefined(window.equiped.valkirieHelm.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.valkiriePauldron) ? zeroIfNullOrUndefined(window.equiped.valkiriePauldron.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.wings) ? zeroIfNullOrUndefined(window.equiped.wings.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.tattoo) ? zeroIfNullOrUndefined(window.equiped.tattoo.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += !window.isNullOrUndefined(window.equiped.emblem) ? zeroIfNullOrUndefined(window.equiped.emblem.itemStat.resistancePoison) : 0;
    window.resultCalc.resistancePoison += window.setBonusKrowaz.poisonResist;
    window.resultCalc.resistancePoison += window.setBonusKrowazKurian.poisonResist;
    window.resultCalc.resistancePoison += window.setBonusHolyKnight.poisonResist;
    window.resultCalc.resistancePoison += window.setBonusHolyKnightKurian.poisonResist;
    window.resultCalc.resistancePoison += window.setBonusSecret.poisonResist;
    window.resultCalc.resistancePoison += window.setBonusMithril.poisonResist;
    window.resultCalc.resistancePoison += window.setBonusRosetta.poisonResist;

    //DR
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.rightHand) ? zeroIfNullOrUndefined(window.equiped.rightHand.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.leftHand) ? zeroIfNullOrUndefined(window.equiped.leftHand.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.helm) ? zeroIfNullOrUndefined(window.equiped.helm.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.pauldron) ? zeroIfNullOrUndefined(window.equiped.pauldron.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.pads) ? zeroIfNullOrUndefined(window.equiped.pads.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.boots) ? zeroIfNullOrUndefined(window.equiped.boots.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.gauntlets) ? zeroIfNullOrUndefined(window.equiped.gauntlets.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.rightEarring) ? zeroIfNullOrUndefined(window.equiped.rightEarring.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.leftEarring) ? zeroIfNullOrUndefined(window.equiped.leftEarring.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.necklace) ? zeroIfNullOrUndefined(window.equiped.necklace.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.belt) ? zeroIfNullOrUndefined(window.equiped.belt.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.rightRing) ? zeroIfNullOrUndefined(window.equiped.rightRing.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.leftRing) ? zeroIfNullOrUndefined(window.equiped.leftRing.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.rightPathos) ? zeroIfNullOrUndefined(window.equiped.rightPathos.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.leftPathos) ? zeroIfNullOrUndefined(window.equiped.leftPathos.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.valkirieHelm) ? zeroIfNullOrUndefined(window.equiped.valkirieHelm.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.valkiriePauldron) ? zeroIfNullOrUndefined(window.equiped.valkiriePauldron.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.wings) ? zeroIfNullOrUndefined(window.equiped.wings.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.tattoo) ? zeroIfNullOrUndefined(window.equiped.tattoo.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += !window.isNullOrUndefined(window.equiped.emblem) ? zeroIfNullOrUndefined(window.equiped.emblem.itemStat.resistanceDark) : 0;
    window.resultCalc.resistanceDark += window.setBonusKrowaz.darkResist;
    window.resultCalc.resistanceDark += window.setBonusKrowazKurian.darkResist;
    window.resultCalc.resistanceDark += window.setBonusHolyKnight.darkResist;
    window.resultCalc.resistanceDark += window.setBonusHolyKnightKurian.darkResist;
    window.resultCalc.resistanceDark += window.setBonusSecret.darkResist;
    window.resultCalc.resistanceDark += window.setBonusMithril.darkResist;
    window.resultCalc.resistanceDark += window.setBonusRosetta.darkResist;

    //MR
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.rightHand) ? zeroIfNullOrUndefined(window.equiped.rightHand.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.leftHand) ? zeroIfNullOrUndefined(window.equiped.leftHand.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.helm) ? zeroIfNullOrUndefined(window.equiped.helm.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.pauldron) ? zeroIfNullOrUndefined(window.equiped.pauldron.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.pads) ? zeroIfNullOrUndefined(window.equiped.pads.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.boots) ? zeroIfNullOrUndefined(window.equiped.boots.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.gauntlets) ? zeroIfNullOrUndefined(window.equiped.gauntlets.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.rightEarring) ? zeroIfNullOrUndefined(window.equiped.rightEarring.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.leftEarring) ? zeroIfNullOrUndefined(window.equiped.leftEarring.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.necklace) ? zeroIfNullOrUndefined(window.equiped.necklace.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.belt) ? zeroIfNullOrUndefined(window.equiped.belt.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.rightRing) ? zeroIfNullOrUndefined(window.equiped.rightRing.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.leftRing) ? zeroIfNullOrUndefined(window.equiped.leftRing.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.rightPathos) ? zeroIfNullOrUndefined(window.equiped.rightPathos.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.leftPathos) ? zeroIfNullOrUndefined(window.equiped.leftPathos.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.valkirieHelm) ? zeroIfNullOrUndefined(window.equiped.valkirieHelm.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.valkiriePauldron) ? zeroIfNullOrUndefined(window.equiped.valkiriePauldron.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.wings) ? zeroIfNullOrUndefined(window.equiped.wings.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.tattoo) ? zeroIfNullOrUndefined(window.equiped.tattoo.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += !window.isNullOrUndefined(window.equiped.emblem) ? zeroIfNullOrUndefined(window.equiped.emblem.itemStat.resistanceMagic) : 0;
    window.resultCalc.resistanceMagic += window.setBonusKrowaz.magicResist;
    window.resultCalc.resistanceMagic += window.setBonusKrowazKurian.magicResist;
    window.resultCalc.resistanceMagic += window.setBonusHolyKnight.magicResist;
    window.resultCalc.resistanceMagic += window.setBonusHolyKnightKurian.magicResist;
    window.resultCalc.resistanceMagic += window.setBonusSecret.magicResist;
    window.resultCalc.resistanceMagic += window.setBonusMithril.magicResist;
    window.resultCalc.resistanceMagic += window.setBonusRosetta.magicResist;

    return window.resultCalc;
}
