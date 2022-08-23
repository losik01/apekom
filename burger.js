const navSlide = () =>{
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.right-nav');

    hamburger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');


        //burger - logo
        // krizek
        hamburger.classList.toggle('toggle');
    });
}

let navbar = document.getElementById('navbar');

let off_set_top = navbar.offsetTop;

function stick_menu(){
    if(window.pageYOffset >= off_set_top){
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');

    }
}

navSlide();
window.onscroll = function(){stick_menu()};