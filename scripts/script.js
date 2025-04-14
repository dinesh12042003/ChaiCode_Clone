const slider = document.querySelector('.courses-slider');
const slides = document.querySelectorAll('.course-slide');
let currentIndex = 0;
let autoSlideInterval;
let isManualScroll = false;

function nextSlide() {
    if (!isManualScroll) {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

startAutoSlide();

slider.addEventListener('mousedown', () => {
    isManualScroll = true;
    stopAutoSlide();
});

slider.addEventListener('mouseup', () => {
    isManualScroll = false;
    startAutoSlide();
});

slider.addEventListener('mouseleave', () => {
    if (isManualScroll) {
        isManualScroll = false;
        startAutoSlide();
    }
});

slider.addEventListener('touchstart', () => {
    isManualScroll = true;
    stopAutoSlide();
});

slider.addEventListener('touchend', () => {
    isManualScroll = false;
    startAutoSlide();
});

slider.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) { // Scrolling right
        nextSlide();
    } else { // Scrolling left
        prevSlide();
    }
    isManualScroll = true;
    stopAutoSlide();
    setTimeout(() => {
        isManualScroll = false;
        startAutoSlide();
    }, 1000); // Restart auto slide after 1 second of manual scroll
});