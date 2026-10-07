# secreative.it — SE Creative

Il sito di **SE Creative** — Sofia Ercolani ed Elisa Zetti, studio creativo di
Perugia. Una pagina sola, in italiano e in inglese, nello stile giallo-nero-fucsia
del loro Keynote.

Online su **https://secreative.it**

---

## L'idea

Il design arriva da una bozza del cliente; i **contenuti** arrivano tutti dal loro
Keynote «Portfolio 2026», letto slide per slide. Non c'è testo inventato: dove
serviva sapere qualcosa, la risposta era in una slide.

| La sezione | Viene dalla slide |
|---|---|
| I quattro servizi | 3, l'elenco `CONTENTS` |
| Chi siamo, ruoli, manifesto | 4 |
| «Non solo contenuti» | 7, il pezzo *Beyond the Visual* |
| La crescita dei profili | 8 |
| I sette progetti | 13–21 |
| I reel | 23–35 |
| Contatti | 36 |

Fa eccezione la sezione **App**: le due applicazioni non erano nel Keynote. I
dati vengono dalle schede ufficiali degli store (su App Store risultano
pubblicate da Elisa Zetti), le icone sono quelle degli store ridotte a 360px.

Anche i **colori** sono campionati dalle slide, non presi a occhio: giallo
`#FAB415`, fucsia `#EC18E6`, crema `#FEDE8E`, nero `#0B0B0B`. Il lettering
*Beyond the Visual* e *Let's Connect* è ritagliato e scontornato dalle slide vere,
non ridisegnato.

| | |
|---|---|
| **Peso pagina** | ~42 KB di HTML + 25 KB di CSS |
| **Progetti** | 7, filtrabili per categoria |
| **Reel** | 21 video verticali 720×1280 |
| **App** | 2, con i collegamenti ad App Store e Google Play |
| **JavaScript** | nessuna libreria: le animazioni sono CSS |

---

## I recapiti

Telefono, WhatsApp ed email stanno **solo** in `src/data/studio.ts`: tutto il
sito li legge da lì, quindi si cambiano in un punto. Il numero compare poi come
`tel:`, come link `wa.me` (anche quello col messaggio già scritto) e nei dati
per i motori di ricerca.

L'ultima slide del Keynote li aveva stampati dentro l'immagine: `s36.webp` è
stata ritoccata, l'originale resta nella storia di git.

---

## Gli indirizzi

| Indirizzo | Cosa c'è |
|---|---|
| `/` | il sito, in italiano |
| `/en/` | il sito, in inglese |
| `/deck` | il portfolio sfogliabile slide per slide |
| `/en/deck` | lo stesso, con i comandi in inglese |

Il **deck** è il sito precedente: 36 schermate intere che avanzano al click,
esattamente come la presentazione originale. Non è stato buttato, è solo
scivolato da `/` a `/deck`.

---

## Le due lingue

Il selettore **IT / EN** sta nella barra e nel menu del telefono. Cambia tutto il
testo: titoli, navigazione, schede dei progetti, form, perfino il messaggio
precompilato di WhatsApp.

I testi stanno in `src/data/testi.ts`, nelle due lingue. Quelli che la lingua non
cambia — recapiti, immagini, numeri dei follower, video — stanno in
`src/data/studio.ts`.

> Il tipo dell'inglese è ricavato da quello italiano. Se aggiungi una voce e ti
> scordi la traduzione, **il build si ferma**: non pubblica un buco.

Le due lingue montano lo stesso componente `Pagina.astro`, quindi una modifica
all'impaginato vale per entrambe.

> ⚠️ Le **slide del deck restano in italiano** anche su `/en/deck`: sono le
> immagini di un Keynote solo. Cambiano soltanto i comandi.

---

## I reel

I 21 video sono quelli estratti dal `.key` originale, tutti verticali 720×1280
come escono da Instagram. Nella striscia si vedono i **fermo-immagine**: il video
si scarica solo quando premi play, e chiudendolo la sorgente si svuota per non
lasciarlo a scaricare in sottofondo.

L'abbinamento fra file e cliente sta in `src/data/studio.ts` (`perCliente`), ed
era stato ricavato a suo tempo confrontando i fotogrammi con le tre colonne di
ogni slide.

