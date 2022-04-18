// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upperCase = "HJKDSVGUYVHBVUYVBURYVBUEGVYU"
var lowerCase = "bkabvuybhvjuyebvvvjhrejbvhj"
var numbers = "0123456789"
function generatePassword() {
  // Welcome aboard
  var possibleOptions=""
  console.log("hey!  you clicked the button!");
  var character=window.prompt("HOW MANY CHARACTERS WOULD YOU LIKE YOUR PASSWORD TO CONTAIN?");
  if(parseInt(character)>128 || parseInt(character)<8) {
    alert("number must be between 8 to 128");
    return;
  }
  console.log("numberofcharactervalues",character);
  var wantsUppercase=window.confirm("would you want uppercase?");
  console.log("wants uppercase value",wantsUppercase);
  var wantsLowerCase=window.confirm("would you want lowercase");
  console.log("wants lowercase values",lowerCase);
   var numbersRandom =window.confirm("do you want numbers");
  console.log("wants random numbers", numbersRandom);
  window.alert("PASSWORD GENERATOR");
  // create if statements to check the confirm values
  // push the confirmed values into a string of possible options for the password
 if(parseInt(character)>128 || parseInt(character)<8) {
   alert("number must be between 8 to 128");
   return;
 }
 // create for loops to randomly select characters from the possible options
 if(wantsUppercase === true){
  console.log("use uppercase");
  possibleOptions+=upperCase
 
  
}
 if(wantsLowerCase === true){
  console.log("use lowercase");
possibleOptions+=lowerCase
}
if(numbersRandom === true){
  console.log("use numbers");
  possibleOptions+= numbers
} 
return possibleOptions;

}

 
 
// Write password to the #password input





  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 


