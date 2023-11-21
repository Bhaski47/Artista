const button = document.getElementById("moveButton");
const button1 = document.getElementById("about-menu");
const slides = document.querySelectorAll(".slide");
button.addEventListener("click", () => {
  let currentSlide = 0;
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    slides[currentSlide].scrollIntoView({ behavior: "smooth" });
  } else {
    // If you want to scroll down 100vh, use this code
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: window.scrollY + windowHeight,
      behavior: "smooth",
    });
  }
});

button1.addEventListener("click", () => {
  let currentSlide = 0;
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    slides[currentSlide].scrollIntoView({ behavior: "smooth" });
  } else {
    // If you want to scroll down 100vh, use this code
    const windowHeight = window.innerHeight;
    window.scrollTo({
      top: window.scrollY + windowHeight,
      behavior: "smooth",
    });
  }
});

const button2 = document.getElementById("contact-menu");

button2.addEventListener("click", () => {
  // Get the height of the viewport
  const viewportHeight = window.innerHeight;
  
  // Scroll to the bottom of the page
  window.scrollTo({
    top: document.body.scrollHeight - viewportHeight,
    behavior: "smooth",
  });
});

const scrollToTopButton = document.getElementById("home-page");
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});