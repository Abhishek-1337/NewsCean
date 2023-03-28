// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something is not right about selector`);
}

//Nav styles on scroll

const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY > 15){
        headerElement.classList.add('activated');
    }
    else{
        headerElement.classList.remove('activated');
    }
}
window.addEventListener('scroll', scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}
menuToggleIcon.addEventListener('click', toggleMenu);

// Open/Close search form popup
const searchBtn = selectElement('#search-button');
const closeBtn = selectElement('.form-close-button');
const searchContainer = selectElement('.search-form-container');
const searchBtnHandler = () => {
    searchContainer.classList.add('activated');
}

const closeBtnHandler = () => {
    searchContainer.classList.remove('activated');
}

searchBtn.addEventListener('click', searchBtnHandler);
closeBtn.addEventListener('click', closeBtnHandler);

// -- Close the search form popup on ESC keypress

window.addEventListener('keyup', (e)=>{
    if(e.code === 'Escape'){
        searchContainer.classList.remove('activated');
    }
})

// Switch theme/add to local storage
const bodyElement = document.body;
const currentTheme = localStorage.getItem('currentTheme');
if(currentTheme){
     bodyElement.classList.add('light-theme');
}
const themeIcon = selectElement('#theme-toggle-button');
const switchTheme = () => {
    bodyElement.classList.toggle('light-theme');
    themeIcon.classList.toggle('activated');
    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'lightTheme');
    }
    else{
        localStorage.removeItem('currentTheme');
    }
}

themeIcon.addEventListener('click', switchTheme);
// Swiper

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl : '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        700:{
            slidesPerView: 2
        },
        1200:{
            slidesPerView: 3
        }
    }
});