document.addEventListener("DOMContentLoaded", () => {

    const hamburger  = document.querySelector(".hamburger");
    const navMenu    = document.querySelector(".nav-menu");
    const background = document.querySelector(".background-slide");
    const navbar     = document.querySelector(".nav-bar");
    const mainHeader = document.getElementById("main-header");
    const locationInfo = document.getElementById("location");
    const destinationDetails = document.getElementById("destination-details");

    const Image_one = document.getElementById("Higlight-img1");
    const Image_two = document.getElementById("Higlight-img2");
    const Image_three = document.getElementById("Higlight-img3");

    const location_tag = document.getElementById("location-tag");
    const location_details = document.getElementById("location-details");

    const info_best_time = document.getElementById("info-best-time");
    const info_currency = document.getElementById("info-currency");
    const info_language = document.getElementById("info-language");
    const info_climate = document.getElementById("info-climate");


  // === Destination destails slide ====// 
    const slides = [
        {image: "Images/destination%20highlights/bora.webp", text: "Explore Bora Bora", location: "Bora Bora, French Polynesia", details: "Bora Bora is a small island in the South Pacific, located northwest of Tahiti. It is known for its stunning turquoise waters, overwater bungalows, and vibrant coral reefs. The island offers a range of activities, including snorkeling, scuba diving, and romantic sunset cruises." },

        {image: "Images/destination%20highlights/machupicchu.webp", text: "Explore Machu Picchu", location: "Machu Picchu, Peru", details: "Machu Picchu is an ancient Incan citadel located in the Andes Mountains of Peru. It is one of the most famous archaeological sites in the world and offers a glimpse into the rich history and culture of the Inca Empire." },

        {image: "Images/destination%20highlights/banff.webp", text: "Explore Banff", location: "Banff, Canada", details: "Banff National Park is a Canadian national park located in the Canadian Rockies. It is known for its stunning mountain landscapes, turquoise lakes, and diverse wildlife. The park offers a range of outdoor activities, including hiking, skiing, and wildlife viewing." },

        {image: "Images/destination%20highlights/colosseum.webp", text: "Explore Colosseum", location: "Rome, Italy", details: "The Colosseum is an ancient amphitheater in Rome, Italy. It is one of the most iconic symbols of the Roman Empire and offers a glimpse into the gladiatorial games and public spectacles that once took place within its walls." },

        {image: "Images/destination%20highlights/dmz-angkor.webp", text: "Explore Angkor Wat", location: "Siem Reap, Cambodia", details: "Angkor Wat is a massive temple complex in Cambodia, built in the early 12th century. It is the largest religious monument in the world and a UNESCO World Heritage Site. The site offers a glimpse into the rich history and culture of the Khmer Empire." },

        {image: "Images/destination%20highlights/china-wall.webp", text: "Explore Great Wall of China", location: "Beijing, China", details: "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials. It is one of the most iconic symbols of China and offers a glimpse into the country's rich history and culture." },

        {image: "Images/destination%20highlights/pyramid-giza.webp", text: "Explore Pyramids of Giza", location: "Giza, Egypt", details: "The Egyptian Pyramids are ancient pyramid-shaped masonry structures located in Egypt. They are among the most famous and recognizable structures in the world and offer a glimpse into the rich history and culture of ancient Egypt." },

        {image: "Images/destination%20highlights/mountain-fuji.webp", text: "Explore Mountain Fuji", location: "Hokkaido, Japan", details: "Mount Fuji is an active stratovolcano on Honshu island in Japan. It is the highest peak in Japan and a UNESCO World Heritage Site. The mountain offers breathtaking views and is a popular destination for hiking and photography." },

        {image: "Images/destination%20highlights/eiffel-tower.webp", text: "Explore Eifel Tower", location: "Paris, France", details: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is one of the most recognizable structures in the world and offers stunning views of the city from its observation decks." },

        {image: "Images/destination%20highlights/sydney-opera-house.webp", text: "Explore Sydney Opera House", location: "Sydney, Australia", details: "The Sydney Opera House is a multi-venue performing arts centre in Sydney, Australia. It is one of the most famous buildings in the world and offers a range of cultural experiences, including opera, ballet, and concerts." }
    ];

//Functions to show the slides//
    let index = 0;
    let sliderId;

    function showSlide() {
        const slide = slides[index];

        background.style.backgroundImage = `url("${slide.image}")`;
        mainHeader.textContent = slide.text;

        locationInfo.innerHTML =
            `<img class="loc-icon" src="Images/icons8-location-50.png" alt="Location Icon"> ${slide.location}`;

        destinationDetails.textContent = slide.details;
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        // console.log(index)
        showSlide();
    }

   
    showSlide();

  
    setTimeout(() => {
        sliderId = setInterval(nextSlide, 3000);
    }, 0);


    // pause on hover
    mainHeader.addEventListener("mouseover", () => clearInterval(sliderId));
    mainHeader.addEventListener("mouseout", () => {
        sliderId = setInterval(nextSlide, 3000);
    });


    // ===== HAMBURGER =====
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


    // ===== SCROLL =====
    window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });


   const daily_highlights = [
    {
        image1:"Images/destination-of-the-day/Day7/maple.webp",
        image2:"Images/destination-of-the-day/Day7/canada-city.webp",
        image3:"Images/destination-of-the-day/Day7/toronto.webp",
        tag:"⚲ Toronto,Canada",
        details:"Discover Toronto, a vibrant city where cultures from around the world come together along the shores of Lake Ontario. From the breathtaking views atop the CN Tower to lively streets filled with food, art, and entertainment, Toronto offers an unforgettable mix of urban energy and scenic beauty."
    },

    {
        image1:"Images/destination-of-the-day/Day1/sakura.webp",
        image2:"Images/destination-of-the-day/Day1/city.webp",
        image3:"Images/destination-of-the-day/Day1/sky-tree.webp",
        tag:"⚲ Tokyo,Japan",
        details:"Discover Tokyo, a city where ancient traditions blend seamlessly with cutting-edge innovation. From historic temples to dazzling neon streets, Tokyo offers a unique journey through culture, technology, and unforgettable city life."
    },

    {
        image1:"Images/destination-of-the-day/Day2/flower.webp",
        image2:"Images/destination-of-the-day/Day2/city.webp",
        image3:"Images/destination-of-the-day/Day2/Lauterbrunnen.webp",
        tag:"⚲ Lauterbrunnen,SwizterLand",
        details:"Discover Lauterbrunnen, a breathtaking alpine valley surrounded by towering cliffs and cascading waterfalls. Nestled in the Swiss Alps, it’s the perfect escape for nature lovers seeking peace, beauty, and unforgettable mountain views."
    },

    {
        image1:"Images/destination-of-the-day/Day3/flower.webp",
        image2:"Images/destination-of-the-day/Day3/city.webp",
        image3:"Images/destination-of-the-day/Day3/statue.webp",
        tag:"⚲ Bangkok,Tailand",
        details:"Discover Bangkok, a vibrant city where golden temples meet modern skyscrapers. Known for its lively streets, rich culture, and welcoming atmosphere, Bangkok offers an unforgettable mix of tradition, food, and city energy along the Chao Phraya River."
    },

    {
        image1:"Images/destination-of-the-day/Day4/rose.webp",
        image2:"Images/destination-of-the-day/Day4/city.webp",
        image3:"Images/destination-of-the-day/Day4/building.webp",
        tag:"⚲ London,England",
        details:"Discover London, a timeless city where history and modern life blend seamlessly. From royal landmarks and historic streets to world-class culture and entertainment, London offers an unforgettable experience on every visit."
    },

    {
        image1:"Images/destination-of-the-day/Day5/flower.webp",
        image2:"Images/destination-of-the-day/Day5/sigiriya.webp",
        image3:"Images/destination-of-the-day/Day5/monkeyy.webp",
        tag:"⚲ Sigiriya,Sri-Lanka",
        details:"Explore Sigiriya, a UNESCO World Heritage site and ancient royal citadel carved into a massive rock. Climb through centuries of history, admire stunning frescoes, and enjoy panoramic views over lush green landscapes."
    },

    {
        image1:"Images/destination-of-the-day/Day6/flower.webp",
        image2:"Images/destination-of-the-day/Day6/city.webp",
        image3:"Images/destination-of-the-day/Day6/palace.webp",
        tag:"⚲ Seoul,Korea",
        details:"Explore Seoul, a city full of energy, innovation, and rich heritage. Wander through royal palaces, shop in bustling districts, and experience breathtaking views from the iconic N Seoul Tower while discovering the heartbeat of modern Asia."
    }
];

    const more_info = [
        {best_time:"May – October" ,currency:"Canadian Dollar($)", language:"English", climate:"Cold winters"},
        {best_time:"March – May" ,currency:"Japanese Yen(¥)", language:"Japanese", climate:"hot humid summers"},
        {best_time:"December – March" ,currency:"Swiss Franc(Fr)", language:"German", climate:"Alpine"},
        {best_time:"November – February" ,currency:"Thai Baht(฿)", language:"Thai", climate:"Tropical"},
        {best_time:"May – September" ,currency:"British Pound(£)", language:"English", climate:"cloudy/rainy"},
        {best_time:"December – April" ,currency:"Sri Lankan Rupee (LKR)", language:"Sinhala", climate:"Tropical"},
        {best_time:"April – June" ,currency:"Korean Won (₩)", language:"Korean", climate:"Four seasons"}
    ];

    function daily_updating_destinations(){
        let day = new Date().getDay();

        Image_one.src = daily_highlights[day].image1;
        Image_two.src = daily_highlights[day].image2;
        Image_three.src = daily_highlights[day].image3;

        location_tag.textContent = daily_highlights[day].tag;
        location_details.textContent = daily_highlights[day].details;

        info_best_time.textContent = more_info[day].best_time;
        info_climate.textContent = more_info[day].climate;
        info_currency.textContent = more_info[day].currency;
        info_language.textContent = more_info[day].language;
    }

    daily_updating_destinations();


// ===== NEWSLETTER SUBMISSION =====
const newsletterForm = document.getElementById("saveNewsForm");

newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const emailinput = document.getElementById("newsletter-email");
    const error = document.getElementById("newsletter-error");
    const success = document.getElementById("newsletter-success");

    const email = emailinput.value.trim();

    error.classList.remove("visible");
    success.classList.remove("visible");

    if (!emailinput.checkValidity()) {
        error.textContent = "Please enter a valid email.";
        error.classList.add("visible");
        return;
    }

    const existing = localStorage.getItem("news-letter");

    if (existing === email) {
        error.textContent = "You are already subscribed!";
        error.classList.add("visible");
        return;
    }

    if (email !== "") {
        localStorage.setItem("news-letter", email);

        success.textContent = "You have successfully subscribed!";
        success.classList.add("visible");

        emailinput.value = "";
        
        
        document.getElementById("field-name").value = "";

        setTimeout(() => {
            success.classList.remove("visible");
            error.classList.remove("visible");
        }, 4000);

    } else {
        error.textContent = "Please enter a valid email.";
        error.classList.add("visible");
    }
});
    
});