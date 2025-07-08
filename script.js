document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    // Fermer le menu quand on clique sur un lien
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    // Animation des compétences au scroll
    const skillItems = document.querySelectorAll('.skill-item');
    const skillsSection = document.querySelector('.skills');
    
    function animateSkills() {
        skillItems.forEach(item => {
            const progress = item.querySelector('.progress');
            const percent = item.querySelector('.skill-info span:last-child').textContent;
            progress.style.width = percent;
        });
    }
    
    // Observer pour les animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skills')) {
                    animateSkills();
                }
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    // Observer les sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Formulaire de contact - Envoi via WhatsApp
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les valeurs du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Créer le message pour WhatsApp
            const whatsappMessage = `Bonjour Junior,%0A%0AJe vous contacte depuis votre site portfolio.%0A%0A*Nom:* ${name}%0A*Email:* ${email}%0A*Sujet:* ${subject}%0A*Message:* ${message}%0A%0ACordialement.`;
            
            // Numéro de téléphone (le vôtre)
            const phoneNumber = '2250719030672'; // Sans le + ni les espaces
            
            // Créer le lien WhatsApp
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
            
            // Ouvrir WhatsApp dans un nouvel onglet
            window.open(whatsappUrl, '_blank');
            
            // Réinitialiser le formulaire
            contactForm.reset();
            
            // Message de confirmation
            alert('Merci ! de m\'avoir envoyé le message pré-rempli, via whatsapp. \n je vous répondrez le plus vite posible.');
        });
    }
    
    // Smooth scrolling pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation au chargement de la page
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('animated');
        document.querySelector('.hero-image').classList.add('animated');
    }, 300);
});