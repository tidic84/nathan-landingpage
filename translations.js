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
        
        // Gallery
        'photos-description': 'Découvrez mon parcours à travers ces photos',
        
        // Approach section
        'approach-text1': 'Passionné de tennis depuis toujours et fort d\'une expérience en compétition nationale et internationale, je mets mon expertise au service des joueurs de tous âges et niveaux.',
        'approach-text2': 'Mon approche allie <strong class="text-primary">rigueur technique</strong>, <strong class="text-secondary">plaisir du jeu</strong> et <strong class="text-accent">adaptation personnalisée</strong>, afin de vous permettre de progresser dans un cadre convivial et motivant.',
        'approach-text3': 'Formé auprès d\'académies reconnues et certifié, j\'accompagne aussi bien les débutants souhaitant découvrir le tennis que les joueurs confirmés en quête de performance.',
        'approach-quote': '"L\'objectif est clair : vous aider à donner le meilleur de vous-même, dans un environnement unique au cœur de la Provence."',
        
        // Locations section
        'locations-description': 'Coaching possible sur vos <strong>terrains privés</strong>, <strong>hôtels partenaires</strong> dans le secteur <strong class="text-primary">Luberon/Alpilles</strong>.',
        
        // Services section
        'services-bottom-text': '<strong>Débutants, joueurs confirmés ou compétiteurs :</strong> développez votre technique, votre stratégie et votre plaisir de jeu grâce à un accompagnement sur-mesure.',
        
        // Professional section
        'pro-ranking': 'Classement officiel',
        
        // Testimonials
        'testimonial1-text': '"Une expérience incroyable ! J\'ai énormément progressé en quelques séances seulement."',
        'testimonial1-author': 'Sophie',
        'testimonial1-location': 'Gordes',
        'testimonial2-text': '"Un coach passionné et à l\'écoute. Idéal pour reprendre confiance et améliorer sa technique."',
        'testimonial2-author': 'Marc',
        'testimonial2-location': 'Saint-Rémy',
        'testimonial3-text': '"Un coaching personnalisé qui fait toute la différence, je recommande vivement."',
        'testimonial3-author': 'Thomas',
        'testimonial3-location': 'Bonnieux',
        
        // Footer
        'footer-navigation': 'Navigation',
        'footer-contact': 'Contact',
        'footer-description': 'Ancien joueur ATP et coach diplômé d\'État',
        'footer-copyright': '© 2025 Private Tennis Coaching - Nathan Seateun. Tous droits réservés.'
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
        
        // Gallery
        'photos-description': 'Discover my journey through these photos',
        
        // Approach section
        'approach-text1': 'Passionate about tennis since always and with experience in national and international competition, I put my expertise at the service of players of all ages and levels.',
        'approach-text2': 'My approach combines <strong class="text-primary">technical rigor</strong>, <strong class="text-secondary">game pleasure</strong> and <strong class="text-accent">personalized adaptation</strong>, in order to allow you to progress in a friendly and motivating environment.',
        'approach-text3': 'Trained at recognized academies and certified, I support both beginners wishing to discover tennis and experienced players seeking performance.',
        'approach-quote': '"The objective is clear: to help you give your best, in a unique environment in the heart of Provence."',
        
        // Locations section
        'locations-description': 'Coaching available on your <strong>private courts</strong>, <strong>partner hotels</strong> in the <strong class="text-primary">Luberon/Alpilles</strong> area.',
        
        // Services section
        'services-bottom-text': '<strong>Beginners, experienced players or competitors:</strong> develop your technique, strategy and enjoyment of the game through personalized coaching.',
        
        // Professional section
        'pro-ranking': 'Official ranking',
        
        // Testimonials
        'testimonial1-text': '"An incredible experience! I progressed enormously in just a few sessions."',
        'testimonial1-author': 'Sophie',
        'testimonial1-location': 'Gordes',
        'testimonial2-text': '"A passionate and attentive coach. Ideal for regaining confidence and improving technique."',
        'testimonial2-author': 'Marc',
        'testimonial2-location': 'Saint-Rémy',
        'testimonial3-text': '"Personalized coaching that makes all the difference, I highly recommend."',
        'testimonial3-author': 'Thomas',
        'testimonial3-location': 'Bonnieux',
        
        // Footer
        'footer-navigation': 'Navigation',
        'footer-contact': 'Contact',
        'footer-description': 'Former ATP player and state certified coach',
        'footer-copyright': '© 2025 Private Tennis Coaching - Nathan Seateun. All rights reserved.'
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
