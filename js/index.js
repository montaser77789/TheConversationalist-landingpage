/////////////// Active Links //////////////////////
document.addEventListener("DOMContentLoaded", (event) => {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        // Remove the active class and id from all links
        navLinks.forEach((link) => {
          link.classList.remove("active-link");
          link.id = "";
        });
  
        // Toggle the active class and id on the clicked link
        if (e.target.classList.contains("active-link")) {
          e.target.classList.remove("active-link");
          e.target.id = "";
        } else {
          e.target.classList.add("active-link");
          e.target.id = "active";
        }
      });
    });
  });
  
  /////////////// Carsol Pictures //////////////////////
  var images = [
    "images/Rectangle 4153.png",
    "images/Property 1=Variant2.png",
    "images/Property 1=Variant3.png",
    "images/Property 1=Variant4.png",
  ];
  var currentIndex = 0;
  
  function showNextImage() {
    var img = document.getElementById("slideshow-img");
  
    // Fade-out
    img.style.opacity = 0;
  
    setTimeout(function () {
      currentIndex = (currentIndex + 1) % images.length;
      img.src = images[currentIndex];
  
      // Fade-in
      img.style.opacity = 1;
    }, 300); // Match this duration with the CSS transition time
  }
  
  setInterval(showNextImage, 2000); // Change the image every 1.5 seconds
  
  ////////////// Search Icon /////////////////
  document.addEventListener("DOMContentLoaded", (event) => {
    const searchIcon = document.querySelector(".search-icon");
  
    searchIcon.addEventListener("click", (e) => {
      let searchInput = document.querySelector(".search-input");
  
      if (!searchInput) {
        // Create the search input if it doesn't exist
        searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.placeholder = "Search...";
        searchInput.classList.add("search-input");
  
        // Insert the input element before the search icon
        searchIcon.parentNode.insertBefore(searchInput, searchIcon);
      }
  
      // Toggle the display of the search input
      if (
        searchInput.style.display === "none" ||
        searchInput.style.display === ""
      ) {
        searchInput.style.display = "block";
        searchInput.focus(); // Set focus to the input field
      } else {
        searchInput.style.display = "none";
      }
    });
  });
  
  ////////////// Search Icon2 /////////////////
  document.addEventListener("DOMContentLoaded", (event) => {
    const searchIcon2 = document.querySelector(".search-icon2");
  
    searchIcon2.addEventListener("click", (e) => {
      let searchInput2 = document.querySelector(".search-input2");
  
      if (!searchInput2) {
        // Create the search input if it doesn't exist
        searchInput2 = document.createElement("input");
        searchInput2.type = "text";
        searchInput2.placeholder = "Search...";
        searchInput2.classList.add("search-input2"); // Ensure consistent naming
  
        // Insert the input element before the search icon
        searchIcon2.parentNode.insertBefore(searchInput2, searchIcon2);
      }
  
      // Toggle the display of the search input
      searchInput2.classList.toggle("visible");
      if (searchInput2.classList.contains("visible")) {
        searchInput2.focus(); // Set focus to the input field
      }
    });
  });
  
  /////////////////////// Add Cross ///////////////////////////
  document.addEventListener("DOMContentLoaded", function () {
    const leftArrow = document.querySelector(".about-review-info-card .cross1");
    const rightArrow = document.querySelector(".about-review-info-card .cross2");
    const reviewCards = document.querySelector(
      ".about-review-info-card .about-review-info-card"
    );
  
    // حساب مقدار التمرير بناءً على عرض البطاقة
    function getScrollAmount() {
      return reviewCards.clientWidth * 0.8; // يمكنك تغيير النسبة كما تريد
    }
  
    leftArrow.addEventListener("click", function () {
      reviewCards.scrollBy({
        top: 0,
        left: -getScrollAmount(),
        behavior: "smooth",
      });
    });
  
    rightArrow.addEventListener("click", function () {
      reviewCards.scrollBy({
        top: 0,
        left: getScrollAmount(),
        behavior: "smooth",
      });
    });
  });
  
  //////////////////// Contact section ///////////////////////////
  const textInputs = document.querySelectorAll('input[type="text"]');
  
  textInputs.forEach((input) => {
    input.addEventListener("input", () => {
      const clearIcon = input.parentElement.querySelector(".clear-icon");
      if (input.value !== "") {
        clearIcon.style.display = "flex";
      } else {
        clearIcon.style.display = "none";
      }
    });
  
    const clearIcon = input.parentElement.querySelector(".clear-icon");
    if (input.value !== "") {
      clearIcon.style.display = "flex";
    } else {
      clearIcon.style.display = "none";
    }
  });
  
  function clearInput(inputId) {
    const input = document.getElementById(inputId);
    input.value = "";
    input.dispatchEvent(new Event("input"));
  }
  
  function addShadow(inputBoxId) {
    document.getElementById(inputBoxId).classList.add("shadow");
  }
  
  function removeShadow(inputBoxId) {
    document.getElementById(inputBoxId).classList.remove("shadow");
  }
  // ///////////////////////////////
  document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.getElementById("navbarSupportedContent");
  
    function toggleIcon() {
      const isExpanded = navbarToggler.getAttribute("aria-expanded") === "true";
      const menuIcon = navbarToggler.querySelector(".menu-icon");
      const closeIcon = navbarToggler.querySelector(".close-icon");
  
      if (isExpanded) {
        menuIcon.classList.add("hide-icon");
        menuIcon.classList.remove("show-icon");
        closeIcon.classList.add("show-icon");
        closeIcon.classList.remove("hide-icon");
      } else {
        menuIcon.classList.add("show-icon");
        menuIcon.classList.remove("hide-icon");
        closeIcon.classList.add("hide-icon");
        closeIcon.classList.remove("show-icon");
      }
    }
  
    navbarCollapse.addEventListener("show.bs.collapse", function () {
      const menuIcon = navbarToggler.querySelector(".menu-icon");
      const closeIcon = navbarToggler.querySelector(".close-icon");
      menuIcon.classList.add("hide-icon");
      menuIcon.classList.remove("show-icon");
      closeIcon.classList.add("show-icon");
      closeIcon.classList.remove("hide-icon");
      navbarToggler.style.display = "none";
    });
  
    navbarCollapse.addEventListener("hide.bs.collapse", function () {
      const menuIcon = navbarToggler.querySelector(".menu-icon");
      const closeIcon = navbarToggler.querySelector(".close-icon");
      menuIcon.classList.add("show-icon");
      menuIcon.classList.remove("hide-icon");
      closeIcon.classList.add("hide-icon");
      closeIcon.classList.remove("show-icon");
      navbarToggler.style.display = "flex";
    });
  
    navbarToggler.addEventListener("click", function () {
      var swiper_card = document.querySelector(".swiper-container");
      setTimeout(() => {
        navbarToggler.style.display = "none"; 
        toggleIcon();
        swiper_card.style.zIndex = "-10";
      }, 350);
    });
  
    var x_header = document.querySelector(".x_header");
    x_header.addEventListener("click", function () {
      var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide(); 
      navbarToggler.style.display = "flex"; 
      toggleIcon();
    });
  });
  // ///////////////////////////
  // document.addEventListener("DOMContentLoaded", (event) => {
  //   const swiper = new Swiper(".swiper-container", {
  //     slidesPerView: "auto",
  //     spaceBetween: 15,
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //   });
  // });
  document.addEventListener("DOMContentLoaded", (event) => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 15,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      centeredSlides: false,
      loop: false,
      slideToClickedSlide: true,
      slidesOffsetAfter: 0,  // Ensure no extra offset at the end
    });
  });
  
  document.addEventListener("DOMContentLoaded", (event) => {
    const swiper = new Swiper(".mySwiper3", {
      slidesPerView: "auto",
      spaceBetween: 70,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
  
  var swiper = new Swiper('.mySwiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    mousewheel: true,
    on: {
      slideChange: function () {
        updateActivePagination(this);
      },
    },
  });
  
  // Function to update active pagination bullet
  function updateActivePagination(swiper) {
    const bullets = document.querySelectorAll('.swiper-pagination-bullet');
    bullets.forEach((bullet, index) => {
      if (index === swiper.activeIndex) {
        bullet.classList.add('swiper-pagination-bullet-active');
      } else {
        bullet.classList.remove('swiper-pagination-bullet-active');
      }
    });
  }
  
  