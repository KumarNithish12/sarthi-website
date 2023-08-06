// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 0) {
                header.classList.add('visible');
            } else {
                header.classList.remove('visible');
            }
        });