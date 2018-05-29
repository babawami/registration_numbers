document.addEventListener('DOMContentLoaded', function() {
  let addbtn = document.querySelector(".btnAdd");
  let textField = document.querySelector(".regInput");
  let addContent = document.querySelector(".templateContent");
  let area = document.querySelector(".town");
  let resetbtn = document.querySelector(".btnReset");
  let displayMessage = document.querySelector(".alert");
  // gets the the map stored.
  let regStorage = localStorage.getItem('storetemp') ? JSON.parse(localStorage.getItem('storetemp')) : {};
  let getRegNumbers = regNumbers(regStorage); // it has input to avoid ovewrite of the entered properties


  // reference the template from HTML
  let template = document.querySelector(".totalTemplate").innerHTML;
  // compile the template
  let compiletemplate = Handlebars.compile(template);

  // data to feed the template
  let dataOne = {
    addReg: getRegNumbers.regArray(),
  };
  addContent.innerHTML = compiletemplate(dataOne)

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
  // let correctReg = getRegNumbers.storeRegNum(plateReg);
    //console.log(correctReg)

    if (plateReg == '') {
      displayMessage.innerHTML = "Please Enter Registration";
    } else if (plateReg !== "" && plateReg.match(allowedChar) && plateReg.startsWith("CA") || plateReg.startsWith("CAW") || plateReg.startsWith("CL") || plateReg.startsWith("CJ")) {

      displayMessage.innerHTML = "";
      getRegNumbers.storeRegNum(plateReg); // push to map
      // console.log(pushRegNum)

      // data to feed the template
      let data = {
        addReg: getRegNumbers.regArray(),
      };
      addContent.innerHTML = compiletemplate(data);

    } else {
      displayMessage.innerHTML = "Please Enter Registration from CA,CAW,CL,CJ/Invalid Input";
    }
    // create storage to store the map
    localStorage.setItem('storetemp', JSON.stringify(getRegNumbers.returnMap()));

  }



  addbtn.addEventListener("click", function() {
    displayRegNumber();
    cleartext();
  });

  //filter registration_numbers according to location
  area.addEventListener('change', function() {
    let dataThree = {
      addReg: getRegNumbers.filterReg(regStorage, area.value), //array
    }

    addContent.innerHTML = compiletemplate(dataThree);
    displayMessage.innerHTML = "";
  });

  // reset button to clear the localStorage
  resetbtn.addEventListener('click', function() {
    localStorage.clear();
    getRegNumbers.resetStorage();
    addContent.innerHTML = "";
    displayMessage.innerHTML = "";
  })

});
