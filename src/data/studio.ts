/**
 * I contenuti del sito, presi dal Keynote «Portfolio 2026».
 * Ogni voce riporta la slide da cui arriva, così se il Keynote cambia
 * si sa dove andare a guardare.
 */

export const studio = {
  nome: 'SE Creative',
  persone: 'Sofia Ercolani & Elisa Zetti',
  anno: 2026,

  /* slide 4 */
  claim: 'Building Brand Trust & Driving Growth with Memorable, Strategic Visuals.',
  ruoli: [
    'Brand Visualizer',
    'Creative Strategist',
    'Graphic Designer',
    'Content Creator',
    'Web Designer',
  ],
  racconto: [
    `Siamo Sofia & Elisa, professioniste con una formazione nel marketing, nella
     comunicazione e nel digitale. Abbiamo scelto di unire competenze, creatività e
     visioni diverse per costruire un nuovo modo di comunicare, in cui strategia,
     innovazione e autenticità si trasformano in progetti concreti e su misura.`,
    `Attraverso un approccio multidisciplinare e una rete di professionisti
     specializzati, accompagniamo aziende e brand nella creazione di esperienze
     capaci di generare valore, creare connessioni e lasciare il segno.`,
  ],
  manifesto: 'Non seguiamo il cambiamento. Lo costruiamo.',

  /* slide 36 */
  email: 'secreative06@gmail.com',
  telefono: '+39 351 437 4436',
  telefonoRaw: '+393514374436',
  luogo: 'Perugia, Umbria',

  /* wa.me vuole il numero senza + e senza spazi */
  whatsapp: '393514374436',
  messaggioWhatsapp: 'Ciao SE Creative! Vi scrivo dal sito.',

  /* solo il nome utente: il «?igsi=…» dei link condivisi è un codice di
     tracciamento e non serve a raggiungere il profilo */
  instagram: 'se_creative_',
} as const;

/* slide 3 — «CONTENTS» */
export const servizi = [
  {
    titolo: 'Logo & brand identity',
    testo: 'Marchi, sistemi visivi e linee guida che rendono un brand riconoscibile ovunque.',
  },
  {
    titolo: 'Packaging & printing product design',
    testo: 'Confezioni, materiali stampati e oggetti che portano l’identità fuori dallo schermo.',
  },
  {
    titolo: 'Social media strategy',
    testo: 'Contenuti, piani editoriali e community, costruiti sui numeri e non sull’istinto.',
  },
  {
    titolo: 'Creative visual & manipulation design',
    testo: 'Visual, illustrazione e fotomanipolazione per campagne che si fanno guardare.',
  },
] as const;

/* slide 8 — i risultati veri dei profili seguiti */
export const numeri = [
  {
    brand: 'Fondazione Laura e Alberto Genovese',
    da: '0',
    a: '26,1k',
    periodo: 'in un anno',
  },
  { brand: 'Forma Boutique Suite', da: '0', a: '16,3k', periodo: 'in due anni' },
  { brand: 'Albaia Monte del Lago', da: '1.000', a: '14k', periodo: 'in quattro anni' },
  { brand: 'Nestor Calcio 1904', da: '0', a: '1.900', periodo: 'in un anno' },
] as const;

export type Categoria = 'Brand identity' | 'Brand application' | 'Video' | 'Social';

export interface Progetto {
  slug: string;
  titolo: string;
  categoria: Categoria;
  tipologia: string;
  progetto: string;
  img: string;
  testo: string;
  /** slide del Keynote da cui arriva la scheda */
  slide: number;
}

