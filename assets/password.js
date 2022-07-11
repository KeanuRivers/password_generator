// Assignment Code
var generateBtn = document.querySelector("#generate");
var uletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lletters = "abcdefghijklmnopqrstuvwxyz";
var scharacter = "#$%^&!"
var nmbrs = "1234567890"
var validCharacters = ""
var validPassword = ""

// Write password to the #password input
function writePassword() {
  var passwordlength = parseInt(prompt("How many characters?"))
  if (passwordlength < 8 || passwordlength > 128) {
    alert("Please choose a number between 8 and 128.")
  }
  else {
    var uppercaseletter = confirm("Do you want uppercase letters in your password?")
    var lowercaseletter = confirm("Do you want lowercase letters in your password?")
    var numbers = confirm("Do you want numbers in your password?")
    var specialCharacter = confirm("Do you want special characters in your password?")
    if (uppercaseletter) {
      validCharacters += uletters
    }
    if (lowercaseletter) {
      validCharacters += lletters
    }
    if (numbers) {
      validCharacters += nmbrs
    }
    if (specialCharacter) {
      validCharacters += scharacter
    }
    for (let i = 1; i <= passwordlength; i++) {
      var index = Math.floor(Math.random() * validCharacters.length)
      validPassword += validCharacters[index]
    }
    console.log(validPassword)

    var passwordText = document.querySelector("#password");

    passwordText.value = validPassword;
  }
  



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);