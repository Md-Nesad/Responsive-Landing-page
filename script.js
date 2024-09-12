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
    let nav = document.getElementById('navigation');
    let button = document.getElementById('res-button');
     if(nav.style.display === 'block') {
        nav.style.display = 'none';
        button.innerHTML = '<i class="ri-menu-line"></i>'
     }else{
        nav.style.display = 'block';
        button.innerHTML = '<i class="ri-close-large-line"></i>'
     }
}
