// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


//defines password length
var userPassLength = 0;

//initialise the array with the user options
var arrUserCharactersTypes = [];




// Function to prompt user for password options
function getPasswordOptions() {
	
	//takes the password length
	userPassLength = document.getElementById('userPasswordLength').value;
	
	//reset array 
	arrUserCharactersTypes = [];
	
	//adds special characters or not,in base of user choice 
	if(document.getElementById('userSpecialCharacters').checked === true){
		arrUserCharactersTypes.push(specialCharacters);
	}

  //adds numeric characters or not,in base of user choice 
	if(document.getElementById('userNumericCharacters').checked === true){
		arrUserCharactersTypes.push(numericCharacters);
	}
	
  //adds lower cased characters or not,in base of user choice 
	if(document.getElementById('userLowerCasedCharacters').checked === true){
		arrUserCharactersTypes.push(lowerCasedCharacters);
	}

  //adds upper cased characters or not,in base of user choice 
	if(document.getElementById('userUpperCasedCharacters').checked == true){
		arrUserCharactersTypes.push(upperCasedCharacters);
	}
	
}

// Function for getting a random element from an array
function getRandom(arr) {
	var item = arr[Math.floor(Math.random()*arr.length)];
	return item;
}

// Function to generate password with user input
function generatePassword() {

  //defines variable with array of user input
	var arrCharacterType = '';
	
	//password generated with user input
	var charsPass = '';
	
	//for loop that will generate the password length 
	for(var i=1; i <= userPassLength; i++){
		
    //would be equal with one of the types of arrays that will contain user input
		arrCharacterType = getRandom(arrUserCharactersTypes);
		
    //would be equal with one of the characters from array 
		charsPass += getRandom(arrCharacterType);
		
	}
	
	return charsPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  
  //actualising user choices
  getPasswordOptions();
  
  var password;
  
  //if the user choses at least one type of characters, the password would be generated
  if(arrUserCharactersTypes.length > 0){
	  password = generatePassword();
  }
  //otherwise error text is displayed
  else{
	  password = "Character Type Error!";
  }
  
  var passwordText = document.querySelector('#password');
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);