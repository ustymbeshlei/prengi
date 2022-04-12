'use strict';

window.addEventListener('DOMContentLoaded', () => {
    

    //Hamburger


    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.control__menu'),
          menuBtnClose = document.querySelector('.control__menu_close');
    
    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
        openOverlay();
        //document.body.style.overflow = 'hidden';
    });

    function closeMenu() {
        menu.classList.remove('active');
        closeOverlay();
        //document.body.style.overflow = '';
    }
    
    menuBtnClose.addEventListener('click', closeMenu);

    //Countries


    const countriesBtnOpen = document.querySelector('.control__btn_open'),
          countriesMenu = document.querySelector('.countries'),
          countriesBtnClose = document.querySelector('.countries__btn_close');

    countriesBtnOpen.addEventListener('click', () => {
        countriesMenu.classList.add('active');
        openOverlay();
        //document.body.style.overflow = 'hidden';
    });

    function closeCountries() {
        countriesMenu.classList.remove('active');
        closeOverlay();
        //document.body.style.overflow = '';
    }

    countriesBtnClose.addEventListener('click', closeCountries);


    //Overlay

    const overlay = document.querySelector('.overlay');

    function openOverlay() {
        overlay.classList.add('active');
    }

    function closeOverlay() {
        overlay.classList.remove('active');
    }

    overlay.addEventListener('click', (e) => {
        if(e.target === overlay) {
            closeCountries();
            closeMenu();
        }
    });
});

