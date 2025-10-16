const getGames = async () => {
    const url = "https://stephonj.github.io/csce242/projects/part6/json/games.json";
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.games;
    } catch (error) {
        console.error("Failed to fetch games JSON:", error);
        return [];
    }
};

const showGameDialog = (game) => {
    const dialog = document.getElementById("game-dialog");
    
    // Populate modal with game data
    document.getElementById("dialog-img").src = `https://stephonj.github.io/csce242/projects/part6/json/${game.img_name}`;
    document.getElementById("dialog-img").alt = game.title;
    document.getElementById("dialog-title").textContent = game.title;
    document.getElementById("dialog-genre").textContent = game.genre;
    document.getElementById("dialog-platform").textContent = game.platform;
    document.getElementById("dialog-release").textContent = game.release_date;
    document.getElementById("dialog-price").textContent = `$${game.price.toFixed(2)}`;
    document.getElementById("dialog-description").textContent = game.description;
    document.getElementById("dialog-details-link").href = game.detail_page;
    
    // Show the modal
    dialog.showModal();
};

const showGames = async () => {
    const games = await getGames();
    const catalogGrid = document.querySelector(".catalog-grid");
    catalogGrid.innerHTML = "";

    games.forEach(game => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("game-card");

        // Game image
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("game-card-image");
        const img = document.createElement("img");
        img.src = `https://stephonj.github.io/csce242/projects/part6/json/${game.img_name}`;
        img.alt = game.title;
        imgDiv.appendChild(img);

        // Game title
        const h4 = document.createElement("h4");
        h4.textContent = game.title;

        // Game price
        const priceP = document.createElement("p");
        priceP.textContent = `$${game.price.toFixed(2)}`;

        // Quick View button (opens modal)
        const quickViewBtn = document.createElement("button");
        quickViewBtn.classList.add("btn");
        quickViewBtn.textContent = "Quick View";
        quickViewBtn.onclick = () => showGameDialog(game);

        // Build card and add to grid
        gameCard.append(imgDiv, h4, priceP, quickViewBtn);
        catalogGrid.appendChild(gameCard);
    });
};

// Initialize and handle modal close behavior
document.addEventListener("DOMContentLoaded", () => {
    showGames();
    
    const dialog = document.getElementById("game-dialog");
    const closeBtn = document.getElementById("close-dialog");
    
    // Close modal when clicking the X button
    closeBtn.onclick = () => dialog.close();
    
    // Close modal when clicking outside of it
    dialog.onclick = (e) => {
        if (e.target === dialog) dialog.close();
    };
});

