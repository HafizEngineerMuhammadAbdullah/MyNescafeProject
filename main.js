// Select Vertical reveal elements
const elements = document.querySelectorAll(".reveal");
// Select Right-to-left reveal
const revealXElements1 = document.querySelectorAll(".revealx");
// Select Left-to-right reveal
const revealXElements2 = document.querySelectorAll(".reveal-x");
// Image animation (right)
// slide , scale from right
const revealImage1 = document.querySelectorAll(".sizex");
// Image animation (left)
// slide , scale from left
const revealImage2 = document.querySelectorAll(".size-x");


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // if observer detects
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

// const animatedElements = document.querySelectorAll(
//   ".reveal, .revealx, .reveal-x, .sizex, .size-x"
// );

// animatedElements.forEach((el) => observer.observe(el));

elements.forEach((el) => observer.observe(el));
revealXElements1.forEach((el) => observer.observe(el));
revealXElements2.forEach((el) => observer.observe(el));
revealImage1.forEach((el) => observer.observe(el));
revealImage2.forEach((el) => observer.observe(el));