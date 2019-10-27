const specialChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  ".",
  "?",
  "@",
  "["
];

const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

const numChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//create a function called "password "ask user how long they would like their password
function password() {
  let passwordLength = prompt(
    "How long should the password be - pick a number between 8 and 128"
  );
  if (isNaN(passwordLength) === true) {
    alert("Please provide a number");
    return;
  }
  if (passwordLength < 8) {
    alert("Please choose a number equal or greater than 8");
    return;
  }
  if (passwordLength > 128) {
    alert("Please choose a number equal or smaller than 128");
    return;
  }
  //ask user which character types they would like to include
  let haveSpecialChar = confirm(
    "Click OK to confirm you woud like special characters"
  );
  let haveNumericalChar = confirm("Click OK to confirm you woud like numbers");
  let haveLowerCase = confirm(
    "Click OK to confirm you woud like lowercase letters"
  );
  let haveUpperCase = confirm(
    "Click OK to confirm you woud like uppercase letters"
  );
  //if no character types are chosen, prompt the user to choose at least one type!
  if (
    haveSpecialChar === false &&
    haveNumericalChar === false &&
    haveLowerCase === false &&
    haveUpperCase === false
  ) {
    alert("Please select at least one character type!");
    return;
  }

  //create an array with all the password options as objects
  let passwordOptions = {
    passwordLength: Number(passwordLength),
    haveSpecialChar: haveSpecialChar,
    haveNumericalChar: haveNumericalChar,
    haveLowerCase: haveLowerCase,
    haveUpperCase: haveUpperCase
  };
  return passwordOptions;
}

//create a function that chooses a random element from a given array

function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);

  let randomElement = arr[randomIndex - 1];
  return randomElement;
}

//create a function that will generate the password

function generatePassword() {
  let options = password();
  let result = [];
  let possibleCharacters = [];
  if (!options) {
    return;
  }

  if (options.haveSpecialChar) {
    possibleCharacters = possibleCharacters.concat(specialChar);
    result.push(getRandom(specialChar));
  }
  if (options.haveNumericalChar) {
    possibleCharacters = possibleCharacters.concat(numChar);
    result.push(getRandom(numChar));
  }

  if (options.haveLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    result.push(getRandom(lowerCase));
  }

  if (options.haveUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    result.push(getRandom(upperCase));
  }

  const arrayLength = options.passwordLength - result.length;

  for (let i = 0; i < arrayLength; i++) {
    result.push(getRandom(possibleCharacters));
  }

  //join all the characters together to create one string
  document.getElementById("output").value = result.join("");
}

function copyToClipboard() {
  /* Get the text field */
  var copyText = document.getElementById("output");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
