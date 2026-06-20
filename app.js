// ============================================================
//  DemirElec – app.js
// ============================================================

/* ── PRODUCTS DATA ───────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 0,
    name: "Multimètre Numérique Pro DT-9205A",
    price: 69.99,
    oldPrice: 89.99,
    img: "multimeter.png",
    category: "mesure",
    rating: 5,
    reviews: 128,
    badge: "Nouveau",
    badgeClass: "badge-new",
    tags: ["Mesure", "Professionnel"],
    desc: "Appareil de mesure électronique multifonction permettant de mesurer la tension (V), l'intensité (A), la résistance (Ω) et bien plus. Idéal pour les électriciens et techniciens.",
    longDesc: "Le multimètre numérique DT-9205A est l'outil incontournable de tout professionnel de l'électricité. Grâce à ses 20 fonctions de mesure, il vous permet d'analyser avec précision tension AC/DC, courant, résistance, capacité, fréquence et température. Son écran LCD rétroéclairé de grande taille offre une lisibilité parfaite même dans les environnements sombres. La protection contre les surcharges et la coupure automatique après inactivité garantissent sa longévité.",
    specs: [
      { label: "Tension DC", val: "0 – 1000V" },
      { label: "Tension AC", val: "0 – 750V" },
      { label: "Résistance", val: "0 – 20MΩ" },
      { label: "Précision", val: "±0.5%" },
      { label: "Batterie", val: "9V (incluse)" },
      { label: "Garantie", val: "2 ans" }
    ]
  },
  {
    id: 1,
    name: "Disjoncteur Magnétothermique 32A",
    price: 34.90,
    oldPrice: null,
    img: "disjoncteur.png",
    category: "protection",
    rating: 5,
    reviews: 97,
    badge: "Populaire",
    badgeClass: "badge-hot",
    tags: ["Protection", "Certifié CE"],
    desc: "Disjoncteur bipolaire 32A permettant de protéger votre installation électrique contre les surcharges et les courts-circuits. Conforme aux normes NF C 15-100.",
    longDesc: "Ce disjoncteur magnétothermique bipolaire 32A est conçu pour protéger efficacement votre installation électrique. Il combine deux mécanismes de protection : magnétique pour les courts-circuits et thermique pour les surcharges prolongées. Compatible rail DIN 35mm, installation rapide sans outil spécialisé. Certifié CE et conforme à la norme NF C 15-100 en vigueur en France.",
    specs: [
      { label: "Intensité nominale", val: "32A" },
      { label: "Pouvoir de coupure", val: "6kA" },
      { label: "Tension nominale", val: "230/400V AC" },
      { label: "Courbe de déclenchement", val: "Courbe C" },
      { label: "Montage", val: "Rail DIN 35mm" },
      { label: "Norme", val: "IEC 60898-1 / NF C 15-100" }
    ]
  },
  {
    id: 2,
    name: "Câble Électrique HO7V-R 2.5mm² (10m)",
    price: 18.50,
    oldPrice: null,
    img: "cables.png",
    category: "cablage",
    rating: 4,
    reviews: 214,
    badge: null,
    badgeClass: null,
    tags: ["Câblage"],
    desc: "Câble de raccordement rigide en cuivre, section 2,5mm², gaine isolante PVC résistante à la chaleur et aux chocs. Parfait pour les installations fixes en intérieur.",
    longDesc: "Le câble HO7V-R est le câble de référence pour les installations électriques fixes en intérieur. Son âme en cuivre rigide classe 1 assure une excellente conductivité, tandis que son isolant en PVC résistant à 70°C garantit sécurité et durabilité. Disponible en 5 couleurs : bleu (neutre), marron (phase), vert/jaune (terre), gris et noir. Vendu en rouleau de 10 mètres.",
    specs: [
      { label: "Section", val: "2.5 mm²" },
      { label: "Conducteur", val: "Cuivre rigide classe 1" },
      { label: "Isolation", val: "PVC (70°C)" },
      { label: "Tension nominale", val: "450/750V" },
      { label: "Longueur", val: "10 mètres" },
      { label: "Norme", val: "NF EN 50525-2-31" }
    ]
  },
  {
    id: 3,
    name: "Ampoule LED Connectée E27 – 10W RGB",
    price: 19.99,
    oldPrice: 24.99,
    img: "led.png",
    category: "eclairage",
    rating: 5,
    reviews: 342,
    badge: "Eco+",
    badgeClass: "badge-eco",
    tags: ["Éclairage", "Smart"],
    desc: "Ampoule LED intelligente compatible Wi-Fi, contrôlable via smartphone. 16 millions de couleurs, variation de l'intensité, programmation horaire. Équivalent 60W.",
    longDesc: "Transformez votre maison en maison intelligente avec cette ampoule LED connectée E27. Contrôlée via l'application gratuite (iOS & Android) ou par commande vocale (Alexa, Google Home), elle offre un accès à 16 millions de couleurs et plusieurs modes d'ambiance. Économisez jusqu'à 85% d'énergie par rapport à une ampoule incandescente classique. Durée de vie exceptionnelle de 25 000 heures.",
    specs: [
      { label: "Puissance", val: "10W (≈ 60W)" },
      { label: "Flux lumineux", val: "800 lumens" },
      { label: "Température couleur", val: "2700K – 6500K + RGB" },
      { label: "Culot", val: "E27" },
      { label: "Durée de vie", val: "25 000h" },
      { label: "Compatibilité", val: "Alexa, Google Home" }
    ]
  },
  {
    id: 4,
    name: "Prise Murale Connectée USB + Wi-Fi",
    price: 42.00,
    oldPrice: null,
    img: "prise.png",
    category: "installation",
    rating: 4,
    reviews: 189,
    badge: "Nouveau",
    badgeClass: "badge-new",
    tags: ["Installation", "Smart"],
    desc: "Prise murale double avec ports USB intégrés (5V/2.4A) et connexion Wi-Fi. Contrôlez vos appareils à distance et suivez votre consommation d'énergie en temps réel.",
    longDesc: "Cette prise murale intelligente remplace votre prise standard en un tour de main. Deux prises secteur 2P+T et deux ports USB rapides (2.4A chacun) pour charger tous vos appareils. La connexion Wi-Fi 2.4GHz vous permet de contrôler et de programmer vos équipements depuis n'importe où via l'application. Mesure de consommation en temps réel pour surveiller votre facture d'électricité.",
    specs: [
      { label: "Puissance max", val: "2300W (10A)" },
      { label: "Ports USB", val: "2x 5V/2.4A" },
      { label: "Wi-Fi", val: "2.4GHz 802.11 b/g/n" },
      { label: "Installation", val: "Boîte encastrée Ø67mm" },
      { label: "Comptage énergie", val: "Oui" },
      { label: "Compatibilité", val: "Alexa, Google Home, Siri" }
    ]
  },
  {
    id: 5,
    name: "Tableau Électrique 13 Modules",
    price: 47.90,
    oldPrice: 55.00,
    img: "tableau.png",
    emoji: "🗂️",
    svgCode: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display:block;"><defs><linearGradient id="panelGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1e293b"/><stop offset="100%" stop-color="#0f172a"/></linearGradient><linearGradient id="breakerGrad" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#475569"/><stop offset="100%" stop-color="#334155"/></linearGradient><linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#06b6d4"/></linearGradient></defs><rect width="300" height="200" fill="url(#panelGrad)"/><path d="M0,40 L300,40 M0,80 L300,80 M0,120 L300,120 M0,160 L300,160 M60,0 L60,200 M120,0 L120,200 M180,0 L180,200 M240,0 L240,200" stroke="#1e293b" stroke-width="1"/><circle cx="150" cy="100" r="80" fill="url(#glowGrad)" opacity="0.15" filter="blur(20px)"/><rect x="20" y="85" width="260" height="30" fill="#1e293b" rx="4" stroke="#475569" stroke-width="2"/><g transform="translate(40, 75)"><rect x="0" y="0" width="20" height="50" fill="url(#breakerGrad)" rx="2"/><rect x="2" y="10" width="16" height="15" fill="#22c55e" rx="1"/><line x1="10" y1="25" x2="10" y2="45" stroke="#fff" stroke-width="2"/><rect x="25" y="0" width="20" height="50" fill="url(#breakerGrad)" rx="2"/><rect x="27" y="10" width="16" height="15" fill="#22c55e" rx="1"/><line x1="35" y1="25" x2="35" y2="45" stroke="#fff" stroke-width="2"/><rect x="50" y="0" width="30" height="50" fill="#3b82f6" rx="2" opacity="0.9"/><rect x="52" y="10" width="26" height="15" fill="#facc15" rx="1"/><line x1="65" y1="25" x2="65" y2="45" stroke="#fff" stroke-width="3"/><rect x="85" y="0" width="20" height="50" fill="url(#breakerGrad)" rx="2"/><rect x="87" y="10" width="16" height="15" fill="#22c55e" rx="1"/><line x1="95" y1="25" x2="95" y2="45" stroke="#fff" stroke-width="2"/><rect x="110" y="0" width="20" height="50" fill="url(#breakerGrad)" rx="2"/><rect x="112" y="25" width="16" height="15" fill="#ef4444" rx="1"/><line x1="120" y1="5" x2="120" y2="25" stroke="#fff" stroke-width="2"/></g></svg>`,
    category: "protection",
    rating: 5,
    reviews: 76,
    badge: null,
    badgeClass: null,
    tags: ["Protection", "Certifié CE"],
    desc: "Coffret de répartition en saillie, 1 rangée de 13 modules. Conçu pour accueillir disjoncteurs, différentiels et autres dispositifs de protection.",
    longDesc: "Ce coffret de répartition en saillie 1 rangée 13 modules est la solution idéale pour protéger et organiser votre installation électrique. Sa porte transparente permet de voir l'état des disjoncteurs sans l'ouvrir. L'espace fonctionnel optimisé facilite le câblage. Livré complet avec peigne de répartition monophasé 13 modules, barette de terre et de neutre.",
    specs: [
      { label: "Nombre de rangées", val: "1" },
      { label: "Nombre de modules", val: "13" },
      { label: "Type de montage", val: "Saillie" },
      { label: "Porte", val: "Transparente" },
      { label: "Rail", val: "DIN 35mm" },
      { label: "Indice de protection", val: "IP40 / IK07" }
    ]
  },
  {
    id: 6,
    name: "Testeur de Prise Électrique 6 voyants",
    price: 12.90,
    oldPrice: null,
    img: "testeur.png",
    emoji: "🔍",
    svgCode: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display:block;"><defs><linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#334155"/><stop offset="100%" stop-color="#0f172a"/></linearGradient><radialGradient id="neonGreen" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#4ade80"/><stop offset="100%" stop-color="#15803d"/></radialGradient></defs><rect width="300" height="200" fill="#0b0f19"/><path d="M50,150 L100,100 L200,100 L250,50" stroke="#1e293b" stroke-width="2" fill="none"/><rect x="60" y="40" width="180" height="120" rx="16" fill="url(#bodyGrad)" stroke="#475569" stroke-width="2"/><rect x="80" y="60" width="140" height="40" rx="8" fill="#1e293b"/><circle cx="110" cy="80" r="10" fill="url(#neonGreen)" filter="drop-shadow(0 0 8px #22c55e)"/><circle cx="150" cy="80" r="10" fill="url(#neonGreen)" filter="drop-shadow(0 0 8px #22c55e)"/><circle cx="190" cy="80" r="10" fill="#7f1d1d"/><g transform="translate(110, 120)" stroke="#94a3b8" stroke-width="3" fill="none"><rect x="0" y="0" width="80" height="20" rx="4" fill="#1e293b"/><circle cx="20" cy="10" r="4" fill="#94a3b8"/><circle cx="60" cy="10" r="4" fill="#94a3b8"/></g></svg>`,
    category: "mesure",
    rating: 4,
    reviews: 54,
    badge: null,
    badgeClass: null,
    tags: ["Mesure"],
    desc: "Vérifiez instantanément la conformité de vos prises électriques. 6 voyants LED indiquent l'état du câblage. Ultra compact, sans aucun outil.",
    longDesc: "Ce testeur de prise est l'outil indispensable pour vérifier la conformité de votre installation électrique en quelques secondes. Il suffit de le brancher sur une prise 230V pour obtenir immédiatement un diagnostic complet : présence de la phase, du neutre et de la terre, inversion de câblage, absence de terre… Les 6 voyants LED colorés permettent une lecture rapide et intuitive même par un non-professionnel.",
    specs: [
      { label: "Tension de service", val: "230V AC" },
      { label: "Voyants", val: "6 LED colorées" },
      { label: "Fréquence", val: "50/60 Hz" },
      { label: "Défauts détectés", val: "7 combinaisons" },
      { label: "Dimensions", val: "65 x 35 x 25 mm" },
      { label: "Poids", val: "30g" }
    ]
  },
  {
    id: 7,
    name: "Rallonge Professionnelle 16A – 5 prises (10m)",
    price: 32.50,
    oldPrice: 39.90,
    img: "rallonge.png",
    emoji: "🔌",
    svgCode: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display:block;"><defs><linearGradient id="stripGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#1e293b"/><stop offset="100%" stop-color="#334155"/></linearGradient></defs><rect width="300" height="200" fill="#0b0f19"/><path d="M20,100 C20,40 280,40 280,100 C280,160 20,160 20,100" fill="none" stroke="#0f172a" stroke-width="12" stroke-linecap="round"/><path d="M20,100 C20,40 280,40 280,100 C280,160 20,160 20,100" fill="none" stroke="#475569" stroke-width="4" stroke-linecap="round"/><rect x="50" y="75" width="200" height="50" rx="10" fill="url(#stripGrad)" stroke="#475569" stroke-width="2"/><rect x="65" y="87" width="20" height="26" rx="3" fill="#7f1d1d" stroke="#b91c1c"/><rect x="67" y="89" width="16" height="10" fill="#ef4444" filter="drop-shadow(0 0 4px #ef4444)"/><g transform="translate(100, 85)"><circle cx="15" cy="15" r="14" fill="#0f172a" stroke="#475569" stroke-width="1"/><circle cx="8" cy="15" r="2.5" fill="#334155"/><circle cx="22" cy="15" r="2.5" fill="#334155"/><circle cx="50" cy="15" r="14" fill="#0f172a" stroke="#475569" stroke-width="1"/><circle cx="43" cy="15" r="2.5" fill="#334155"/><circle cx="57" cy="15" r="2.5" fill="#334155"/><circle cx="85" cy="15" r="14" fill="#0f172a" stroke="#475569" stroke-width="1"/><circle cx="78" cy="15" r="2.5" fill="#334155"/><circle cx="92" cy="15" r="2.5" fill="#334155"/></g></svg>`,
    category: "cablage",
    rating: 5,
    reviews: 163,
    badge: null,
    badgeClass: null,
    tags: ["Câblage", "Pro"],
    desc: "Multiprise professionnelle 5 prises avec câble de 10m, interrupteur lumineux et parasurtenseur intégré. Charge maximale 3500W.",
    longDesc: "Cette rallonge professionnelle est conçue pour un usage intensif en atelier, chantier ou bureau. Son câble H07RN-F extra souple résiste aux torsions et à l'abrasion. L'interrupteur lumineux permet de couper facilement l'alimentation sans débrancher. Le parasurtenseur intégré protège vos appareils électroniques sensibles contre les surtensions du réseau. Les 5 prises 2P+T permettent de connecter simultanément plusieurs équipements.",
    specs: [
      { label: "Intensité nominale", val: "16A" },
      { label: "Puissance max", val: "3500W" },
      { label: "Longueur câble", val: "10 mètres" },
      { label: "Section câble", val: "H07RN-F 3G1.5mm²" },
      { label: "Prises", val: "5x 2P+T 16A" },
      { label: "Parasurtenseur", val: "Oui – 1500J" }
    ]
  },
  {
    id: 8,
    name: "Variateur de Lumière Tactile 600W",
    price: 28.00,
    oldPrice: null,
    img: "variateur.png",
    emoji: "🌟",
    svgCode: `<svg viewBox="0 0 300 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="display:block;"><defs><radialGradient id="touchGlow" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#facc15" stop-opacity="0.3"/><stop offset="100%" stop-color="#facc15" stop-opacity="0"/></radialGradient></defs><rect width="300" height="200" fill="#0b0f19"/><rect x="90" y="30" width="120" height="140" rx="16" fill="#1e293b" stroke="#475569" stroke-width="2"/><rect x="105" y="45" width="90" height="110" rx="10" fill="#0f172a"/><circle cx="150" cy="100" r="35" fill="url(#touchGlow)"/><circle cx="150" cy="100" r="30" fill="none" stroke="#facc15" stroke-width="3" stroke-dasharray="140 50" filter="drop-shadow(0 0 6px #facc15)"/><circle cx="150" cy="100" r="6" fill="#fff" filter="drop-shadow(0 0 4px #fff)"/><line x1="130" y1="140" x2="170" y2="140" stroke="#475569" stroke-width="2"/><line x1="140" y1="145" x2="160" y2="145" stroke="#475569" stroke-width="2"/></svg>`,
    category: "eclairage",
    rating: 4,
    reviews: 88,
    badge: null,
    badgeClass: null,
    tags: ["Éclairage"],
    desc: "Variateur d'intensité tactile pour ampoules LED et halogènes. Puissance 600W, mémoire de la dernière valeur, design épuré blanc satiné.",
    longDesc: "Créez l'ambiance parfaite avec ce variateur tactile haut de gamme. Sa technologie de phase en amont est compatible avec les ampoules LED à variateur (dimmables) et les halogènes. La mémoire de position conserve le dernier niveau d'intensité choisi. L'installation remplace directement votre interrupteur existant sans câblage supplémentaire. Le design minimaliste blanc satiné s'intègre élégamment à tous les styles d'intérieur.",
    specs: [
      { label: "Charge min/max LED", val: "5W – 150W" },
      { label: "Charge max halogène", val: "600W" },
      { label: "Tension", val: "230V AC 50Hz" },
      { label: "Commande", val: "Tactile capacitif" },
      { label: "Mémoire de position", val: "Oui" },
      { label: "Installation", val: "Boîte encastrée Ø67mm" }
    ]
  },
  /* ── NOUVEAUX PRODUITS ──────────────────────────────────── */
  {
    id: 9,
    name: "Pince Ampèremétrique 400A",
    price: 54.90,
    oldPrice: 69.90,
    img: "clamp_meter.png",
    category: "mesure",
    rating: 5,
    reviews: 96,
    badge: "Populaire",
    badgeClass: "badge-hot",
    tags: ["Mesure", "Professionnel"],
    desc: "Pince ampèremétrique numérique jusqu'à 400A AC/DC. Mesure courant, tension, résistance et continuité. Mâchoires 28mm, rétroéclairage et maintien de données.",
    longDesc: "Cette pince ampèremétrique professionnelle est l'outil idéal pour mesurer le courant sans couper le circuit. Ses mâchoires de 28mm acceptent les câbles de forte section. L'écran LCD rétroéclairé affiche les mesures en temps réel. La fonction Data Hold fige la dernière mesure pour une lecture confortable. Livrée avec cordon de mesure et pochette de rangement.",
    specs: [
      { label: "Courant AC/DC", val: "0 – 400A" },
      { label: "Tension AC/DC", val: "0 – 600V" },
      { label: "Résistance", val: "0 – 40MΩ" },
      { label: "Ouverture mâchoire", val: "28mm" },
      { label: "Écran", val: "LCD rétroéclairé" },
      { label: "Alimentation", val: "2x AAA" }
    ]
  },
  {
    id: 10,
    name: "Détecteur de Tension Sans Contact",
    price: 22.50,
    oldPrice: null,
    img: "voltage_detector.png",
    category: "mesure",
    rating: 4,
    reviews: 203,
    badge: null,
    badgeClass: null,
    tags: ["Mesure", "Sécurité"],
    desc: "Détecteur de tension sans contact 12V–1000V AC. Alarme sonore et LED rouge en cas de présence de tension. Format stylo compact et ergonomique.",
    longDesc: "Ce détecteur de tension sans contact est un outil de sécurité indispensable pour tout électricien. Il suffit d'approcher la pointe du détecteur d'un câble ou d'une prise pour savoir si elle est sous tension. L'alarme sonore et le voyant LED rouge s'activent immédiatement en cas de présence de tension. Ultra compact, il se glisse dans la poche de votre bleu de travail.",
    specs: [
      { label: "Plage de détection", val: "12V – 1000V AC" },
      { label: "Indication", val: "LED rouge + bip sonore" },
      { label: "Sensibilité", val: "Réglable (haute/basse)" },
      { label: "Alimentation", val: "2x AAA (incluses)" },
      { label: "Dimensions", val: "155 x 26mm" },
      { label: "Norme", val: "CAT III 1000V" }
    ]
  },
  {
    id: 11,
    name: "Interrupteur Différentiel 40A 30mA",
    price: 59.90,
    oldPrice: 74.90,
    img: "differentiel.png",
    category: "protection",
    rating: 5,
    reviews: 145,
    badge: "Essentiel",
    badgeClass: "badge-hot",
    tags: ["Protection", "Certifié CE"],
    desc: "Interrupteur différentiel bipolaire 40A / 30mA type AC. Protection des personnes contre les contacts directs et indirects. Conforme NF C 15-100.",
    longDesc: "Cet interrupteur différentiel 40A 30mA est la pièce maîtresse de la sécurité de votre installation électrique. Il détecte les fuites de courant supérieures à 30mA et coupe instantanément l'alimentation pour protéger les personnes contre l'électrocution. Le bouton test permet de vérifier régulièrement son bon fonctionnement. Installation sur rail DIN 35mm, compatible avec tous les tableaux modulaires standard.",
    specs: [
      { label: "Intensité nominale", val: "40A" },
      { label: "Sensibilité", val: "30mA" },
      { label: "Type", val: "AC" },
      { label: "Tension nominale", val: "230V AC" },
      { label: "Pouvoir de coupure", val: "6kA" },
      { label: "Norme", val: "IEC 61008 / NF C 15-100" }
    ]
  },
  {
    id: 12,
    name: "Parafoudre Modulaire Type 2",
    price: 44.50,
    oldPrice: null,
    img: "parafoudre.png",
    category: "protection",
    rating: 4,
    reviews: 67,
    badge: null,
    badgeClass: null,
    tags: ["Protection", "Certifié CE"],
    desc: "Parafoudre modulaire type 2 pour tableau électrique. Protection contre les surtensions atmosphériques et industrielles. Indicateur d'état intégré.",
    longDesc: "Ce parafoudre modulaire type 2 protège votre installation et vos équipements sensibles contre les surtensions transitoires causées par la foudre ou les manœuvres sur le réseau. Son indicateur d'état visuel (vert = OK, rouge = à remplacer) permet un contrôle rapide sans instrument de mesure. Installation simple sur rail DIN, 2 modules de largeur.",
    specs: [
      { label: "Type", val: "Type 2 (T2)" },
      { label: "Tension de service", val: "230/400V AC" },
      { label: "Courant de décharge max", val: "40kA" },
      { label: "Niveau de protection", val: "≤1.5kV" },
      { label: "Indicateur d'état", val: "Oui (vert/rouge)" },
      { label: "Largeur", val: "2 modules DIN" }
    ]
  },
  {
    id: 13,
    name: "Spot LED Encastrable 7W Blanc Chaud",
    price: 14.90,
    oldPrice: null,
    img: "spot_led.png",
    category: "eclairage",
    rating: 5,
    reviews: 287,
    badge: null,
    badgeClass: null,
    tags: ["Éclairage"],
    desc: "Spot LED encastrable ultra-plat 7W, blanc chaud 3000K. Découpe Ø85mm, driver intégré, angle d'éclairage 120°. Idéal pour faux plafonds.",
    longDesc: "Ce spot LED encastrable ultra-plat s'intègre discrètement dans tous les faux plafonds. Sa faible épaisseur de seulement 25mm le rend compatible avec les espaces les plus réduits. La lumière blanc chaud 3000K crée une ambiance chaleureuse et accueillante. Le driver LED est intégré, aucun transformateur externe n'est nécessaire. Installation rapide grâce aux clips ressorts fournis.",
    specs: [
      { label: "Puissance", val: "7W (≈ 50W halogène)" },
      { label: "Flux lumineux", val: "600 lumens" },
      { label: "Température couleur", val: "3000K (blanc chaud)" },
      { label: "Angle", val: "120°" },
      { label: "Découpe", val: "Ø85mm" },
      { label: "Durée de vie", val: "30 000h" }
    ]
  },
  {
    id: 14,
    name: "Réglette LED Étanche 120cm 36W",
    price: 39.90,
    oldPrice: 49.90,
    img: "reglette_led.png",
    category: "eclairage",
    rating: 4,
    reviews: 118,
    badge: "Promo",
    badgeClass: "badge-hot",
    tags: ["Éclairage", "Pro"],
    desc: "Réglette LED étanche IP65, longueur 120cm, puissance 36W. Idéale pour garages, ateliers, caves et parkings. Blanc neutre 4000K, 3600 lumens.",
    longDesc: "Cette réglette LED étanche IP65 est conçue pour les environnements exigeants : garages, ateliers, caves, parkings souterrains et extérieurs couverts. Sa protection IP65 la rend résistante à la poussière et aux projections d'eau. L'éclairage puissant de 3600 lumens en blanc neutre 4000K garantit un confort visuel optimal pour le travail. Installation rapide par clips de fixation fournis.",
    specs: [
      { label: "Puissance", val: "36W (≈ 2x 36W fluo)" },
      { label: "Flux lumineux", val: "3600 lumens" },
      { label: "Température couleur", val: "4000K (blanc neutre)" },
      { label: "Indice de protection", val: "IP65" },
      { label: "Longueur", val: "120cm" },
      { label: "Durée de vie", val: "40 000h" }
    ]
  },
  {
    id: 15,
    name: "Gaine ICTA Diamètre 20mm (25m)",
    price: 15.90,
    oldPrice: null,
    img: null,
    emoji: "🔵",
    category: "cablage",
    rating: 4,
    reviews: 312,
    badge: null,
    badgeClass: null,
    tags: ["Câblage"],
    desc: "Gaine annelée ICTA diamètre 20mm en rouleau de 25 mètres. Pour encastrement des câbles électriques dans les murs et cloisons. Avec tire-fil intégré.",
    longDesc: "La gaine ICTA (Isolant Cintrable Transversalement Annelé) est indispensable pour toute installation électrique encastrée. Son profil annelé lui confère une excellente flexibilité pour le passage dans les saignées et les cloisons. Le tire-fil intégré facilite le passage des câbles après la pose. Compatible avec les câbles de section jusqu'à 3x2.5mm².",
    specs: [
      { label: "Diamètre extérieur", val: "20mm" },
      { label: "Diamètre intérieur", val: "14.1mm" },
      { label: "Longueur", val: "25 mètres" },
      { label: "Matière", val: "PVC annelé" },
      { label: "Tire-fil", val: "Oui (intégré)" },
      { label: "Norme", val: "NF EN 61386-22" }
    ]
  },
  {
    id: 16,
    name: "Boîte de Dérivation Étanche IP65",
    price: 8.90,
    oldPrice: null,
    img: null,
    emoji: "📦",
    category: "cablage",
    rating: 5,
    reviews: 178,
    badge: null,
    badgeClass: null,
    tags: ["Câblage"],
    desc: "Boîte de dérivation étanche IP65 avec couvercle à vis. Dimensions 150x110x70mm. 10 entrées de câbles. Idéale pour raccordements extérieurs.",
    longDesc: "Cette boîte de dérivation étanche IP65 est conçue pour les raccordements électriques en milieu humide ou en extérieur. Son couvercle à vis assure une fermeture hermétique. Les 10 entrées de câbles avec membranes pré-percées permettent un passage facile des conducteurs tout en maintenant l'étanchéité. Parfaite pour les installations en jardin, terrasse ou local technique.",
    specs: [
      { label: "Dimensions", val: "150 x 110 x 70mm" },
      { label: "Indice de protection", val: "IP65" },
      { label: "Entrées de câbles", val: "10 (à membranes)" },
      { label: "Matière", val: "ABS anti-UV" },
      { label: "Fermeture", val: "Couvercle à vis" },
      { label: "Fixation", val: "Vis + chevilles (fournies)" }
    ]
  },
  {
    id: 17,
    name: "Interrupteur Va-et-Vient Blanc",
    price: 9.90,
    oldPrice: null,
    img: null,
    emoji: "💡",
    category: "installation",
    rating: 5,
    reviews: 421,
    badge: null,
    badgeClass: null,
    tags: ["Installation"],
    desc: "Interrupteur va-et-vient 10A blanc satiné. Commande d'éclairage depuis deux points. Design moderne épuré, touche large et clips de fixation rapide.",
    longDesc: "Cet interrupteur va-et-vient permet de commander un point d'éclairage depuis deux endroits différents (entrée et sortie d'une pièce, haut et bas d'un escalier). Sa touche large facilite l'utilisation même les mains pleines. Le mécanisme à clipser s'installe en quelques secondes sur les boîtes d'encastrement standard Ø67mm. Finition blanc satiné intemporelle.",
    specs: [
      { label: "Intensité nominale", val: "10A" },
      { label: "Tension", val: "230V AC" },
      { label: "Fonction", val: "Va-et-vient" },
      { label: "Fixation", val: "Vis ou griffes" },
      { label: "Encastrement", val: "Boîte Ø67mm" },
      { label: "Finition", val: "Blanc satiné" }
    ]
  },
  {
    id: 18,
    name: "Thermostat Programmable Wi-Fi",
    price: 79.90,
    oldPrice: 99.90,
    img: null,
    emoji: "🌡️",
    category: "installation",
    rating: 5,
    reviews: 156,
    badge: "Nouveau",
    badgeClass: "badge-new",
    tags: ["Installation", "Smart"],
    desc: "Thermostat connecté Wi-Fi avec écran tactile couleur. Programmation hebdomadaire, contrôle via smartphone (iOS/Android). Compatible chauffage électrique et chaudière.",
    longDesc: "Ce thermostat programmable Wi-Fi dernière génération vous permet de contrôler la température de votre logement depuis n'importe où via l'application smartphone gratuite. Son écran tactile couleur intuitif affiche la température ambiante, la programmation et la consommation énergétique. La programmation hebdomadaire (6 plages horaires/jour) optimise votre confort tout en réduisant votre facture d'énergie jusqu'à 30%.",
    specs: [
      { label: "Écran", val: "Tactile couleur 3.5\"" },
      { label: "Connectivité", val: "Wi-Fi 2.4GHz" },
      { label: "Plage de réglage", val: "5°C – 35°C" },
      { label: "Précision", val: "±0.5°C" },
      { label: "Programmation", val: "7 jours / 6 plages" },
      { label: "Compatibilité", val: "Chauffage élec. + chaudière" }
    ]
  },
  {
    id: 19,
    name: "Détecteur de Mouvement Mural 180°",
    price: 24.50,
    oldPrice: null,
    img: null,
    emoji: "👁️",
    category: "installation",
    rating: 4,
    reviews: 134,
    badge: null,
    badgeClass: null,
    tags: ["Installation"],
    desc: "Détecteur de mouvement infrarouge 180°, portée 12m. Pour commande automatique d'éclairage. Réglage de la temporisation, luminosité et sensibilité.",
    longDesc: "Ce détecteur de mouvement infrarouge passif (PIR) commande automatiquement l'éclairage lorsqu'une personne entre dans la zone de détection. Son angle de 180° et sa portée de 12 mètres couvrent une large surface. Trois réglages intégrés (temporisation de 10s à 7min, seuil de luminosité, sensibilité) permettent une personnalisation complète. Installation en remplacement d'un interrupteur standard.",
    specs: [
      { label: "Angle de détection", val: "180°" },
      { label: "Portée", val: "12 mètres" },
      { label: "Temporisation", val: "10s – 7 min" },
      { label: "Charge max", val: "1200W (LED 300W)" },
      { label: "Montage", val: "Mural (boîte Ø67mm)" },
      { label: "Indice de protection", val: "IP44" }
    ]
  },
  {
    id: 20,
    name: "Panneau Solaire Portable 100W",
    price: 149.90,
    oldPrice: 189.90,
    img: "panneau_solaire.png",
    category: "energie",
    rating: 5,
    reviews: 89,
    badge: "Eco+",
    badgeClass: "badge-eco",
    tags: ["Énergie verte", "Portable"],
    desc: "Panneau solaire monocristallin pliable 100W. Connecteur MC4, régulateur intégré, port USB. Idéal pour camping, van aménagé et autonomie énergétique.",
    longDesc: "Ce panneau solaire portable de 100W utilise des cellules monocristallines à haut rendement (22%) pour une production d'énergie maximale même par temps nuageux. Son design pliable et sa poignée de transport le rendent facile à déplacer. Équipé de connecteurs MC4 standard pour le raccordement à une batterie ou un régulateur, et de 2 ports USB pour la charge directe de smartphones et tablettes.",
    specs: [
      { label: "Puissance", val: "100W crête" },
      { label: "Rendement", val: "22% monocristallin" },
      { label: "Tension en circuit ouvert", val: "21.6V" },
      { label: "Connecteurs", val: "MC4 + 2x USB" },
      { label: "Poids", val: "4.2 kg" },
      { label: "Dimensions plié", val: "55 x 42 x 5 cm" }
    ]
  },
  {
    id: 21,
    name: "Batterie de Stockage LiFePO4 12V 100Ah",
    price: 299.00,
    oldPrice: null,
    img: "batterie_stockage.png",
    category: "energie",
    rating: 5,
    reviews: 43,
    badge: null,
    badgeClass: null,
    tags: ["Énergie verte"],
    desc: "Batterie lithium fer phosphate (LiFePO4) 12V 100Ah. BMS intégré, 4000+ cycles, sans entretien. Parfaite pour installations solaires et camping-car.",
    longDesc: "Cette batterie LiFePO4 est le choix optimal pour le stockage d'énergie solaire et les véhicules de loisirs. La technologie lithium fer phosphate offre une durée de vie exceptionnelle (4000+ cycles à 80% DOD), une sécurité maximale (pas de risque d'incendie) et un poids réduit de 60% par rapport aux batteries plomb. Le BMS (Battery Management System) intégré protège contre les surcharges, décharges profondes et courts-circuits.",
    specs: [
      { label: "Capacité", val: "100Ah (1280Wh)" },
      { label: "Tension nominale", val: "12.8V" },
      { label: "Chimie", val: "LiFePO4" },
      { label: "Cycles de vie", val: "> 4000 (80% DOD)" },
      { label: "BMS intégré", val: "Oui" },
      { label: "Poids", val: "11.5 kg" }
    ]
  },
  {
    id: 22,
    name: "Régulateur de Charge MPPT 30A",
    price: 89.90,
    oldPrice: null,
    img: null,
    emoji: "⚡",
    category: "energie",
    rating: 4,
    reviews: 72,
    badge: null,
    badgeClass: null,
    tags: ["Énergie verte"],
    desc: "Régulateur de charge solaire MPPT 30A. Rendement 99%, écran LCD, compatible batteries 12V/24V auto-détection. Suivi de production intégré.",
    longDesc: "Ce régulateur de charge MPPT (Maximum Power Point Tracking) optimise la production de vos panneaux solaires en suivant en permanence le point de puissance maximale. Son rendement de conversion de 99% surpasse largement les régulateurs PWM classiques. L'écran LCD affiche en temps réel la puissance produite, la tension de batterie et l'état de charge. Compatible avec les systèmes 12V et 24V en auto-détection.",
    specs: [
      { label: "Courant de charge max", val: "30A" },
      { label: "Technologie", val: "MPPT" },
      { label: "Rendement", val: "> 99%" },
      { label: "Tension batterie", val: "12V / 24V auto" },
      { label: "Puissance PV max", val: "390W (12V) / 780W (24V)" },
      { label: "Affichage", val: "LCD rétroéclairé" }
    ]
  },
  {
    id: 23,
    name: "Onduleur Hybride 3000W",
    price: 459.00,
    oldPrice: 549.00,
    img: null,
    emoji: "🔋",
    category: "energie",
    rating: 5,
    reviews: 38,
    badge: "Premium",
    badgeClass: "badge-new",
    tags: ["Énergie verte", "Pro"],
    desc: "Onduleur hybride sinusoïdal pur 3000W. Entrée solaire MPPT intégrée, fonction UPS, compatible réseau et hors réseau. Monitoring Wi-Fi.",
    longDesc: "Cet onduleur hybride polyvalent est le cœur de votre installation solaire autonome ou connectée au réseau. Il convertit le courant continu des panneaux et batteries en courant alternatif 230V sinusoïdal pur, compatible avec tous les appareils. La fonction UPS assure un basculement automatique sur batterie en 10ms en cas de coupure de courant. Le monitoring Wi-Fi vous permet de suivre la production et la consommation en temps réel sur votre smartphone.",
    specs: [
      { label: "Puissance continue", val: "3000W" },
      { label: "Puissance crête", val: "6000W" },
      { label: "Signal de sortie", val: "Sinusoïdal pur 230V" },
      { label: "Entrée solaire", val: "MPPT 80A intégré" },
      { label: "Batterie", val: "24V / 48V" },
      { label: "Monitoring", val: "Wi-Fi + App mobile" }
    ]
  }
];

