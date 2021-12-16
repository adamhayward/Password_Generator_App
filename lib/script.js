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

let chosenLength;
let upperCaseChar;
let lowerCaseChar;
let specialChar;
let numChar;

let password;
let passWord = [];
let charSet = ["", "", "", ""];
// function assignments
const chooseLength = () => {
  chosenLength = inputSlider.val();
};
const generatePassword = () => {
  let placeHodlerArray = charSet.join("");
  // for loop settting lenght of password to the user's chosen length
  for (let i = 0; i < chosenLength; i++) {
    // Math object methods to choose random character stored in the 'charSet' array
    password =
      placeHodlerArray[Math.floor(Math.random() * placeHodlerArray.length)];
    toString(password);
    console.log(password);
    passWord.push(password);
    console.log(passWord);
  }
  $("#password").append(passWord);
};
// event listeners:
inputSlider.on("input", () => {
  let value = inputSlider.val();
  slideValue.text(`Character Length: ${value}`);
  slideValue.addClass("show");
  chooseLength();
});

const chooseCase = (button, splicePosition, charCase) => {
  button.on("click", () => {
    if (charSet[splicePosition] === "") {
      charSet.splice(splicePosition, 1, charCase);
    } else {
      charSet.splice(splicePosition, 1, "");
    }
  });
};

chooseCase(upCharBTN, 0, charSetUp);
chooseCase(lowCharBTN, 1, charSetLow);
chooseCase(specCharBTN, 2, charSetSpecial);
chooseCase(numCharBTN, 3, charSetNum);

generateBtn.on("click", e => {
  e.preventDefault();
  generatePassword();
  /*  logic in place to reject function & alert user to
                ensure perameter options are chosen*/
  if (!passWord.length || !password) {
    alert("Please select at leaset one password paramater");
  } else {
    // generates new buttons on screen for copy & clear functions to execute
    let field = $("#generateCol");
    let newBtn1 = $("<button>");
    let newBtn2 = $("<button>");
    let copyBtn = newBtn1.addClass("copy");
    let clearBtn = newBtn2.addClass("clear");

    generateBtn.off("click");
    field.append(copyBtn, clearBtn);
    generateBtn.text("").text(passWord.join(""));
    generateBtn.addClass("generated");
    // listeners created for new copy & clear buttons
    copyBtn.on("click", () => {
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

    clearBtn.on("click", () => {
      location.reload();
    });
  }
});
