function calculate_mana() {
  window.resultCalc.mana = 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.rightHand) ? window.equiped.rightHand.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.leftHand) ? window.equiped.leftHand.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.helm) ? window.equiped.helm.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.pauldron) ? window.equiped.pauldron.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.pads) ? window.equiped.pads.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.boots) ? window.equiped.boots.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.gauntlets) ? window.equiped.gauntlets.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.rightEarring) ? window.equiped.rightEarring.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.leftEarring) ? window.equiped.leftEarring.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.necklace) ? window.equiped.necklace.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.belt) ? window.equiped.belt.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.rightRing) ? window.equiped.rightRing.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.leftRing) ? window.equiped.leftRing.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.rightPathos) ? window.equiped.rightPathos.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.leftPathos) ? window.equiped.leftPathos.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.valkirieHelm) ? window.equiped.valkirieHelm.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.valkiriePauldron) ? window.equiped.valkiriePauldron.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.wings) ? window.equiped.wings.itemStat.bonusMp : 0;
  window.resultCalc.mana += !window.isNullOrUndefined(window.equiped.emblem) ? window.equiped.emblem.itemStat.bonusMp : 0;
  window.resultCalc.mana += window.setBonusKrowaz.mp;
  window.resultCalc.mana += window.setBonusKrowazKurian.mp;
  window.resultCalc.mana += window.setBonusHolyKnight.mp;
  window.resultCalc.mana += window.setBonusHolyKnightKurian.mp;
  window.resultCalc.mana += window.setBonusSecret.mp;
  window.resultCalc.mana += window.setBonusMithril.mp;
  window.resultCalc.mana += window.setBonusRosetta.mp;
  
  var totalInt = window.statPoints.int + 
      window.statPoints.bonusInt + 
      window.statPoints.rebithInt + 
      30 + 
      window.setBonusKrowaz.int + 
      window.setBonusKrowazKurian.int + 
      window.setBonusHolyKnight.int + 
      window.setBonusHolyKnightKurian.int + 
      window.setBonusMithril.int + 
      window.setBonusSecret.int + 
      window.achievement.int + 
      window.setBonusRosetta.int;
  
  var levelDropDown = $("#level").data('kendoDropDownList');
  if (!levelDropDown) return 0;
  
  var lvl = +levelDropDown.value();
  if (lvl > 83)
    lvl = 83;

  var coefficientId = 0;
  if (lvl >= 10) coefficientId++;
  if (lvl >= 60) coefficientId++;
  
  var coeff = 0;
  if (className === 'Warrior') {
    coeff = getWarriorCoefficients(coefficientId, 'mana');
  }
  else if (className === 'Rogue') {
    coeff = getRogueCoefficients(coefficientId, 'mana');
  }
  else if (className === 'Priest') {
    coeff = getPriestCoefficients(coefficientId, 'mana');
  }
  else if (className === 'Mage') {
    coeff = getMageCoefficients(coefficientId, 'mana');
  }
  else if (className === 'Kurian') {
    coeff = getKurianCoefficients(coefficientId, 'mana');
  }
  
  if (className === 'Warrior' || className === 'Rogue' || className === 'Kurian') {
    window.resultCalc.mana += Math.floor((coeff * lvl * lvl * health) + (0.1 * lvl * health) + Math.floor(health / 5));
  }
  else if (className === 'Mage' || className === 'Priest') {
    window.resultCalc.mana += Math.floor((coeff * lvl * lvl * totalInt) + (0.1 * lvl * 2 * totalInt) + Math.floor(totalInt / 5)) + 20;
  }
}