/* ── CART STATE ──────────────────────────────────────────── */
let cart = [];

/* ── DOM REFS ────────────────────────────────────────────── */
const $id = id => document.getElementById(id);
const navbar     = $id('navbar');
const btnCart    = $id('btn-cart');
const cartBadge  = $id('cart-badge');
const cartSidebar = $id('cart-sidebar');
const cartOverlay = $id('cart-overlay');
const cartClose  = $id('cart-close');
const cartItemsEl = $id('cart-items');
const cartEmpty  = $id('cart-empty');
const cartFooter = $id('cart-footer');
const cartTotalEl = $id('cart-total');
const btnMenu    = $id('btn-menu');
const navLinks   = $id('nav-links');
const toast      = $id('toast');
const toastMsg   = $id('toast-msg');
const modalOverlay = $id('modal-overlay');
const modalContent = $id('modal-content');
const modalClose = $id('modal-close');
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');
const contactForm = $id('contact-form');

/* ── CHECKOUT DOM REFS ────────────────────────────────────── */
const checkoutOverlay = $id('checkout-overlay');
const checkoutModal = $id('checkout-modal');
const checkoutClose = $id('checkout-close');
const checkoutItemsEl = $id('checkout-items');
const checkoutSubtotalEl = $id('checkout-subtotal');
const checkoutShippingEl = $id('checkout-shipping');
const checkoutTotalFinalEl = $id('checkout-total-final');
const btnCheckoutToStep2 = $id('checkout-to-step2');
const checkoutForm = $id('checkout-form');
const btnCheckoutBack = $id('checkout-back');
const orderNumberEl = $id('order-number');
const btnCheckoutDone = $id('checkout-done');

