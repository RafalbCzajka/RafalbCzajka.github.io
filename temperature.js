//Declaring variables
let celsius = 0;
let fahrenheit = 0;
let kelvin = 0;

//Function that runs on page load to assign the variables to their respective elements on the page.
const assignVariables = () => {
    celsius = document.getElementById("celsius");
    fahrenheit = document.getElementById('fahrenheit');
    kelvin = document.getElementById('kelvin');
    background = document.getElementById('background');
    attribution = document.getElementById('attributionText');
}

//Function to convert the input celsius value into fahrenheit and kelvin.
const convertCelsius = () => {
    let f = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));

    let k = (parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat(k.toFixed(2));
    changeBackground();
}

//Function to convert the input fahreinheit value into celsius and kelvin.
const convertFahrenheit = () => {
    let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(c.toFixed(2));

    let k = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273.15;
    kelvin.value = parseFloat(k.toFixed(2));
    changeBackground();
}

//Function to convert the input kelvin value into celsius and fahreinheit.
const convertKelvin = () => {
    let c = (parseFloat(kelvin.value) -273.15);
    celsius.value = parseFloat(c.toFixed(2));

    let f = (parseFloat(kelvin.value) - 273.15) * 9 / 5 + 32;
    fahrenheit.value = parseFloat(f.toFixed(2));
    changeBackground();
}

//Function to change the background image based on the temperature as well as updating the text in the attribution div.
const changeBackground = () => {
    if (celsius.value >= 30) {
        background.style.backgroundImage = "url('./images/background_5.jpg')";
        attribution.innerHTML = "Photo by <a href=\"https://unsplash.com/@eelco_bohtlingk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Eelco Böhtlingk</a> on <a href=\"https://unsplash.com/photos/Vl2OBElyJu4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>";
    } else if (celsius.value >= 25 && celsius.value < 30) {
        background.style.backgroundImage = "url('./images/background_4.jpg')";
        attribution.innerHTML = "Photo by <a href=\"https://unsplash.com/@calinstan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">CALIN STAN</a> on <a href=\"https://unsplash.com/photos/x-HCoTDGgZw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>";
    } else if (celsius.value >= 15 && celsius.value < 25) {
        background.style.backgroundImage = "url('./images/background_3.jpg')";
        attribution.innerHTML = "Photo by <a href=\"https://unsplash.com/@marekssteins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Mareks Steins</a> on <a href=\"https://unsplash.com/photos/Fyy-V6i9m38?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>";
    } else if (celsius.value >= 0 && celsius.value < 15) {
        background.style.backgroundImage = "url('./images/background_2.jpg')";
        attribution.innerHTML = "Photo by <a href=\"https://unsplash.com/@maksym_harbar?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Maksym Harbar</a> on <a href=\"https://unsplash.com/photos/2tm8_o9OOrY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>";
    } else if (celsius.value < 0) {
        background.style.backgroundImage = "url('./images/background_1.jpg')";
        attribution.innerHTML = "Photo by <a href=\"https://unsplash.com/@kalenemsley?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Kalen Emsley</a> on <a href=\"https://unsplash.com/photos/Bkci_8qcdvQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>";
    }
}