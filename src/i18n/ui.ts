export const languages = { it: 'IT', en: 'EN' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'it';

/**
 * Le slide sono le immagini del Keynote: restano identiche in entrambe le
 * lingue. Qui c'è solo l'interfaccia attorno (navbar, sezioni, comandi).
 */
export const ui = {
  it: {
    'meta.title': 'SE Creative — Portfolio 2026',
    'meta.desc':
      'Portfolio 2026 di SE Creative — Elisa Zetti e Sofia Ercolani. Brand identity, packaging, social media strategy e video production.',

    'nav.menu': 'Sezioni',
    'nav.close': 'Chiudi',
    'nav.lang': 'Lingua',

    'sec.start': 'Copertina',
    'sec.contents': 'Indice',
    'sec.about': 'Chi siamo',
    'sec.visual': 'Creative Visual',
    'sec.social': 'Social Media',
    'sec.carousel': 'Carousel',
    'sec.brand': 'Brand Identity',
    'sec.application': 'Brand Application',
    'sec.video': 'Video',
    'sec.contact': 'Contatti',

    'ui.slide': 'Slide',
    'ui.of': 'di',
    'ui.prev': 'Slide precedente',
    'ui.next': 'Slide successiva',
    'ui.play': 'Guarda il video',
    'ui.hint': 'Clicca o usa le frecce per sfogliare',
    'ui.fullscreen': 'Schermo intero',
    'ui.overview': 'Tutte le slide',
    'ui.loading': 'Caricamento…',
  },

  en: {
    'meta.title': 'SE Creative — Portfolio 2026',
    'meta.desc':
      'SE Creative 2026 portfolio — Elisa Zetti and Sofia Ercolani. Brand identity, packaging, social media strategy and video production.',

    'nav.menu': 'Sections',
    'nav.close': 'Close',
    'nav.lang': 'Language',

    'sec.start': 'Cover',
    'sec.contents': 'Contents',
    'sec.about': 'About us',
    'sec.visual': 'Creative Visual',
    'sec.social': 'Social Media',
    'sec.carousel': 'Carousel',
    'sec.brand': 'Brand Identity',
    'sec.application': 'Brand Application',
    'sec.video': 'Video',
    'sec.contact': 'Contact',

    'ui.slide': 'Slide',
    'ui.of': 'of',
    'ui.prev': 'Previous slide',
    'ui.next': 'Next slide',
    'ui.play': 'Play video',
    'ui.hint': 'Click or use the arrow keys to browse',
    'ui.fullscreen': 'Fullscreen',
    'ui.overview': 'All slides',
    'ui.loading': 'Loading…',
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['it']): string {
    return (ui[lang] as Record<string, string>)[key] ?? (ui.it as Record<string, string>)[key];
  };
}

/** Le sezioni della navbar, con la slide da cui ciascuna riparte. */
export const sections = [
  { key: 'sec.start', slide: 1 },
  { key: 'sec.about', slide: 4 },
  { key: 'sec.visual', slide: 5 },
  { key: 'sec.social', slide: 6 },
  { key: 'sec.carousel', slide: 9 },
  { key: 'sec.brand', slide: 12 },
  { key: 'sec.application', slide: 20 },
  { key: 'sec.video', slide: 22 },
  { key: 'sec.contact', slide: 36 },
] as const;

export const TOTAL_SLIDES = 36;
