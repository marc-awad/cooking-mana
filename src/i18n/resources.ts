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
        reservation: "Réserver",
        cart: "Panier",
        myOrders: "Mes commandes",
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
      reservation: {
        title: "Réservation",
        bookTableCta: "Réserver une table",
        form: {
          name: "Nom",
          email: "Email",
          date: "Date",
          time: "Heure",
          guests: "Nombre de personnes",
          messageOptional: "Message (optionnel)",
          placeholders: {
            name: "Votre nom",
            email: "votre@email.com",
            guests: "Ex: 4",
            message: "Allergies, demande spéciale...",
          },
          success:
            "Votre réservation a bien été enregistrée ! Nous vous confirmerons sous peu.",
        },
      },
      orders: {
        status: {
          paid: "Payée",
          pending: "En attente",
        },
        cart: {
          title: "Panier",
          subtitle:
            "Ajoute des plats, ajuste les quantites, puis valide ton checkout.",
          addToCart: "Ajouter au panier",
          myCart: "Mon panier",
          empty: "Ton panier est vide.",
          remove: "Supprimer",
          decreaseAria: "Diminuer la quantite de {{itemName}}",
          increaseAria: "Augmenter la quantite de {{itemName}}",
          total: "Total",
          checkout: "Passer au checkout",
        },
        checkout: {
          title: "Checkout",
          subtitle:
            "Paiement Stripe simule pour la demo, puis creation automatique de la commande.",
          totalToPay: "Total a payer:",
          itemsCount: "Articles: {{count}}",
          successTitle: "Paiement confirme.",
          successOrderId: "Commande creee avec l'id: {{orderId}}",
          viewHistory: "Voir mon historique commandes",
          customerName: "Nom du client",
          customerNamePlaceholder: "Ex: Marc Awad",
          processing: "Paiement en cours...",
          payButton: "Payer avec Stripe (demo)",
          backToCart: "Retour au panier",
          errors: {
            missingName: "Merci de saisir ton nom pour la commande.",
            emptyCart:
              "Ton panier est vide. Ajoute des produits avant de payer.",
            paymentFailed: "Le paiement a echoue. Merci de reessayer.",
          },
        },
        history: {
          title: "Historique de mes commandes",
          subtitle: "Retrouve ici toutes tes commandes validees et payees.",
          empty: "Aucune commande pour le moment.",
          startOrder: "Commencer une commande",
          orderLabel: "Commande #{{orderId}}",
          dateLabel: "Date:",
          paymentIntentLabel: "Stripe PaymentIntent:",
          totalLabel: "Total:",
        },
      },
      admin: {
        sidebar: {
          title: "Administration",
        },
        nav: {
          dashboard: "Dashboard",
          products: "Produits",
          categories: "Catégories",
          users: "Utilisateurs",
          reservations: "Réservations",
          orders: "Commandes",
        },
        common: {
          status: "Statut",
          actions: "Actions",
          edit: "Modifier",
          delete: "Supprimer",
          cancel: "Annuler",
          save: "Enregistrer",
          available: "Disponible",
          unavailable: "Indisponible",
        },
        status: {
          pending: "En attente",
          confirmed: "Confirmée",
          inProgress: "En cours",
          delivered: "Livrée",
          cancelled: "Annulée",
        },
        products: {
          add: "Ajouter un plat",
          edit: "Modifier le plat",
          form: {
            name: "Nom du plat",
            description: "Description",
            price: "Prix (€)",
            category: "Catégorie",
            imageUrl: "URL de l'image",
            available: "Disponible",
          },
        },
        categories: {
          add: "Ajouter une catégorie",
          edit: "Modifier la catégorie",
          form: {
            name: "Nom de la catégorie",
          },
        },
        users: {
          add: "Ajouter un utilisateur",
          edit: "Modifier l'utilisateur",
          form: {
            name: "Nom",
            email: "Email",
            role: "Rôle",
            userRole: "Utilisateur",
            adminRole: "Administrateur",
          },
        },
        reservations: {
          add: "Ajouter une réservation",
          edit: "Modifier la réservation",
          form: {
            clientName: "Nom du client",
            clientEmail: "Email du client",
            date: "Date de réservation",
            guests: "Nombre de personnes",
          },
        },
        orders: {
          add: "Ajouter une commande",
          edit: "Modifier la commande",
          form: {
            clientName: "Nom du client",
            clientEmail: "Email du client",
            items: "Plats commandés (séparés par des virgules)",
            itemsPlaceholder: "Gratin dauphinois, Tarte aux pommes...",
            totalPrice: "Prix total (€)",
          },
          table: {
            items: "Plats",
            total: "Total",
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
        reservation: "Book",
        cart: "Cart",
        myOrders: "My orders",
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
      reservation: {
        title: "Reservation",
        bookTableCta: "Book a table",
        form: {
          name: "Name",
          email: "Email",
          date: "Date",
          time: "Time",
          guests: "Number of guests",
          messageOptional: "Message (optional)",
          placeholders: {
            name: "Your name",
            email: "your@email.com",
            guests: "Ex: 4",
            message: "Allergies, special request...",
          },
          success:
            "Your reservation has been recorded! We will confirm it shortly.",
        },
      },
      orders: {
        status: {
          paid: "Paid",
          pending: "Pending",
        },
        cart: {
          title: "Cart",
          subtitle: "Add dishes, adjust quantities, then go to checkout.",
          addToCart: "Add to cart",
          myCart: "My cart",
          empty: "Your cart is empty.",
          remove: "Remove",
          decreaseAria: "Decrease quantity of {{itemName}}",
          increaseAria: "Increase quantity of {{itemName}}",
          total: "Total",
          checkout: "Go to checkout",
        },
        checkout: {
          title: "Checkout",
          subtitle:
            "Stripe payment is simulated for demo, then the order is created automatically.",
          totalToPay: "Total to pay:",
          itemsCount: "Items: {{count}}",
          successTitle: "Payment confirmed.",
          successOrderId: "Order created with id: {{orderId}}",
          viewHistory: "View my order history",
          customerName: "Customer name",
          customerNamePlaceholder: "Ex: Marc Awad",
          processing: "Payment in progress...",
          payButton: "Pay with Stripe (demo)",
          backToCart: "Back to cart",
          errors: {
            missingName: "Please enter your name for the order.",
            emptyCart: "Your cart is empty. Add products before paying.",
            paymentFailed: "Payment failed. Please try again.",
          },
        },
        history: {
          title: "My order history",
          subtitle: "Find all your validated and paid orders here.",
          empty: "No orders yet.",
          startOrder: "Start an order",
          orderLabel: "Order #{{orderId}}",
          dateLabel: "Date:",
          paymentIntentLabel: "Stripe PaymentIntent:",
          totalLabel: "Total:",
        },
      },
      admin: {
        sidebar: {
          title: "Administration",
        },
        nav: {
          dashboard: "Dashboard",
          products: "Products",
          categories: "Categories",
          users: "Users",
          reservations: "Reservations",
          orders: "Orders",
        },
        common: {
          status: "Status",
          actions: "Actions",
          edit: "Edit",
          delete: "Delete",
          cancel: "Cancel",
          save: "Save",
          available: "Available",
          unavailable: "Unavailable",
        },
        status: {
          pending: "Pending",
          confirmed: "Confirmed",
          inProgress: "In progress",
          delivered: "Delivered",
          cancelled: "Cancelled",
        },
        products: {
          add: "Add dish",
          edit: "Edit dish",
          form: {
            name: "Dish name",
            description: "Description",
            price: "Price (€)",
            category: "Category",
            imageUrl: "Image URL",
            available: "Available",
          },
        },
        categories: {
          add: "Add category",
          edit: "Edit category",
          form: {
            name: "Category name",
          },
        },
        users: {
          add: "Add user",
          edit: "Edit user",
          form: {
            name: "Name",
            email: "Email",
            role: "Role",
            userRole: "User",
            adminRole: "Administrator",
          },
        },
        reservations: {
          add: "Add reservation",
          edit: "Edit reservation",
          form: {
            clientName: "Client name",
            clientEmail: "Client email",
            date: "Reservation date",
            guests: "Guests",
          },
        },
        orders: {
          add: "Add order",
          edit: "Edit order",
          form: {
            clientName: "Client name",
            clientEmail: "Client email",
            items: "Ordered dishes (comma-separated)",
            itemsPlaceholder: "Dauphinois gratin, Apple pie...",
            totalPrice: "Total price (€)",
          },
          table: {
            items: "Items",
            total: "Total",
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
        reservation: "Reservar",
        cart: "Carrito",
        myOrders: "Mis pedidos",
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
      reservation: {
        title: "Reserva",
        bookTableCta: "Reservar una mesa",
        form: {
          name: "Nombre",
          email: "Correo electrónico",
          date: "Fecha",
          time: "Hora",
          guests: "Número de personas",
          messageOptional: "Mensaje (opcional)",
          placeholders: {
            name: "Tu nombre",
            email: "tu@email.com",
            guests: "Ej: 4",
            message: "Alergias, petición especial...",
          },
          success: "¡Tu reserva ha sido registrada! Te confirmaremos en breve.",
        },
      },
      orders: {
        status: {
          paid: "Pagado",
          pending: "Pendiente",
        },
        cart: {
          title: "Carrito",
          subtitle:
            "Añade platos, ajusta cantidades y luego valida tu checkout.",
          addToCart: "Añadir al carrito",
          myCart: "Mi carrito",
          empty: "Tu carrito está vacío.",
          remove: "Eliminar",
          decreaseAria: "Disminuir cantidad de {{itemName}}",
          increaseAria: "Aumentar cantidad de {{itemName}}",
          total: "Total",
          checkout: "Pasar al checkout",
        },
        checkout: {
          title: "Checkout",
          subtitle:
            "Pago Stripe simulado para la demo, luego se crea el pedido automáticamente.",
          totalToPay: "Total a pagar:",
          itemsCount: "Artículos: {{count}}",
          successTitle: "Pago confirmado.",
          successOrderId: "Pedido creado con id: {{orderId}}",
          viewHistory: "Ver mi historial de pedidos",
          customerName: "Nombre del cliente",
          customerNamePlaceholder: "Ej: Marc Awad",
          processing: "Pago en curso...",
          payButton: "Pagar con Stripe (demo)",
          backToCart: "Volver al carrito",
          errors: {
            missingName: "Introduce tu nombre para el pedido.",
            emptyCart: "Tu carrito está vacío. Añade productos antes de pagar.",
            paymentFailed: "El pago ha fallado. Inténtalo de nuevo.",
          },
        },
        history: {
          title: "Historial de mis pedidos",
          subtitle: "Encuentra aquí todos tus pedidos validados y pagados.",
          empty: "Aún no hay pedidos.",
          startOrder: "Empezar un pedido",
          orderLabel: "Pedido #{{orderId}}",
          dateLabel: "Fecha:",
          paymentIntentLabel: "Stripe PaymentIntent:",
          totalLabel: "Total:",
        },
      },
      admin: {
        sidebar: {
          title: "Administración",
        },
        nav: {
          dashboard: "Panel",
          products: "Productos",
          categories: "Categorías",
          users: "Usuarios",
          reservations: "Reservas",
          orders: "Pedidos",
        },
        common: {
          status: "Estado",
          actions: "Acciones",
          edit: "Editar",
          delete: "Eliminar",
          cancel: "Cancelar",
          save: "Guardar",
          available: "Disponible",
          unavailable: "No disponible",
        },
        status: {
          pending: "Pendiente",
          confirmed: "Confirmada",
          inProgress: "En curso",
          delivered: "Entregado",
          cancelled: "Cancelado",
        },
        products: {
          add: "Añadir plato",
          edit: "Editar plato",
          form: {
            name: "Nombre del plato",
            description: "Descripción",
            price: "Precio (€)",
            category: "Categoría",
            imageUrl: "URL de la imagen",
            available: "Disponible",
          },
        },
        categories: {
          add: "Añadir categoría",
          edit: "Editar categoría",
          form: {
            name: "Nombre de la categoría",
          },
        },
        users: {
          add: "Añadir usuario",
          edit: "Editar usuario",
          form: {
            name: "Nombre",
            email: "Correo electrónico",
            role: "Rol",
            userRole: "Usuario",
            adminRole: "Administrador",
          },
        },
        reservations: {
          add: "Añadir reserva",
          edit: "Editar reserva",
          form: {
            clientName: "Nombre del cliente",
            clientEmail: "Correo del cliente",
            date: "Fecha de reserva",
            guests: "Personas",
          },
        },
        orders: {
          add: "Añadir pedido",
          edit: "Editar pedido",
          form: {
            clientName: "Nombre del cliente",
            clientEmail: "Correo del cliente",
            items: "Platos pedidos (separados por comas)",
            itemsPlaceholder: "Gratin dauphinois, Tarta de manzana...",
            totalPrice: "Precio total (€)",
          },
          table: {
            items: "Platos",
            total: "Total",
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