const step1 = $id('checkout-step-1');
const step2 = $id('checkout-step-2');
const step3 = $id('checkout-step-3');

/* ── NAVBAR SCROLL ───────────────────────────────────────── */
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── MOBILE MENU ─────────────────────────────────────────── */
btnMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* ── CART OPEN / CLOSE ───────────────────────────────────── */
function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

btnCart.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

/* ── CART LOGIC ──────────────────────────────────────────── */
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCart();
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  showToast(`"${product.name}${t.toast_added}`);
  openCart();

  // Button feedback
  const btn = $id(`add-cart-${productId}`);
  if (btn) {
    btn.classList.add('added');
    btn.textContent = t.btn_added;
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg> ${t.btn_add}`;
    }, 2000);
  }
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  updateCart();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else updateCart();
}

function updateCart() {
  // Badge
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  cartBadge.textContent = totalQty;
  cartBadge.classList.toggle('visible', totalQty > 0);

  // Total
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  cartTotalEl.textContent = total.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });

  // Empty / footer
  if (cart.length === 0) {
    cartEmpty.style.display = 'block';
    cartFooter.style.display = 'none';
    // Clear items except empty msg
    const oldItems = cartItemsEl.querySelectorAll('.cart-item');
    oldItems.forEach(el => el.remove());
  } else {
    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'block';
    renderCartItems();
  }
}

function renderCartItems() {
  const oldItems = cartItemsEl.querySelectorAll('.cart-item');
  oldItems.forEach(el => el.remove());

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.id = `cart-item-${item.id}`;
    div.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${(item.price * item.qty).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)" aria-label="Diminuer">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)" aria-label="Augmenter">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Supprimer">🗑</button>
    `;
    cartItemsEl.appendChild(div);
  });
}

