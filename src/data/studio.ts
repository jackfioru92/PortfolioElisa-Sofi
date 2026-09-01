/**
 * I dati che NON cambiano con la lingua: recapiti, immagini, numeri, video.
 * I testi stanno in `testi.ts`, tradotti nelle due lingue.
 *
 * Tutto arriva dal Keynote «Portfolio 2026»; accanto a ogni blocco c'è la
 * slide da cui è stato preso, così se il Keynote cambia si sa dove guardare.
 */

export type Lingua = 'it' | 'en';

export const studio = {
  nome: 'SE Creative',
  persone: 'Sofia Ercolani & Elisa Zetti',
  anno: 2026,

  /* slide 4 — sono già in inglese nel Keynote, restano uguali */
  claim: 'Building Brand Trust & Driving Growth with Memorable, Strategic Visuals.',
  ruoli: [
    'Brand Visualizer',
    'Creative Strategist',
    'Graphic Designer',
    'Content Creator',
    'Web Designer',
  ],

  /* La casella ufficiale del dominio: è quella a cui il servizio dei contatti
     consegna le richieste. Nel Keynote (slide 36) c'era ancora un indirizzo
     gmail, ma non si usa più. */
  email: 'info@secreative.it',
  telefono: '+39 351 437 4436',
  telefonoRaw: '+393514374436',

  /* wa.me vuole il numero senza + e senza spazi */
  whatsapp: '393514374436',

  /* solo il nome utente: il «?igsi=…» dei link condivisi è un codice di
     tracciamento e non serve a raggiungere il profilo */
  instagram: 'se_creative_',
} as const;

/* slide 8 — la crescita vera dei profili seguiti */
export const numeri = [
  { brand: 'Fondazione Laura e Alberto Genovese', da: '0', a: '26,1k', anni: 1 },
  { brand: 'Forma Boutique Suite', da: '0', a: '16,3k', anni: 2 },
  { brand: 'Albaia Monte del Lago', da: '1.000', a: '14k', anni: 4 },
  { brand: 'Nestor Calcio 1904', da: '0', a: '1.900', anni: 1 },
] as const;

export type Categoria = 'identity' | 'application';

/** Quel che di un progetto non cambia con la lingua. */
export const progetti = [
  { slug: 'acqua-dolce', categoria: 'identity', img: '/img/deck/s14.webp', slide: 13 },
  { slug: 'sultano', categoria: 'identity', img: '/img/deck/s17.webp', slide: 16 },
  { slug: 'disco-prepotente', categoria: 'identity', img: '/img/deck/s19.webp', slide: 18 },
  { slug: 'forma', categoria: 'application', img: '/img/work/forma.webp', slide: 21 },
  { slug: 'interni', categoria: 'application', img: '/img/work/interni.webp', slide: 21 },
  { slug: 'rampa-del-gusto', categoria: 'application', img: '/img/work/rampa.webp', slide: 21 },
  { slug: 'francesco-facchini', categoria: 'application', img: '/img/work/facchini.webp', slide: 21 },
] as const satisfies readonly { slug: string; categoria: Categoria; img: string; slide: number }[];

/* slide 5 — creative visual */
export const creativeVisual = '/img/deck/s05.webp';

/**
 * slide 10 — le locandine degli eventi, ritagliate una per una dalla griglia
 * 4×3 della slide. I nomi sono quelli leggibili sulla locandina stessa.
 */
export const grafiche = [
  { file: 'g01', titolo: 'Torneo Spritz Padel — picnic edition' },
  { file: 'g02', titolo: 'Sex Mutants' },
  { file: 'g03', titolo: 'Libera' },
  { file: 'g04', titolo: 'Argonauti' },
  { file: 'g05', titolo: 'Padel — finale Master Spritz' },
  { file: 'g06', titolo: 'A Night at the Opera' },
  { file: 'g07', titolo: 'Principi di Galles' },
  { file: 'g08', titolo: 'God Save the Queen' },
  { file: 'g09', titolo: 'Torneo Spritz Padel' },
  { file: 'g10', titolo: 'Sour Music' },
  { file: 'g11', titolo: 'Torneo Spritz Padel — Campari' },
  { file: 'g12', titolo: 'Sushi Padel' },
].map((g) => ({ ...g, img: `/img/grafiche/${g.file}.webp` }));

/**
 * slide 23–35 — i reel girati e montati per i clienti.
 * L'abbinamento fra file e cliente arriva da VIDEO_SLIDES in Deck.astro, dove
 * era stato ricavato confrontando i fotogrammi con le tre colonne di ogni
 * slide. Sono tutti verticali 720×1280, come escono da Instagram.
 */
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

export const reel = Object.entries(perCliente).flatMap(([brand, file]) =>
  file.map((f) => ({ brand, video: `/video/${f}.mp4`, poster: `/img/reel/${f}.webp` }))
);

export const clienti = Object.keys(perCliente).filter((b) => b !== 'Social');

/** La home nella lingua indicata. */
export const percorso = (lang: Lingua) => (lang === 'it' ? '/' : '/en/');

/**
 * La STESSA pagina nell'altra lingua: da /privacy/ si va a /en/privacy/, non
 * alla home inglese. Le pagine inglesi sono le italiane con /en davanti.
 */
export function gemella(pathname: string, lang: Lingua): string {
  const pulito = pathname.endsWith('/') ? pathname : pathname + '/';
  if (lang === 'it') return '/en' + pulito;
  const senzaEn = pulito.replace(/^\/en(?=\/)/, '');
  return senzaEn || '/';
}
