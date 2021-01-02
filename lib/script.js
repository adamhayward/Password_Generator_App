// Assignment Code
const slideValue = $("#currentVal");
const inputSlider = $("input");

const upCharBTN = $("#upChar");
const lowCharBTN = $("#lowChar");
const specCharBTN = $("#specChar");
const numCharBTN = $("#numChar");
const generateBtn = $("#generate");

const charSetUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charSetLow = "abcdefghijklmnopqrstuvwxyz";
const charSetSpecial = "!@#$%^&*()_-+=;/?.,><";
const charSetNum = 1234567890;

var chosenLength;
var upperCaseChar;
var lowerCaseChar;
var specialChar;
var numChar;

var password;
let passWord = [];
var charSet = ["", "", "", ""];

inputSlider.on("input", function () {
  let value = inputSlider.val();
  slideValue.text(`Character Length: ${value}`);
  slideValue.addClass("show");
  chooseLength();
});
upCharBTN.on("click", function () {
  if (charSet[0] === "") {
    charSet.splice(0, 1, charSetUp);
    console.log(charSet);
  } else {
    charSet.splice(0, 1, "");
    console.log(charSet);
  }
});
lowCharBTN.on("click", function () {
  if (charSet[1] === "") {
    charSet.splice(1, 1, charSetLow);
    console.log(charSet);
  } else {
    charSet.splice(1, 1, "");
    console.log(charSet);
  }
});
specCharBTN.on("click", function () {
  if (charSet[2] === "") {
    charSet.splice(2, 1, charSetSpecial);
    console.log(charSet);
  } else {
    charSet.splice(2, 1, "");
    console.log(charSet);
  }
});
numCharBTN.on("click", function () {
  if (charSet[3] === "") {
    charSet.splice(3, 1, charSetNum);
  } else {
    charSet.splice(3, 1, "");
  }
  console.log(charSet);
});
generateBtn.on("click", function (event) {
  event.preventDefault();
  generatePassword();
  console.log(passWord);
  console.log(passWord.length);
  /*  logic in place to reject function & alert user to
                ensure perameter options are chosen*/
  if (!passWord.length || !password) {
    alert("Please select at leaset one password paramater");
  } else {
    let field = $("#generateCol");
    let newBtn1 = $("<button>");
    let newBtn2 = $("<button>");
    let copyBtn = newBtn1.addClass("copy");
    let clearBtn = newBtn2.addClass("clear");

    generateBtn.off('click');
    field.append(copyBtn, clearBtn);
    generateBtn.text("").text(passWord.join(""));
    generateBtn.addClass("generated");

    copyBtn.on("click", function () {
      // temporty input element created to hold password text
      let holdingInput = $("<input>");
      $("body").append(holdingInput);
      // selects the text (password) from inside the temporary input
      holdingInput.val(passWord.join("")).select();
      // exectutes copy command
      document.execCommand("copy");
      // removes input element from html doc with out ever appending to screen
      holdingInput.remove();
    });

    clearBtn.on("click", function () {
      location.reload();
    });
  }
});
function chooseLength() {
  chosenLength = inputSlider.val();
}
function generatePassword() {
  let placeHodlerArray = charSet.join("");
  // for loop settting lenght of password to the user's chosen length
  for (var i = 0; i < chosenLength; i++) {
    // Math object methods to choose random character stored in the 'charSet' array
    password =
      placeHodlerArray[Math.floor(Math.random() * placeHodlerArray.length)];
    toString(password);
    console.log(password);
    passWord.push(password);
    console.log(passWord);
  }
  $("#password").append(passWord);
}
