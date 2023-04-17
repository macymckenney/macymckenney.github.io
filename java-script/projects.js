const carouselImages = [
    {
        url: 'images/robotic-comp.png',
        title: 'Robot Disc Golf Vex Competition ',
        description: 'I was on computer programming team for this robot and we got 3rd place!'
    },
    {
        url: 'images/Lancer Robot.png',
        title: 'Remote Controlled Robot',
        description: 'My team and I designed and coded a robot that collected golf balls and disposed them into the bucket'
    },
    {
        url: 'images/alexa-arduino.png',
        title: 'Alexa Arduino',
        description: 'My team programmed Alexa to turn the lights on the breadboard on and off'
    },
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
