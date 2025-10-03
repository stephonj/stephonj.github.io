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

        // Title
        const h4 = document.createElement("h4");
        h4.textContent = game.title;

        // Price
        const priceP = document.createElement("p");
        priceP.textContent = `$${game.price.toFixed(2)}`;

        // View Details button
        const detailsBtn = document.createElement("a");
        detailsBtn.classList.add("btn");
        detailsBtn.href = game.detail_page;
        detailsBtn.textContent = "View Details";

        // Append everything to card
        gameCard.append(imgDiv, h4, priceP, detailsBtn);

        // Append card to catalog grid
        catalogGrid.appendChild(gameCard);
    });
};

document.addEventListener("DOMContentLoaded", showGames);
