function regNumbers(regStorage) { // the input is to tell function that map should take in updated one if there is
  let EnterPlateNum = "";
  let regMap = regStorage || {};
  let regKey = "";
  // var filteredList= [];


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



  function filterReg(reg, town){
  
    var filteredList= [];
      for(var i=0;i<reg.length;i++){
        if (reg[i].startsWith(town)){
          filteredList.push(reg[i]);
        }
      }
      return filteredList;
    }

//   var filteredList = reg.filter(function("regMap"){
//       return regMap.startsWith(town);
//   });
//
//   return filteredList;
//
// }

// function filterReg(town){
//   var x = Object.keys(regMap)
//
// var filteredList = x.filter(function(town, reStorage){
//   return x.startswith(town)
// }

//
// function select(town){
//
//   var reg = ['CA', 'CY', 'CJ', 'CL', 'CAW'];
//
//  // var reg = 'CA'
//    var selected =  Object.keys(regMap);
//    console.log(selected);
//   for(var i = 0; i < selected.length; i++){
//       if(selected[i].startsWith(town)){
//
//      return true
//
//       }
//       return false
//
//     }
//     return
//   }


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
    filterReg:filterReg,
  }

}
