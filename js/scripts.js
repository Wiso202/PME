document.addEventListener('DOMContentLoaded', () => {
    // --- 1. SÉLECTEURS PRINCIPAUX ---
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('#navLinks');
    const revealElements = document.querySelectorAll('.card, .section-header');

    // --- 2. GESTION DU MENU MOBILE (BURGER) ---
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });

        // Fermer le menu si on clique sur un lien (essentiel pour mobile)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('is-active');
            });
        });
    }

    // --- 3. NAVBAR & ANIMATIONS AU SCROLL ---
    const handleScrollEffects = () => {
        // Effet fond de navbar au scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Animation d'apparition (Reveal effect)
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    // Initialisation du style pour l'animation reveal
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
    });

    // Lancement des effets au scroll
    window.addEventListener('scroll', handleScrollEffects);
    handleScrollEffects(); // Appel initial pour les éléments déjà visibles

    // --- 4. SMOOTH SCROLL (SCROLL FLUIDE) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== "#") {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// --- 5. FONCTIONS GLOBALES (WhatsApp) ---
function openWhatsApp() {
    const phone = "2290100000000"; // Ton numéro béninois
    const message = encodeURIComponent("Bonjour, je souhaite obtenir des informations sur vos services.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}
