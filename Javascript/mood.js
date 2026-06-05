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


const btnExcited = document.getElementById('Excited');
const btnRelaxed = document.getElementById('Relaxed');
const btnAdventurous = document.getElementById('Adventurous');
const btnNostalgic = document.getElementById('Nostalgic');

const moodAudio = document.getElementById('mood-audio');
const moodAudio2 = document.getElementById('mood-audio2');
const moodAudio3 = document.getElementById('mood-audio3');
const moodAudio4 = document.getElementById('mood-audio4');

const mood_audio = document.querySelectorAll('.mood-audio');
console.log(mood_audio);

function playAudio(audio) {

    mood_audio.forEach(a => {
        if (a !== audio) {
            a.pause();
            a.currentTime = 0;
        }});

        if (audio.paused) {
            audio.play();
        } 
        
        else {
            audio.pause();
        }
    
}
btnExcited.addEventListener('click', () => {
    playAudio(moodAudio)});

btnRelaxed.addEventListener('click', () => {
    playAudio(moodAudio2)});

btnAdventurous.addEventListener('click', () => {
    playAudio(moodAudio3)});

btnNostalgic.addEventListener('click', () => {
    playAudio(moodAudio4)});


const travelData =  JSON.parse(localStorage.getItem("travelData")) || {}

document.querySelectorAll(".destination-status").forEach(select => {
    select.addEventListener("change",()=>{


        const id = select.dataset.id;
        travelData[id] = select.value;

        localStorage.setItem("travelData",JSON.stringify(travelData));

        const sts = document.querySelector(`.dest-sts[data-id="${id}"]`);

        sts.textContent = `Status: ${select.value}`;


    })
})

document.querySelectorAll(".destination-status").forEach(select => {

    const id = select.dataset.id;
    const savedValue = travelData[id];

    if (savedValue) {
        select.value = savedValue;

        const sts = document.querySelector(
            `.dest-sts[data-id="${id}"]`
        );

        sts.textContent = `Status: ${savedValue}`;
    }
});


})



























