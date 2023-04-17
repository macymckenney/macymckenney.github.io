const carouselImages = [
    {
        url: 'images/idphoto.png',
        title: 'Image 1 Title',
        description: 'Image 1 Description'
    },
    {
        url: 'images/Lancer Robot.png',
        title: 'Image 2 Title',
        description: 'Image 2 Description'
    },
    {
        url: 'images/mail.png',
        title: 'Image 3 Title',
        description: 'Image 3 Description'
    },
    {
        url: 'images/Robot parts.png',
        title: 'Image 455 Title',
        description: 'Image 4 Description'
    }
];

const carousel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let currentSlide = 0;
let loadedImages = 0;

// Load the images and captions
carouselImages.forEach((image, index) => {
    const slide = slides[index];
    const img = new Image();
    img.onload = () => {
        // Update the slide with the loaded image and caption
        slide.querySelector('img').src = image.url;
        slide.querySelector('h2').textContent = image.title;
        slide.querySelector('p').textContent = image.description;

        loadedImages++;

        // If all images have loaded, show the first slide
        if (loadedImages === carouselImages.length) {
            showSlide(0);
        }
    };
    img.src = image.url;
});

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    let nextIndex = currentSlide + 1;
    if (nextIndex >= slides.length) {
        nextIndex = 0;
    }
    showSlide(nextIndex);
}

function prevSlide() {
    let prevIndex = currentSlide - 1;
    if (prevIndex < 0) {
        prevIndex = slides.length - 1;
    }
    showSlide(prevIndex);
}

// Attach event listeners to the prev and next buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Automatically advance the slides every 5 seconds
setInterval(nextSlide, 5000);
