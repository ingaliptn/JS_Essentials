'use strict';

const box = document.querySelector('.box'),
btn = document.querySelector('button')

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width + "||" + height);

btn.addEventListener( 'click', () =>{
    box.style.height = box.scrollHeight + 'px';

})