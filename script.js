// Assignment Code
var generateBtn = document.querySelector("#generate");
var chosenLength;
var confrirmUpChar;
var confrirmLowChar;
var confrimSpecialChar;
var chasenNumeT;

//1st onclick function "length of password"
generateBtn.onclick = function () {
  chosenLength = prompt("Please choose a password lenght between 8 and 128 characters.");
  alert("Your password to contain " + chosenLength + " letters");
  console.log("User chose a password lenght of: " + chosenLength);


  confrirmUpChar = confirm("Would you like your password to contain upper case characters?");
  console.log("Upercase letters chosen: " + confrirmUpChar);

  if (confrirmUpChar === true) {
    alert("Your password will contain upper case letters.");

  } else {
    alert("Your password will NOT contain any upper case letters.")
  }

  confrimLowChar = confirm("Would you like your password to contain lower case characters?");
  console.log("Lowercase letters chosen: " + confrimLowChar);

  if (confrimLowChar === true) {
    alert("Your password will contain lower case letters.");

  } else {
    alert("Your password will NOT contain any lower case letters.")
  }

  confrimSpecialChar = confirm("Whoud you like your password to contian speacial characters?");
  console.log("Specail characters chosen: " + confrimSpecialChar);

  if (confrimSpecialChar === true) {
    alert("Your password will contain special characters.");

  } else {
    alert("Your password will NOT contain any special characters.")
  }


  confrimNumChar = confirm("Whoud you like your password to contian numbers?");
  console.log("Specail characters chosen: " + confrimNumChar);

  if (confrimNumChar === true) {
    alert("Your password will contain numerical characters.");

  } else {
    alert("Your password will NOT contain any numerical characters.")
  }


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

document.getElemet;