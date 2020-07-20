const nav = document.querySelector('.nav')
const burger = document.querySelector('.header__burger')

let navOpen = false;

const toggle = () => {
    if(!navOpen) {
        nav.className = "nav nav--open"
        burger.classList.add("header__burger--close")
        return navOpen = true;
    } else {
        nav.className = "nav nav--closed"
        burger.classList.remove("header__burger--close")
        return navOpen = false;
    }
    
}

const test = () => {
    if(window.innerWidth > 800 && nav.classList.contains('nav--open')){
    console.log(window.innerWidth)
    nav.className = "nav nav--closed"
    burger.classList.remove("header__burger--close")
    return navOpen = false;

    }
}

window.onresize = function() {test()}


burger.onclick = function() {toggle()}