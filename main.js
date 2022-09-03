let display = document.getElementById("display");
let error = document.getElementById("error");
let errorA = document.getElementById("errorA");
let errorB = document.getElementById("errorB");
let errorC = document.getElementById("errorC");
let errorD = document.getElementById("errorD");
let errorE = document.getElementById("errorE");
let optionA = document.getElementById("optionA");
let optionB = document.getElementById("optionB");
let message = document.getElementById("function");
let key = document.getElementById("key");
let keyA = document.getElementById("keyA");
let keyB = document.getElementById("keyB");
let keyC = document.getElementById("keyC");
let keyD = document.getElementById("keyD");
let keyP = document.getElementById("keyP");

optionA.addEventListener("change", () => {
  switch (optionA.value) {
    case "airtime":
      keyC.style.display = "none";
      keyP.innerHTML = "Phone Number";
      break;

    default:
      keyC.style.display = "inline";
      keyP.innerHTML = "Enter Account Number:";
      break;
  }
});
key.addEventListener("click", () => {
  validateData();
});

function validateData() {
  if (display.value == "") {
    error.innerHTML = "choose an option";
  } else {
    error.innerHTML = "";
  }
  if (optionA.value == "") {
    errorE.innerHTML = "choose to continue";
  } else {
    errorE.innerHTML = "";
  }

  if (keyA.value == "") {
    errorA.innerHTML = "input to continue";
  } else {
    errorA.innerHTML = "";
  }

  if (keyB.value == "") {
    errorB.innerHTML = "input to continue";
  } else {
    errorB.innerHTML = "";
  }

  if (optionB.value == "") {
    errorC.innerHTML = "choose to continue";
  } else {
    errorC.innerHTML = "";
  }

  if (keyD.value == "") {
    errorD.innerHTML = "input to continue";
  } else {
    errorD.innerHTML = "";
  }
  if (
    display.value != "" &&
    keyA.value != "" &&
    keyB.value != "" &&
    optionB.value != "" &&
    keyD.value != "" &&
    optionA.value != ""
  ) {
    operation();
  }
}
function operation() {
  if (display.value == "Quickbank") {
    selectData();
  } else {
    error.textContent = "choose one";
  }
}

function selectData() {
  switch (optionA.value) {
    case "airtime":
      Card();
      break;

    case "Transfer":
      Account();
      break;
    default:
      errorE.innerHTML("choose an option");
      break;
  }
}
function Account() {
  if (keyA.value <= 20000) {
    if (keyB.value != "") {
      if (optionB.value == "Zenith") {
        if (keyD.value != "") {
          message.innerHTML = "TRANSFER Successfully Proccessed. You First...";
        }
      }
    }
  }
}
function Card() {
  if (keyA.value <= 2000) {
    if (keyB.value != "") {
      if (keyD.value != "") {
        message.innerHTML = "RECHARGE successfully Proccessed. You First...";
      }
    }
  }
}
