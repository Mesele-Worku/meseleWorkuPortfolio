// Navigation menu toggle
const menuIcon = document.querySelector(".bx-menu");
const navbar = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navbar.classList.remove("active");
    menuIcon.classList.remove("bx-x");

    // Smooth scroll to section
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });

    // Update active class on navigation links
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

// Resume section tabs
const resumeBtns = document.querySelectorAll(".resume-btn");

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const resumeDetails = document.querySelectorAll(".resume-details");

    resumeBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");

    resumeDetails.forEach((details) => details.classList.remove("active"));
    resumeDetails[idx].classList.add("active");
  });
});

// Header shadow on scroll
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const header = document.querySelector("header");
  if (scrollHeight > 100) {
    header.style.boxShadow = "0 0.5rem 1rem rgba(0, 0, 0, 0.2)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Form submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  console.log("Form submitted:", data);
  alert("Thank you for your message! I will get back to you soon.");
  contactForm.reset();
});

// Highlight nav link based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollPos = window.scrollY + 100; // Offset for header

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
