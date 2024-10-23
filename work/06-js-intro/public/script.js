"use strict";
(function(){
        const menuToggle = document.querySelector('.menu-toggle');
        const dropdownMenu = document.querySelector('.dropdown');
    
        menuToggle.addEventListener('click', function() {
            dropdownMenu.classList.toggle('active');
        });
})();