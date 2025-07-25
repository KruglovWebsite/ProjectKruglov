const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const menuLinks = mobileMenu.querySelectorAll('a');
const fadeIns = document.querySelectorAll('.fade-in');
const heroBg = document.querySelector('.hero-bg');


burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('show');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    burger.classList.remove('active');
  });
});

function handleFadeIn() {
  fadeIns.forEach(el => {
    const rect = el.getBoundingClientRect();
    const trigger = window.innerHeight * 0.85;
    if (rect.top < trigger) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleFadeIn);
window.addEventListener('load', handleFadeIn);

window.addEventListener('scroll', () => {
  const offset = window.scrollY * 0.3; // скорость параллакса
  if (heroBg) {
    heroBg.style.transform = `translateY(${offset}px)`;
  }
});

