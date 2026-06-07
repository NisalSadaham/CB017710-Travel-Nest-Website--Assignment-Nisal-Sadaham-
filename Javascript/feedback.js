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


const send_msg = document.getElementById("send-msg")

send_msg.addEventListener("click",savemsg)

// feedback msg//
function savemsg() {
    const name = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const input_area = document.getElementById("input-area");
    const result_submission = document.getElementById("result-submission");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.value === '' || input_area.value === '' || emailInput.value === '') {
        result_submission.textContent = "Please Enter Valid Information";
    }
    else if (!emailRegex.test(emailInput.value)) {
        result_submission.textContent = "Invalid Email!";
    }
    else {
        const message_data = {
            name: name.value,
            email: emailInput.value,
            message: input_area.value
        };

        const messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.push(message_data);
        localStorage.setItem("messages", JSON.stringify(messages));

        result_submission.textContent = "Your Message Was Saved Successfully!";

        setTimeout(function () {
            name.value = '';
            emailInput.value = '';
            input_area.value = '';
            result_submission.textContent = '';
        }, 3000);
    }
}
const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", () => {

        const answer =
            question.nextElementSibling;

        if(answer.style.display === "block"){
            answer.style.display = "none";

        }
        else{
            answer.style.display = "block";
        }

    });
});

const faq_question = document.querySelectorAll(".faq-question")

faq_question.forEach(btn =>{
    btn.addEventListener("click",()=>{
    if(btn.textContent === '+'){
        btn.textContent = '×'
    }
    else{
        btn.textContent = '+'
    }
    })
})
    
})