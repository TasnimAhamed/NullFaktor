document.addEventListener("DOMContentLoaded", function(){
    const navbarToggler = document.querySelector("#navbar-toggler");
    const navbarContent = document.querySelector("#navbar-content");
    const navbarCloser = document.querySelector("#mobile__navigation-closer");
    navbarToggler.addEventListener("click", function(){
        navbarContent.classList.toggle("active");
    })
    navbarCloser.addEventListener("click", function(){
        navbarContent.classList.toggle("active");
    })
})