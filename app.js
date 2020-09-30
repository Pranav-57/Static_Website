const hamburger_icon = document.querySelector('#navbar .navbar .nav-list .hamburger');
var nav_list = document.querySelector('#navbar .navbar .nav-list');
var navbar = document.querySelector('.navbar')

hamburger_icon.addEventListener('click',() => {
    nav_list.classList.toggle('open');
    hamburger_icon.classList.toggle('active');
})

window.addEventListener("scroll",() => {
    if (window.pageYOffset >= 650){
        navbar.style.transition = '2s';
        navbar.style.background = 'rgb(167, 167, 167)';
    } else{
        navbar.style.background = 'transparent';
    };
})