/* ── CHECKOUT LOGIC ───────────────────────────────────────── */
function openCheckout() {
  if (cart.length === 0) return;
  closeCart();
  
  // Reset steps
  step1.classList.remove('hidden');
  step2.classList.add('hidden');
  step3.classList.add('hidden');
  
  // Render summary items
  renderCheckoutSummary();
  
  checkoutOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  checkoutOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

function renderCheckoutSummary() {
  checkoutItemsEl.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'checkout-item';
    div.innerHTML = `
      <div class="checkout-item-name">
        ${item.name}
        <span class="checkout-item-qty">x${item.qty}</span>
      </div>
      <div class="checkout-item-price">
        ${(item.price * item.qty).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
      </div>
    `;
    checkoutItemsEl.appendChild(div);
  });

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 50 ? 0 : 4.90;
  const total = subtotal + shipping;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;

  checkoutSubtotalEl.textContent = subtotal.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
  
  if (shipping === 0) {
    checkoutShippingEl.textContent = t.checkout_free || 'Gratuite';
    checkoutShippingEl.className = 'shipping-free';
  } else {
    checkoutShippingEl.textContent = shipping.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
    checkoutShippingEl.className = '';
  }

  checkoutTotalFinalEl.textContent = total.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
}

// Open checkout on button click
$id('btn-checkout').addEventListener('click', () => {
  openCheckout();
});