export const progetti: Progetto[] = [
  {
    slug: 'acqua-dolce',
    titolo: 'Acqua Dolce Lounge Bar',
    categoria: 'Brand identity',
    tipologia: 'Lounge Bar',
    progetto: 'Brand identity completa',
    img: '/img/deck/s14.webp',
    slide: 13,
    testo: `Nasce sulle rive del Lago Trasimeno, nel borgo di Monte del Lago: piccole
      terrazze affacciate sull’acqua, materie prime di qualità e una filosofia plastic
      free. Il nome si ispira alla storica scuola vela Acqua Dolce, con cui condivide la
      passione per il lago e l’autenticità delle esperienze.`,
  },
  {
    slug: 'sultano',
    titolo: 'Sultano',
    categoria: 'Brand identity',
    tipologia: 'Bar & Restaurant',
    progetto: 'Brand identity completa',
    img: '/img/deck/s17.webp',
    slide: 16,
    testo: `A Colle Umberto, fra Perugia e Corciano, dal desiderio del proprietario di
      riunire in un solo luogo panificazione, pizza e gelato artigianale. Tonalità di oro
      e marrone, pochi posti a sedere e una forte attenzione agli ingredienti: uno spazio
      intimo dove bar, ristorazione ed eventi si fondono.`,
  },
  {
    slug: 'disco-prepotente',
    titolo: 'Disco Prepotente',
    categoria: 'Brand identity',
    tipologia: 'Music & Events',
    progetto: 'Complete brand identity',
    img: '/img/deck/s19.webp',
    slide: 18,
    testo: `Un progetto musicale fra cultura del vinile, ricerca sonora e club culture. Il
      disco diventa il simbolo della ricerca, l’insetto un’energia istintiva e
      «prepotente». Bianco e nero come le etichette indipendenti, un dettaglio giallo al
      centro come nei 45 giri.`,
  },
  {
    slug: 'forma',
    titolo: 'Forma Boutique Suite',
    categoria: 'Brand application',
    tipologia: 'Boutique suite',
    progetto: 'Brand application',
    img: '/img/work/forma.webp',
    slide: 21,
    testo: `Eleganza, comfort e identità: ogni dettaglio racconta l’esperienza Forma.
      Divise, carta stampata e materiali di accoglienza per le suite nel borgo storico
      di Corciano.`,
  },
  {
    slug: 'interni',
    titolo: 'Interni — Francesco Mariotti',
    categoria: 'Brand application',
    tipologia: 'Luxury interior design',
    progetto: 'Brand application',
    img: '/img/work/interni.webp',
    slide: 21,
    testo: `Palette scura, Avenir Next e materiali sobri per uno studio di interior design
      di fascia alta: carta intestata, biglietti da visita e abbigliamento coordinato.`,
  },
  {
    slug: 'rampa-del-gusto',
    titolo: 'Rampa del Gusto',
    categoria: 'Brand application',
    tipologia: 'Caffetteria & ristorante',
    progetto: 'Brand application',
    img: '/img/work/rampa.webp',
    slide: 21,
    testo: `Caffetteria con stile, ristorazione di qualità, ospitalità autentica. Blu navy
      e rosso su divise e materiali di sala per un’area di servizio che non sembra
      un’area di servizio.`,
  },
  {
    slug: 'francesco-facchini',
    titolo: 'Francesco Facchini',
    categoria: 'Brand application',
    tipologia: 'Personal trainer',
    progetto: 'Brand application',
    img: '/img/work/facchini.webp',
    slide: 21,
    testo: `Allenamento su misura, disciplina, costanza, risultati concreti: l’uomo
      vitruviano diventa marchio, nero e arancio diventano la divisa.`,
  },
];

/* slide 5 — creative visual */
export const creativeVisual = {
  img: '/img/deck/s05.webp',
  lavori: ['Umbria Jazz', 'MaMo New York', 'Copper Magazine', 'Psycho', 'Pop collage'],
};

/* slide 7 — il pezzo «Beyond the Visual» */
export const beyond = [
  `Il nostro percorso nel social media management si è sviluppato collaborando con
   realtà di diversi settori, sia a livello nazionale che, soprattutto, nel territorio
   umbro, dove ancora oggi affianchiamo strutture ricettive, ristoranti e attività
   locali nel loro percorso di crescita.`,
  `Ogni progetto rappresenta un’opportunità per costruire una comunicazione coerente,
   valorizzare l’identità di un brand e trasformarne i punti di forza in una narrazione
   autentica, capace di creare connessioni reali.`,
  `Un approccio orientato al problem solving, che unisce strategia, creatività e analisi
   per costruire una comunicazione non solo esteticamente curata, ma funzionale ai
   risultati.`,
];

/* slide 23–35 — i brand per cui abbiamo girato e montato video */
const perCliente: Record<string, string[]> = {
  'Borgobrufa Spa Resort': ['v736', 'v739', 'v742'],
  FlexorLab: ['v792', 'v795', 'v798'],
  'Forma Boutique Suite': ['v750', 'v755', 'v758'],
  'Albaia Monte del Lago': ['v733', 'v765', 'v768'],
  Okkio: ['v778', 'v783', 'v786'],
  'Fisio Group': ['v806', 'v809', 'v812'],
  'Cantine Aperte': ['v830'],
  'Nestor Calcio 1904': ['v822'],
  Social: ['v819'],
};

/**
 * I reel, tutti verticali 720×1280 come escono da Instagram. L'abbinamento fra
 * file e cliente arriva da VIDEO_SLIDES in Deck.astro, dove era stato ricavato
 * confrontando i fotogrammi con le tre colonne di ogni slide.
 */
export const reel = Object.entries(perCliente).flatMap(([brand, file]) =>
  file.map((f) => ({ brand, video: `/video/${f}.mp4`, poster: `/img/reel/${f}.webp` }))
);

export const video = Object.keys(perCliente).filter((b) => b !== 'Social');
