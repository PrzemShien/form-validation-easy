'use strict';




var modal = document.querySelectorAll('.modal');
console.log(modal);

var img = document.querySelectorAll('.myImg');
console.log(img);

var modalImg = document.querySelectorAll('.modalImg');
for(let i = 0; i < img.length; i ++){
    img[i].addEventListener('click', function(){
        modal[i].style.display = "block";
        modalImg[i].src = this.src;
    }, true);
}

var span = document.querySelectorAll('.close');
for(let i = 0; i < span.length; i++){
span[i].addEventListener('click', function(){
    modal[i].style.display = "none";
}, true);
}
