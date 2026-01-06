const pages = document.querySelectorAll('.page');
const btn = document.getElementById('nextBtn');
const particles = document.getElementById('particles');

let current = 0;
const emojis = ["🦋", "🌸", "🌹", "✨", "💫"];

btn.addEventListener('click', () => {
  pages[current].classList.remove('active');
  current++;

  if (current >= pages.length) {
    btn.style.display = 'none';
    current = pages.length - 1;
  }

  pages[current].classList.add('active');
});

/* Random sprinkle generator */
setInterval(() => {
  const span = document.createElement("span");
  span.className = "particle";
  span.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  span.style.left = Math.random() * 100 + "vw";
  span.style.fontSize = (18 + Math.random() * 18) + "px";
  span.style.animationDuration = (6 + Math.random() * 5) + "s";

  particles.appendChild(span);
  setTimeout(() => span.remove(), 10000);
}, 220);
