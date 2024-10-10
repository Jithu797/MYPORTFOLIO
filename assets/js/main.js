
/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */   
if(navToggle)
{
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose)
{
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== TOGGLE SKILLS ====================*/
/*==================== TOGGLE SKILLS ====================*/
const skillCategories = document.querySelectorAll('.skill__category');  // Select all skill categories
const skillHeaders = document.querySelectorAll('.skill__header');      // Select all skill headers

// Loop through each skill header to add a click event
skillHeaders.forEach((header, index) => {
  header.addEventListener('click', () => {
    let currentClass = skillCategories[index].className;
    
    // Close all open skill sections
    skillCategories.forEach(category => {
      category.className = 'skill__category skills__close';
    });
    
    // Toggle the clicked section
    if (currentClass === 'skill__category skills__close') {
      skillCategories[index].className = 'skill__category skills__open';
    }
  });
});


/*==================== SERVICES MODAL ====================*/
const  modalViews = document.querySelectorAll('.services__modal');
const  modalBtns  = document.querySelectorAll('.services__button');
const  modalCloses= document.querySelectorAll('.services__modal-close');

let modal = function(modalClick)
{
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        modal(i)
        // console.log("clicked")
    })
})

modalCloses.forEach((close)=>{
    close.addEventListener("click",()=>{
        modalViews.forEach((view)=>{
            view.classList.remove("active-modal")
        })
    })
})


/*==================== PORTFOLIO SWIPER  ====================*/
var swiper = new Swiper('.portfolio__container', {
    cssMode: true,  // Enables regular scrolling mode
    navigation: {
        nextEl: '.swiper-button-next',  // Next arrow
        prevEl: '.swiper-button-prev'   // Previous arrow
    },
    pagination: {
        el: '.swiper-pagination',   // Pagination bullets
        clickable: true             // Makes pagination bullets clickable
    },
    loop: true, // Enables continuous looping of slides
});

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader()
{
    const nav = document.getElementById('header');
    if(this.scrollY >=80)
    {
        nav.classList.add('scroll-header');
    }
    else
    {
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll',scrollHeader);

/*==================== SHOW SCROLL UP ====================*/ 
function scrollHeader()
{
    const up = document.getElementById('scroll-up');
    if(this.scrollY >=560)
    {
        up.classList.add('show-scroll');
    }
    else
    {
        up.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll',scrollHeader);
