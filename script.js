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

function password() {
  let passwordLength = prompt(
    "How long should the password be - pick a number between 8 and 128"
  );
  if (isNaN(passwordLength) === true) {
    alert("Please provide a number");
    return;
  }
  if (passwordLength <= 8) {
    alert("Please choose a number equal or greater than 8");
    return;
  }
  if (passwordLength >= 128) {
    alert("Please choose a number equal or smaller than 128");
    return;
  }

  let haveSpecialChar = confirm(
    "Click OK to confirm you woud like special characters"
  );
  let haveNumericalChar = confirm(
    "Click OK to confirm you woud like numerical characters"
  );
  let haveLowerCase = confirm("Click OK to confirm you woud like lowercase");
  let haveUpperCase = confirm("Click OK to confirm you woud like uppercase");
  if (
    haveSpecialChar === false &&
    haveNumericalChar === false &&
    haveLowerCase === false &&
    haveUpperCase === false
  ) {
    alert("Please select at least one character type!");
    return;
  }

  let passwordOptions = {
    passwordLength: Number(passwordLength),
    haveSpecialChar: haveSpecialChar,
    haveNumericalChar: haveNumericalChar,
    haveLowerCase: haveLowerCase,
    haveUpperCase: haveUpperCase
  };
  return passwordOptions;
}

function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);

  let randomElement = arr[randomIndex - 1];
  return randomElement;
}

function generatePassword() {
  let options = password();
  let result = [];
  let possibleCharacters = [];
  let guaranteedCharacters = [];
  if (!options) {
    return;
  }
  if (options.haveSpecialChar) {
    possibleCharacters = possibleCharacters.concat(specialChar);
    guaranteedCharacters.push(getRandom(specialChar));
  }
  if (options.haveNumericalChar) {
    possibleCharacters = possibleCharacters.concat(numChar);
    guaranteedCharacters.push(getRandom(numChar));
  }

  if (options.haveLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));
  }

  if (options.haveUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
  }

  const arrayLength = options.passwordLength - guaranteedCharacters.length;

  for (let i = 0; i < arrayLength; i++) {
    result.push(getRandom(possibleCharacters));
  }

  document.getElementById("output").value = result
    .concat(guaranteedCharacters)
    .join("");
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
