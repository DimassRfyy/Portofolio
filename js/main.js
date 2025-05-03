// Navbar Fix
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNavbar = header.offsetTop;

  if (window.scrollY > fixedNavbar) {
    header.classList.add('shadow-[8px_8px_0px_0px_#111111]');
  } else {
    header.classList.remove('shadow-[8px_8px_0px_0px_#111111]');
  }
};

// Navlink active
const navlink = document.querySelectorAll('.nav-line');

navlink.forEach((item) => {
  item.addEventListener('click', (e) => {
    const active = document.querySelector('.active');
    if (active) active.classList.remove('active');
    e.target.classList.add('active');
  });
});

// handle button contact click
const btnContact = document.querySelector('.btn-contact');
if (btnContact) {
  btnContact.addEventListener('click', () => {
    navlink.forEach((item) => {
      item.classList.remove('active');
    });
  });
}

// handle menu icon click
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
  const menuMobile = document.querySelector('#menuMobile');
  console.log('ok');
  menu.classList.add('hidden');
  menuMobile.classList.remove('transform', '-translate-x-full');
  menuMobile.classList.add('translate-x-0');
});

// handle close icon click
const closed = document.querySelector('.close');
closed.addEventListener('click', () => {
  const menuMobile = document.querySelector('#menuMobile');
  const menu = document.querySelector('.menu');

  setTimeout(() => {
    menu.classList.remove('hidden');
  }, 300);

  menuMobile.classList.remove('translate-x-0');
  menuMobile.classList.add('transform', '-translate-x-full');
});

// handle form submit
const submit = document.querySelector('#btn-submit');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  const result = window.open(
    `https://api.whatsapp.com/send?phone=6281384528791&text=Nama saya: ${name},
    Email : ${email}, ${message}`
  );
  result ? result.focus() : alert('Please allow popups for this website');
});

// gsap
gsap.from('.hero', {
  y: -100,
  duration: 2,
  opacity: 0,
  ease: 'bounce',
});

gsap.from('.text', {
  y: -100,
  duration: 2,
  opacity: 0,
  ease: 'bounce',
});

// AOS
const skills = document.querySelectorAll('.skill');
skills.forEach((skill, i) => {
  skill.dataset.aos = 'fade-down';
  skill.dataset.aosDelay = i * 100;
});

AOS.init({
  duration: 400,
  once: true,
});