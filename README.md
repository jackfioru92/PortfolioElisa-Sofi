# secreative.it — Portfolio 2026

Il portfolio Keynote di **SE Creative** (Elisa Zetti e Sofia Ercolani) riprodotto
sul web: **36 schermate intere che avanzano al click**, esattamente come la
presentazione originale.

Online su **https://secreative.it**

---

## L'idea

Il design non è stato reinterpretato: le slide sono **le slide del Keynote**,
esportate una per una. L'unica aggiunta è la barra in alto — sezioni e lingua —
che sparisce da sola dopo qualche secondo per non rubare spazio.

| | |
|---|---|
| **Slide** | 36, esportate da Keynote a 2560px e servite in WebP a 2200px |
| **Video** | 21, estratti dal file `.key` originale (780 MB → 125 MB) |
| **Peso pagina** | ~50 KB di HTML + la slide che stai guardando |

---

## Come si sfoglia

| Azione | Comando |
|---|---|
| Avanti | click a destra · `→` · `spazio` · rotellina giù · swipe |
| Indietro | click nel quarto sinistro · `←` · rotellina su · swipe |
| Prima / ultima | `Home` / `End` |
| Schermo intero | `F` o l'icona nella barra |
| Andare a una slide | click sui trattini in basso, o le sezioni nella barra |
| Link diretto | `secreative.it/#24` apre la slide 24 |

Le sezioni nella barra riportano alla slide da cui quella parte comincia, e si
illuminano da sole mentre si sfoglia.

---

## I video

Le slide 24, 26, 28, 30, 32, 34 e 35 mostrano tre filmati affiancati. Su ognuno
c'è un **tasto play**: il video si apre a schermo e parte **solo quando lo premi**.
Nessun filmato parte da solo. Cambiando slide, l'eventuale video in corso si ferma.

L'abbinamento fra colonne e file è in cima a `src/components/Deck.astro`
(`VIDEO_SLIDES`): è stato ricavato confrontando i fotogrammi di ogni filmato con
le tre colonne di ogni slide.

---

## Le due lingue

Lo **switch IT / EN** cambia l'interfaccia: nomi delle sezioni, comandi, titolo
della pagina e descrizione per Google.

> ⚠️ **Le slide restano identiche** nelle due lingue: sono le immagini del
> Keynote, che è uno solo. Per avere il portfolio anche in inglese servirebbe una
> seconda versione del Keynote; a quel punto basta esportarla in
> `public/img/deck-en/` e cambiare il percorso in `Deck.astro`.

---

## Comandi

```bash
npm install                          # la prima volta
cp deploy.env.example deploy.env     # la prima volta, poi compilalo

npm run dev      # anteprima locale su http://localhost:4321
npm run build    # genera dist/
./deploy.sh      # build + pubblicazione sul server
```

---

## Struttura

```
src/
  i18n/ui.ts             ← testi dell'interfaccia + elenco delle sezioni
  components/
    Deck.astro           ← il visualizzatore: slide, comandi, video
    DeckNav.astro        ← barra in alto: sezioni, lingua, schermo intero
  layouts/Base.astro     ← head, SEO, dati per i motori di ricerca
  pages/
    index.astro          ← italiano  (/)
    en/index.astro       ← inglese   (/en/)
public/
  img/deck/              ← s01…s36 (piene) e s01@sm… (leggere, per il precarico)
  video/                 ← v733…v830.mp4
  img/logo/              ← marchio e favicon
```

### Cambiare le sezioni della barra

In `src/i18n/ui.ts`, in fondo:

```ts
export const sections = [
  { key: 'sec.start', slide: 1 },
  { key: 'sec.about', slide: 4 },
];
```

Il numero è la slide da cui la sezione riparte. I nomi si traducono più sopra,
nello stesso file.

### Rifare le slide dopo una modifica al Keynote

1. Da Keynote: *File → Esporta → PDF*, qualità migliore
2. Renderizzare le pagine a 2560px e convertirle in WebP nelle due misure
   (`s##.webp` a 2200px, `s##@sm.webp` a 1100px), in `public/img/deck/`
3. `./deploy.sh`

Se cambia il **numero** di slide, aggiornare `TOTAL_SLIDES` in `src/i18n/ui.ts`.

---

## Il server

```
Debian 13 · nginx · certbot
config: /etc/nginx/sites-available/secreative        (sito)
        /etc/nginx/sites-available/secreativestudio  (redirect)
file:   /var/www/secreative
```

I dati di accesso stanno in `deploy.env`, che **non** è pubblicato su GitHub.

Il sito è statico: nginx serve dei file, non gira nessun processo. Convive con
gli altri siti già presenti sulla macchina senza interferire.

### HTTPS

Certificati Let's Encrypt su entrambi i domini, scadenza **25/11/2026**, rinnovo
automatico.

### I due domini

| Dominio | Ruolo |
|---|---|
| **secreative.it** | **principale** |
| secreativestudio.it | `301` verso il principale, conservando il percorso |

---

## Il primo sito è conservato

Prima del deck era stato fatto un **portfolio one-page scuro** con animazioni allo
scroll (GSAP + Lenis). È stato scartato perché il design doveva restare quello del
Keynote, ma non è andato perso: vive nel branch **`sito-nero`**, anche su GitHub.

Provato il 27/08/2026: si ricostruisce senza modifiche, immagini comprese.

### Guardarlo senza toccare niente

```bash
git switch sito-nero
npm run dev
git switch main
```

### Rimetterlo online al posto del deck

```bash
git switch sito-nero
./deploy.sh
```

`deploy.env` non è tracciato, quindi resta al suo posto passando da un branch
all'altro. Per tornare al deck: `git switch main && ./deploy.sh`.

> Il branch è anche taggato **`v1-sito-nero`**, se preferisci cercarlo per nome.

---

## Da fare

- [ ] Far controllare a Elisa e Sofia i punti in cui le sezioni "ripartono"
      (slide 1, 4, 5, 6, 9, 12, 20, 22, 36)
- [ ] Decidere se serve una versione inglese delle slide
