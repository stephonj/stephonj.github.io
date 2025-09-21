// Wanted to put these const in 1 spot so that the code would look better
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const arrow = document.querySelector('.arrow');
const exercise1Link = document.getElementById('exercise1Link');
const exercise2Link = document.getElementById('exercise2Link');
const plantingSection = document.getElementById('plantingSection');
const digitalClockSection = document.getElementById('digitalClockSection');
const plantSlider = document.getElementById('plantSlider');
const plantImage = document.getElementById('plantImage');
const daysMessage = document.getElementById('daysMessage');
const statusMessage = document.getElementById('statusMessage');
const digitalClock = document.getElementById('digitalClock');

// Menu Toggle
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
    arrow.classList.toggle('rotated');
});

// Nav Links
exercise1Link.addEventListener('click', () => {
    plantingSection.classList.remove('hidden');
    digitalClockSection.classList.add('hidden');
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
        arrow.classList.remove('rotated');
    }
});

exercise2Link.addEventListener('click', () => {
    digitalClockSection.classList.remove('hidden');
    plantingSection.classList.add('hidden');
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
        arrow.classList.remove('rotated');
    }
});

// Plant Slider
plantSlider.addEventListener('input', updatePlantStatus);

function updatePlantStatus() {
    const days = parseInt(plantSlider.value);
    
    // Update days message
    daysMessage.textContent = `It's been ${days} days since watering your plant`;
    statusMessage.className = '';
    
    // Update plant image and status based on days
    if (days >= 1 && days <= 2) {
        // Healthy plant
        plantImage.src = 'images/plant-healthy.jpeg';
        plantImage.alt = 'Healthy plant with sunshine';
        statusMessage.textContent = 'Your plant is healthy and happy';
        statusMessage.classList.add('status-healthy');
    } else if (days >= 3 && days <= 5) {
        plantImage.src = 'images/plant-needs-water.jpeg';
        plantImage.alt = 'Plant needing water with water droplets';
        statusMessage.textContent = 'Your plant needs watering';
        statusMessage.classList.add('status-warning');
    } else if (days >= 6 && days <= 9) {
        plantImage.src = 'images/plant-drooping.jpeg';
        plantImage.alt = 'Drooping plant with wilted leaves';
        statusMessage.textContent = 'Leaves are dropping, the color is changing, water soon';
        statusMessage.classList.add('status-danger');
    } else if (days >= 10 && days <= 12) {
        plantImage.src = 'images/plant-dead.jpeg';
        plantImage.alt = 'Dead plant in cracked soil';
        statusMessage.textContent = 'Sorry, your plant is no longer with us';
        statusMessage.classList.add('status-danger');
    }
}

// Digital Clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    
    // Convert to 12-hour
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const timeString = `${hours}:${minutesStr} ${ampm}`;
    digitalClock.textContent = timeString;
}

// Initialize and update the clock 
updateClock();
setInterval(updateClock, 60000); 

// Initialize plant status
updatePlantStatus();

// Mobile Menu
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.classList.remove('show');
        arrow.classList.remove('rotated');
    }
});