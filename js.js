//Naviation
// Add this to your js.js file
function toggleMenu() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
  }
  //End Navigation
  
  //Swiper Slider 1
  var swiper = new Swiper(".hero", {
    navigation: {
      nextEl: ".hero .swiper-button-next",
      prevEl: ".hero .swiper-button-prev",
    },
  });
  //END swiper slider 1
  
  //fILTER CARDS BY CATEGORY
  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".swiper-slide");
  
    // Handle filter button click
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-cat");
  
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("btn-active"));
  
        // Add active class to the clicked button
        button.classList.add("btn-active");
  
        // Show/Hide cards based on the category
        let visibleCards = 0;
        cards.forEach((card) => {
          const cardCategory = card.getAttribute("data-type");
          if (category === "all" || cardCategory === category) {
            card.style.display = "block"; // Show the card
            visibleCards++;
          } else {
            card.style.display = "none"; // Hide the card
          }
        });
  
        // Handle no result case
        const noResultMessage = document.querySelector(".no-result");
        if (visibleCards === 0) {
          noResultMessage.classList.remove("d-none");
        } else {
          noResultMessage.classList.add("d-none");
        }
      });
    });
  });
  
  
  //end filter CARDS BY CATEGORY
  
  //SWIPER SLIDER 2
  var swiper = new Swiper(".project-slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  });
  
  