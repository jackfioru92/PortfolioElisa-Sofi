export const languages = { it: 'IT', en: 'EN' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'it';

export const ui = {
  it: {
    'meta.title': 'SE Creative — Brand Identity, Social & Video | Perugia',
    'meta.desc':
      'Studio creativo di Sofia Ercolani ed Elisa Zetti. Brand identity, packaging, social media strategy e video production per aziende e brand in Umbria e in tutta Italia.',

    'nav.work': 'Progetti',
    'nav.services': 'Servizi',
    'nav.about': 'Studio',
    'nav.reels': 'Video',
    'nav.contact': 'Contatti',
    'nav.menu': 'Menu',
    'nav.close': 'Chiudi',

    'hero.tag': 'Studio creativo · Perugia',
    'hero.l1': 'Costruiamo fiducia',
    'hero.l2': 'nei brand con visioni',
    'hero.l3': 'strategiche e memorabili.',
    'hero.roles':
      'Brand Visualizer · Creative Strategist · Graphic Designer · Content Creator · Web Designer',
    'hero.scroll': 'Scorri',

    'about.label': 'Lo studio',
    'about.title': 'Siamo Sofia & Elisa.',
    'about.p1':
      'Professioniste con una formazione nel marketing, nella comunicazione e nel digitale. Abbiamo scelto di unire competenze, creatività e visioni diverse per costruire un nuovo modo di comunicare, in cui strategia, innovazione e autenticità si trasformano in progetti concreti e su misura.',
    'about.p2':
      'Attraverso un approccio multidisciplinare e una rete di professionisti specializzati, accompagniamo aziende e brand nella creazione di esperienze capaci di generare valore, creare connessioni e lasciare il segno.',
    'about.claim': 'Non seguiamo il cambiamento. Lo costruiamo.',
    'about.n1': 'Progetti curati',
    'about.n2': 'Anni di esperienza',
    'about.n3': 'Settori seguiti',

    'services.label': 'Cosa facciamo',
    'services.title': 'Servizi',
    'services.s1.t': 'Logo & Brand Identity',
    'services.s1.d':
      "Naming, logo, palette, tipografia e linee guida. L'identità completa di un brand, dal concept all'applicazione.",
    'services.s2.t': 'Packaging & Print',
    'services.s2.d':
      'Packaging, menu, materiali stampati e brand application: dal file esecutivo al prodotto finito.',
    'services.s3.t': 'Social Media Strategy',
    'services.s3.d':
      'Piani editoriali, contenuti e gestione dei canali. Una comunicazione coerente e funzionale ai risultati.',
    'services.s4.t': 'Video Production',
    'services.s4.d':
      'Riprese, montaggio e formati verticali per social. Racconto di prodotto, luogo e persone.',
    'services.s5.t': 'Creative Visual',
    'services.s5.d':
      'Manipolazione digitale, poster e visual editoriali. Immagini che si fanno ricordare.',
    'services.s6.t': 'Web Design',
    'services.s6.d':
      'Siti veloci e curati nel dettaglio, costruiti attorno alla tua identità e ai tuoi obiettivi.',

    'work.label': 'Selezione',
    'work.title': 'Progetti',
    'work.intro':
      'Ogni progetto è un’opportunità per costruire una comunicazione coerente, valorizzare l’identità di un brand e trasformarne i punti di forza in una narrazione autentica.',
    'work.type': 'Tipologia',
    'work.scope': 'Progetto',

    'work.p1.t': 'Sultano',
    'work.p1.k': 'Bar & Restaurant',
    'work.p1.s': 'Brand Identity Completa',
    'work.p1.d':
      "Sultano nasce a Colle Umberto, tra Perugia e Corciano, dal desiderio del proprietario di riunire in un unico luogo la sua passione per la panificazione, la pizza e il gelato artigianale. Ispirato al suo soprannome, il nome riflette l'anima autentica e poliedrica di uno spazio intimo dove bar, ristorazione ed eventi si fondono. Eleganti tonalità di oro e marrone per un ambiente sofisticato ma conviviale.",

    'work.p2.t': 'Acqua Dolce',
    'work.p2.k': 'Lounge Bar',
    'work.p2.s': 'Brand Identity Completa',
    'work.p2.d':
      'Acqua Dolce Lounge Bar nasce sulle rive del Lago Trasimeno, sviluppato su piccole terrazze affacciate sull’acqua. Un luogo dove la qualità delle materie prime incontra una filosofia plastic free, con cui condivide la passione per il lago e per il suo territorio.',

    'work.p3.t': 'Disco Prepotente',
    'work.p3.k': 'Music & Events',
    'work.p3.s': 'Complete Brand Identity',
    'work.p3.d':
      'Identità completa per un progetto musicale: logo, brand application e merchandising. Dal vinile alla felpa, un sistema visivo coerente pensato per vivere addosso alle persone e dentro i locali.',

    'work.p4.t': 'Social Media',
    'work.p4.k': 'Strategy & Contents',
    'work.p4.s': 'Beyond the Visual',
    'work.p4.d':
      'Strutture ricettive, ristoranti e attività locali seguite nel loro percorso di crescita: Nestor Calcio 1904, Forma Boutique Suite, Albaia, Fondi & G.A. Genovese. Piani editoriali e contenuti costruiti sui risultati.',

    'work.p5.t': 'Carousel Design',
    'work.p5.k': 'Social Formats',
    'work.p5.s': 'Editorial Design',
    'work.p5.d':
      'Caroselli editoriali per eventi, sport e cultura. Sistemi modulari che restano riconoscibili scorrendo il feed, declinati su decine di uscite.',

    'work.p6.t': 'Creative Visual',
    'work.p6.k': 'Art Direction',
    'work.p6.s': 'Manipulation Design',
    'work.p6.d':
      'Poster e visual editoriali costruiti per manipolazione digitale e collage. Progetti dove la ricerca visiva viene prima del formato.',

    'reels.label': 'In movimento',
    'reels.title': 'Video Production',
    'reels.intro':
      'Formati verticali girati e montati per i social. Premi play per guardarli.',
    'reels.play': 'Guarda il video',
    'reels.soon': 'Video in arrivo',
    'reels.b23': 'Borgobrufa Spa Resort',
    'reels.b25': 'FlexorLab',
    'reels.b27': 'Forma Boutique Suite',
    'reels.b29': 'Albaia',
    'reels.b31': 'Okkio',
    'reels.b33': 'Fisio Group',

    'clients.label': 'Hanno scelto noi',

    'contact.label': "Let's connect",
    'contact.title': 'Parliamo del tuo progetto.',
    'contact.intro':
      'Raccontaci la tua idea: rispondiamo a tutti, di solito entro un giorno lavorativo.',
    'contact.email': 'Scrivici',
    'contact.phone': 'Chiamaci',
    'contact.cta': 'Iniziamo',
    'contact.based': 'Perugia, Umbria — lavoriamo in tutta Italia',

    'form.title': 'Scrivici',
    'form.nome': 'Nome',
    'form.cognome': 'Cognome',
    'form.email': 'La tua email',
    'form.provenienza': 'Come ci hai trovati?',
    'form.provenienza.hint': 'Instagram, passaparola, ricerca su Google…',
    'form.messaggio': 'La tua richiesta',
    'form.messaggio.hint': 'Raccontaci il progetto: di cosa hai bisogno e per quando.',
    'form.invia': 'Invia la richiesta',
    'form.invio': 'Invio in corso…',
    'form.ok.t': 'Richiesta inviata.',
    'form.ok.d': 'Ti rispondiamo di solito entro un giorno lavorativo.',
    'form.ko.t': 'Non è stato possibile inviare.',
    'form.ko.d': 'Riprova fra poco, oppure scrivici su WhatsApp.',
    'form.obbligatorio': 'Campo obbligatorio',
    'form.email.no': 'Controlla l’indirizzo email',
    'form.corto': 'Scrivi qualche parola in più',
    'form.required': 'obbligatorio',
    'social.wa': 'Scrivici su WhatsApp',
    'social.ig': 'Seguici su Instagram',

    'footer.rights': 'Tutti i diritti riservati',
    'footer.credits': 'Sito realizzato da SE Creative',
  },

  en: {
    'meta.title': 'SE Creative — Brand Identity, Social & Video | Italy',
    'meta.desc':
      'Creative studio by Sofia Ercolani and Elisa Zetti. Brand identity, packaging, social media strategy and video production for companies and brands in Italy.',

    'nav.work': 'Work',
    'nav.services': 'Services',
    'nav.about': 'Studio',
    'nav.reels': 'Video',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',

    'hero.tag': 'Creative studio · Italy',
    'hero.l1': 'Building brand trust',
    'hero.l2': 'and driving growth with',
    'hero.l3': 'memorable, strategic visuals.',
    'hero.roles':
      'Brand Visualizer · Creative Strategist · Graphic Designer · Content Creator · Web Designer',
    'hero.scroll': 'Scroll',

    'about.label': 'The studio',
    'about.title': 'We are Sofia & Elisa.',
    'about.p1':
      'Two professionals with a background in marketing, communication and digital. We chose to combine different skills, creativity and points of view to build a new way of communicating, where strategy, innovation and authenticity turn into concrete, tailor-made projects.',
    'about.p2':
      'Through a multidisciplinary approach and a network of specialists, we guide companies and brands in creating experiences that generate value, build connections and leave a mark.',
    'about.claim': 'We do not follow change. We build it.',
    'about.n1': 'Projects delivered',
    'about.n2': 'Years of experience',
    'about.n3': 'Industries served',

    'services.label': 'What we do',
    'services.title': 'Services',
    'services.s1.t': 'Logo & Brand Identity',
    'services.s1.d':
      'Naming, logo, palette, typography and guidelines. A brand’s full identity, from concept to application.',
    'services.s2.t': 'Packaging & Print',
    'services.s2.d':
      'Packaging, menus, printed materials and brand application: from artwork to finished product.',
    'services.s3.t': 'Social Media Strategy',
    'services.s3.d':
      'Editorial plans, content and channel management. Communication that is consistent and built for results.',
    'services.s4.t': 'Video Production',
    'services.s4.d':
      'Shooting, editing and vertical formats for social. Telling the story of a product, a place, a person.',
    'services.s5.t': 'Creative Visual',
    'services.s5.d':
      'Digital manipulation, posters and editorial visuals. Images people remember.',
    'services.s6.t': 'Web Design',
    'services.s6.d':
      'Fast, carefully crafted websites built around your identity and your goals.',

    'work.label': 'Selected',
    'work.title': 'Work',
    'work.intro':
      'Every project is a chance to build consistent communication, bring out a brand’s identity and turn its strengths into an authentic story.',
    'work.type': 'Type',
    'work.scope': 'Scope',

    'work.p1.t': 'Sultano',
    'work.p1.k': 'Bar & Restaurant',
    'work.p1.s': 'Full Brand Identity',
    'work.p1.d':
      'Sultano was born in Colle Umberto, between Perugia and Corciano, from its owner’s wish to bring together his passion for baking, pizza and artisan gelato in one place. Named after his nickname, it reflects the authentic, many-sided soul of an intimate space where bar, dining and events blend together — elegant gold and brown tones for a sophisticated yet convivial room.',

    'work.p2.t': 'Acqua Dolce',
    'work.p2.k': 'Lounge Bar',
    'work.p2.s': 'Full Brand Identity',
    'work.p2.d':
      'Acqua Dolce Lounge Bar sits on the shores of Lake Trasimeno, built across small terraces facing the water. A place where quality ingredients meet a plastic-free philosophy, sharing a love for the lake and its landscape.',

    'work.p3.t': 'Disco Prepotente',
    'work.p3.k': 'Music & Events',
    'work.p3.s': 'Complete Brand Identity',
    'work.p3.d':
      'A full identity for a music project: logo, brand application and merchandising. From vinyl to sweatshirts, a coherent visual system made to live on people and inside venues.',

    'work.p4.t': 'Social Media',
    'work.p4.k': 'Strategy & Contents',
    'work.p4.s': 'Beyond the Visual',
    'work.p4.d':
      'Hospitality, restaurants and local businesses supported through their growth: Nestor Calcio 1904, Forma Boutique Suite, Albaia, Fondi & G.A. Genovese. Editorial plans and content built around results.',

    'work.p5.t': 'Carousel Design',
    'work.p5.k': 'Social Formats',
    'work.p5.s': 'Editorial Design',
    'work.p5.d':
      'Editorial carousels for events, sport and culture. Modular systems that stay recognisable while scrolling the feed, across dozens of releases.',

    'work.p6.t': 'Creative Visual',
    'work.p6.k': 'Art Direction',
    'work.p6.s': 'Manipulation Design',
    'work.p6.d':
      'Posters and editorial visuals built through digital manipulation and collage. Projects where visual research comes before the format.',

    'reels.label': 'In motion',
    'reels.title': 'Video Production',
    'reels.intro': 'Vertical formats shot and edited for social. Hit play to watch.',
    'reels.play': 'Play video',
    'reels.soon': 'Video coming soon',
    'reels.b23': 'Borgobrufa Spa Resort',
    'reels.b25': 'FlexorLab',
    'reels.b27': 'Forma Boutique Suite',
    'reels.b29': 'Albaia',
    'reels.b31': 'Okkio',
    'reels.b33': 'Fisio Group',

    'clients.label': 'Trusted by',

    'contact.label': "Let's connect",
    'contact.title': 'Let’s talk about your project.',
    'contact.intro':
      'Tell us your idea: we reply to everyone, usually within one working day.',
    'contact.email': 'Email us',
    'contact.phone': 'Call us',
    'contact.cta': 'Start a project',
    'contact.based': 'Perugia, Italy — working nationwide',

    'form.title': 'Write to us',
    'form.nome': 'First name',
    'form.cognome': 'Last name',
    'form.email': 'Your email',
    'form.provenienza': 'How did you find us?',
    'form.provenienza.hint': 'Instagram, word of mouth, Google search…',
    'form.messaggio': 'Your message',
    'form.messaggio.hint': 'Tell us about the project: what you need, and by when.',
    'form.invia': 'Send request',
    'form.invio': 'Sending…',
    'form.ok.t': 'Request sent.',
    'form.ok.d': 'We usually reply within one working day.',
    'form.ko.t': 'The message could not be sent.',
    'form.ko.d': 'Please try again shortly, or reach us on WhatsApp.',
    'form.obbligatorio': 'Required field',
    'form.email.no': 'Please check the email address',
    'form.corto': 'Please write a little more',
    'form.required': 'required',
    'social.wa': 'Message us on WhatsApp',
    'social.ig': 'Follow us on Instagram',

    'footer.rights': 'All rights reserved',
    'footer.credits': 'Site by SE Creative',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['it']): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui.it as Record<string, string>)[key];
  };
}

/** Prefisso URL della lingua: '' per IT (radice), '/en' per EN */
export function prefix(lang: Lang) {
  return lang === defaultLang ? '' : `/${lang}`;
}
