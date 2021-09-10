function calculate_hp() {
  window.resultCalc.hp = 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.rightHand) ? window.equiped.rightHand.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.leftHand) ? window.equiped.leftHand.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.helm) ? window.equiped.helm.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.pauldron) ? window.equiped.pauldron.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.pads) ? window.equiped.pads.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.boots) ? window.equiped.boots.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.gauntlets) ? window.equiped.gauntlets.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.rightEarring) ? window.equiped.rightEarring.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.leftEarring) ? window.equiped.leftEarring.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.necklace) ? window.equiped.necklace.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.belt) ? window.equiped.belt.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.rightRing) ? window.equiped.rightRing.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.leftRing) ? window.equiped.leftRing.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.rightPathos) ? window.equiped.rightPathos.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.leftPathos) ? window.equiped.leftPathos.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.valkirieHelm) ? window.equiped.valkirieHelm.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.valkiriePauldron) ? window.equiped.valkiriePauldron.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.wings) ? window.equiped.wings.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.tattoo) ? window.equiped.tattoo.itemStat.bonusHp : 0;
  window.resultCalc.hp += !window.isNullOrUndefined(window.equiped.emblem) ? window.equiped.emblem.itemStat.bonusHp : 0;
  window.resultCalc.hp += window.setBonusKrowaz.hp;
  window.resultCalc.hp += window.setBonusKrowazKurian.hp;
  window.resultCalc.hp += window.setBonusHolyKnight.hp;
  window.resultCalc.hp += window.setBonusHolyKnightKurian.hp;
  window.resultCalc.hp += window.setBonusSecret.hp;
  window.resultCalc.hp += window.setBonusMithril.hp;
  window.resultCalc.hp += window.setBonusRosetta.hp;
  
  var health = window.statPoints.hp + 
               window.statPoints.bonusHp + 
               window.statPoints.rebithHp + 
               window.setBonusKrowaz.health + 
               window.setBonusKrowazKurian.health + 
               window.setBonusHolyKnight.health + 
               window.setBonusHolyKnightKurian.health + 
               window.setBonusMithril.health + 
               window.setBonusSecret.health + 
               window.achievement.hp + 
               window.setBonusRosetta.health;
  
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
    coeff = getWarriorCoefficients(coefficientId, 'hp');
  }
  else if (className === 'Rogue') {
    coeff = getRogueCoefficients(coefficientId, 'hp');
  }
  else if (className === 'Priest') {
    coeff = getPriestCoefficients(coefficientId, 'hp');
  }
  else if (className === 'Mage') {
    coeff = getMageCoefficients(coefficientId, 'hp');
  }
  else if (className === 'Kurian') {
    coeff = getKurianCoefficients(coefficientId, 'hp');
  }
  
  window.resultCalc.hp += Math.floor((coeff * lvl * lvl * health) + 0.1 * (lvl * health) + Math.floor(health / 5)) + 20;
  
  var isGemOfLife = $("#gemHpDropDown").data('kendoMobileSwitch').value();

  if (isGemOfLife) {
    window.resultCalc.hp += 250;
  }
  
  var isParasite = $("#parasiteOnOff").data('kendoMobileSwitch').value();
  var isSuperParasite = $("#superParasiteOnOff").data('kendoMobileSwitch').value();

  if (isParasite || isSuperParasite) {
    var multiplier = isParasite ? 0.8 : 0.7;
    window.resultCalc.hp *= multiplier;
    window.resultCalc.hp = Math.ceil(window.resultCalc.hp);
  } else {
    var hpBuffId = +$("#hpBuffDropDown").data('kendoDropDownList').value();
    if (hpBuffId === 2)
      window.resultCalc.hp += 1500;
    else if (hpBuffId === 3)
      window.resultCalc.hp += 2000;
    else if (hpBuffId === 4)
      window.resultCalc.hp = Math.floor(window.resultCalc.hp * 1.6);

    var isSpellOfLife = $("#spellOfLifeBuffDropDown").data('kendoMobileSwitch').value();

    if (isSpellOfLife) {
      window.resultCalc.hp += 480;
    }
  }
  
  if (window.resultCalc.hp > 14000) window.resultCalc.hp = 14000;
}
