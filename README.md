# Tracce di Impressionismo — prototipo Monet

Attività didattica ideata dal Prof. Marco Cigolotti.

## 1. Contenuto

Prototipo GitHub Pages del Gruppo 1: Claude Monet, *Campo di papaveri ad Argenteuil*, 1873. Nessun nome, email o altro dato personale degli studenti viene richiesto o inviato.

## 2. Immagine verificata

Opera: Claude Monet, *Coquelicots* / *The Poppy Field near Argenteuil*, 1873, olio su tela, 50 × 65,3 cm, Musée d'Orsay, Parigi, inventario RF 1676.

Riproduzione usata dal sito: Wikimedia Commons, `Claude Monet - Poppy Field - Google Art Project.jpg`, 5586 × 4258 px, fonte digitale Google Arts & Culture. La pagina Commons la contrassegna Public Domain / Public Domain Mark come fedele riproduzione di un'opera bidimensionale in pubblico dominio e segnala che il riuso PD-Art può avere regole differenti in alcune giurisdizioni.

- Commons: https://commons.wikimedia.org/wiki/File:Claude_Monet_-_Poppy_Field_-_Google_Art_Project.jpg
- Musée d'Orsay: https://www.musee-orsay.fr/it/opere/coquelicots-1010

Il prototipo usa una copia locale della stessa riproduzione, conservata in `images/monet-papaveri.jpg`. Il file è stato inserito byte-per-byte senza ridimensionamento, ricompressione o rielaborazione. Verifica effettuata sul file originale: **5586 × 4258 px**, **5.220.393 byte**, SHA-1 **`6bc41ba6480c20c62a5b7ef065f651dfea79b793`**.

## 3. Crea lo spreadsheet

1. In Google Drive crea un nuovo Foglio Google.
2. Rinominalo esattamente `Tracce di Impressionismo – Risposte gruppi`.
3. Nell'URL del Foglio copia l'ID compreso tra `/d/` e `/edit`.
4. Non è necessario creare manualmente la scheda `Risposte`: lo script può crearla.

## 4. Crea Apps Script

1. Dal Foglio: **Estensioni → Apps Script**.
2. Sostituisci il contenuto di `Code.gs` con quello presente in `apps-script/Code.gs`.
3. Sostituisci `INCOLLA_QUI_ID_SPREADSHEET` con l'ID copiato al punto precedente.
4. Salva.
5. Dall'editor seleziona la funzione `setupSheet` e premi **Esegui** una volta.
6. Concedi le autorizzazioni richieste al tuo account docente.
7. Torna al Foglio e verifica la presenza della scheda `Risposte` con 18 colonne.

## 5. Distribuisci la Web App

1. In Apps Script: **Esegui il deployment → Nuovo deployment**.
2. Tipo: **App web**.
3. Esegui come: **Me** (il proprietario dello script).
4. Accesso: scegli l'opzione che consente l'accesso senza login agli utenti che useranno i tablet (la formulazione dell'interfaccia Google può variare in base al tipo di account/dominio).
5. Distribuisci e autorizza se richiesto.
6. Copia l'URL che termina con `/exec` (non l'URL `/dev`).

Nota: se l'amministratore Google Workspace impedisce Web App accessibili senza autenticazione, questa configurazione deve essere autorizzata a livello di dominio; il sito non deve chiedere credenziali agli studenti.

## 6. Inserisci l'URL nel sito

Apri `js/api.js` e sostituisci:

`INCOLLA_QUI_URL_WEB_APP_APPS_SCRIPT`

con l'URL `/exec` appena ottenuto. Non inserire password, token o chiavi nel repository.

## 7. Pubblica su GitHub Pages

1. Crea un repository GitHub, per esempio `tracce-impressionismo`.
2. Carica **il contenuto** di questa cartella mantenendo le sottocartelle `css`, `js`, `images`, `apps-script`.
3. Nel repository apri **Settings → Pages**.
4. Scegli il deployment dal branch principale e dalla cartella root `/`.
5. Salva e attendi la pubblicazione.
6. Apri l'URL GitHub Pages su un tablet in orizzontale.

`apps-script/Code.gs` è conservato nel repository solo come copia: non viene eseguito da GitHub Pages.

## 8. Come funziona l'invio

- Durante l'attività ogni modifica viene salvata in `localStorage`.
- Il `submissionId` UUID nasce all'inizio e rimane lo stesso nei retry.
- `ABBIAMO FINITO` apre solo il riepilogo.
- `INVIA IL NOSTRO LAVORO` effettua un POST `no-cors`: questo POST **non viene considerato conferma**.
- Apps Script valida i dati, acquisisce un `ScriptLock`, controlla l'ID e scrive solo se non esiste già.
- Il browser effettua poi una verifica GET separata via JSONP chiedendo se lo stesso `submissionId` è presente.
- Solo `registered: true` autorizza il messaggio `LAVORO INVIATO` e la cancellazione del `localStorage`.
- Se la verifica fallisce o va in timeout, i dati restano sul tablet e `RIPROVA` usa lo stesso ID.

## 9. Test completo consigliato

