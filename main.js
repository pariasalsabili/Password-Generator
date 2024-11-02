const passwordBox = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthDisplay = document.getElementById("lengthDisplay");
const copyMessage = document.getElementById("copyMessage");

const rangeInput = document.getElementById("length");

function updateSliderBackground() {
    const value = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100;
    rangeInput.style.setProperty("--value", `${value}%`);
}

rangeInput.addEventListener("input", updateSliderBackground);
updateSliderBackground();

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|{}<>/?-=";

function updateLengthDisplay() {
    lengthDisplay.textContent = lengthSlider.value;
}

function createPassword() {
    const Length = parseInt(lengthSlider.value);
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    let allChars = "";
    if (includeUppercase) allChars += upperCase;
    if (includeLowercase) allChars += lowerCase;
    if (includeNumbers) allChars += number;
    if (includeSymbols) allChars += symbol;

    if (allChars === "") {
        alert("Please select at least one character type!");
        return;
    }

    let password = "";
    for (let i = 0; i < Length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    copyMessage.style.display = "block";
    setTimeout(() => copyMessage.style.display = "none", 2000);
}
