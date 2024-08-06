let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};


const phrases = [
 "Web Designer",
  "UI / UX Designers",
  "Frontend Developer",
  "Web Developer",
   "System Analyst"
];

let currentPhraseIndex = 0;
let currentCharIndex = 0;
const typingTextElement = document.getElementById('typing-text');

function typePhrase() {
  if (currentCharIndex < phrases[currentPhraseIndex].length) {
    typingTextElement.textContent += phrases[currentPhraseIndex][currentCharIndex];
    currentCharIndex++;
    setTimeout(typePhrase, 100);
  } else {
    setTimeout(deletePhrase, 2000); // Jeda sebelum menghapus kata
  }
}

function deletePhrase() {
  if (currentCharIndex > 0) {
    typingTextElement.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
    currentCharIndex--;
    setTimeout(deletePhrase, 50);
  } else {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    setTimeout(typePhrase, 100);
  }
}

typePhrase(); // Memulai animasi pengetikan




