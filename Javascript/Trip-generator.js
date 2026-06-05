document.addEventListener('DOMContentLoaded', () => {

  const hamburger  = document.querySelector(".hamburger");
  const navMenu    = document.querySelector(".nav-menu");
  const navbar     = document.querySelector(".nav-bar");

  hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      navbar.classList.toggle("clicked");
  });

  document.querySelectorAll(".nav-links").forEach(link => {
      link.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
          navbar.classList.remove("clicked");
      });
  });

      // ===== SCROLL EFFECTS =====
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

const destinations = [
    {
      image: "Images/Destination-cards/kyoto.webp",
      location: "Kyoto",
      country: "Japan",
      description: "A timeless city of ancient temples, bamboo groves, and geisha culture — where every season paints a new masterpiece.",
      type: "Cultural",
      budget: "Medium"
    },
    {
      image: "Images/Destination-cards/giza.webp",
      location: "Giza",
      country: "Egypt",
      description: "Home to one of humanity's greatest wonders, Giza is a window into an ancient civilisation that still leaves the world speechless.",
      type: "Cultural",
      budget: "Low"
    },
    {
      image: "Images/Destination-cards/sydney.webp",
      location: "Sydney",
      country: "Australia",
      description: "A dazzling harbour city where golden beaches, iconic landmarks, and a buzzing food scene collide in perfect harmony.",
      type: "Urban",
      budget: "High"
    },
    {
      image: "Images/Destination-cards/machupicchu.webp",
      location: "Machu Picchu",
      country: "Peru",
      description: "A lost Incan citadel perched high in the Andes, shrouded in mist and mystery — the ultimate adventure for the soul.",
      type: "Adventure",
      budget: "Medium"
    },
    {
      image: "Images/Destination-cards/toronto.webp",
      location: "Toronto",
      country: "Canada",
      description: "A vibrant multicultural metropolis bursting with world-class dining, diverse neighbourhoods, and a skyline that never gets old.",
      type: "Urban",
      budget: "High"
    },
    {
      image: "Images/Destination-cards/rome.webp",
      location: "Rome",
      country: "Italy",
      description: "The Eternal City — where ancient ruins, Renaissance art, and the world's best pasta exist on the very same cobblestone street.",
      type: "Cultural",
      budget: "Medium"
    },
  ];

  const suprisebtn = document.getElementById("suprise-me");
  const travel_type = document.querySelector(".travel-type");
  const budget_range_selector = document.querySelector(".budget-range-select");
  const Add_to_wish_list = document.getElementById("Add-to-wish-list");

  let currentDestination = null;

  suprisebtn.addEventListener("click", () => {

      if (travel_type.value === "anyType" && budget_range_selector.value === "anyBudget") {
          const index = Math.floor(Math.random() * destinations.length);
          showDestination(destinations[index]);

      } else {
          const matches = destinations.filter(destination => {
              const typeMatch = travel_type.value === "anyType" || destination.type === travel_type.value;
              const budgetMatch = budget_range_selector.value === "anyBudget" || destination.budget === budget_range_selector.value;
              return typeMatch && budgetMatch;
          });

          if (matches.length > 0) {
              const index = Math.floor(Math.random() * matches.length);
              showDestination(matches[index]);
          } else {
              window.alert("No destinations match your criteria. Please try different options.");
          }
      }
  });

  Add_to_wish_list.addEventListener("click", () => {
      if (!currentDestination) {
          alert("Please generate a destination first!");
          return;
      }

      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

      const alreadySaved = wishlist.some(dest => dest.name === currentDestination.location);
      if (alreadySaved) {
          alert(`${currentDestination.location} is already in your wishlist!`);
          return;
      }

      wishlist.push({
          name: currentDestination.location,
          country: currentDestination.country,
      });

      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      displayWishList();
  });

  function showDestination(destination) {
      currentDestination = destination;
      const result_content = document.querySelector(".result-content");
      result_content.innerHTML = `
          <img src="${destination.image}" alt="${destination.location}" class="destination-image2">
          <h2 id="destination-name">${destination.location} • ${destination.country}</h2>
          <p id="destination-description">${destination.description}</p>
          <div class="types">
              <p id="type">${destination.type}</p>
              <p id="destination-budget">${destination.budget}</p>
          </div>
      `;
  }

  function displayWishList() {
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const wishlistContent = document.getElementById("wish-list-content");

      wishlistContent.innerHTML = "";

      if (wishlist.length === 0) {
          wishlistContent.innerHTML = "<p>Your wishlist is empty.</p>";
          return;
      }

      wishlist.forEach(dest => {
          const listItem = document.createElement("div");
          listItem.classList.add("wish-list-item");
          listItem.innerHTML = `
              <h3>${dest.name} • ${dest.country}</h3>
              <button class="remove-btn" onclick="removeFromWishList('${dest.name}')">Remove</button>
          `;
          wishlistContent.appendChild(listItem);
      });
  }

  window.removeFromWishList = function(name) {
      let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      wishlist = wishlist.filter(dest => dest.name !== name);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      displayWishList();
  }

  // Load wishlist on page load
  displayWishList();

});