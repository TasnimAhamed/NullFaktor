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

    const featureSliderInstance = new Splide('.why__us-slider', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        gap    : '24px',
        drag   : false,
        arrows : false,
        pagination: false,
        breakpoints: {
            1024: {
                perPage: 2,
                padding: '0px',
                drag: true,
            },
            640: {
                perPage: 1,
                padding: '8%',
                gap: '16px',
                focus     : 'center',
                start: 1,
                drag: true,
            },
        },
    }).mount();
})