/**
 * Tutti i testi del sito, nelle due lingue.
 * I dati che non cambiano lingua (recapiti, immagini, numeri) stanno in
 * `studio.ts`. Le due versioni devono avere le stesse chiavi: il tipo
 * `Testi` è ricavato dall'italiano, quindi se in inglese ne manca una il
 * build si ferma.
 */
import type { Lingua } from './studio';

const it = {
  meta: {
    titolo: 'SE Creative — Studio creativo a Perugia',
    descrizione:
      'Sofia Ercolani ed Elisa Zetti: brand identity, packaging, social media strategy e video per aziende e brand in Umbria e non solo.',
  },

  nav: {
    voci: [
      { label: 'Lavori', href: '#lavori' },
      { label: 'Reel', href: '#reel' },
      { label: 'Servizi', href: '#servizi' },
      { label: 'Studio', href: '#studio' },
      { label: 'Contatti', href: '#contatti' },
    ],
    cta: 'Iniziamo un progetto',
    sezioni: 'Sezioni',
    tornaSu: 'SE Creative, torna in cima',
    altraLingua: 'English',
  },

  apertura: {
    occhiello: 'Creative studio',
    titolo: 'Diamo forma a brand<br /> che ',
    titoloCorsivo: 'lasciano il segno.',
    sotto: 'Brand identity, packaging, social media e video per aziende che vogliono farsi riconoscere.',
    cta: 'Guarda i lavori',
    lato: ['Shaping', 'ideas', 'beyond', 'the noise'],
    scorri: 'Scorri',
  },

  lavori: {
    occhiello: 'Lavori scelti',
    titolo: 'Idee ',
    titoloCorsivo: 'in azione.',
    intro:
      'Progetti che raccontano idee, brand e persone. Ogni lavoro è un percorso creativo, non solo un risultato.',
    filtra: 'Filtra i lavori',
    tutti: 'Tutti',
    categorie: { identity: 'Brand identity', application: 'Brand application' },
  },

  reel: {
    occhiello: 'Reel & video',
    titolo: 'Girati, montati, ',
    titoloCorsivo: 'pubblicati.',
    intro: (n: number) => `${n} video verticali prodotti per i profili che seguiamo.`,
    guarda: (brand: string) => `Guarda il reel per ${brand}`,
    chiudi: 'Chiudi',
  },

  numeri: {
    occhiello: 'Social media',
    titolo: 'Non solo ',
    titoloCorsivo: 'contenuti.',
    racconto: [
      `Il nostro percorso nel social media management si è sviluppato collaborando con
       realtà di diversi settori, sia a livello nazionale che, soprattutto, nel territorio
       umbro, dove ancora oggi affianchiamo strutture ricettive, ristoranti e attività
       locali nel loro percorso di crescita.`,
      `Ogni progetto rappresenta un’opportunità per costruire una comunicazione coerente,
       valorizzare l’identità di un brand e trasformarne i punti di forza in una narrazione
       autentica, capace di creare connessioni reali.`,
    ],
    follower: 'follower',
    periodo: (anni: number) =>
      ({ 1: 'in un anno', 2: 'in due anni', 4: 'in quattro anni' })[anni] ?? `in ${anni} anni`,
  },

  servizi: {
    occhiello: 'Cosa facciamo',
    titolo: 'Dal concept<br /> alla ',
    titoloCorsivo: 'cultura.',
    intro:
      'Aiutiamo i brand a distinguersi con una comunicazione coerente, esperienze digitali e contenuti che creano connessioni reali.',
    voci: [
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
    ],
  },

  studio: {
    occhiello: 'Studio',
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
    didascalia: 'Creative visual & manipulation design',
    visivoAlt:
      'Una selezione di creative visual dello studio: Umbria Jazz, MaMo New York, Copper Magazine',
    clienti: 'Hanno lavorato con noi',
  },

  contatti: {
    occhiello: 'Contatti',
    invito:
      'Raccontaci il tuo progetto, la tua idea o semplicemente la tua curiosità. Siamo qui per ascoltarti.',
    luogo: 'Perugia, Umbria',
    whatsapp: 'Scrivici su WhatsApp',
    messaggioWhatsapp: 'Ciao SE Creative! Vi scrivo dal sito.',
    instagram: 'Instagram',
    modulo: {
      nome: 'Nome',
      email: 'Email',
      messaggio: 'Messaggio',
      invia: 'Invia messaggio',
      nota: 'Il tasto apre il tuo programma di posta con il messaggio già scritto.',
      errore: 'Compila nome, email e messaggio.',
      oggetto: (nome: string) => `Nuovo progetto — ${nome}`,
    },
  },

  chiusura: { firma: (anno: number, persone: string) => `Portfolio ${anno} — ${persone}` },

  progetti: {
    'acqua-dolce': {
      titolo: 'Acqua Dolce Lounge Bar',
      tipologia: 'Lounge bar',
      progetto: 'Brand identity completa',
      testo: `Nasce sulle rive del Lago Trasimeno, nel borgo di Monte del Lago: piccole
        terrazze affacciate sull’acqua, materie prime di qualità e una filosofia plastic
        free. Il nome si ispira alla storica scuola vela Acqua Dolce, con cui condivide la
        passione per il lago e l’autenticità delle esperienze.`,
    },
    sultano: {
      titolo: 'Sultano',
      tipologia: 'Bar & restaurant',
      progetto: 'Brand identity completa',
      testo: `A Colle Umberto, fra Perugia e Corciano, dal desiderio del proprietario di
        riunire in un solo luogo panificazione, pizza e gelato artigianale. Tonalità di oro
        e marrone, pochi posti a sedere e una forte attenzione agli ingredienti: uno spazio
        intimo dove bar, ristorazione ed eventi si fondono.`,
    },
    'disco-prepotente': {
      titolo: 'Disco Prepotente',
      tipologia: 'Music & events',
      progetto: 'Complete brand identity',
      testo: `Un progetto musicale fra cultura del vinile, ricerca sonora e club culture. Il
        disco diventa il simbolo della ricerca, l’insetto un’energia istintiva e
        «prepotente». Bianco e nero come le etichette indipendenti, un dettaglio giallo al
        centro come nei 45 giri.`,
    },
    forma: {
      titolo: 'Forma Boutique Suite',
      tipologia: 'Boutique suite',
      progetto: 'Brand application',
      testo: `Eleganza, comfort e identità: ogni dettaglio racconta l’esperienza Forma.
        Divise, carta stampata e materiali di accoglienza per le suite nel borgo storico
        di Corciano.`,
    },
    interni: {
      titolo: 'Interni — Francesco Mariotti',
      tipologia: 'Luxury interior design',
      progetto: 'Brand application',
      testo: `Palette scura, Avenir Next e materiali sobri per uno studio di interior design
        di fascia alta: carta intestata, biglietti da visita e abbigliamento coordinato.`,
    },
    'rampa-del-gusto': {
      titolo: 'Rampa del Gusto',
      tipologia: 'Caffetteria & ristorante',
      progetto: 'Brand application',
      testo: `Caffetteria con stile, ristorazione di qualità, ospitalità autentica. Blu navy
        e rosso su divise e materiali di sala per un’area di servizio che non sembra
        un’area di servizio.`,
    },
    'francesco-facchini': {
      titolo: 'Francesco Facchini',
      tipologia: 'Personal trainer',
      progetto: 'Brand application',
      testo: `Allenamento su misura, disciplina, costanza, risultati concreti: l’uomo
        vitruviano diventa marchio, nero e arancio diventano la divisa.`,
    },
  },
};

