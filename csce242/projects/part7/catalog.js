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

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("game-card-image");
        const img = document.createElement("img");
        img.src = `https://stephonj.github.io/csce242/projects/part6/json/${game.img_name}`;
        img.alt = game.title;
        imgDiv.appendChild(img);

        const h4 = document.createElement("h4");
        h4.textContent = game.title;

        const priceP = document.createElement("p");
        priceP.textContent = `$${game.price.toFixed(2)}`;

        const detailsBtn = document.createElement("button");
        detailsBtn.classList.add("btn");
        detailsBtn.textContent = "View Details";
        detailsBtn.addEventListener("click", () => openModal(game));

        gameCard.append(imgDiv, h4, priceP, detailsBtn);
        catalogGrid.appendChild(gameCard);
    });
};

// Modal 
const openModal = (game) => {
    const modal = document.getElementById("gameModal");
    document.getElementById("modal-title").textContent = game.title;
    document.getElementById("modal-image").src = `https://stephonj.github.io/csce242/projects/part6/json/${game.img_name}`;
    document.getElementById("modal-desc").textContent = game.description || "No description available.";
    document.getElementById("modal-price").textContent = `Price: $${game.price.toFixed(2)}`;
    modal.style.display = "block";
};

document.addEventListener("DOMContentLoaded", showGames);

// Close modal when clicking X or outside
document.addEventListener("click", (event) => {
    const modal = document.getElementById("gameModal");
    if (event.target.classList.contains("close") || event.target === modal) {
        modal.style.display = "none";
    }
});
