const text = "EDITION INDUSTRIES 🚀";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 80);
  }
}
typeEffect();


// 🎬 Scroll Animation
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) {
      sec.classList.add('show');
    }
  });
});


// ⚡ Smooth Scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}

console.log("🔥 Portfolio Ready");