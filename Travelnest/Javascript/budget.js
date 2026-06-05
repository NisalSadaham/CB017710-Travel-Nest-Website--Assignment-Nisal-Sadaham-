const hamburger  = document.querySelector(".hamburger");
const navMenu    = document.querySelector(".nav-menu");
const navbar     = document.querySelector(".nav-bar");
const mainHeader  = document.getElementById("main-header");

 // ===== HAMBURGER EVENTS =====
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


const num_days = document.getElementById("num-days");
const daily_budget = document.getElementById("daily-budget");
const calculate_btn = document.getElementById("calculate-btn");
const budget_result = document.querySelector(".budget-result");
const destination_input = document.getElementById("destination");


calculate_btn.addEventListener("click", () => {
    const days = parseInt(num_days.value);
    const daily = parseFloat(daily_budget.value);
    const total = days * daily;

    const frames = [
        "loading",
        "loading.",
        "loading..",
        "loading..."
    ];
    let budgetCategory;

if (daily < 50) {
    budgetCategory = "Budget";
} else if (daily < 150) {
    budgetCategory = "Mid-range";
} else {
    budgetCategory = "Luxury";
}
    let i = 0;

    const loadingInterval = setInterval(() => {
        budget_result.innerHTML = `<h2>Total Estimated Budget: ${frames[i % frames.length]}</h2>`;
        i++;
    }, 300);

    setTimeout(() => {
        clearInterval(loadingInterval);
        budget_result.innerHTML = `<h2>Total Estimated Budget: $${total.toFixed(2)}</h2> 
                                   <h2>Budget:${budgetCategory}</h2>`;
        
    }, 1500);
});

const save_btn = document.getElementById("save-btn");


save_btn.addEventListener("click", () => {
    const days = parseInt(num_days.value);
    const daily = parseFloat(daily_budget.value);

    if (isNaN(days) || isNaN(daily)) {
        alert("Please enter valid numbers");
        return;
    }
    let budgetCategory = "Low";

    if (daily >= 1000) {
        budgetCategory = "Luxury";
    }
    else if (daily >= 500) {
        budgetCategory = "Medium";
    }
    const total = days * daily;

    const tripData = {
        id: Date.now(),
        days,
        dailyBudget: daily,
        totalBudget: total,
        destination: destination_input.value,
        budgetCategory: budgetCategory
    };

    let trips = JSON.parse(localStorage.getItem("trips")) || [];

    trips.push(tripData);

    localStorage.setItem("trips", JSON.stringify(trips));

    alert("Trip saved successfully!");

    showSavedTrips();
    clear();
});

showSavedTrips();




function deleteTrip(id) {
    let trips = JSON.parse(localStorage.getItem("trips")) || [];

    // remove trip
    trips = trips.filter(trip => trip.id !== id);

    // update storage
    localStorage.setItem("trips", JSON.stringify(trips));

    // re-render UI
    showSavedTrips();

}
function showSavedTrips() {
    const trips = JSON.parse(localStorage.getItem("trips")) || [];
    const container = document.querySelector(".saved-trip-result");

    container.innerHTML = "";

    if (trips.length === 0) {
        container.innerHTML = `<p>No trips saved yet.</p>`;
        return;
    }

    trips.forEach(trip => {
        const card = document.createElement("div");
        card.classList.add("trip-card");

        card.innerHTML = `
            <h3 id = "Trip-name">${trip.destination || "Unknown Destination"}</h3>
            <p id="Trip-details">Days: ${trip.days} • Daily Budget: $${trip.dailyBudget.toFixed(2)} • Budget Category: ${trip.budgetCategory} • Total: $${trip.totalBudget.toFixed(2)} </p>
            <button onclick="deleteTrip(${trip.id})">Delete</button>
        `;

        container.appendChild(card);
    });
}

function clear(){

const totalbefore = 0.00
const budgetCategorybefore = "Low"
num_days.value = ''
destination_input.value= ''
daily_budget.value = ''

budget_result.innerHTML = `<h2>Total Estimated Budget: $${totalbefore}</h2> 
                                   <h2>Budget:${budgetCategorybefore}</h2>`;


}