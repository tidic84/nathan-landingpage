// Système de traduction français/anglais
const translations = {
    fr: {
        // Navigation
        'nav-home': 'Accueil',
        'nav-photos': 'Photos',
        'nav-contact': 'Contact',
        
        // Hero section
        'hero-title': 'Viens progresser avec un <span class="text-primary relative">ancien joueur ATP<span class="absolute bottom-1 left-0 w-full h-2 bg-accent/30 -z-10"></span></span> et coach passionné',
        'hero-subtitle': 'Cours de tennis privés au cœur du <strong>Luberon et des Alpilles</strong> – coaching personnalisé, à domicile ou sur nos terrains partenaires',
        'hero-description': 'Un suivi personnalisé pour progresser rapidement, adapté à votre niveau et vos objectifs dans un cadre exceptionnel.',
        'hero-cta1': 'Réserver votre session',
        'hero-cta2': 'Voir en action',
        
        // Sections titles
        'professional-title': 'Parcours Professionnel',
        'services-title': 'Nos Services',
        'services-quote': '"Chaque joueur est unique. J\'adapte mes cours à votre rythme, vos objectifs et vos envies."',
        'approach-title': 'Mon Approche',
        'locations-title': 'Nos Lieux d\'Intervention',
        'photos-title': 'Galerie',
        'testimonials-title': 'Témoignages',
        'contact-title': 'Contact & Réservation',
        
        // Services
        'service1-title': 'Cours Individuel',
        'service1-desc': 'Un suivi entièrement personnalisé, adapté à votre niveau, vos objectifs et votre rythme. Idéal pour progresser rapidement avec des conseils sur mesure.',
        'service2-title': 'En Solo ou à Plusieurs',
        'service2-desc': 'Partagez votre passion avec un proche ou en petit groupe. Travail technique, tactique et convivialité garantis, dans une ambiance chaleureuse.',
        'service3-title': 'Stages',
        'service3-desc': 'Des formules sur plusieurs jours au cœur du Luberon et des Alpilles, pour une immersion sportive et un apprentissage accéléré alliant plaisir et performance.',
        
        // Professional background
        'pro-desc1': 'Ancien joueur de tennis professionnel',
        'pro-rank': '660ème ATP et Numéro 83 Français',
        'pro-desc2': 'Vainqueur de 3 Titres Professionnels 15000$',
        'pro-tournaments': 'Canaries, Sharm El Sheikh et Caire',
        'pro-desc3': 'Coach Diplômé d\'État Tennis',
        'pro-certified': 'Certifié et formé auprès d\'académies reconnues',
        'pro-desc4': 'Spécialiste tous niveaux',
        'pro-levels': 'Débutants, confirmés et compétiteurs',
        
        // Contact
        'contact-subtitle': 'Prêt à jouer ? Contactez-nous pour réserver un cours ou obtenir plus d\'informations.',
        'contact-info-title': 'Informations de contact',
        'contact-phone': 'Téléphone',
        'contact-email': 'Email',
        'contact-zone': 'Zone d\'intervention',
        'contact-whatsapp': 'WhatsApp',
        'contact-ready': 'Prêt à jouer au tennis sous le soleil de Provence ?',
        'contact-call': 'Appeler maintenant',
        
        // Footer
        'footer-navigation': 'Navigation',
        'footer-contact': 'Contact',
        'footer-description': 'Ancien joueur ATP et coach diplômé d\'État',
        'footer-copyright': '© 2024 Private Tennis Coaching - Nathan Seateun. Tous droits réservés.'
    },
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-photos': 'Photos',
        'nav-contact': 'Contact',
        
        // Hero section
        'hero-title': 'Improve your game with a <span class="text-primary relative">former ATP player<span class="absolute bottom-1 left-0 w-full h-2 bg-accent/30 -z-10"></span></span> and passionate coach',
        'hero-subtitle': 'Private tennis lessons in the heart of <strong>Luberon and Alpilles</strong> – personalized coaching, at home or on our partner courts',
        'hero-description': 'Personalized support to progress quickly, adapted to your level and goals in an exceptional setting.',
        'hero-cta1': 'Book your session',
        'hero-cta2': 'See in action',
        
        // Sections titles
        'professional-title': 'Professional Background',
        'services-title': 'Our Services',
        'services-quote': '"Every player is unique. I adapt my lessons to your pace, goals and desires."',
        'approach-title': 'My Approach',
        'locations-title': 'Our Service Areas',
        'photos-title': 'Gallery',
        'testimonials-title': 'Testimonials',
        'contact-title': 'Contact & Booking',
        
        // Services
        'service1-title': 'Individual Lessons',
        'service1-desc': 'Fully personalized coaching, adapted to your level, goals and pace. Ideal for rapid progress with tailored advice.',
        'service2-title': 'Solo or Group',
        'service2-desc': 'Share your passion with a loved one or in a small group. Technical, tactical work and conviviality guaranteed, in a warm atmosphere.',
        'service3-title': 'Camps',
        'service3-desc': 'Multi-day packages in the heart of Luberon and Alpilles, for a sports immersion and accelerated learning combining pleasure and performance.',
        
        // Professional background
        'pro-desc1': 'Former professional tennis player',
        'pro-rank': '660th ATP and Number 83 French',
        'pro-desc2': 'Winner of 3 Professional Titles $15000',
        'pro-tournaments': 'Canaries, Sharm El Sheikh and Cairo',
        'pro-desc3': 'State Certified Tennis Coach',
        'pro-certified': 'Certified and trained at recognized academies',
        'pro-desc4': 'Specialist all levels',
        'pro-levels': 'Beginners, advanced and competitors',
        
        // Contact
        'contact-subtitle': 'Ready to play? Contact us to book a lesson or get more information.',
        'contact-info-title': 'Contact information',
        'contact-phone': 'Phone',
        'contact-email': 'Email',
        'contact-zone': 'Service area',
        'contact-whatsapp': 'WhatsApp',
        'contact-ready': 'Ready to play tennis under the Provence sun?',
        'contact-call': 'Call now',
        
        // Footer
        'footer-navigation': 'Navigation',
        'footer-contact': 'Contact',
        'footer-description': 'Former ATP player and state certified coach',
        'footer-copyright': '© 2024 Private Tennis Coaching - Nathan Seateun. All rights reserved.'
    }
};

