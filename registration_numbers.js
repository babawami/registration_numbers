function regNumbers(regStorage) { // the input is to tell function that map should take in updated one if there is
  let EnterPlateNum = "";
  let regMap = regStorage || {};
  let regKey = "";

  function storeRegNum(EnterPlateNum) {
    if (regMap[EnterPlateNum] === undefined) {
      regMap[EnterPlateNum] = 0;
      for (var key in regMap) {
        var reg = key;
      }

    }
    return reg;
  }


  function returnMap() {
    return regMap;
  }


  function regProperties(regMap) {
    regKey = Object.keys(regMap);
    for (var i = 0; i < regKey.length; i++) {
      var reg = regKey[i];
    }
    return reg


  }





  return {
    regProperties: regProperties,
    storeRegNum: storeRegNum,
    returnMap: returnMap,
  }

}
