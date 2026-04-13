// nav active item js code
const navLinks = document.querySelectorAll(".nav-link, .dropdown-item");
const sections = document.querySelectorAll("section");


navLinks.forEach((link) => {
  link.addEventListener("click", function () {

    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");

    const parentDropdown = this.closest(".dropdown");
    if (parentDropdown) {
      parentDropdown.querySelector(".nav-link").classList.add("active");
    }
  });
});


window.addEventListener("scroll", function () {
  let currentSection = "";

  sections.forEach((section) => {
    let sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");

      const parentDropdown = link.closest(".dropdown");
      if (parentDropdown) {
        parentDropdown.querySelector(".nav-link").classList.add("active");
      }
    }
  });
});

// nav items js complete
//about progress
document.querySelectorAll(".circle").forEach((el) => {
  let percent = el.getAttribute("data-percent");
  let degree = percent * 3.6;
  el.style.setProperty("--value", degree);
});

// swippper slider
const swiper = new Swiper(".testimonial-slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,

  speed: 6000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

   breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

// accordion js
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    
    faqItems.forEach(el => {
      if (el !== item) el.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});

// form validation js
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;

  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // reset
  document.querySelectorAll(".error").forEach(el => el.innerText = "");
  document.querySelectorAll(".form-control").forEach(el => el.classList.remove("input-error"));

  // NAME
  if (name.value.trim() === "") {
    setError(name, "Name is required");
    isValid = false;
  }

  // PHONE
  if (!/^[0-9]{10}$/.test(phone.value)) {
    setError(phone, "Enter valid 10 digit phone");
    isValid = false;
  }

  // EMAIL
  if (!validateEmail(email.value)) {
    setError(email, "Enter valid email");
    isValid = false;
  }

  // MESSAGE
  if (message.value.trim() === "") {
    setError(message, "Message is required");
    isValid = false;
  }

  // SUCCESS
  if (isValid) {
    alert("Form submitted successfully 🚀");
    form.reset();
  }
});


// helper
function setError(input, message) {
  input.classList.add("input-error");
  input.nextElementSibling.innerText = message;
}

function validateEmail(email) {
  return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
}