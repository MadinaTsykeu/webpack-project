import '../scss/style.scss';

const body = document.body;
const servicesBtn = body.querySelector('.services__btn');
const descrFurthe = body.querySelector('.services__descr-further');
const descrEnd = body.querySelector('.services__descr-end');
const serviceArrow = body.querySelector('.services__arrow');
const servicesRead = body.querySelector('.services__read');
const modalCall = body.querySelector('.wrapper__modal-call');

const readMore = () => {
  descrFurthe.classList.toggle('services__descr-further--active');
  descrEnd.classList.toggle('services__descr-end--active');
  serviceArrow.classList.toggle('rotate');
  
  servicesRead.textContent = servicesRead.textContent === 'Читать далее' ? 'Скрыть' : 'Читать далее';
};

servicesBtn.addEventListener('click', readMore);

let sliders;
const breakpointSwiper = window.matchMedia('(max-width: 768px)');
const swiper = body.querySelector('.swiper');

const createSlider = () => {
  if (breakpointSwiper.matches) {
    sliders = new Swiper('.swiper', {
      direction: 'horizontal',
        slidesPerView: 1.4,      
        spaceBetween: 8,      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  } else if (swiper.classList.contains('swiper-initialized')) {
    sliders.destroy();
    sliders = null; 
  }
};

createSlider();
breakpointSwiper.addEventListener('change', createSlider);

const brands = body.querySelector('.brands');
const swipeWrapper = brands.querySelector('.swiper-wrapper');
const brandsBtn = brands.querySelector('.button__show-more');
const brandsSee = brandsBtn.querySelector('.text');
const brandsArrow = brandsBtn.querySelector('.brands__arrow');
const brandsHiddenSlide = 'swiper-slide--hidden';
const brandsSlidesHidden = brands.querySelectorAll('.swiper-slide--hidden');

const technic = body.querySelector('.technic');
const techSwipeWrap = technic.querySelector('.technic__swiper-wrapper');
const technicBtn = technic.querySelector('.button__show-more');
const technicSee = technicBtn.querySelector('.text');
const technicArrow = technicBtn.querySelector('.technic__arrow');
const technicHiddenSlide = 'technic__slide--hidden';
const technicSlidesHidden = technic.querySelectorAll('.technic__slide--hidden');

const showAll = (slideHidden, slides, see, arrow, swiperIndent) => {
  slides.forEach(element => element.classList.toggle(slideHidden));
  
  const isShowing = see.textContent === 'Показать все';
  see.textContent = isShowing ? 'Скрыть' : 'Показать все';
  arrow.style.transform = isShowing ? 'rotate(180deg)' : 'rotate(360deg)';
  swiperIndent.classList.toggle('swiper-indent', isShowing);
};

brandsBtn.addEventListener('click', () => showAll(brandsHiddenSlide, brandsSlidesHidden, brandsSee, brandsArrow, swipeWrapper));
technicBtn.addEventListener('click', () => showAll(technicHiddenSlide, technicSlidesHidden, technicSee, technicArrow, techSwipeWrap));

const headerBurger = body.querySelector('.header__burger');
const burgerOverlay = body.querySelector('.menu-block');
const headerMenu = burgerOverlay.querySelector('.header-menu');
const headerMenuBtnClose = headerMenu.querySelector('.header-menu__btn-close');

const toggleMenu = () => {
  const isActive = burgerOverlay.classList.toggle('menu-block--active');
  headerMenu.classList.toggle('header-menu--active', isActive);
  body.classList.toggle('body-fixed', isActive);
};

burgerOverlay.addEventListener('click', (e) => {
  if (e.target === burgerOverlay) toggleMenu();
});

headerBurger.addEventListener('click', toggleMenu);
headerMenuBtnClose.addEventListener('click', toggleMenu);

const buttonTube = body.querySelectorAll('.button-call');
const wrapperModalCall = body.querySelector('.wrapper__modal-call');
const ClassWrapperModalCallOpen = 'wrapper__modal-call--open';
const buttomClose = wrapperModalCall.querySelector('.modal-call__btn-close');
const buttonMessage = body.querySelectorAll('.button-message');
const wrapperModalFeedback = body.querySelector('.wrapper__modal-feedback');
const ClassWrapperModalFeedbackOpen = 'wrapper__modal-feedback--open';
const feedbackBtnClose = wrapperModalFeedback.querySelector('.modal-feedback__btn-close');

const modals = (buttons, modal, closeBtn, openClass) => {
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      modal.classList.add(openClass);
      body.classList.add('body-fixed');
    });
  });

  const closeModal = () => {
    modal.classList.remove(openClass);
    if (!headerMenu.classList.contains('header-menu--active')) {
      body.classList.remove('body-fixed');
    }
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
};

modals(buttonTube, wrapperModalCall, buttomClose, ClassWrapperModalCallOpen);
modals(buttonMessage, wrapperModalFeedback, feedbackBtnClose, ClassWrapperModalFeedbackOpen);

const modalFeedback = wrapperModalFeedback.querySelector('.modal-feedback');
const modalCallInput = body.querySelector('.modal-call__input');
const modalFeedbackInput = body.querySelector('.modal-feedback__input');

const inputFocusFunction = (input) => () => input.focus();

modalCall.addEventListener('transitionstart', inputFocusFunction(modalCallInput));
modalFeedback.addEventListener('transitionstart', inputFocusFunction(modalFeedbackInput));
