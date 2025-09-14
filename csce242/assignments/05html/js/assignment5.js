// Sunny Times
document.getElementById("sunny-times").onclick = () => {
    document.getElementById("p-sunny-1").classList.remove("hidden");
    document.getElementById("p-sunny-2").classList.remove("hidden");
    document.getElementById("p-sunny-3").classList.remove("hidden");
};

// Color Picker
const colorPicker = document.getElementById("color-picker");
colorPicker.oninput = (event) => {
    const newColor = event.currentTarget.value;
    document.body.style.backgroundColor = newColor;
};

// Weather
const weatherImg = document.getElementById("weather-img");

weatherImg.onclick = () => {
  weatherImg.src = "https://cdn-icons-png.flaticon.com/512/869/869869.png"; // Sun image
  weatherImg.alt = "Sunny weather";
};
