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




function savemsg() {
    const name = document.getElementById("name").value;
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const input_area = document.getElementById("input-area").value;
    const result_submission = document.getElementById("result-submission");

    if (name === '' || input_area === '') {
        result_submission.textContent = "Please Enter Valid Information";
    }
    else if (emailInput.checkValidity()) {

        const message_data = {
            name: name,
            email: email,
            message: input_area
        };

        const messages = JSON.parse(localStorage.getItem("messages")) || [];

        messages.push(message_data);

        localStorage.setItem("messages", JSON.stringify(messages));


        result_submission.textContent =
            "Your Message Was Saved Successfully!";

        setInterval(clear,3000)

        function clear(){

        name.value = ''
        email.value = ''
        input_area.value = ''
        result_submission.textContent = ''
    }

    }
    else {
        result_submission.textContent = "Invalid Email!";
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