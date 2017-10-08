'use strict';

document.addEventListener("DOMContentLoaded", function () {
    addEventListeners();

});

/* Navigation */ 

function addEventListeners() {
    var navItem = document.getElementById("main-nav-ul");
    navItem.addEventListener('click', activateItem);
}

function activateItem(event) {

    var arrayOfNavItem = document.getElementById(event.target.id)
        .parentNode
        .parentNode
        .children;

    if (event.target.id === 'search') {
        if (document.getElementById('search-form-off')) {
            document.getElementById('search-form-off')
                .id = 'search-form-on';
        }


    }
    if (event.target.id === 'cross') {
        document.getElementById('search-form-on').id = 'search-form-off';
    } else {
        for (var i in arrayOfNavItem) {
            if (arrayOfNavItem[i].classList) {
                arrayOfNavItem[i]
                    .classList
                    .remove('active');
            }

        }

        document.getElementById(event.target.id)
            .parentNode
            .classList
            .add('active');
    }
}

