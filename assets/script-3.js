// Assignment Code
var generateBtn = document.querySelector("#generate");
var charset =[];
var charSetUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charSetLow = "abcdefghijklmnopqrstuvwxyz";
var charSetSpecial = "!@#$%^&*()_-+=;/?.,><";
var charSetNum = 1234567890;

// Function Assignments
// "writePassword" funciton defined
function writePassword() {
    //prompt for first question (lenght of password?)
    //stores user's input in the var chosenLenght
    var chosenLength = prompt("Please choose a password lenght between 8 and 128 characters.");
    alert("Your password to contain " + chosenLength + " letters");
    //console logs user's choice
    console.log("User chose a password lenght of: " + chosenLength);
    //prompt for first question (upper case?)
    //stores user's input in the var confrirmUpChar
    var confrirmUpChar = confirm("Would you like your password to contain upper case characters?");
    //console logs user's choice
    console.log("Uper case letters chosen: " + confrirmUpChar);
    //Prompt back to user if user selects true
    if (confrirmUpChar === true) {
        alert("Your password will contain upper case letters.");
        //Prompt back to user if user selects false
    } else {
        alert("Your password will NOT contain any upper case letters.")
    }
    //prompt for first question (lower case?)
    //stores user's input in the var confrirmLowChar
    var confrimLowChar = confirm("Would you like your password to contain lower case characters?");
    //console logs user's choice
    console.log("Lowercase letters chosen: " + confrimLowChar);
    //Prompt back to user if user selects true
    if (confrimLowChar === true) {
        alert("Your password will contain lower case letters.");
        //Prompt back to user if user selects false
    } else {
        alert("Your password will NOT contain any lower case letters.")
    }
    //prompt for first question (special characters?)
    //stores user's input in the var confrirmSpecialChar
    var confrimSpecialChar = confirm("Whoud you like your password to contian speacial characters?");
    //console logs user's choice
    console.log("Specail characters chosen: " + confrimSpecialChar);
    //Prompt back to user if user selects true
    if (confrimSpecialChar === true) {
        alert("Your password will contain special characters.");
        //Prompt back to user if user selects false
    } else {
        alert("Your password will NOT contain any special characters.")
    }
    //prompt for first question (numbers?)
    //stores user's input in the var confrirmNumChar
    var confrimNumChar = confirm("Whoud you like your password to contian numbers?");
    //console logs user's choice
    console.log("Specail characters chosen: " + confrimNumChar);
    //Prompt back to user if user selects true
    if (confrimNumChar === true) {
        alert("Your password will contain numerical characters.");
        //Prompt back to user if user selects false
    } else {
        alert("Your password will NOT contain any numerical characters.")
    }
    //proceeds to automatically run the next function (generatePassword)
    var password = generatePassword();
    //var "passwordText" is assigned to the element associated with the id: password form HTML
    var passwordText = document.querySelector("#password");
    //sets the var "passwordText" value equal to var "password"
    passwordText.value = password;
}
// "generatePassword" fucntion defined
function generatePassword() {
    // states what to do if only var "charSetUp is true"
    if (charSetUp === true, charSetLow === false, charSetSpecial === false, charSetNum === false) {
        /*states that the index will increase with one random characters chosen from charset
        until the the index reaches the same lenght as the user selected*/
        for (i = 0; i < chosenLength; i++) {
            //sets each each index to a random whole number inside the charset chosen 
            var iRandom = Math.floor(Math.random() * charSetUp.length);

        /* not sure how to get info presented in the #password element of html
        needing to creating all posibilities inside this funciton for user input 
        then app shoudl work. */
        }
    }

}
//responds by running the "writePassword" function when the gernate button is clicked
generateBtn.addEventListener("click", writePassword);


