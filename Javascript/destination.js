document.addEventListener('DOMContentLoaded', () => {

  const hamburger  = document.querySelector(".hamburger");
  const navMenu    = document.querySelector(".nav-menu");
  const navbar     = document.querySelector(".nav-bar");

const destinations = [
  {
    image: "Images/Destination-cards/kyoto.webp",
    location: "Kyoto",
    country: "Japan",
    description: "Kyoto is Japan's ancient imperial capital, renowned for its classical Buddhist temples, beautiful gardens, and geisha districts. The city seamlessly blends tradition with modernity, offering visitors a glimpse into Japan's rich cultural heritage.",
    attractions: ["Fushimi Inari Shrine", "Arashiyama Bamboo Grove", "Kinkaku-ji (Golden Pavilion)", "Gion District", "Nishiki Market"],
    costs: [
      { category: "Accommodation",  budget: "$20/night",  mid: "$80/night",   luxury: "$300/night" },
      { category: "Food",           budget: "$10/day",    mid: "$35/day",     luxury: "$120/day"   },
      { category: "Transport",      budget: "$5/day",     mid: "$15/day",     luxury: "$60/day"    },
      { category: "Attractions",    budget: "$5/day",     mid: "$20/day",     luxury: "$80/day"    },
    ]
  },
  {
    image: "Images/Destination-cards/rome.webp",
    location: "Rome",
    country: "Italy",
    description: "Rome, the Eternal City, is a sprawling cosmopolitan city with nearly 3,000 years of globally influential art, architecture, and culture. From the Colosseum to the Vatican, Rome is an open-air museum packed with ancient wonders.",
    attractions: ["Colosseum", "Vatican Museums", "Trevi Fountain", "Pantheon", "Roman Forum"],
    costs: [
      { category: "Accommodation",  budget: "$30/night",  mid: "$100/night",  luxury: "$400/night" },
      { category: "Food",           budget: "$15/day",    mid: "$50/day",     luxury: "$150/day"   },
      { category: "Transport",      budget: "$8/day",     mid: "$20/day",     luxury: "$80/day"    },
      { category: "Attractions",    budget: "$10/day",    mid: "$30/day",     luxury: "$100/day"   },
    ]
  },
  {
    image: "Images/Destination-cards/toronto.webp",
    location: "Toronto",
    country: "Canada",
    description: "Toronto is Canada's largest city and a vibrant multicultural metropolis on the shores of Lake Ontario. Known for its diverse neighborhoods, world-class dining, and iconic skyline featuring the CN Tower, Toronto offers something for every traveler.",
    attractions: ["CN Tower", "Ripley's Aquarium", "Royal Ontario Museum", "Distillery District", "Toronto Islands"],
    costs: [
      { category: "Accommodation",  budget: "$40/night",  mid: "$120/night",  luxury: "$450/night" },
      { category: "Food",           budget: "$20/day",    mid: "$60/day",     luxury: "$180/day"   },
      { category: "Transport",      budget: "$10/day",    mid: "$25/day",     luxury: "$90/day"    },
      { category: "Attractions",    budget: "$15/day",    mid: "$40/day",     luxury: "$120/day"   },
    ]
  },
  {
    image: "Images/Destination-cards/machupicchu.webp",
    location: "Machu Picchu",
    country: "Peru",
    description: "Machu Picchu is a 15th-century Inca citadel perched high in the Andes Mountains of Peru. One of the world's most recognizable archaeological sites, it offers breathtaking mountain scenery and a fascinating window into the Inca civilization.",
    attractions: ["Sun Gate (Inti Punku)", "Temple of the Sun", "Huayna Picchu Mountain", "Intihuatana Stone", "Sacred Plaza"],
    costs: [
      { category: "Accommodation",  budget: "$15/night",  mid: "$60/night",   luxury: "$250/night" },
      { category: "Food",           budget: "$8/day",     mid: "$25/day",     luxury: "$80/day"    },
      { category: "Transport",      budget: "$10/day",    mid: "$30/day",     luxury: "$100/day"   },
      { category: "Attractions",    budget: "$15/day",    mid: "$25/day",     luxury: "$60/day"    },
    ]
  },
  {
    image: "Images/Destination-cards/giza.webp",
    location: "Giza",
    country: "Egypt",
    description: "Giza is home to some of the most iconic ancient monuments in the world, including the Great Pyramids and the Sphinx. Located just outside Cairo, this ancient site offers a stunning glimpse into the engineering genius and culture of ancient Egypt.",
    attractions: ["Great Pyramid of Khufu", "Sphinx", "Pyramid of Khafre", "Solar Boat Museum", "Pyramid of Menkaure"],
    costs: [
      { category: "Accommodation",  budget: "$10/night",  mid: "$50/night",   luxury: "$200/night" },
      { category: "Food",           budget: "$5/day",     mid: "$20/day",     luxury: "$70/day"    },
      { category: "Transport",      budget: "$3/day",     mid: "$15/day",     luxury: "$50/day"    },
      { category: "Attractions",    budget: "$10/day",    mid: "$20/day",     luxury: "$60/day"    },
    ]
  },
  {
    image: "Images/Destination-cards/sydney.webp",
    location: "Sydney",
    country: "Australia",
    description: "Sydney is Australia's largest and most glamorous city, famous for its stunning harbour, golden beaches, and iconic landmarks. From the Sydney Opera House to Bondi Beach, the city offers a perfect blend of urban sophistication and outdoor adventure.",
    attractions: ["Sydney Opera House", "Harbour Bridge", "Bondi Beach", "Taronga Zoo", "The Rocks District"],
    costs: [
      { category: "Accommodation",  budget: "$40/night",  mid: "$130/night",  luxury: "$500/night" },
      { category: "Food",           budget: "$20/day",    mid: "$65/day",     luxury: "$200/day"   },
      { category: "Transport",      budget: "$12/day",    mid: "$30/day",     luxury: "$100/day"   },
      { category: "Attractions",    budget: "$10/day",    mid: "$40/day",     luxury: "$130/day"   },
    ]
  },
];

// display card details
function displayDetails() {
  destinations.forEach((destination, i) => {
    const num = i + 1;
    document.getElementById(`dest${num}_image`).src            = destination.image;
    document.getElementById(`dest${num}_location`).textContent = `Explore ${destination.location}`;
    document.getElementById(`dest${num}_country`).textContent  = destination.country;
  });
}

displayDetails();

document.querySelectorAll('.destination-card').forEach((card, i) => {
  card.addEventListener('click', () => {
    const dest = destinations[i];
    const url  = `destination-details.html?dest=${dest.location.toLowerCase()}`;

    const width  = 800;
    const height = 600;
    const left   = (screen.width  - width)  / 2;
    const top    = (screen.height - height) / 2;

    window.open(url, 'destination',
      `width=${width},height=${height},top=${top},left=${left},scrollbars=yes`
    );
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



  // hamburger
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

  // filter + search
  const btnFilter   = document.querySelectorAll('[data-filter]');
  const cards       = document.querySelectorAll('.destination-card');
  const searchInput = document.getElementById('Search-bar');
  let activeFilter  = 'all';

  btnFilter.forEach(button => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      applyFilters();
    });
  });

  searchInput.addEventListener('input', () => {
    applyFilters();
  });

  function applyFilters() {
    const query = searchInput.value.toLowerCase().trim();
    cards.forEach(card => {
      const name          = card.dataset.name.toLowerCase();
      const category      = card.dataset.category;
      const categoryMatch = activeFilter === 'all' || category === activeFilter;
      const searchMatch   = name.includes(query) || query.includes(name);
      card.style.display  = categoryMatch && searchMatch ? 'flex' : 'none';
    });
  }

}); 