// Variables globales
let currentLanguage = 'fr';

// Fonction pour changer la langue
function switchLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    translatePage();
    updateLanguageButton();
    
    // Sauvegarder la préférence
    localStorage.setItem('preferredLanguage', currentLanguage);
}

// Fonction pour traduire la page
function translatePage() {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });
    
    // Traduire les attributs spéciaux
    translateAltTexts();
}


// Fonction pour traduire les textes alt et autres attributs
function translateAltTexts() {
    const altTexts = {
        'fr': {
            'logo': 'Logo Private Tennis Coaching',
            'coach': 'Nathan Seateun Coach Tennis',
            'ranking': 'Classement Nathan Seateun',
            'coaching': 'Nathan Seateun coaching'
        },
        'en': {
            'logo': 'Private Tennis Coaching Logo', 
            'coach': 'Nathan Seateun Tennis Coach',
            'ranking': 'Nathan Seateun Ranking',
            'coaching': 'Nathan Seateun coaching'
        }
    };
    
    // Mettre à jour les alts d'images
    const logoImages = document.querySelectorAll('img[alt*="Logo"]');
    logoImages.forEach(img => img.alt = altTexts[currentLanguage].logo);
    
    const coachImages = document.querySelectorAll('img[alt*="Coach"]');
    coachImages.forEach(img => img.alt = altTexts[currentLanguage].coach);
}

// Fonction pour mettre à jour le bouton de langue
function updateLanguageButton() {
    const currentLangSpan = document.getElementById('current-lang');
    if (currentLangSpan) {
        currentLangSpan.textContent = currentLanguage.toUpperCase();
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer la langue préférée
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
        currentLanguage = savedLanguage;
    }
    
    // Ajouter l'événement au bouton de langue
    const languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('click', switchLanguage);
    }
    
    // Traduire la page si nécessaire
    if (currentLanguage === 'en') {
        translatePage();
    }
    updateLanguageButton();
});
