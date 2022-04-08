'use strict';

window.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.control__menu'),
          menuBtnClose = document.querySelector('.control__menu_close');
    
    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    function closeMenu() {
        menu.classList.remove('active');
    }
    
    menuBtnClose.addEventListener('click', closeMenu);

    menu.addEventListener('click', (e) => {
        if(e.target === menu) {
            closeMenu();
        }
    });
    
    const countries = document.querySelector('.countries'),
          countriesBtnOpen = document.querySelector('.control__btn_open'),
          countriesMenu = document.querySelector('.countries__menu'),
          countriesBtnClose = document.querySelector('.countries__menu_close');

    countriesBtnOpen.addEventListener('click', () => {
        countriesMenu.classList.add('active');
    });

    function closeCountries() {
        countriesMenu.classList.remove('active');
    }

    countriesBtnClose.addEventListener('click', closeCountries);

    countriesMenu.addEventListener('click', (e) => {
        if(e.target === countriesMenu) {
            closeCountries();
        }
    });
    
});

