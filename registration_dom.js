document.addEventListener('DOMContentLoaded', function() {
  let addbtn = document.querySelector(".addbtn");
  let textField = document.querySelector(".inputReg");
  let addContent = document.querySelector(".addChild");
  let area = document.querySelector(".area");
  let resetbtn = document.querySelector(".resetbtn");
  let displayMessage = document.querySelector(".message")

  // gets the the map stored.
  //let regStorage = JSON.parse(localStorage.getItem('storedReg'));
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
    let allowedChar = /^[a-zA-Z0-9 ]+$/;
    // Run when the textField is filled
    if ( plateReg.match(allowedChar)) {

      var pushRegNum = getRegNumbers.storeRegNum(plateReg); // push to map
      console.log(pushRegNum);


      if (pushRegNum !== undefined) {
        createReg(pushRegNum);
       displayMessage.innerHTML= ""
      }

      if(pushRegNum == undefined){
        displayMessage.innerHTML= "Please Enter Correct Registration From Selected Towns Only/ Registration already exits"

      }

    }
    else{
        displayMessage.innerHTML= "Please Enter only letters and Numbers"
    }


    // create storage to store the map
    localStorage.setItem('storedReg', JSON.stringify(getRegNumbers.returnMap()));


  }


  addbtn.addEventListener("click", function() {
    displayRegNumber();
    cleartext();
  });

  // filter registration_numbers according to location
  area.addEventListener('change', function() {
    addContent.innerHTML = "";
    //let regListed = Object.keys(regStorage);
    let list = getRegNumbers.filterReg(regStorage, area.value); //array
    for (i = 0; i < list.length; i++) {
      createReg(list[i]);
    }
    displayMessage.innerHTML="";


  });

  // the registration numbers stay on the page after being refreshed
  window.addEventListener('load', function() {
    if (regStorage !== null) {
      let reg = Object.keys(regStorage);
      for (var i = 0; i < reg.length; i++) {
        createReg(reg[i])
      }
    }
  })

  resetbtn.addEventListener('click', function(){
    localStorage.clear();
    getRegNumbers.resetStorage();
    addContent.innerHTML = "";
    displayMessage.innerHTML="";


  })

});
