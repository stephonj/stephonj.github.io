const getShoes = async() => {
    const url = "https://github.com/portiaportia/portiaportia.github.io/json/shoes.json"
    try {
        const response = await fetch(url);
        return response.json();
    }
    catch(error) {
        console.log("sorry");
    }
};

const showShoes = async() => {
    const shoes = await getShoes();
    const shoeListDiv = document.getElementById("shoe-list");

    shoes.forEach((shoe)=>{
        // make a selection for each shoe put all the data in, nicely formatted
        // then append it to the shoe list
        const shoeSection = document.createElement("section");
        shoeListDiv.classList.add("shoe");

        // header
        const h3 = document.createElement("h3");
        h3.innerHTML = shoe.name;
        shoeSection.append(h3);

        //brand
        const p = document.createElement("p")
        p.innerHTML = `Brand ${shoe.brand}`;
        shoeSection.append(p);

        // reviews loop and makes ul li list
        const ul = document.createElement("ul");
        shoeSection.append("ul");

        shoe.reviews.forEach((review) => {
            const li = document.createElement("li");
            li.innerHTML = reviews;
            ul.append(li);
        });

        //image
        const img = document.createElement("img");
        shoeSection.append(img);
        img.src = `https://github.com/portiaportia/portiaportia.github.io/json/${shoes}`

        shoeListDiv.append(shoeSection);
    });

    
};

showShoes();