checkoutClose.addEventListener('click', closeCheckout);
checkoutOverlay.addEventListener('click', e => {
  if (e.target === checkoutOverlay) closeCheckout();
});

btnCheckoutToStep2.addEventListener('click', () => {
  step1.classList.add('hidden');
  step2.classList.remove('hidden');
});

btnCheckoutBack.addEventListener('click', () => {
  step2.classList.add('hidden');
  step1.classList.remove('hidden');
});

// Payment option styling
const paymentLabels = document.querySelectorAll('.payment-option');
paymentLabels.forEach(label => {
  const radio = label.querySelector('input[type="radio"]');
  if (radio) {
    radio.addEventListener('change', () => {
      paymentLabels.forEach(l => l.classList.remove('selected'));
      if (radio.checked) {
        label.classList.add('selected');
      }
    });
  }
});

// Submit checkout form
checkoutForm.addEventListener('submit', e => {
  e.preventDefault();
  
  const name = $id('checkout-name').value.trim();
  const phone = $id('checkout-phone').value.trim();
  const email = $id('checkout-email2').value.trim();
  const address = $id('checkout-address').value.trim();
  
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;

  if (!name || !phone || !email || !address) {
    showToast(currentLang === 'fr' ? 'Veuillez remplir tous les champs obligatoires.' : (currentLang === 'en' ? 'Please fill in all required fields.' : 'Bitte füllen Sie alle Pflichtfelder aus.'));
    return;
  }

  if (!email.includes('@')) {
    showToast(t.toast_email_invalid);
    return;
  }

  // Generate order number
  const orderNum = 'DEM-' + Math.floor(100000 + Math.random() * 900000);
  orderNumberEl.textContent = orderNum;

  // Clear cart
  cart = [];
  updateCart();

  // Go to step 3
  step2.classList.add('hidden');
  step3.classList.remove('hidden');
});

