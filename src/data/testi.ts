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
      { label: 'Grafiche', href: '#grafiche' },
      { label: 'Reel', href: '#reel' },
      { label: 'App', href: '#app' },
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

  grafiche: {
    occhiello: 'Grafiche',
    titolo: 'Locandine, ',
    titoloCorsivo: 'una per evento.',
    intro: `Serate, tornei e concerti: ogni appuntamento ha la sua immagine, pensata per
      reggere sia sullo schermo del telefono sia stampata e appesa al muro.`,
    apri: (titolo: string) => `Guarda «${titolo}» più grande`,
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
      {
        titolo: 'Siti web & app',
        testo: 'Siti, landing page e applicazioni: dal disegno delle schermate alla messa online.',
      },
    ],
  },


  app: {
    occhiello: 'Siti web & app',
    titolo: 'Progetti che stanno<br /> in ',
    titoloCorsivo: 'tasca.',
    intro:
      'Applicazioni pubblicate su App Store e Google Play: dal disegno delle schermate alla messa online, per Android e iPhone.',
    store: { ios: 'App Store', android: 'Google Play' },
    apri: (nome: string) => `Apri ${nome} sullo store`,
    schede: {
      'nuova-alba': {
        nome: 'Nuova Alba Calcio',
        tipo: 'Sport',
        testo:
          'L’app ufficiale della società: risultati, classifiche e vita del club sempre a portata di mano per tifosi e genitori.',
      },
      wikiacqua: {
        nome: 'WikiAcqua',
        tipo: 'Food & Drink',
        testo:
          'Il primo portale dedicato alle acque minerali italiane: schede, etichette e ricerca, per dare valore a quello che si beve.',
      },
    },
  },


  rullo: {
    occhiello: 'I nostri servizi',
    titolo: 'Tutto quello<br /> che ',
    titoloCorsivo: 'serve.',
    intro:
      'Dall’analisi all’esecuzione, fino all’ultimo dettaglio. Per brand che non seguono: decidono.',
    parole: [
      'Brand Identity',
      'Packaging',
      'Social Media',
      'Creative Visual',
      'Video',
      'Web & App',
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
      titolo: 'Scrivici',
      nome: 'Nome',
      cognome: 'Cognome',
      email: 'La tua email',
      provenienza: 'Come ci hai trovati?',
      provenienzaAiuto: 'Instagram, passaparola, ricerca su Google…',
      messaggio: 'La tua richiesta',
      messaggioAiuto: 'Raccontaci il progetto: di cosa hai bisogno e per quando.',
      invia: 'Invia la richiesta',
      invio: 'Invio in corso…',
      okTitolo: 'Richiesta inviata.',
      okTesto: 'Ti rispondiamo di solito entro un giorno lavorativo.',
      koTitolo: 'Non è stato possibile inviare.',
      koTesto: 'Riprova fra poco, oppure scrivici su WhatsApp.',
      troppe: 'Troppe richieste dallo stesso collegamento: riprova fra qualche minuto.',
      obbligatorio: 'Campo obbligatorio',
      emailNo: 'Controlla l’indirizzo email',
      corto: 'Scrivi qualche parola in più',
      richiesto: 'obbligatorio',
      nota: 'Scrivendoci accetti che i tuoi dati siano usati per risponderti.',
      notaLink: 'Come trattiamo i dati',
    },
  },

  chiusura: {
    firma: (anno: number, persone: string) => `Portfolio ${anno} — ${persone}`,
    privacy: 'Privacy e cookie',
  },

  privacy: {
    titoloPagina: 'Privacy e cookie — SE Creative',
    descrizione:
      'Come SE Creative tratta i dati di chi visita secreative.it: nessun cookie, nessun tracciamento, e cosa succede quando ci scrivi.',
    titolo: 'Privacy e ',
    titoloCorsivo: 'cookie.',
    aggiornata: 'Aggiornata il 31 agosto 2026',
    torna: 'Torna al sito',
    sommario: `Questo sito non usa cookie, non ha statistiche e non carica niente da
      servizi esterni. L’unico momento in cui raccogliamo dei dati è quando ci scrivi
      col modulo dei contatti.`,
    sezioni: [
      {
        titolo: 'Chi tratta i dati',
        testo: [
          `Il titolare del trattamento è SE Creative — Sofia Ercolani ed Elisa Zetti,
           Perugia. Per qualsiasi domanda su questa pagina, o per esercitare i diritti
           elencati più sotto, l’indirizzo è info@secreative.it.`,
        ],
      },
      {
        titolo: 'Niente cookie, niente tracciamento',
        testo: [
          `Il sito non installa cookie, né tecnici né di profilazione, e non usa
           localStorage o tecnologie simili. Non ci sono Google Analytics, pixel di
           Meta o altri strumenti di statistica.`,
          `Anche i caratteri tipografici sono serviti dal nostro server: aprendo il
           sito il browser non contatta Google Fonts né altri domini. Per questo non
           trovi il solito banner dei cookie: non ci sarebbe niente da accettare.`,
          `Gli unici indirizzi esterni sono i collegamenti a Instagram e WhatsApp, e
           si aprono solo se li premi tu.`,
        ],
      },
      {
        titolo: 'Quando ci scrivi',
        testo: [
          `Il modulo dei contatti raccoglie nome, cognome, indirizzo email, il testo
           della richiesta e — se vuoi indicarlo — come ci hai trovati. Servono a
           risponderti: la base giuridica è il riscontro a una tua richiesta.`,
          `Il messaggio viene recapitato alla casella info@secreative.it e, insieme,
           registrato su un file del nostro server con la data e l’indirizzo IP da cui
           è partito. L’IP serve a limitare gli invii automatici e a evitare che il
           modulo venga usato dai robot per mandare posta indesiderata.`,
          `Conserviamo le richieste finché servono a gestire il rapporto con te, e
           comunque non oltre 24 mesi, salvo che la conversazione diventi un lavoro
           insieme: in quel caso valgono i tempi degli obblighi contabili.`,
        ],
      },
      {
        titolo: 'I registri del server',
        testo: [
          `Come ogni sito, il server registra le richieste che riceve: indirizzo IP,
           data e ora, pagina richiesta e tipo di browser. Sono registri tecnici, usati
           per la sicurezza e per capire eventuali malfunzionamenti, e non vengono
           incrociati con altri dati per identificare chi legge.`,
        ],
      },
      {
        titolo: 'Chi altro vede i dati',
        testo: [
          `Non vendiamo e non cediamo i dati a nessuno. Li trattano solo le persone
           dello studio e i fornitori tecnici indispensabili: chi ospita il server e
           chi gestisce la casella di posta del dominio.`,
        ],
      },
      {
        titolo: 'I tuoi diritti',
        testo: [
          `Puoi chiedere in qualunque momento di sapere quali dati abbiamo, di
           correggerli, di cancellarli, di limitarne l’uso o di riceverli in un
           formato leggibile, e puoi opporti al trattamento. Basta scrivere a
           info@secreative.it: rispondiamo entro trenta giorni.`,
          `Se pensi che qualcosa non vada, puoi rivolgerti al Garante per la
           protezione dei dati personali (www.garanteprivacy.it).`,
        ],
      },
    ],
  },

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
      { label: 'Graphics', href: '#grafiche' },
      { label: 'Reel', href: '#reel' },
      { label: 'Apps', href: '#app' },
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

  grafiche: {
    occhiello: 'Graphics',
    titolo: 'Posters, ',
    titoloCorsivo: 'one per event.',
    intro: `Nights, tournaments and concerts: every event gets its own artwork, made to
      work both on a phone screen and printed on a wall.`,
    apri: (titolo: string) => `View “${titolo}” larger`,
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
      {
        titolo: 'Websites & apps',
        testo: 'Sites, landing pages and applications: from screen design to going live.',
      },
    ],
  },


  app: {
    occhiello: 'Websites & apps',
    titolo: 'Projects that fit<br /> in your ',
    titoloCorsivo: 'pocket.',
    intro:
      'Applications published on the App Store and Google Play: from screen design to going live, for both Android and iPhone.',
    store: { ios: 'App Store', android: 'Google Play' },
    apri: (nome: string) => `Open ${nome} on the store`,
    schede: {
      'nuova-alba': {
        nome: 'Nuova Alba Calcio',
        tipo: 'Sports',
        testo:
          'The club’s official app: results, standings and team life always at hand, for supporters and parents alike.',
      },
      wikiacqua: {
        nome: 'WikiAcqua',
        tipo: 'Food & Drink',
        testo:
          'The first portal devoted to Italian mineral waters: profiles, labels and search, to give value to what you drink.',
      },
    },
  },


  rullo: {
    occhiello: 'What we do',
    titolo: 'Everything<br /> you ',
    titoloCorsivo: 'need.',
    intro:
      'From the first analysis to the final detail. For brands that do not follow: they decide.',
    parole: [
      'Brand Identity',
      'Packaging',
      'Social Media',
      'Creative Visual',
      'Video',
      'Web & App',
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
      titolo: 'Write to us',
      nome: 'First name',
      cognome: 'Last name',
      email: 'Your email',
      provenienza: 'How did you find us?',
      provenienzaAiuto: 'Instagram, word of mouth, Google search…',
      messaggio: 'Your message',
      messaggioAiuto: 'Tell us about the project: what you need, and by when.',
      invia: 'Send request',
      invio: 'Sending…',
      okTitolo: 'Request sent.',
      okTesto: 'We usually reply within one working day.',
      koTitolo: 'The message could not be sent.',
      koTesto: 'Please try again shortly, or reach us on WhatsApp.',
      troppe: 'Too many requests from this connection: please try again in a few minutes.',
      obbligatorio: 'Required field',
      emailNo: 'Please check the email address',
      corto: 'Please write a little more',
      richiesto: 'required',
      nota: 'By writing to us you agree that your details will be used to reply to you.',
      notaLink: 'How we handle data',
    },
  },

  chiusura: {
    firma: (anno: number, persone: string) => `Portfolio ${anno} — ${persone}`,
    privacy: 'Privacy and cookies',
  },

  privacy: {
    titoloPagina: 'Privacy and cookies — SE Creative',
    descrizione:
      'How SE Creative handles the data of people visiting secreative.it: no cookies, no tracking, and what happens when you write to us.',
    titolo: 'Privacy and ',
    titoloCorsivo: 'cookies.',
    aggiornata: 'Last updated 31 August 2026',
    torna: 'Back to the site',
    sommario: `This site sets no cookies, has no analytics and loads nothing from external
      services. The only moment we collect any data is when you write to us through the
      contact form.`,
    sezioni: [
      {
        titolo: 'Who handles the data',
        testo: [
          `The data controller is SE Creative — Sofia Ercolani and Elisa Zetti, Perugia,
           Italy. For any question about this page, or to exercise the rights listed
           below, write to info@secreative.it.`,
        ],
      },
      {
        titolo: 'No cookies, no tracking',
        testo: [
          `The site sets no cookies, neither technical nor for profiling, and uses no
           localStorage or similar technology. There is no Google Analytics, no Meta
           pixel, no other analytics tool.`,
          `Even the typefaces are served from our own server: opening the site, your
           browser contacts neither Google Fonts nor any other domain. That is why there
           is no cookie banner here — there would be nothing to accept.`,
          `The only external addresses are the links to Instagram and WhatsApp, and they
           open only if you choose to follow them.`,
        ],
      },
      {
        titolo: 'When you write to us',
        testo: [
          `The contact form collects your first name, last name, email address, the text
           of your request and — if you care to say — how you found us. They serve to
           reply to you: the legal basis is responding to a request you made.`,
          `The message is delivered to info@secreative.it and, at the same time, recorded
           in a file on our server together with the date and the IP address it came
           from. The IP is used to limit automated submissions and to stop robots using
           the form to send unwanted mail.`,
          `We keep requests for as long as they are useful to our relationship with you,
           and in any case no longer than 24 months — unless the conversation turns into
           work together, in which case accounting retention periods apply.`,
        ],
      },
      {
        titolo: 'Server logs',
        testo: [
          `Like every website, the server records the requests it receives: IP address,
           date and time, page requested and browser type. These are technical logs, used
           for security and to diagnose faults, and they are not cross-referenced with
           other data to identify readers.`,
        ],
      },
      {
        titolo: 'Who else sees the data',
        testo: [
          `We do not sell or pass on data to anyone. It is handled only by the people in
           the studio and by the technical suppliers we cannot do without: whoever hosts
           the server and whoever runs the domain’s mailbox.`,
        ],
      },
      {
        titolo: 'Your rights',
        testo: [
          `At any time you may ask what data we hold, have it corrected or deleted,
           restrict its use, receive it in a readable format, or object to the
           processing. Write to info@secreative.it: we reply within thirty days.`,
          `If you believe something is wrong, you may contact the Italian data protection
           authority, the Garante per la protezione dei dati personali
           (www.garanteprivacy.it).`,
        ],
      },
    ],
  },

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
