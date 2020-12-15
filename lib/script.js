// Assignment Code
const generateBtn = $('#generate');

const charSetUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charSetLow = 'abcdefghijklmnopqrstuvwxyz';
const charSetSpecial = '!@#$%^&*()_-+=;/?.,><';
const charSetNum = 1234567890;

let passWord =[];
let charSet = [];


generateBtn.on('click', function (event) {
    event.preventDefault();
    promptUser();
});


function promptUser() {


    var chosenLength;
    var upperCaseChar;
    var lowerCaseChar;
    var specialChar;
    var numChar;

    chooseLength();
    confrimUpChar();
    confrimLowChar();
    confrimSpecialChar();
    confrimNumChar();



    function chooseLength() {
        chosenLength = prompt("Please choose a password lenght between 8 and 128 characters.");
        if (chosenLength <= 7 || chosenLength >= 129 || isNaN(chosenLength)) {
            alert("Please choose a password lenght between 8 and 128 characters.");
            chooseLength();
        } else {
            console.log(`User chose a password lenght of: ${chosenLength}`);
        };
    };
    function confrimUpChar() {
        upperCaseChar = confirm("Would you like your password to contain upper case characters?");
        if (upperCaseChar) {
            console.log('Password to contain upper case letters.');
        } else {
            console.log('No uppercse letters will be used.')
        };
    };
    function confrimLowChar() {
        lowerCaseChar = confirm("Would you like your password to contain lower case characters?");
        if (lowerCaseChar) {
            console.log('Password will contain lower case letters.');
        } else {
            console.log('No lowerrcse letters will be used.');
        };
    };
    function confrimSpecialChar() {
        specialChar = confirm('Whoud you like your password to contian speacial characters?');
        if (specialChar) {
            console.log('Password will contain special characters.');
        } else {
            console.log('No special characters will be used.');
        };
    };
    function confrimNumChar() {
        numChar = confirm('Whoud you like your password to contian numbers?');
        if (numChar) {
            console.log('Password will contain numerical characters.');
        } else {
            console.log('No numerical characters will be used.');
        };
    };

    generatePassword();

    function generatePassword() {
        if (upperCaseChar) {
            charSet.push(charSetUp);
        } if (lowerCaseChar) {
            charSet.push(charSetLow);
        } if (specialChar) {
            charSet.push(charSetSpecial);
        } if (numChar) {
            charSet.push(charSetNum);
        };
        let placeHodlerArray = charSet.join("");
        // for loop settting lenght of password to the user's chosen length
        for (var i = 0; i < chosenLength; i++) {
            // Math object methods to choose random character stored in the 'charSet' array
            var password = placeHodlerArray[Math.floor(Math.random() * placeHodlerArray.length)];
            toString(password); 
            console.log(password);
            passWord.push(password);
            console.log(passWord);
           
        };

        
        $('#password').append(passWord);
    };




}



