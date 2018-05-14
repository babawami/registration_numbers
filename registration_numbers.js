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

// function filterReg(town){
//   var x = Object.keys(regMap)
//
// var filteredList = x.filter(function(town, reStorage){
//   return x.startswith(town)
// }

//
function select(town){

  var reg = ['CA', 'CY', 'CJ', 'CL', 'CAW'];

 // var reg = 'CA'
   var selected =  Object.keys(regMap);
   console.log(selected);
  for(var i = 0; i < selected.length; i++){
      if(selected[i].startsWith(town)){

     return true

      }
      return false

    }
    return
  }

function select(regMap){
  var selected = Object.keys(regMap);

    if(selected.startsWith("CA")){
      return selected.startsWith("CA");
    }
     else if(selected.startsWith("CJ")){
      return selected.startsWith("CJ");
    }
    else if(selected.startsWith("CAW")){
     return selected.startsWith("CAW");
   }
   else if(selected.startsWith("CL")){
    return selected.startsWith("CL");
  }

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
    select:select,
  }

}