---

## Le app

Le due applicazioni pubblicate stanno in `app` dentro `src/data/studio.ts`:

```ts
{ slug: 'wikiacqua',
  icona: '/img/app/wikiacqua.webp',
  android: 'https://play.google.com/store/apps/details?id=it.agorasoft.wikiacqua',
  ios: 'https://apps.apple.com/it/app/wikiacqua/id6502108018' }
```

Nome, categoria e descrizione stanno invece in `testi.ts` sotto `app.schede`,
nelle due lingue, agganciati allo stesso `slug`.

**Per aggiungerne una** servono tre cose: la riga in `studio.ts`, la scheda in
`testi.ts` (IT ed EN) e l'icona in `public/img/app/`. L'icona si prende dalla
scheda Apple senza aprire il browser:

```bash
curl -s "https://itunes.apple.com/search?term=NOME&entity=software&country=it" \
  | python3 -c "import sys,json; r=json.load(sys.stdin)['results'][0]; print(r['trackViewUrl'], r['artworkUrl512'])"
```

Il link Android non si ricava da lì: va preso dalla scheda del Play Store. Se si
ha solo una ricerca, l'identificativo del pacchetto è spesso lo stesso del
`bundleId` iOS (è così per WikiAcqua, `it.agorasoft.wikiacqua`, ma **non** per
Nuova Alba Calcio, che su Android è `com.nuovaalba.app_nuova_alba_calcio`).

---

## Il form dei contatti

Il tasto **apre il programma di posta** di chi scrive, con il messaggio già
composto. Il sito è statico — nginx serve dei file, non gira nessun processo —
quindi non c'è nessun server a cui inviare.

Per riceverli davvero via email serve un servizio esterno (Formspree, Web3Forms
o simili): si cambia il gestore del `submit` in `src/components/sito/Contatti.astro`
e si toglie la nota sotto al pulsante.

---

## Comandi

```bash
npm install                          # la prima volta
cp deploy.env.example deploy.env     # la prima volta, poi compilalo

npm run dev      # anteprima locale su http://localhost:4321
npm run build    # genera dist/
./deploy.sh      # build + pubblicazione (da Mac/Linux)
```

Serve **Node** installato. Astro 7 avvia il dev server come processo staccato: il
comando esce subito ma il server resta vivo, si ferma con `npx astro dev stop`.

---

## Struttura

```
src/
  data/
    studio.ts            ← recapiti, immagini, numeri, video (non cambiano lingua)
    testi.ts             ← tutti i testi, IT ed EN
  components/sito/
    Pagina.astro         ← monta le sezioni; le due lingue usano questa
    Barra.astro          ← barra in alto, selettore IT/EN, menu del telefono
    Apertura.astro       ← titolo, parola sfocata, nastro «Beyond the Visual»
                           (la parola è testo, non un'immagine: la misura è il
                            `font-size` di `.parolona`, diverso per telefono,
                            tablet e desktop; sfora a destra di proposito e
                            viene tagliata da `.apertura`)
    Lavori.astro         ← i sette progetti, con i filtri
    Reel.astro           ← la striscia dei 21 video verticali
    App.astro            ← le app pubblicate, con i pulsanti degli store
    Numeri.astro         ← la crescita dei profili seguiti
    Servizi.astro  Studio.astro  Contatti.astro  Chiusura.astro
  layouts/Sito.astro     ← head, SEO, hreflang, dati per i motori di ricerca
  styles/sito.css        ← colori del brand e stili comuni
  pages/
    index.astro          ← /        (italiano)
    en/index.astro       ← /en/     (inglese)
    deck.astro           ← /deck
    en/deck.astro        ← /en/deck

  i18n/ui.ts             ← testi del DECK (voce a parte, non del sito)
  components/Deck.astro  ← il visualizzatore delle slide
  components/DeckNav.astro
  layouts/Base.astro     ← head del deck

public/
  img/deck/              ← s01…s36 (piene) e s01@sm… (leggere)
  img/reel/              ← i fermo-immagine dei 21 video
  img/app/               ← le icone delle app
  img/work/              ← ritagli dei progetti e i due lettering scontornati
  img/logo/              ← marchio originale + versioni nera e bianca
  video/                 ← v733…v830.mp4
```