btnCheckoutDone.addEventListener('click', () => {
  closeCheckout();
});

/* ── TOAST ───────────────────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  toastMsg.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ── ADD TO CART BUTTONS ─────────────────────────────────── */
document.querySelectorAll('.btn-add-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = parseInt(btn.dataset.id);
    addToCart(id);
  });
});

/* ── FILTER BUTTONS ──────────────────────────────────────── */
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    productCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeInUp 0.4s ease';
        setTimeout(() => card.style.animation = '', 400);
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ── QUICK VIEW MODAL ────────────────────────────────────── */
document.querySelectorAll('.btn-quick-view').forEach(btn => {
  btn.addEventListener('click', () => {
    const pid = parseInt(btn.dataset.product);
    openModal(pid);
  });
});

/* ── CATEGORY CARDS CLICK → SCROLL + FILTER ──────────────── */
document.querySelectorAll('.cat-card').forEach(card => {
  card.addEventListener('click', () => {
    const cat = card.dataset.cat;
    // Scroll to products section
    const productsSection = $id('produits');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Activate the matching filter button after a short delay (for scroll)
    setTimeout(() => {
      const allFilterBtns = document.querySelectorAll('.filter-btn');
      const allProductCards = document.querySelectorAll('.product-card');
      allFilterBtns.forEach(b => b.classList.remove('active'));
      const targetBtn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
      if (targetBtn) {
        targetBtn.classList.add('active');
      }
      allProductCards.forEach(pc => {
        if (pc.dataset.category === cat) {
          pc.classList.remove('hidden');
          pc.style.animation = 'fadeInUp 0.4s ease';
          setTimeout(() => pc.style.animation = '', 400);
        } else {
          pc.classList.add('hidden');
        }
      });
    }, 300);
  });
});

