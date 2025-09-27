// NBA Players
const playersBefore = {};
playersBefore["Shai Gilgeous-Alexander"] = "images/shaibefore.jpeg";
playersBefore["Nikola Jokic"] = "images/jokicbefore.jpeg";
playersBefore["Giannis Antetokounmpo"] = "images/giannisbefore.jpeg";
playersBefore["Luka Doncic"] = "images/lukabefore.jpeg";

const playersAfter = {};
playersAfter["Shai Gilgeous-Alexander"] = "images/shai.jpeg";
playersAfter["Nikola Jokic"] = "images/jokic.jpeg";
playersAfter["Giannis Antetokounmpo"] = "images/giannis.jpeg";
playersAfter["Luka Doncic"] = "images/luka.jpeg";

// const elements
const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupImage = document.getElementById('popup-image');
const closeBtn = document.getElementById('close');

// Create player cards on page load
function createPlayerCards() {
    for (let playerName in playersBefore) {
        const card = document.createElement('div');
        card.className = 'player-card';
        const img = document.createElement('img');
        img.src = playersBefore[playerName];
        img.alt = playerName;
        img.loading = "lazy";
        const info = document.createElement('div');
        info.className = 'player-info';
        const nameDiv = document.createElement('div');
        nameDiv.className = 'player-name';
        nameDiv.textContent = playerName;

        const statusDiv = document.createElement('div');
        statusDiv.className = 'player-status';
        statusDiv.textContent = "Click to see transformation!";
        info.appendChild(nameDiv);
        info.appendChild(statusDiv);
        card.appendChild(img);
        card.appendChild(info);

        // Popup
        card.onclick = () => showPopup(playerName);

        // Add card
        gallery.appendChild(card);
    }
}

// Show popup with after image
function showPopup(playerName) {
    popupTitle.textContent = `${playerName} - NBA Superstar!`;
    popupImage.src = playersAfter[playerName];
    popupImage.alt = `${playerName} after transformation`;
    popup.classList.remove('hidden');
}

// Close popup
function closePopup() {
    popup.classList.add('hidden');
}

// Event listeners
closeBtn.onclick = () => closePopup();

// Initialize the gallery
createPlayerCards();
