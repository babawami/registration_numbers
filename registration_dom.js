document.addEventListener('DOMContentLoaded', function() {
  let addbtn = document.querySelector(".addbtn");
  let textField = document.querySelector(".inputReg");
  let addContent = document.querySelector(".addChild");
  let filterBtn = document.querySelector(".filter");
  let area = document.querySelector(".area");

  // gets the the map stored.
  // let regStorage = JSON.parse(localStorage.getItem('storedReg'));
 let regStorage = localStorage.getItem('storedReg') ? JSON.parse(localStorage.getItem('storedReg')) : {};
  let getRegNumbers = regNumbers(regStorage); // it has input to avoid ovewrite of the entered properties
  //console.log(regStorage );


  // add new elements function
  function createReg(Values) {
    let child = document.createElement('li');
    child.textContent = Values;
    addContent.appendChild(child)
  }

  //clear text in the textbox after being entred
  function cleartext() {
    if (textField.value = "") {
      textField.value = ""
    }
  }




  function displayRegNumber() {
    let plateReg = textField.value.trim().toUpperCase();
    // Run when the textField is filled
    if (plateReg !== "") {
      let pushRegNum = getRegNumbers.storeRegNum(plateReg); // push to map


      if(pushRegNum !== undefined){
        createReg(pushRegNum);
      }


    }
    // create storage to store the map
    localStorage.setItem('storedReg', JSON.stringify(getRegNumbers.returnMap()));


  }


  addbtn.addEventListener("click", function() {
    displayRegNumber();
    cleartext();
  });

// filter registration_numbers according to location
filterBtn.addEventListener('click',function(){
addContent.innerHTML = "";
let regListed =  Object.keys(regStorage);
  let list = getRegNumbers.filterReg(regListed,area.value); //array
  console.log(list);
  for(i=0;i<list.length;i++){
    createReg(list[i]);
  }


//  console.log(createReg(getRegNumbers.filterReg(regListed,area.value)));
});



// var x = getRegNumbers.filterReg(regListed,area.value)
// if(x.length > 0){
//   for (let i = 0; i < x.length; i++) {
//
//   }
//
// }
// the registration numbers stay on the page after being refreshed
  window.addEventListener('load', function() {
    if(regStorage!==null){
      var reg = Object.keys(regStorage);
        for (let i = 0; i < reg.length; i++) {
          createReg(reg[i])
        }
    }
  })

});
