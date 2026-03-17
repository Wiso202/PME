document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    // 1. Gestion de la Navbar au Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Smooth Scroll pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Animation d'apparition au scroll (Reveal effect)
    const revealElements = document.querySelectorAll('.card, .section-header');
    const revealOnScroll = () => {
        for (let i = 0; i < revealElements.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = revealElements[i].getBoundingClientRect().top;
            let elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                revealElements[i].style.opacity = "1";
                revealElements[i].style.transform = "translateY(0)";
            }
        }
    };
    
    // Initialisation style pour animation
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
    });

    window.addEventListener('scroll', revealOnScroll);
});