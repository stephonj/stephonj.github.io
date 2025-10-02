const paintings = [
    new Painting(
        "Bee Painting",
        "Lucia Stewart",
        "images/bee.jpeg",
        false
    ),
    new Painting(
        "Kitten",
        "Michael Creese",
        "images/kitten.jpeg",
        false
    ),
    new Painting(
        "Painting Flowers",
        "Woodstock School of Art",
        "images/flowers.jpeg",
        true
    ),
    new Painting(
        "Echoes of summer",
        "Kraneil",
        "images/ocean.jpeg",
        true
    ),
    new Painting(
        "Timeless Gallery Art",
        "Florencia Degraf",
        "images/timelessgalleryart.jpeg",
        true
    )
];

//  DOM elements
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close');

// Function to display all paintings in the gallery
function displayPaintings() {
    paintings.forEach((painting, index) => {
        const paintingDiv = document.createElement('div');
        paintingDiv.innerHTML = painting.getSection();
        paintingDiv.addEventListener('click', () => showModal(index));
        
        // Add to gallery
        gallery.appendChild(paintingDiv);
    });
}

// Function to show modal with painting details
function showModal(index) {
    const painting = paintings[index];
    modalBody.innerHTML = painting.getModalContent();
    modal.classList.add('show');
}

// Close modal
function closeModal() {
    modal.classList.remove('show');
}

// Event listener for close button
closeBtn.addEventListener('click', closeModal);

// Event listener to close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('DOMContentLoaded', displayPaintings);