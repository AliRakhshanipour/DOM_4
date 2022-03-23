let $ = document;
let changeBtn = $.querySelector(".changeButton");
changeBtn.addEventListener("click", changeState);
let cBtn = $.querySelector(".C");
let fBtn = $.querySelector(".F");
let inputTxt = $.querySelector("#converter");
let resultBox = $.querySelector(".result");
function changeState() {
  //   inputPlaceholder.setAttribute("placeholder", "°C");
  if (inputTxt.getAttributeNode("placeholder").value === "°C") {
    inputTxt.setAttribute("placeholder", "°F");
    cBtn.innerHTML = "°F";
    fBtn.innerHTML = "°C";
    $.title = "SalzLearn| Js | °F to °C";
  } else if (inputTxt.getAttributeNode("placeholder").value === "°F") {
    inputTxt.setAttribute("placeholder", "°C");
    cBtn.innerHTML = "°C";
    fBtn.innerHTML = "°F";
    $.title = "SalzLearn| Js | °C to °F";
  }
}

let resetBtn = $.querySelector(".resetButton");
resetBtn.addEventListener("click", resetState);
function resetState() {
  inputTxt.value = null;
  resultBox.innerHTML = null;
}

let convertBtn = $.querySelector(".convertButton");
convertBtn.addEventListener("click", convertTemp);
function convertTemp() {
  if (cBtn.innerHTML === "°C") {
    let inputTempValue = inputTxt.value;
    resultBox.innerHTML = inputTempValue * 9.5 + 32 + " °F";
  } else {
    let inputTempValue = inputTxt.value;
    let resultBox = $.querySelector(".result");
    resultBox.innerHTML = (inputTempValue - 32) / 9.5 + " °C";
  }
}
