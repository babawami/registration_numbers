function regNumbers(regStorage) { // the input is to tell function that map should take in updated one if there is
  let EnterPlateNum = "";
  let regMap = regStorage || {};
  let regKey = "";



  function storeRegNum(EnterPlateNum) {
    let regList = ['CA ', 'CY ', 'CL ', 'CAW '];

    if (regMap[EnterPlateNum] === undefined) {
      for (var i = 0; i < regList.length; i++) {
        if(EnterPlateNum.startsWith(regList[i])){
          regMap[EnterPlateNum] = 0;
          for (var key in regMap) {
            var reg = key;
            //return true;
          }
         return reg;
        }

        }

      }
  //  return false;

    }




  function returnMap() {
    return regMap;
  }



  function filterReg(regmap, town){
    var filteredList= [];
    regmap = Object.keys(regMap); // array
      for(var i=0;i<regmap.length;i++){
        if (regmap[i].startsWith(town)){
          filteredList.push(regmap[i]);
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
//   var regStart = ['CA', 'CY', 'CJ', 'CL', 'CAW'];
//
//  // var reg = 'CA'
//    var selected =  Object.keys(regMap);
//    console.log(selected);
//   for(var i = 0; i < regStart.length; i++){
//       if(selected.startsWith(regStart[i])){
//
//      return true
//
//       }
//     return false
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
