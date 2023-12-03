import '../scss/app.scss';

// activating the burger menu
const btnMenu = document.querySelector('.header__burger-menu'),
  nav = document.querySelector('.header__nav');

btnMenu.addEventListener('click', e => {
  e.preventDefault();

  btnMenu.classList.toggle('header__burger-menu--active');
  nav.classList.toggle('header__nav--active');
});

//Modal

const modal = document.querySelector('.modal'),
  overlay = document.querySelector('.overlay'),
  btnsOpenModal = document.querySelectorAll('.btn-open-modal'),
  btnCloseModal = document.querySelector('.btn-close-modal');

// Show modal

const showModal = e => {
  e.preventDefault();

  const scrollTop = `${window.pageYOffset + 20}px`;
  modal.style.top = scrollTop;

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', showModal));

// Hide modal

const hideModal = e => {
  e.preventDefault();

  modal.style.top = 0;

  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal(e);
  }
});

// smooth scroll

document.querySelectorAll('.nav__list').forEach(list =>
  list.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.classList.contains('nav__link')) {
      const href = e.target.getAttribute('href');
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  })
);

// sticky header

const promo = document.querySelector('.promo');
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

const getStickyHeader = entries => {
  const entry = entries[0];
  if (!entry.isIntersecting) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(getStickyHeader, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});

headerObserver.observe(promo);

// Modal help

const modalHelp = document.querySelector('.header__help');
const btnOpenHelp = document.querySelector('.header__chats');

btnOpenHelp.addEventListener('click', e => {
  e.preventDefault();

  modalHelp.classList.toggle('header__help--active');
});