export type Testi = typeof it;

const en: Testi = {
  meta: {
    titolo: 'SE Creative — Creative studio in Perugia, Italy',
    descrizione:
      'Sofia Ercolani and Elisa Zetti: brand identity, packaging, social media strategy and video for companies and brands in Umbria and beyond.',
  },

  nav: {
    voci: [
      { label: 'Work', href: '#lavori' },
      { label: 'Reel', href: '#reel' },
      { label: 'Services', href: '#servizi' },
      { label: 'Studio', href: '#studio' },
      { label: 'Contact', href: '#contatti' },
    ],
    cta: 'Start a project',
    sezioni: 'Sections',
    tornaSu: 'SE Creative, back to top',
    altraLingua: 'Italiano',
  },

  apertura: {
    occhiello: 'Creative studio',
    titolo: 'We design brands<br /> that ',
    titoloCorsivo: 'leave a mark.',
    sotto: 'Brand identity, packaging, social media and video for companies that want to be recognised.',
    cta: 'See the work',
    lato: ['Shaping', 'ideas', 'beyond', 'the noise'],
    scorri: 'Scroll',
  },

  lavori: {
    occhiello: 'Selected work',
    titolo: 'Ideas ',
    titoloCorsivo: 'in action.',
    intro:
      'Projects about ideas, brands and people. Every piece of work is a creative path, not just an outcome.',
    filtra: 'Filter the work',
    tutti: 'All',
    categorie: { identity: 'Brand identity', application: 'Brand application' },
  },

  reel: {
    occhiello: 'Reels & video',
    titolo: 'Shot, edited, ',
    titoloCorsivo: 'published.',
    intro: (n: number) => `${n} vertical videos made for the profiles we look after.`,
    guarda: (brand: string) => `Play the reel for ${brand}`,
    chiudi: 'Close',
  },

  numeri: {
    occhiello: 'Social media',
    titolo: 'More than ',
    titoloCorsivo: 'content.',
    racconto: [
      `Our work in social media management grew by collaborating with businesses across
       different sectors, both nationally and above all across Umbria, where we still
       support hotels, restaurants and local businesses as they grow.`,
      `Every project is a chance to build coherent communication, bring out a brand’s
       identity and turn its strengths into an authentic story that creates real
       connections.`,
    ],
    follower: 'followers',
    periodo: (anni: number) =>
      ({ 1: 'in one year', 2: 'in two years', 4: 'in four years' })[anni] ?? `in ${anni} years`,
  },

  servizi: {
    occhiello: 'What we do',
    titolo: 'From concept<br /> to ',
    titoloCorsivo: 'culture.',
    intro:
      'We help brands stand out with coherent communication, digital experiences and content that creates real connections.',
    voci: [
      {
        titolo: 'Logo & brand identity',
        testo: 'Marks, visual systems and guidelines that make a brand recognisable anywhere.',
      },
      {
        titolo: 'Packaging & printing product design',
        testo: 'Packaging, printed materials and objects that take the identity off the screen.',
      },
      {
        titolo: 'Social media strategy',
        testo: 'Content, editorial plans and communities, built on numbers rather than instinct.',
      },
      {
        titolo: 'Creative visual & manipulation design',
        testo: 'Visuals, illustration and photo manipulation for campaigns worth looking at.',
      },
    ],
  },

  studio: {
    occhiello: 'Studio',
    racconto: [
      `We are Sofia & Elisa, with a background in marketing, communication and digital.
       We chose to bring together different skills, creativity and points of view to build
       a new way of communicating, where strategy, innovation and authenticity turn into
       concrete, tailored projects.`,
      `Through a multidisciplinary approach and a network of specialists, we guide
       companies and brands in creating experiences that generate value, build connections
       and leave a mark.`,
    ],
    manifesto: 'We don’t follow change. We build it.',
    didascalia: 'Creative visual & manipulation design',
    visivoAlt:
      'A selection of the studio’s creative visuals: Umbria Jazz, MaMo New York, Copper Magazine',
    clienti: 'They have worked with us',
  },

  contatti: {
    occhiello: 'Contact',
    invito:
      'Tell us about your project, your idea, or simply your curiosity. We are here to listen.',
    luogo: 'Perugia, Umbria — Italy',
    whatsapp: 'Message us on WhatsApp',
    messaggioWhatsapp: 'Hi SE Creative! I’m writing from your website.',
    instagram: 'Instagram',
    modulo: {
      nome: 'Name',
      email: 'Email',
      messaggio: 'Message',
      invia: 'Send message',
      nota: 'The button opens your mail app with the message already written.',
      errore: 'Please fill in name, email and message.',
      oggetto: (nome: string) => `New project — ${nome}`,
    },
  },

  chiusura: { firma: (anno: number, persone: string) => `Portfolio ${anno} — ${persone}` },

  progetti: {
    'acqua-dolce': {
      titolo: 'Acqua Dolce Lounge Bar',
      tipologia: 'Lounge bar',
      progetto: 'Full brand identity',
      testo: `On the shores of Lake Trasimeno, in the village of Monte del Lago: small
        terraces over the water, quality ingredients and a plastic-free philosophy. The
        name comes from the historic Acqua Dolce sailing school, sharing its love for the
        lake and for authentic experiences.`,
    },
    sultano: {
      titolo: 'Sultano',
      tipologia: 'Bar & restaurant',
      progetto: 'Full brand identity',
      testo: `In Colle Umberto, between Perugia and Corciano, born from the owner’s wish to
        bring baking, pizza and artisan gelato under one roof. Gold and brown tones, few
        seats and close attention to ingredients: an intimate space where bar, dining and
        events meet.`,
    },
    'disco-prepotente': {
      titolo: 'Disco Prepotente',
      tipologia: 'Music & events',
      progetto: 'Complete brand identity',
      testo: `A music project between vinyl culture, sonic research and club culture. The
        record becomes the symbol of that search, the insect an instinctive, «pushy»
        energy. Black and white like independent labels, with a yellow detail at the
        centre as on a 45.`,
    },
    forma: {
      titolo: 'Forma Boutique Suite',
      tipologia: 'Boutique suite',
      progetto: 'Brand application',
      testo: `Elegance, comfort and identity: every detail tells the Forma experience.
        Uniforms, printed matter and welcome materials for the suites in the historic
        village of Corciano.`,
    },
    interni: {
      titolo: 'Interni — Francesco Mariotti',
      tipologia: 'Luxury interior design',
      progetto: 'Brand application',
      testo: `A dark palette, Avenir Next and restrained materials for a high-end interior
        design studio: letterheads, business cards and matching workwear.`,
    },
    'rampa-del-gusto': {
      titolo: 'Rampa del Gusto',
      tipologia: 'Café & restaurant',
      progetto: 'Brand application',
      testo: `A café with style, quality dining, genuine hospitality. Navy blue and red on
        uniforms and front-of-house materials, for a motorway stop that doesn’t look like
        one.`,
    },
    'francesco-facchini': {
      titolo: 'Francesco Facchini',
      tipologia: 'Personal trainer',
      progetto: 'Brand application',
      testo: `Tailored training, discipline, consistency, real results: the Vitruvian man
        becomes the mark, black and orange become the kit.`,
    },
  },
};

const testi = { it, en } satisfies Record<Lingua, Testi>;

export const t = (lang: Lingua): Testi => testi[lang];