1. Apri il sito GitHub Pages su un tablet.
2. Premi `INIZIA` e completa tutte le fasi.
3. Durante il percorso, dopo aver scritto qualcosa, ricarica volontariamente la pagina: deve comparire il recupero del lavoro.
4. Premi `CONTINUA IL LAVORO` e verifica che risposte e fase siano conservate.
5. Arriva al riepilogo e controlla i dati.
6. Premi `INVIA IL NOSTRO LAVORO`.
7. Il sito deve mostrare prima l'invio e poi la verifica; `LAVORO INVIATO ✓` deve comparire solo dopo verifica positiva.
8. Apri il Foglio `Risposte`: deve esserci una sola riga con lo stesso ID e timestamp server.
9. Premi `TORNA ALL'INIZIO`: il percorso deve essere vuoto.
10. Test duplicati: prima di un test, annota un `submissionId` dal Foglio; per un controllo tecnico puoi reinviare la stessa richiesta solo da strumenti di sviluppo. Lo script non deve creare una seconda riga. Nell'uso normale il pulsante viene disabilitato durante l'invio e i retry mantengono lo stesso ID.
11. Test errore: sostituisci temporaneamente in `js/api.js` l'URL della Web App con un URL errato, pubblica/ricarica, completa un lavoro e prova l'invio. Non deve apparire `LAVORO INVIATO`; ricaricando la pagina il lavoro deve essere ancora recuperabile. Ripristina poi l'URL corretto.

## 10. Colonne del foglio `Risposte`

1. ID invio
2. Data e ora
3. Gruppo
4. Autore
5. Opera
6. Data opera
7. Osservazione libera del gruppo
8. Indizi individuati
9. Indizio scelto
10. Prova visiva
11. Accordo iniziale
12. Idee diverse
13. Decisione – osservazione
14. Decisione – ingrandimento
15. Decisione – confronto
16. Decisione – prova visiva
17. Decisione – altro
18. Conclusione

## 11. Estensione futura

La logica dell'app non va duplicata. I nuovi casi saranno aggiunti in `js/cases.js`; in `Code.gs` si aggiungeranno alla mappa `CASES` per la validazione server. Solo dopo il collaudo Monet verranno aggiunti gli altri cinque percorsi.

## 12. Estensione definitiva ai sei gruppi

Il sito usa la stessa applicazione e la stessa architettura del prototipo Monet. Il caso viene selezionato tramite il parametro `gruppo` nell'URL; in assenza del parametro resta attivo il Gruppo 1, quindi il comportamento del collegamento originale di Monet rimane invariato.

- Gruppo 1: `?gruppo=1`
- Gruppo 2: `?gruppo=2`
- Gruppo 3: `?gruppo=3`
- Gruppo 4: `?gruppo=4`
- Gruppo 5: `?gruppo=5`
- Gruppo 6: `?gruppo=6`

I gruppi 2–6 sono definiti esclusivamente in `js/cases.js`; la logica comune resta in `js/app.js`.

### Aggiornamento Apps Script

Nel file `apps-script/Code.gs` è stata estesa esclusivamente la mappa `CASES` per ammettere e verificare i gruppi 2–6. Le 18 colonne, la validazione dei campi, il lock, la deduplicazione tramite `submissionId`, il timestamp server e la verifica JSONP non sono stati modificati.

**Importante per il progetto Apps Script già in uso:** il file `Code.gs` presente nello ZIP sorgente fornito per questa integrazione non conteneva la funzione `creaDashboard` aggiunta successivamente nel progetto Apps Script online. Per non alterare il Dashboard già collaudato, nell'editor Apps Script esistente non sostituire l'intero progetto con questo file: aggiorna soltanto la costante `CASES` con i sei casi presenti in questa versione, lasciando integralmente invariata la funzione Dashboard già installata. Dopo la modifica crea un nuovo deployment/versione della Web App mantenendo lo stesso funzionamento già collaudato.

## 13. Immagini locali definitive

I sei file nella cartella `images` sono usati localmente e non dipendono da risorse esterne. Le cinque nuove riproduzioni sono state copiate byte-per-byte dai file approvati, senza ritaglio, ridimensionamento, ricompressione o altra elaborazione.

| Gruppo | File | Dimensioni | SHA-1 |
|---|---|---:|---|
| 1 | `monet-papaveri.jpg` | 5586 × 4258 | `6bc41ba6480c20c62a5b7ef065f651dfea79b793` |
| 2 | `Ball_at_the_Moulin_de_la_Galette_Renoir_1876.jpg` | 1600 × 1066 | `bcc6fafb0e88cc9265195ac61ac40bcb07900036` |
| 3 | `Edgar_Degas_-_The_Ballet_Class_-_Google_Art_Project.jpg` | 3950 × 4535 | `27b7fa0bee24d98a141e3fe0c66ecf69f9e6bc72` |
| 4 | `Berthe_Morisot_-_The_Cradle_-_Google_Art_Project.jpg` | 4105 × 5001 | `1197c49b7535fec1b74db482874adc12fac4d636` |
| 5 | `degas-assenzio.jpg` | 3936 × 5400 | `1a6814c2cc6c9f860f101623b2388840d62faf9e` |
| 6 | `manet-folies-bergere.jpg` | 3419 × 2553 | `1d75d44ba99855fc5bd9f159e3afde5a1e3b2cb4` |