function openModal(pid) {
  const p = PRODUCTS[pid];
  if (!p) return;

  const tr = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  const starsHtml = '★'.repeat(p.rating) + '☆'.repeat(5 - p.rating);
  const specsHtml = p.specs.map(s =>
    `<div class="spec-row"><span>${s.label}</span><span>${s.val}</span></div>`
  ).join('');

  const imgHtml = p.img
    ? `<img src="${p.img}" alt="${p.name}" class="modal-product-img" />`
    : (p.svgCode 
        ? `<div class="modal-product-placeholder" style="padding:0;overflow:hidden">${p.svgCode}</div>`
        : `<div class="modal-product-placeholder">${p.emoji}</div>`);

  const oldPriceHtml = p.oldPrice
    ? `<span style="font-size:1rem;color:var(--clr-muted);text-decoration:line-through;margin-left:12px">${p.oldPrice.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</span>`
    : '';

  modalContent.innerHTML = `
    ${imgHtml}
    <div class="product-tags" style="margin-bottom:12px">${p.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
    <h3 class="modal-product-name">${p.name}</h3>
    <div class="product-rating" style="margin-bottom:12px">
      <span class="stars">${starsHtml}</span>
      <span class="rating-count">(${p.reviews} ${tr.modal_reviews})</span>
    </div>
    <div style="display:flex;align-items:baseline;gap:8px;margin-bottom:20px">
      <span class="modal-product-price">${p.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}</span>
      ${oldPriceHtml}
    </div>
    <p class="modal-product-desc">${p.longDesc}</p>
    <div class="modal-product-specs">
      <h4>${tr.modal_specs}</h4>
      ${specsHtml}
    </div>
    <button class="btn-primary" style="width:100%;justify-content:center" onclick="addToCart(${p.id});closeModal()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      ${tr.modal_add_cart} – ${p.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
    </button>
  `;

  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

/* ── CONTACT FORM ────────────────────────────────────────── */
contactForm.addEventListener('submit', e => {
  e.preventDefault();
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  showToast(t.toast_message_sent);
  contactForm.reset();
});

/* ── NEWSLETTER ──────────────────────────────────────────── */
$id('newsletter-btn').addEventListener('click', () => {
  const email = $id('newsletter-email').value;
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.fr;
  if (!email || !email.includes('@')) {
    showToast(t.toast_email_invalid);
    return;
  }
  showToast(t.toast_newsletter);
  $id('newsletter-email').value = '';
});

/* ── PARTICLES ───────────────────────────────────────────── */
function createParticles() {
  const container = $id('particles');
  if (!container) return;
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      --dur: ${Math.random() * 12 + 6}s;
      --delay: -${Math.random() * 12}s;
      background: ${Math.random() > 0.5 ? '#3b82f6' : '#facc15'};
    `;
    container.appendChild(p);
  }
}
createParticles();

/* ── INTERSECTION OBSERVER – animate on scroll ────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.5s ease both';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .cat-card, .contact-card').forEach(el => {
  observer.observe(el);
});

/* ── CLOSE MOBILE MENU on link click ─────────────────────── */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ============================================================
   I18N – LANGUAGE SWITCHER
   ============================================================ */

const TRANSLATIONS = {
  fr: {
    // Navbar
    nav_home: "Accueil",
    nav_products: "Produits",
    nav_categories: "Catégories",
    nav_contact: "Contact",
    // Cart
    cart_title: "🛒 Mon Panier",
    cart_empty: "Votre panier est vide",
    cart_total_label: "Total",
    cart_checkout: "Passer la commande →",
    // Hero
    hero_badge: "Livraison gratuite dès 50€",
    hero_title_1: "L'Électricité",
    hero_title_2: "Réinventée",
    hero_subtitle: "Découvrez notre gamme complète de matériel électrique professionnel.<br/>Qualité certifiée · Prix compétitifs · Livraison rapide",
    hero_cta_shop: "Explorer les produits",
    hero_cta_cat: "Voir les catégories",
    stat_products: "Produits",
    stat_clients: "Clients",
    stat_rating: "Note",
    // Categories
    cat_tag: "Parcourir",
    cat_title: 'Nos <span class="text-accent">Catégories</span>',
    cat_subtitle: "Trouvez rapidement ce dont vous avez besoin",
    cat_mesure: "Mesure & Test",
    cat_mesure_count: "4 produits",
    cat_protection: "Protection",
    cat_protection_count: "4 produits",
    cat_eclairage: "Éclairage",
    cat_eclairage_count: "4 produits",
    cat_cablage: "Câblage",
    cat_cablage_count: "4 produits",
    cat_installation: "Installation",
    cat_installation_count: "4 produits",
    cat_energie: "Énergie verte",
    cat_energie_count: "4 produits",
    // Products
    prod_tag: "Catalogue",
    prod_title: 'Nos <span class="text-accent">Produits</span>',
    prod_subtitle: "Matériel professionnel certifié et garanti",
    filter_all: "Tous",
    filter_mesure: "Mesure",
    filter_protection: "Protection",
    filter_eclairage: "Éclairage",
    filter_cablage: "Câblage",
    filter_installation: "Installation",
    filter_energie: "Énergie verte",
    // Promo
    promo_shipping: "Livraison Offerte",
    promo_shipping_desc: "Pour toute commande supérieure à 50€ · Délai 24-48h",
    promo_warranty: "Garantie 2 ans",
    promo_warranty_desc: "Sur tous nos produits certifiés CE et NF",
    promo_support: "Support Expert",
    promo_support_desc: "Nos techniciens répondent du lun. au sam.",
    // Contact
    contact_tag: "Nous contacter",
    contact_title: 'Une <span class="text-accent">Question</span> ?',
    contact_subtitle: "Notre équipe d'experts est là pour vous aider",
    contact_phone: "Téléphone",
    contact_phone_hours: "Lun–Sam : 9h–18h",
    contact_email_delay: "Réponse sous 24h",
    contact_address: "Adresse",
    form_name: "Nom",
    form_name_ph: "Votre nom",
    form_subject: "Sujet",
    form_subject_ph: "Comment pouvons-nous vous aider ?",
    form_message: "Message",
    form_message_ph: "Décrivez votre demande...",
    form_submit: "Envoyer le message",
    // Footer
    footer_desc: "Votre partenaire de confiance pour tous vos besoins en matériel électrique professionnel depuis 2010.",
    footer_shop: "Boutique",
    footer_all_products: "Tous les produits",
    footer_new: "Nouveautés",
    footer_promo: "Promotions",
    footer_help: "Aide",
    footer_delivery: "Livraison",
    footer_returns: "Retours",
    footer_newsletter: "Recevez nos offres exclusives et les dernières nouveautés.",
    newsletter_ph: "votre@email.com",
    footer_copy: "© 2024 DemirElec. Tous droits réservés.",
    footer_legal: "Mentions légales",
    footer_terms: "CGV",
    footer_privacy: "Confidentialité",
    // Toasts
    toast_added: '" ajouté au panier !',
    toast_checkout: "Redirection vers le paiement sécurisé… 🔒",
    toast_message_sent: "Message envoyé avec succès ! 📬 Nous vous répondrons sous 24h.",
    toast_newsletter: "Merci ! Votre inscription à la newsletter est confirmée. 🎉",
    toast_email_invalid: "Veuillez entrer une adresse email valide.",
    // Product buttons
    btn_add: "Ajouter",
    btn_added: "✓ Ajouté",
    btn_details: "Voir détails",
    // Modal
    modal_specs: "Caractéristiques techniques",
    modal_add_cart: "Ajouter au panier",
    modal_reviews: "avis",
    // Checkout
    checkout_title: "📦 Récapitulatif de commande",
    checkout_subtotal: "Sous-total",
    checkout_shipping: "Livraison",
    checkout_free: "Gratuite",
    checkout_total: "Total",
    checkout_continue: "Continuer →",
    checkout_info_title: "📋 Vos informations",
    checkout_fullname: "Nom complet",
    checkout_phone: "Téléphone",
    checkout_email: "Email",
    checkout_address: "Adresse de livraison",
    checkout_payment: "Mode de paiement",
    checkout_card: "Carte bancaire",
    checkout_transfer: "Virement bancaire",
    checkout_confirm: "✅ Confirmer la commande",
    checkout_back: "← Retour au récapitulatif",
    checkout_success_title: "Commande confirmée !",
    checkout_success_msg: "Merci pour votre commande. Vous recevrez un email de confirmation avec les détails de livraison sous peu.",
    checkout_order_num: "N° de commande :",
    checkout_done: "Fermer"
  },
  en: {
    nav_home: "Home",
    nav_products: "Products",
    nav_categories: "Categories",
    nav_contact: "Contact",
    cart_title: "🛒 My Cart",
    cart_empty: "Your cart is empty",
    cart_total_label: "Total",
    cart_checkout: "Checkout →",
    hero_badge: "Free shipping from 50€",
    hero_title_1: "Electricity",
    hero_title_2: "Reinvented",
    hero_subtitle: "Discover our complete range of professional electrical equipment.<br/>Certified quality · Competitive prices · Fast delivery",
    hero_cta_shop: "Explore products",
    hero_cta_cat: "View categories",
    stat_products: "Products",
    stat_clients: "Customers",
    stat_rating: "Rating",
    cat_tag: "Browse",
    cat_title: 'Our <span class="text-accent">Categories</span>',
    cat_subtitle: "Quickly find what you need",
    cat_mesure: "Measurement & Testing",
    cat_mesure_count: "4 products",
    cat_protection: "Protection",
    cat_protection_count: "4 products",
    cat_eclairage: "Lighting",
    cat_eclairage_count: "4 products",
    cat_cablage: "Wiring",
    cat_cablage_count: "4 products",
    cat_installation: "Installation",
    cat_installation_count: "4 products",
    cat_energie: "Green Energy",
    cat_energie_count: "4 products",
    prod_tag: "Catalogue",
    prod_title: 'Our <span class="text-accent">Products</span>',
    prod_subtitle: "Certified and guaranteed professional equipment",
    filter_all: "All",
    filter_mesure: "Measurement",
    filter_protection: "Protection",
    filter_eclairage: "Lighting",
    filter_cablage: "Wiring",
    filter_installation: "Installation",
    filter_energie: "Green Energy",
    promo_shipping: "Free Shipping",
    promo_shipping_desc: "For orders over 50€ · Delivery 24-48h",
    promo_warranty: "2-Year Warranty",
    promo_warranty_desc: "On all CE and NF certified products",
    promo_support: "Expert Support",
    promo_support_desc: "Our technicians answer Mon. to Sat.",
    contact_tag: "Contact us",
    contact_title: 'Have a <span class="text-accent">Question</span>?',
    contact_subtitle: "Our team of experts is here to help you",
    contact_phone: "Phone",
    contact_phone_hours: "Mon–Sat: 9am–6pm",
    contact_email_delay: "Response within 24h",
    contact_address: "Address",
    form_name: "Name",
    form_name_ph: "Your name",
    form_subject: "Subject",
    form_subject_ph: "How can we help you?",
    form_message: "Message",
    form_message_ph: "Describe your request...",
    form_submit: "Send message",
    footer_desc: "Your trusted partner for all your professional electrical equipment needs since 2010.",
    footer_shop: "Shop",
    footer_all_products: "All products",
    footer_new: "New arrivals",
    footer_promo: "Promotions",
    footer_help: "Help",
    footer_delivery: "Shipping",
    footer_returns: "Returns",
    footer_newsletter: "Receive our exclusive offers and latest arrivals.",
    newsletter_ph: "your@email.com",
    footer_copy: "© 2024 DemirElec. All rights reserved.",
    footer_legal: "Legal notice",
    footer_terms: "Terms & Conditions",
    footer_privacy: "Privacy Policy",
    toast_added: '" added to cart!',
    toast_checkout: "Redirecting to secure payment… 🔒",
    toast_message_sent: "Message sent successfully! 📬 We'll get back to you within 24h.",
    toast_newsletter: "Thank you! Your newsletter subscription is confirmed. 🎉",
    toast_email_invalid: "Please enter a valid email address.",
    btn_add: "Add",
    btn_added: "✓ Added",
    btn_details: "View details",
    modal_specs: "Technical specifications",
    modal_add_cart: "Add to cart",
    modal_reviews: "reviews",
    checkout_title: "📦 Order Summary",
    checkout_subtotal: "Subtotal",
    checkout_shipping: "Shipping",
    checkout_free: "Free",
    checkout_total: "Total",
    checkout_continue: "Continue →",
    checkout_info_title: "📋 Your Information",
    checkout_fullname: "Full Name",
    checkout_phone: "Phone Number",
    checkout_email: "Email Address",
    checkout_address: "Shipping Address",
    checkout_payment: "Payment Method",
    checkout_card: "Credit Card",
    checkout_transfer: "Bank Transfer",
    checkout_confirm: "✅ Confirm Order",
    checkout_back: "← Back to summary",
    checkout_success_title: "Order Confirmed!",
    checkout_success_msg: "Thank you for your order. You will receive a confirmation email with delivery details shortly.",
    checkout_order_num: "Order No.:",
    checkout_done: "Close"
  },
  de: {
    nav_home: "Startseite",
    nav_products: "Produkte",
    nav_categories: "Kategorien",
    nav_contact: "Kontakt",
    cart_title: "🛒 Mein Warenkorb",
    cart_empty: "Ihr Warenkorb ist leer",
    cart_total_label: "Gesamt",
    cart_checkout: "Zur Kasse →",
    hero_badge: "Kostenloser Versand ab 50€",
    hero_title_1: "Elektrizität",
    hero_title_2: "Neu erfunden",
    hero_subtitle: "Entdecken Sie unser komplettes Sortiment an professionellem Elektromaterial.<br/>Zertifizierte Qualität · Wettbewerbsfähige Preise · Schnelle Lieferung",
    hero_cta_shop: "Produkte entdecken",
    hero_cta_cat: "Kategorien ansehen",
    stat_products: "Produkte",
    stat_clients: "Kunden",
    stat_rating: "Bewertung",
    cat_tag: "Durchsuchen",
    cat_title: 'Unsere <span class="text-accent">Kategorien</span>',
    cat_subtitle: "Finden Sie schnell, was Sie brauchen",
    cat_mesure: "Messen & Prüfen",
    cat_mesure_count: "4 Produkte",
    cat_protection: "Schutz",
    cat_protection_count: "4 Produkte",
    cat_eclairage: "Beleuchtung",
    cat_eclairage_count: "4 Produkte",
    cat_cablage: "Verkabelung",
    cat_cablage_count: "4 Produkte",
    cat_installation: "Installation",
    cat_installation_count: "4 Produkte",
    cat_energie: "Grüne Energie",
    cat_energie_count: "4 Produkte",
    prod_tag: "Katalog",
    prod_title: 'Unsere <span class="text-accent">Produkte</span>',
    prod_subtitle: "Zertifiziertes und garantiertes Profi-Material",
    filter_all: "Alle",
    filter_mesure: "Messung",
    filter_protection: "Schutz",
    filter_eclairage: "Beleuchtung",
    filter_cablage: "Verkabelung",
    filter_installation: "Installation",
    filter_energie: "Grüne Energie",
    promo_shipping: "Kostenloser Versand",
    promo_shipping_desc: "Für Bestellungen über 50€ · Lieferung 24-48h",
    promo_warranty: "2 Jahre Garantie",
    promo_warranty_desc: "Auf alle CE- und NF-zertifizierten Produkte",
    promo_support: "Experten-Support",
    promo_support_desc: "Unsere Techniker antworten Mo. bis Sa.",
    contact_tag: "Kontaktieren Sie uns",
    contact_title: 'Eine <span class="text-accent">Frage</span>?',
    contact_subtitle: "Unser Expertenteam hilft Ihnen gerne weiter",
    contact_phone: "Telefon",
    contact_phone_hours: "Mo–Sa: 9–18 Uhr",
    contact_email_delay: "Antwort innerhalb 24h",
    contact_address: "Adresse",
    form_name: "Name",
    form_name_ph: "Ihr Name",
    form_subject: "Betreff",
    form_subject_ph: "Wie können wir Ihnen helfen?",
    form_message: "Nachricht",
    form_message_ph: "Beschreiben Sie Ihre Anfrage...",
    form_submit: "Nachricht senden",
    footer_desc: "Ihr vertrauenswürdiger Partner für professionelles Elektromaterial seit 2010.",
    footer_shop: "Shop",
    footer_all_products: "Alle Produkte",
    footer_new: "Neuheiten",
    footer_promo: "Angebote",
    footer_help: "Hilfe",
    footer_delivery: "Versand",
    footer_returns: "Rücksendung",
    footer_newsletter: "Erhalten Sie unsere exklusiven Angebote und Neuheiten.",
    newsletter_ph: "ihre@email.com",
    footer_copy: "© 2024 DemirElec. Alle Rechte vorbehalten.",
    footer_legal: "Impressum",
    footer_terms: "AGB",
    footer_privacy: "Datenschutz",
    toast_added: '" zum Warenkorb hinzugefügt!',
    toast_checkout: "Weiterleitung zur sicheren Zahlung… 🔒",
    toast_message_sent: "Nachricht erfolgreich gesendet! 📬 Wir melden uns innerhalb von 24h.",
    toast_newsletter: "Danke! Ihre Newsletter-Anmeldung ist bestätigt. 🎉",
    toast_email_invalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    btn_add: "Hinzufügen",
    btn_added: "✓ Hinzugefügt",
    btn_details: "Details ansehen",
    modal_specs: "Technische Daten",
    modal_add_cart: "In den Warenkorb",
    modal_reviews: "Bewertungen",
    // Checkout
    checkout_title: "📦 Bestellübersicht",
    checkout_subtotal: "Zwischensumme",
    checkout_shipping: "Versand",
    checkout_free: "Kostenlos",
    checkout_total: "Gesamt",
    checkout_continue: "Weiter →",
    checkout_info_title: "📋 Ihre Informationen",
    checkout_fullname: "Vollständiger Name",
    checkout_phone: "Telefonnummer",
    checkout_email: "E-Mail-Adresse",
    checkout_address: "Lieferadresse",
    checkout_payment: "Zahlungsmethode",
    checkout_card: "Kreditkarte",
    checkout_transfer: "Überweisung",
    checkout_confirm: "✅ Bestellung bestätigen",
    checkout_back: "← Zurück zur Übersicht",
    checkout_success_title: "Bestellung bestätigt!",
    checkout_success_msg: "Vielen Dank für Ihre Bestellung. Sie erhalten in Kürze eine Bestätigungs-E-Mail mit den Lieferdetails.",
    checkout_order_num: "Bestellnummer:",
    checkout_done: "Schließen"
  }
};

const LANG_META = {
  fr: { flag: "🇫🇷", code: "FR" },
  en: { flag: "🇬🇧", code: "EN" },
  de: { flag: "🇩🇪", code: "DE" }
};

let currentLang = localStorage.getItem('demirelec-lang') || 'fr';

/* ── Language Switcher UI ───────────────────────────────────── */
const langSwitcher = $id('lang-switcher');
const langBtn = $id('lang-btn');
const langDropdown = $id('lang-dropdown');
const langFlag = $id('lang-flag');
const langCode = $id('lang-code');

// Toggle dropdown
langBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  langSwitcher.classList.toggle('open');
});

// Close on click outside
document.addEventListener('click', (e) => {
  if (!langSwitcher.contains(e.target)) {
    langSwitcher.classList.remove('open');
  }
});

// Language option click
document.querySelectorAll('.lang-option').forEach(option => {
  option.addEventListener('click', () => {
    const lang = option.dataset.lang;
    setLanguage(lang);
    langSwitcher.classList.remove('open');
  });
});

/* ── Apply Language ─────────────────────────────────────────── */
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('demirelec-lang', lang);

  const t = TRANSLATIONS[lang];

  // Update lang button
  langFlag.textContent = LANG_META[lang].flag;
  langCode.textContent = LANG_META[lang].code;

  // Update active state on options
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'de' ? 'de' : lang === 'en' ? 'en' : 'fr';

  // Translate all [data-i18n] elements (textContent)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      // For elements with SVG children, preserve the SVG
      const svg = el.querySelector('svg');
      if (svg) {
        const svgClone = svg.cloneNode(true);
        el.textContent = t[key];
        el.appendChild(document.createTextNode(' '));
        el.appendChild(svgClone);
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Translate all [data-i18n-html] elements (innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Translate all [data-i18n-placeholder] elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Translate hero subtitle (contains HTML)
  const heroSubtitle = document.querySelector('[data-i18n="hero_subtitle"]');
  if (heroSubtitle && t.hero_subtitle) {
    heroSubtitle.innerHTML = t.hero_subtitle;
  }

  // Update "Ajouter" buttons text
  document.querySelectorAll('.btn-add-cart:not(.added)').forEach(btn => {
    const svg = btn.querySelector('svg');
    if (svg) {
      const svgClone = svg.cloneNode(true);
      btn.textContent = '';
      btn.appendChild(svgClone);
      btn.appendChild(document.createTextNode(' ' + t.btn_add));
    }
  });

  // Update "Voir détails" buttons
  document.querySelectorAll('.btn-quick-view').forEach(btn => {
    btn.textContent = t.btn_details;
  });

  // Update page title
  document.title = `DemirElec ⚡ – ${lang === 'fr' ? 'Matériel Électrique Pro' : lang === 'en' ? 'Professional Electrical Equipment' : 'Professionelles Elektromaterial'}`;
}

// Apply saved language on load
if (currentLang !== 'fr') {
  setLanguage(currentLang);
}

// Override showToast to use translations
const _originalShowToast = showToast;

// Override addToCart feedback to use translations
const _origAddToCart = addToCart;
