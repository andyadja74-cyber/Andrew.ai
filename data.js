// ==========================================
// 🗄️ BASE DE DONNÉES ET MÉMOIRE PARTAGÉE
// ==========================================

// 💖 Commentaires de compatibilité amoureuse (.love)
const COMMENTAIRES_LOVE = {
  parfait: [
    "🔥 Une alchimie digne des plus grands romans d'amour !",
    "💖 Vous êtes littéralement faits l'un pour l'autre !",
    "✨ Une connexion cosmique incroyable !"
  ],
  moyen: [
    "👀 Il y a du potentiel, mais va falloir faire des efforts !",
    "🤝 Une belle amitié qui pourrait peut-être devenir plus...",
    "⚡ Un coup ça marche, un coup ça étincelle !"
  ],
  faible: [
    "🧊 Zone de danger ! Compatibilité proche du pôle Nord.",
    "🙈 Mieux vaut rester simples amis (et encore) !",
    "💔 Les astres disent non, désolé !"
  ]
};

// 📜 Citations inspirantes (.citation)
const CITATIONS = [
  { c: "La connaissance est une arme, assure-toi d'être bien armé.", a: "Titan Bot" },
  { c: "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.", a: "Winston Churchill" },
  { c: "Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles.", a: "Sénèque" },
  { c: "Fais de ta vie un rêve, et d'un rêve, une réalité.", a: "Antoine de Saint-Exupéry" }
];

// 🐾 Animaux de compagnie (.toutou)
const LISTE_ANIMAUX = [
  { nom: "Titan Canin", type: "Chien", nourriture: "os" },
  { nom: "Chat Féroce", type: "Chat", nourriture: "poisson" },
  { nom: "Dragon Doré", type: "Mythique", nourriture: "viande" },
  { nom: "Loup des Ombres", type: "Loup", nourriture: "steak" }
];

// 🔴 Mots pour Squid Game (.feurouge)
const MOTS_SQUID = [
  "AVANCER", "RUN", "COURIR", "SQUID", "STOP",
  "ROUGE", "VERT", "TITAN", "SURVIE", "SÉCURITÉ", "VITESSE"
];

// 🕵️‍♂️ Données pour l'Enquête Criminelle (.detective)
const DONNEES_DETECTIVE_BOOSTE = {
  suspects: ["Lord Blackwood", "Madame Rosa", "Le Cuisinier Victor", "Le Jardinier Pierre"],
  lieux: ["Grand Salon", "Bibliothèque", "Cuisine", "Jardin d'hiver"],
  armes: ["Poignard en argent", "Poison", "Corde de piano", "Chandelier"],
  temoignagesFaux: [
    "Un témoin affirme avoir vu de la lumière dans le jardin.",
    "Un bruit de verre brisé a été entendu près de la cuisine.",
    "Quelqu'un a aperçu une ombre fuir par la bibliothèque."
  ]
};

// 🧠 Critères pour l'analyse du cerveau (.cerveau)
const DONNEES_CERVEAU = [
  "🧠 Intelligences Brute",
  "💡 CRÉATIVITÉ ET IMAGINATION",
  "⚡ Vitesse de Réflexion",
  "🤪 Taux de Folie Pure",
  "🎯 Précision Stratégique"
];

// 📝 Commentaires pour l'analyse du cerveau
const COMMENTAIRES_CERVEAU = [
  "Un véritable génie incompris de son époque !",
  "Le processeur fonctionne à 100%, aucune surchauffe à signaler.",
  "Un cerveau rempli d'idées géniales... et d'un peu de chaos !",
  "Attention, risque élevé de décisions imprévisibles !"
];

// 🤫 Message secret d'Andy
const MESSAGE_SECRET_ANDY = `
🤫 *LE SECRET D'ANDY A ÉTÉ DÉVERROUILLÉ !*

Andy prépare en secret le lancement du système Titan Prime v2.0 !
Seuls les plus observateurs réussiront à débloquer l'ensemble des fonctionnalités cachées du bot. Garde ça secret ! 🤫⚡
`;

// 🚪 Chemins pour le Labyrinthe (.lab)
// Sequence de directions correctes (10 étapes par chemin)
const CHEMINS_LABYRINTHE = [
  ["gauche", "tout droit", "droite", "gauche", "tout droit", "droite", "gauche", "tout droit", "droite", "gauche"],
  ["droite", "gauche", "tout droit", "droite", "gauche", "tout droit", "droite", "gauche", "tout droit", "droite"],
  ["tout droit", "gauche", "droite", "tout droit", "gauche", "droite", "tout droit", "gauche", "droite", "tout droit"]
];

// 💬 Subscriptions / Répliques aléatoires dans le Labyrinthe
const SUBS_LABYRINTHE = [
  "🌀 Les murs du labyrinthe semblent bouger autour de vous...",
  "🦇 Vous entendez des bruits d'ailes au loin...",
  "👣 Vos pas résonnent étrangement dans ce couloir sombre.",
  "🕯️ Une légère brise fait vaciller les ombres."
];

// ==========================================
// ⚙️ STRUCTURES DE MÉMOIRE EN TEMPS RÉEL
// ==========================================
const partiesEnCours = {};
const timersInactivite = {};
const vueUniqueCache = {};
const animauxJoueurs = {};
const mesNotes = {};
const sessionsMotDePasse = {};
const profilsJoueurs = {};
const membresSalues = new Set();
const sessionsSecretAndy = {};

// Exportation de toutes les variables et constantes
module.exports = {
  COMMENTAIRES_LOVE,
  CITATIONS,
  LISTE_ANIMAUX,
  MOTS_SQUID,
  DONNEES_DETECTIVE_BOOSTE,
  DONNEES_CERVEAU,
  COMMENTAIRES_CERVEAU,
  MESSAGE_SECRET_ANDY,
  CHEMINS_LABYRINTHE,
  SUBS_LABYRINTHE,
  partiesEnCours,
  timersInactivite,
  vueUniqueCache,
  animauxJoueurs,
  mesNotes,
  sessionsMotDePasse,
  profilsJoueurs,
  membresSalues,
  sessionsSecretAndy
};
