export const defaultLanguage = "fr"

export const supportedLanguages = ["fr", "en", "es"] as const

export type SupportedLanguage = (typeof supportedLanguages)[number]

export const resources = {
  fr: {
    translation: {
      common: {
        appName: "CookingMana",
        languageLabel: "Langue",
      },
      nav: {
        home: "Accueil",
        admin: "Admin",
        login: "Login",
        register: "Register",
        profile: "Profil",
        logout: "Déconnexion",
      },
      app: {
        activeRoute: "Route active : {{path}}",
      },
      auth: {
        requiredField: "Ce champ est requis.",
        invalidEmail: "Veuillez saisir une adresse email valide.",
        loginTitle: "Connexion",
        loginSubtitle: "Connecte-toi à ton espace CookingMana.",
        registerTitle: "Inscription",
        registerSubtitle: "Crée ton compte CookingMana en quelques secondes.",
        fullName: "Nom complet",
        email: "Email",
        password: "Mot de passe",
        confirmPassword: "Confirmer le mot de passe",
        signIn: "Se connecter",
        signUp: "Créer mon compte",
        loginSuccess:
          "Connexion réussie. Token JWT stocké côté front-end (démo).",
        registerSuccess:
          "Inscription réussie. Token JWT stocké côté front-end (démo).",
        passwordMinLength:
          "Le mot de passe doit contenir au moins {{count}} caractères.",
        passwordMismatch: "Les mots de passe ne correspondent pas.",
      },
      profile: {
        sessionExpiredTitle: "Session expirée",
        sessionExpiredMessage:
          "Ta session n'est plus valide. Merci de te reconnecter.",
        goToLogin: "Aller à la connexion",
        title: "Mon profil",
        subtitle: "Mets à jour tes informations personnelles.",
        phoneNumber: "Téléphone",
        preferredLanguage: "Langue préférée",
        updateProfile: "Mettre à jour mon profil",
        saveSuccess: "Profil mis à jour avec succès.",
        languages: {
          fr: "Français",
          en: "English",
          es: "Español",
        },
      },
      home: {
        carousel: {
          ariaLabel: "Carrousel de la page d'accueil",
          previous: "Précédent",
          next: "Suivant",
          navigation: "Navigation du carrousel",
          goToSlide: "Aller au slide {{index}}",
          slides: {
            signatureCuisine: {
              title: "Cuisine gastronomique et créative",
              description:
                "Découvrez une expérience culinaire raffinée pensée autour de produits de saison et d'accords subtils.",
            },
            chefStory: {
              title: "Rencontrez notre brigade de chefs",
              description:
                "Une équipe passionnée qui sublime chaque assiette avec précision, exigence et élégance.",
            },
            bookingInvitation: {
              title: "Réservez votre table en quelques clics",
              description:
                "Planifiez votre prochaine soirée au restaurant CookingMana et profitez d'un service d'exception.",
            },
          },
        },
        weeklyMenu: {
          ariaLabel: "Menu de la semaine",
          title: "Menu de la semaine",
          availability:
            "Le menu du jour est disponible uniquement en semaine durant le midi.",
          fullMenuPdf: "Voir le menu complet (PDF)",
          tableAria: "Tableau des plats par jour",
          dayHeader: "Jour",
          dishHeader: "Plat du jour",
          days: {
            monday: "Lundi",
            tuesday: "Mardi",
            wednesday: "Mercredi",
            thursday: "Jeudi",
            friday: "Vendredi",
          },
          dishes: {
            monday: "Suprême de volaille, purée de panais et jus réduit",
            tuesday: "Risotto crémeux aux cèpes et copeaux de parmesan",
            wednesday: "Saumon rôti, légumes glacés et beurre citronné",
            thursday:
              "Bœuf braisé, écrasé de pommes de terre à l'huile d'olive",
            friday: "Pavé de cabillaud, quinoa aux herbes et sauce vierge",
          },
        },
        restaurant: {
          ariaLabel: "Présentation du restaurant",
          title: "Présentation du restaurant",
          subtitle: "L'élégance gastronomique au cœur de CookingMana",
          paragraphs: {
            p1: "CookingMana propose une cuisine gastronomique moderne, pensée autour de produits frais et de saison.",
            p2: "Notre équipe accorde une attention particulière à l'équilibre des saveurs, au dressage des assiettes et à la qualité du service en salle.",
            p3: "Chaque service est conçu pour offrir une expérience conviviale, raffinée et mémorable à nos clients.",
          },
        },
        chefs: {
          ariaLabel: "Présentation des chefs",
          eyebrow: "Équipe culinaire",
          title: "Présentation des chefs",
          profiles: {
            antoine: {
              name: "Chef Antoine Morel",
              role: "Chef Exécutif",
              signature: "Cuisine française contemporaine et jus de caractère",
            },
            lina: {
              name: "Cheffe Lina Caron",
              role: "Cheffe Pâtissière",
              signature:
                "Desserts équilibrés autour des fruits et des textures",
            },
          },
        },
        reviews: {
          ariaLabel: "Avis Google",
          eyebrow: "Avis clients",
          title: "Avis Google",
          previous: "Avis précédent",
          next: "Avis suivant",
          navigation: "Navigation des avis",
          goToReview: "Aller à l'avis {{index}}",
          ratingLabel: "Note",
          items: {
            sophie: {
              fullName: "Sophie Martin",
              review:
                "Une expérience magnifique du début à la fin. Les saveurs sont précises et le service est irréprochable.",
            },
            thomas: {
              fullName: "Thomas Bernard",
              review:
                "Cadre élégant, équipe attentionnée et menu parfaitement maîtrisé. Je recommande pour une soirée spéciale.",
            },
            camille: {
              fullName: "Camille Dubois",
              review:
                "Très belle découverte. Les plats sont fins et bien présentés, avec une excellente sélection de vins.",
            },
            lucas: {
              fullName: "Lucas Petit",
              review:
                "Cuisine inventive et gourmande. Mention spéciale pour le dessert signature et l'accueil chaleureux.",
            },
          },
        },
      },
      footer: {
        rights: "Tous droits réservés.",
        ariaLabel: "Liens du pied de page",
      },
      errorBoundary: {
        title: "Une erreur est survenue",
        message:
          "Merci de recharger la page. Si le problème persiste, contactez l'équipe CookingMana.",
      },
    },
  },
  en: {
    translation: {
      common: {
        appName: "CookingMana",
        languageLabel: "Language",
      },
      nav: {
        home: "Home",
        admin: "Admin",
        login: "Login",
        register: "Register",
        profile: "Profile",
        logout: "Logout",
      },
      app: {
        activeRoute: "Active route: {{path}}",
      },
      auth: {
        requiredField: "This field is required.",
        invalidEmail: "Please enter a valid email address.",
        loginTitle: "Login",
        loginSubtitle: "Sign in to your CookingMana account.",
        registerTitle: "Register",
        registerSubtitle: "Create your CookingMana account in seconds.",
        fullName: "Full name",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm password",
        signIn: "Sign in",
        signUp: "Create account",
        loginSuccess: "Login successful. JWT token saved on frontend (demo).",
        registerSuccess:
          "Registration successful. JWT token saved on frontend (demo).",
        passwordMinLength:
          "Password must contain at least {{count}} characters.",
        passwordMismatch: "Passwords do not match.",
      },
      profile: {
        sessionExpiredTitle: "Session expired",
        sessionExpiredMessage:
          "Your session is no longer valid. Please sign in again.",
        goToLogin: "Go to login",
        title: "My profile",
        subtitle: "Update your personal information.",
        phoneNumber: "Phone number",
        preferredLanguage: "Preferred language",
        updateProfile: "Update my profile",
        saveSuccess: "Profile updated successfully.",
        languages: {
          fr: "French",
          en: "English",
          es: "Spanish",
        },
      },
      home: {
        carousel: {
          ariaLabel: "Homepage carousel",
          previous: "Previous",
          next: "Next",
          navigation: "Carousel navigation",
          goToSlide: "Go to slide {{index}}",
          slides: {
            signatureCuisine: {
              title: "Creative gourmet cuisine",
              description:
                "Discover a refined culinary experience built around seasonal products and subtle pairings.",
            },
            chefStory: {
              title: "Meet our chef team",
              description:
                "A passionate team that elevates every plate with precision, high standards, and elegance.",
            },
            bookingInvitation: {
              title: "Book your table in a few clicks",
              description:
                "Plan your next evening at CookingMana and enjoy exceptional service.",
            },
          },
        },
        weeklyMenu: {
          ariaLabel: "Weekly menu",
          title: "Weekly menu",
          availability:
            "The daily menu is available on weekdays at lunchtime only.",
          fullMenuPdf: "View full menu (PDF)",
          tableAria: "Daily dishes table",
          dayHeader: "Day",
          dishHeader: "Dish of the day",
          days: {
            monday: "Monday",
            tuesday: "Tuesday",
            wednesday: "Wednesday",
            thursday: "Thursday",
            friday: "Friday",
          },
          dishes: {
            monday: "Chicken supreme, parsnip puree, reduced jus",
            tuesday: "Creamy porcini risotto with parmesan shavings",
            wednesday: "Roasted salmon, glazed vegetables, lemon butter",
            thursday: "Braised beef, olive oil mashed potatoes",
            friday: "Cod fillet, herb quinoa, vierge sauce",
          },
        },
        restaurant: {
          ariaLabel: "Restaurant presentation",
          title: "Restaurant presentation",
          subtitle: "Gastronomic elegance at the heart of CookingMana",
          paragraphs: {
            p1: "CookingMana offers modern gourmet cuisine based on fresh, seasonal ingredients.",
            p2: "Our team pays special attention to flavor balance, plating, and quality table service.",
            p3: "Each service is designed to provide a convivial, refined, and memorable experience.",
          },
        },
        chefs: {
          ariaLabel: "Chefs presentation",
          eyebrow: "Culinary team",
          title: "Chefs presentation",
          profiles: {
            antoine: {
              name: "Chef Antoine Morel",
              role: "Executive Chef",
              signature: "Contemporary French cuisine and rich sauces",
            },
            lina: {
              name: "Chef Lina Caron",
              role: "Pastry Chef",
              signature: "Balanced desserts focused on fruits and textures",
            },
          },
        },
        reviews: {
          ariaLabel: "Google reviews",
          eyebrow: "Customer reviews",
          title: "Google reviews",
          previous: "Previous review",
          next: "Next review",
          navigation: "Reviews navigation",
          goToReview: "Go to review {{index}}",
          ratingLabel: "Rating",
          items: {
            sophie: {
              fullName: "Sophie Martin",
              review:
                "A wonderful experience from start to finish. Flavors are precise and service is flawless.",
            },
            thomas: {
              fullName: "Thomas Bernard",
              review:
                "Elegant setting, attentive staff, and a perfectly executed menu. Highly recommended for a special evening.",
            },
            camille: {
              fullName: "Camille Dubois",
              review:
                "A great discovery. Dishes are refined and beautifully presented, with an excellent wine selection.",
            },
            lucas: {
              fullName: "Lucas Petit",
              review:
                "Inventive and indulgent cuisine. Special mention for the signature dessert and warm welcome.",
            },
          },
        },
      },
      footer: {
        rights: "All rights reserved.",
        ariaLabel: "Footer links",
      },
      errorBoundary: {
        title: "An error occurred",
        message:
          "Please reload the page. If the issue persists, contact the CookingMana team.",
      },
    },
  },
  es: {
    translation: {
      common: {
        appName: "CookingMana",
        languageLabel: "Idioma",
      },
      nav: {
        home: "Inicio",
        admin: "Admin",
        login: "Login",
        register: "Register",
        profile: "Perfil",
        logout: "Cerrar sesión",
      },
      app: {
        activeRoute: "Ruta activa: {{path}}",
      },
      auth: {
        requiredField: "Este campo es obligatorio.",
        invalidEmail: "Introduce una dirección de correo válida.",
        loginTitle: "Inicio de sesión",
        loginSubtitle: "Accede a tu cuenta de CookingMana.",
        registerTitle: "Registro",
        registerSubtitle: "Crea tu cuenta de CookingMana en segundos.",
        fullName: "Nombre completo",
        email: "Correo electrónico",
        password: "Contraseña",
        confirmPassword: "Confirmar contraseña",
        signIn: "Iniciar sesión",
        signUp: "Crear cuenta",
        loginSuccess:
          "Inicio de sesión correcto. Token JWT guardado en frontend (demo).",
        registerSuccess:
          "Registro correcto. Token JWT guardado en frontend (demo).",
        passwordMinLength:
          "La contraseña debe tener al menos {{count}} caracteres.",
        passwordMismatch: "Las contraseñas no coinciden.",
      },
      profile: {
        sessionExpiredTitle: "Sesión expirada",
        sessionExpiredMessage:
          "Tu sesión ya no es válida. Vuelve a iniciar sesión.",
        goToLogin: "Ir al login",
        title: "Mi perfil",
        subtitle: "Actualiza tu información personal.",
        phoneNumber: "Teléfono",
        preferredLanguage: "Idioma preferido",
        updateProfile: "Actualizar mi perfil",
        saveSuccess: "Perfil actualizado correctamente.",
        languages: {
          fr: "Francés",
          en: "Inglés",
          es: "Español",
        },
      },
      home: {
        carousel: {
          ariaLabel: "Carrusel de inicio",
          previous: "Anterior",
          next: "Siguiente",
          navigation: "Navegación del carrusel",
          goToSlide: "Ir a la diapositiva {{index}}",
          slides: {
            signatureCuisine: {
              title: "Cocina gastronómica y creativa",
              description:
                "Descubre una experiencia culinaria refinada basada en productos de temporada y combinaciones sutiles.",
            },
            chefStory: {
              title: "Conoce a nuestro equipo de chefs",
              description:
                "Un equipo apasionado que eleva cada plato con precisión, exigencia y elegancia.",
            },
            bookingInvitation: {
              title: "Reserva tu mesa en pocos clics",
              description:
                "Planifica tu próxima velada en CookingMana y disfruta de un servicio excepcional.",
            },
          },
        },
        weeklyMenu: {
          ariaLabel: "Menú semanal",
          title: "Menú semanal",
          availability:
            "El menú del día está disponible solo entre semana al mediodía.",
          fullMenuPdf: "Ver menú completo (PDF)",
          tableAria: "Tabla de platos por día",
          dayHeader: "Día",
          dishHeader: "Plato del día",
          days: {
            monday: "Lunes",
            tuesday: "Martes",
            wednesday: "Miércoles",
            thursday: "Jueves",
            friday: "Viernes",
          },
          dishes: {
            monday: "Suprema de pollo, puré de chirivía y jugo reducido",
            tuesday: "Risotto cremoso de setas con lascas de parmesano",
            wednesday:
              "Salmón asado, verduras glaseadas y mantequilla de limón",
            thursday: "Ternera braseada, puré de patata con aceite de oliva",
            friday: "Lomo de bacalao, quinoa con hierbas y salsa vierge",
          },
        },
        restaurant: {
          ariaLabel: "Presentación del restaurante",
          title: "Presentación del restaurante",
          subtitle: "Elegancia gastronómica en el corazón de CookingMana",
          paragraphs: {
            p1: "CookingMana ofrece cocina gastronómica moderna con productos frescos y de temporada.",
            p2: "Nuestro equipo presta especial atención al equilibrio de sabores, el emplatado y la calidad del servicio.",
            p3: "Cada servicio está diseñado para ofrecer una experiencia acogedora, refinada y memorable.",
          },
        },
        chefs: {
          ariaLabel: "Presentación de los chefs",
          eyebrow: "Equipo culinario",
          title: "Presentación de los chefs",
          profiles: {
            antoine: {
              name: "Chef Antoine Morel",
              role: "Chef ejecutivo",
              signature: "Cocina francesa contemporánea y salsas con carácter",
            },
            lina: {
              name: "Cheffe Lina Caron",
              role: "Chef pastelera",
              signature: "Postres equilibrados centrados en frutas y texturas",
            },
          },
        },
        reviews: {
          ariaLabel: "Reseñas de Google",
          eyebrow: "Opiniones de clientes",
          title: "Reseñas de Google",
          previous: "Reseña anterior",
          next: "Siguiente reseña",
          navigation: "Navegación de reseñas",
          goToReview: "Ir a la reseña {{index}}",
          ratingLabel: "Puntuación",
          items: {
            sophie: {
              fullName: "Sophie Martin",
              review:
                "Una experiencia magnífica de principio a fin. Sabores precisos y servicio impecable.",
            },
            thomas: {
              fullName: "Thomas Bernard",
              review:
                "Ambiente elegante, equipo atento y menú perfectamente ejecutado. Muy recomendable para una ocasión especial.",
            },
            camille: {
              fullName: "Camille Dubois",
              review:
                "Muy buen descubrimiento. Platos finos y bien presentados, con excelente selección de vinos.",
            },
            lucas: {
              fullName: "Lucas Petit",
              review:
                "Cocina creativa y deliciosa. Mención especial para el postre de la casa y la cálida bienvenida.",
            },
          },
        },
      },
      footer: {
        rights: "Todos los derechos reservados.",
        ariaLabel: "Enlaces del pie de página",
      },
      errorBoundary: {
        title: "Ha ocurrido un error",
        message:
          "Recarga la página. Si el problema persiste, contacta con el equipo de CookingMana.",
      },
    },
  },
} as const
