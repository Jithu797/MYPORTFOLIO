/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== TOGGLE SKILLS ====================*/
const skillCategories = document.querySelectorAll('.skill__category');
const skillHeaders = document.querySelectorAll('.skill__header');

skillHeaders.forEach((header, index) => {
    header.addEventListener('click', () => {
        let currentClass = skillCategories[index].className;

        skillCategories.forEach(category => {
            category.className = 'skill__category skills__close';
        });

        if (currentClass === 'skill__category skills__close') {
            skillCategories[index].className = 'skill__category skills__open';
        }
    });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        modal(i);
    });
});

modalCloses.forEach((close) => {
    close.addEventListener('click', () => {
        modalViews.forEach(view => view.classList.remove('active-modal'));
    });
});

/*==================== PORTFOLIO SWIPER  ====================*/
var swiper = new Swiper('.portfolio__container', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    loop: true,
});

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function changeHeaderBackground() {
    const nav = document.getElementById('header');
    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    } else {
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', changeHeaderBackground);

/*==================== SHOW SCROLL UP ====================*/ 
function showScrollUp() {
    const up = document.getElementById('scroll-up');
    if (this.scrollY >= 560) {
        up.classList.add('show-scroll');
    } else {
        up.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', showScrollUp);
