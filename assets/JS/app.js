/*get the number of characters*/
function charLength() {
  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;
  return charLength;
}

document.getElementById("length").addEventListener("change", charLength);

// password
const text = document.querySelector("#password__result");
const copy = document.querySelector("#copyIcon");
const upper = document.getElementById("uppercase");
const lower = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbol = document.getElementById("symbols");
const length = document.getElementById("length");
const form = document.getElementById("form");

copy.addEventListener("click", async () => {
  const value = text.value;
  if (value) {
    await navigator.clipboard.writeText(value);
    alert("copied");
  } else {
    alert("there is no value to copy");
  }
  console.log(value);
});

function generateRandomValue(min, max) {
  const limit = max - min + 1;
  return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}
function capital() {
  return generateRandomValue(65, 90);
}
function small() {
  return generateRandomValue(97, 122);
}
function number() {
  return generateRandomValue(48, 57);
}
function symbols() {
  const symbols = "!@#$%^&*()_+{}|:<>?/.,;'";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

const functionArray = [
  {
    element: upper,
    function: capital,
  },
  {
    element: lower,
    function: small,
  },
  {
    element: numbers,
    function: number,
  },
  {
    element: symbol,
    function: symbols,
  },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const limit = length.value;
  let genPass = "";
  const funArray = functionArray.filter(({ element }) => element.checked);
  console.log(funArray);
  for (i = 0; i < limit; i++) {
    const index = Math.floor(Math.random() * funArray.length);
    const letter = funArray[index].function();
    genPass += letter;
  }
  text.value = genPass;
});