### Rifare le immagini derivate

Alcuni file in `public/img/` sono ricavati da altri. Se cambiano gli originali,
vanno rigenerati:

| File | Da dove | Come |
|---|---|---|
| `logo/se-creative-{nero,bianco}.webp` | `logo/se-creative.png` | ricolorati e ritagliati con `sharp` |
| `work/{forma,interni,rampa,facchini}.webp` | slide 21 | ritagli dei quattro riquadri |
| `work/beyond-the-visual.webp` | slide 7 | ritaglio con sfondo crema scontornato |
| `work/lets-connect.webp` | slide 36 | ritaglio con sfondo giallo scontornato |
| `img/reel/*.webp` | `video/*.mp4` | `ffmpeg -ss 1 -frames:v 1 -vf scale=540:-2` |

Il logo originale è **bianco su trasparente**, pensato per fondo scuro: su giallo
sparirebbe. Per questo esiste la versione nera, con il pallino ricolorato in
fucsia.

### Rifare le slide dopo una modifica al Keynote

1. Da Keynote: *File → Esporta → PDF*, qualità migliore
2. Renderizzare le pagine a 2560px e convertirle in WebP nelle due misure
   (`s##.webp` a 2200px, `s##@sm.webp` a 1100px), in `public/img/deck/`
3. Ripubblicare

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
gli altri siti già presenti sulla macchina senza interferire. **La pubblicazione
non tocca nginx**: scrive soltanto dentro `/var/www/secreative`.

### Pubblicare da Mac o Linux

```bash
./deploy.sh
```

### Pubblicare da Windows

`deploy.sh` non funziona: manca `sshpass`, e `scp`/`ssh` si bloccano sui prompt
della password. Serve fare i due passi a mano.

```powershell
npm run build
cd dist; tar --no-xattrs -czf $env:TEMP\secreative-dist.tgz .
cd $env:TEMP; scp .\secreative-dist.tgz debian@IP:/tmp/
scp .\deploy-remoto.sh debian@IP:/tmp/          # la prima volta
ssh -t debian@IP 'sudo bash /tmp/deploy-remoto.sh'
```

> **Perché uno script e non un comando lungo.** Passando lo script fra virgolette,
> PowerShell toglie quelle interne e `ssh` riunisce gli argomenti con degli spazi:
> al server arriva `sudo bash -c set` e **tutto il resto gira senza sudo**. I
> comandi falliscono uno per uno e il pacchetto in `/tmp` viene comunque
> cancellato. Con un file non c'è niente da citare.

`deploy-remoto.sh` controlla di girare come root e che il pacchetto contenga
abbastanza file: se qualcosa non torna si ferma **prima** dello scambio, e il sito
online resta quello di prima.

Lo scambio è atomico — scompatta in `secreative.new`, poi sposta — quindi il sito
non resta mai a metà.

### HTTPS

Certificati Let's Encrypt su entrambi i domini, scadenza **25/11/2026**, rinnovo
automatico.

### I due domini

| Dominio | Ruolo |
|---|---|
| **secreative.it** | **principale** |
| secreativestudio.it | `301` verso il principale, conservando il percorso |

---

## Le versioni precedenti sono conservate

Niente è andato perso: ogni versione del sito ha il suo tag.

| Tag | Cos'era |
|---|---|
| `v2-deck` | il portfolio sfogliabile, online fino al 30/08/2026 |
| `v1-sito-nero` | il primo tentativo: one-page scuro, GSAP + Lenis |

Il primo sito vive anche nel branch **`sito-nero`**, il deck resta comunque
raggiungibile su `/deck`.

### Guardarne uno senza toccare niente

```bash
git switch sito-nero
npm run dev
git switch main
```

`deploy.env` non è tracciato, quindi resta al suo posto passando da un branch
all'altro.

---

## Da fare

- [ ] Decidere se il form deve arrivare via email (serve un servizio esterno)
- [ ] Far controllare a Elisa e Sofia i testi inglesi
- [ ] Nel Keynote, slide 12: «PORTFOLIO 2026 GRAHIC DESIGN» — manca la P di *Graphic*
