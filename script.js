// HEADER SCROLL 
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});


window.addEventListener("scroll", () => {
    handleScrollAnimation();
});









