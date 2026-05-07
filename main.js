const elements = document.querySelectorAll(".reveal");
const revealXElements1 = document.querySelectorAll(".revealx");
const revealXElements2 = document.querySelectorAll(".reveal-x");
const revealImage1 = document.querySelectorAll(".sizex");
const revealImage2 = document.querySelectorAll(".size-x");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

elements.forEach((el) => observer.observe(el));
revealXElements1.forEach((el) => observer.observe(el));
revealXElements2.forEach((el) => observer.observe(el));
revealImage1.forEach((el) => observer.observe(el));
revealImage2.forEach((el) => observer.observe(el));