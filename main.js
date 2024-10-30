// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Gallery Data
const artworks = [
    {
        id: 1,
        title: "Akim Redesign",
        image: "./assets/Afute art/art1.jpg",
        category: "Tetherless"
    },
    {
        id: 2,
        title: "Little Exposure",
        image: "./assets/Afute art/art4.jpg",
        category: "Tetherless"
    },
    {
        id: 3,
        title: "Abstract Thoughts",
        image: "./assets/Afute art/art3.jpg",
        category: "digital"
    },
    {
        id: 4,
        title: "Serenity",
        image: "./assets/Afute art/art8.jpg",
        category: "OMOB"
    },
    {
        id: 5,
        title: "Tactless Rebirth",
        image: "./assets/Afute art/art7.jpg",
        category: "Tetherless"
    },
    {
        id: 6,
        title: "Le Vide",
        image: "./assets/Afute art/art11.jpg",
        category: "OMOB"
    }
];

// Gallery Implementation
const galleryGrid = document.querySelector('.gallery-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

function createGalleryItem(artwork) {
    return `
        <div class="gallery-item" data-category="${artwork.category}">
            <img src="${artwork.image}" alt="${artwork.title}">
            <div class="overlay">
                <h3>${artwork.title}</h3>
                <p>${artwork.category}</p>
            </div>
        </div>
    `;
}

function displayArtworks(category = 'all') {
    const filteredArtworks = category === 'all'
        ? artworks
        : artworks.filter(art => art.category === category);
    
    galleryGrid.innerHTML = filteredArtworks.map(createGalleryItem).join('');
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayArtworks(button.dataset.category);
    });
});

// Contact Form
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    contactForm.reset();
    alert('Thank you for your message! I will get back to you soon.');
});

// Initialize Gallery
displayArtworks();

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        navLinks.classList.remove('active');
    });
});