document.addEventListener('DOMContentLoaded', function() {
  let addbtn = document.querySelector(".addbtn");
  let textField = document.querySelector(".inputReg");
  let addContent = document.querySelector(".addChild");

  // gets the the map stored.
  let regStorage = JSON.parse(localStorage.getItem('storedReg'));
  let getRegNumbers = regNumbers(regStorage); // it has input to avoid ovewrite of the entered properties



  // add new elements function
  function createReg(Values) {
    let child = document.createElement('li');
    child.textContent = Values;
    addContent.appendChild(child);

    if(regStorage !== undefined){
      child.classList.add("add");
    }
    if(addContent.appendChild(child) == ""){
      child.classList.remove("add");
    }


  }

  //clear text in the textbox after being entred
  function cleartext() {
    if (textField.value = "") {
      textField.value = ""
    }
  }


  function displayRegNumber() {
    let plateReg = textField.value;
    // Run when the textField is filled
    if (plateReg !== "") {
      let pushRegNum = getRegNumbers.storeRegNum(plateReg); // push to map
      console.log(pushRegNum );
      createReg(pushRegNum);

    }

    // create storage to store the map
    localStorage.setItem('storedReg', JSON.stringify(getRegNumbers.returnMap()));
  }


  addbtn.addEventListener("click", function() {
    displayRegNumber();
    cleartext();
  })

// the registration numbers stay on the page after being refreshed
  window.addEventListener('load', function() {
    var reg = Object.keys(regStorage)
    for (let i = 0; i < reg.length; i++) {
      createReg(reg[i])
    }
  })

})
