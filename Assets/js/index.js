"use strict"


// const button = document.querySelector('button')

// button.addEventListener(click, () => {
//     button.classList.toggle('active')
// })


const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});