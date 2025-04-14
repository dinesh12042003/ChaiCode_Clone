document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("coursesSlider");
    const slides = container.querySelectorAll(".snap-section");
    let index = 0;
  
    setInterval(() => {
      index = (index + 1) % slides.length;
      container.scrollTo({
        left: container.offsetWidth * index,
        behavior: 'smooth'
      });
    }, 10000); // 10 seconds
  });
  