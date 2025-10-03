const JSON_URL = "https://stephonj.github.io/csce242/projects/part6/json/games.json";

async function loadGames() {
    try {
        const response = await fetch(JSON_URL);
        if (!response.ok) throw new Error("Failed to fetch games JSON");

        const data = await response.json();
        const games = data.games;

        const catalogGrid = document.querySelector(".catalog-grid");
        catalogGrid.innerHTML = "";

        games.forEach(game => {
            const gameCard = document.createElement("div");
            gameCard.className = "game-card";

            gameCard.innerHTML = `
                <div class="game-card-image">
                    <img src="${JSON_URL.replace("games.json","")}${game.img_name}" alt="${game.title}">
                </div>
                <h4>${game.title}</h4>
                <p>$${game.price.toFixed(2)}</p>
                <a href="${game.detail_page}" class="btn">View Details</a>
            `;

            catalogGrid.appendChild(gameCard);
        });

    } catch (err) {
        console.error(err);
        document.querySelector(".catalog-grid").innerHTML = `
            <p style="color:red; grid-column:1/-1; text-align:center;">
                Failed to load games. Please try again later.
            </p>
        `;
    }
}

document.addEventListener("DOMContentLoaded", loadGames);
