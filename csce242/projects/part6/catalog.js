// URL to your JSON file on GitHub (you'll need to replace this with your actual URL)
const JSON_URL = 'https://stephonj.github.io/csce242/projects/part6/json/games.json';

// Function to load and display games from JSON
async function loadGames() {
    try {
        // Fetch the JSON data
        const response = await fetch(JSON_URL);
        
        if (!response.ok) {
            throw new Error('Failed to fetch games data');
        }
        
        const data = await response.json();
        const games = data.games;
        
        // Get the catalog grid container
        const catalogGrid = document.querySelector('.catalog-grid');
        
        // Clear existing content
        catalogGrid.innerHTML = '';
        
        // Loop through each game and create HTML
        games.forEach(game => {
            // Create game card HTML
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            
            gameCard.innerHTML = `
                <div class="game-card-image">
                    <img src="${game.img_name}" alt="${game.title}">
                </div>
                <h4>${game.title}</h4>
                <p>$${game.price.toFixed(2)}</p>
                <a href="${game.detail_page}" class="btn">View Details</a>
            `;
            
            // Add the game card to the catalog grid
            catalogGrid.appendChild(gameCard);
        });
        
        console.log(`Successfully loaded ${games.length} games from JSON`);
        
    } catch (error) {
        console.error('Error loading games:', error);
        
        // Display error message to user
        const catalogGrid = document.querySelector('.catalog-grid');
        catalogGrid.innerHTML = '<p style="color: red; grid-column: 1/-1; text-align: center;">Failed to load games. Please try again later.</p>';
    }
}

// Load games when the page loads
document.addEventListener('DOMContentLoaded', loadGames);