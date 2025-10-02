class Painting {
    constructor(name, artist, image, isFramed) {
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.isFramed = isFramed;
    }

    // Gallery grid
    getSection() {
        return `
            <section class="painting-card">
                <img src="${this.image}" alt="${this.name}" class="painting-image">
                <h3 class="painting-title">${this.name}</h3>
            </section>
        `;
    }

    // Modal dialog
    getModalContent() {
    const frameClass = this.isFramed ? 'framed' : '';
    return `
        <h2>${this.name}</h2>
        <p class="artist">by ${this.artist}</p>
        <div class="image-container ${frameClass}">
            <img src="${this.image}" alt="${this.name}">
        </div>
    `;
}
}