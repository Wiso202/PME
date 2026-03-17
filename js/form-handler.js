document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Récupération des données
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;

            // Ici tu peux intégrer un service d'envoi d'email (Formspree, EmailJS)
            // Pour l'instant, on simule l'envoi
            console.log(`Message de : ${name} (${email}) : ${message}`);

            alert(`Merci ${name}, votre message a été envoyé avec succès ! Notre équipe vous répondra sous 24h.`);
            contactForm.reset();
        });
    }
});

// Fonction utilitaire pour ouvrir WhatsApp avec un message
function openWhatsApp() {
    const phone = "229XXXXXXXX"; // À remplacer par le numéro de la PME
    const text = encodeURIComponent("Bonjour, j'ai visité votre site web et j'aimerais en savoir plus sur vos services.");
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}