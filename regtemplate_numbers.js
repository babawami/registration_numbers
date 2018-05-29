function regNumbers(regStorage) { // the input is to tell function that map should take in updated one if there is
  let EnterPlateNum = "";
  let regMap = regStorage || {};

  function storeRegNum(numbersReg) {
    if(numbersReg !== ''){
      EnterPlateNum = numbersReg;

      // it needs to check firstly for this letters before pushing the registration
      let regList = ['CA ', 'CJ ', 'CL ', 'CAW '];

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


    }

  function returnMap() {
    return regMap;
  }

  function filterReg(regmap, town){
    var filteredList= [];
    regmap = Object.keys(regMap); // array
    if(town === "All"){
      return regmap;
    }

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


function regArray() {
    return Object.keys(regMap)
  }

function resetStorage() {
   return regMap = {};
 }


  return {
    storeRegNum: storeRegNum,
    returnMap: returnMap,
    filterReg:filterReg,
    resetStorage:resetStorage,
    regArray:regArray,
  }

}
