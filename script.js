// sliding on click on anchor tag
let slide = document.querySelectorAll('a');
    slide.forEach(anchor => {
        anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        });
});
// scroll to top function
window.onscroll = function() {
    let scrollBtn = document.getElementById('scroll-Btn');
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        scrollBtn.style.display = 'block';
    }else{
        scrollBtn.style.display = 'none';
    }
}

function scrollToTop () {
    document.body.scrollTo({top: 0, behavior: 'smooth'});
    document.documentElement.scrollTo({top: 0, behavior: 'smooth'});
}
// resposive nav
function showNav() {
    let nav = document.getElementById('home');
    let navLink = document.getElementById('navigation');
    let button = document.getElementById('res-button');
     if(navLink.style.display === 'block') {
        navLink.style.display = 'none';
        nav.style.transition = '5s';
        button.innerHTML = '<i class="ri-menu-line"></i>'
     }else{
        nav.style.transition = '5s'
        navLink.style.display = 'block';
        button.innerHTML = '<i class="ri-close-large-line"></i>'
     }
}
