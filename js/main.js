'use strict';

document.addEventListener("DOMContentLoaded",function(){
    addEventListeners();

});

function addEventListeners(){
    var navItem = document.getElementById("main-nav-ul");
    navItem.addEventListener('click',activateItem);
}

function activateItem(event){

   var arrayOfNavItem = document.getElementById(event.target.id)
        .parentNode
        .parentNode
        .children;

    for ( var i in arrayOfNavItem){ 
        if(arrayOfNavItem[i]
                .classList
                    ){
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
 

