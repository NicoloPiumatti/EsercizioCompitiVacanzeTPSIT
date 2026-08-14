# Battaglia Navale

> **Esercizio Compiti Vacanze — TPSIT**

---

## Tema scelto

Nel progetto ho deciso di utilizzare come tema quello del **mare**.

Ho scelto la Battaglia Navale perché questo gioco mi ricorda le guerre combattute in mare tra le navi, in particolare durante la **Seconda Guerra Mondiale**.

---

## Dimensione della griglia

La griglia utilizzata per il gioco ha una dimensione di **10 × 10**.

---

## Numero e dimensione delle navi

All'interno del gioco sono presenti **4 navi**, ognuna con una lunghezza differente:

|  Nave  | Lunghezza |
| :----: | :-------: |
| Nave 1 |  1 cella 🟩  |
| Nave 2 |  2 celle 🟥  |
| Nave 3 |  3 celle 🟧  |
| Nave 4 |  4 celle ⬜  |

---

## Modalità di posizionamento delle navi

Ho utilizzato un **array per ogni nave**, all'interno del quale sono indicate le coordinate delle celle occupate nella griglia.

Durante la partita è necessario confrontare la posizione cliccata dall'utente con quelle delle navi per verificare se il colpo è andato a segno.

Per questo motivo, ad ogni click viene creata una variabile contenente la posizione della cella selezionata (`index.js`, riga 69), che viene successivamente confrontata con le coordinate delle navi.

---

## Tipo di temporizzazione utilizzata

In questo progetto ho utilizzato sia un **cronometro** sia un **conto alla rovescia**.

Ho scelto di utilizzare entrambe le modalità perché si integrano bene con la logica del gioco.

Il giocatore **vince** se riesce a trovare tutte le navi entro il tempo limite, mentre **perde** se il conto alla rovescia raggiunge lo zero.

---

## Elementi creati dinamicamente con JavaScript

Gli elementi principali creati dinamicamente tramite JavaScript sono:

* Div
* Cronometro
* Tabella
* Griglia
* Conto alla rovescia
* Pulsante "Nuova partita"

---

## Funzionalità facoltative aggiunte

Le funzionalità aggiuntive che ho implementato sono:

* Navi di lunghezza diversa
* Messaggio **"Nave affondata"** quando tutte le celle di una nave sono state colpite
* Effetti grafici e animazioni CSS
* Suoni
* Generazione dinamica di una tabella riepilogativa con:

  * numero di tentativi
  * tempo impiegato
  * colpi andati a segno
  * colpi in acqua

---

## Difficoltà incontrate

Durante lo sviluppo del progetto non ho incontrato particolari difficoltà nella realizzazione delle singole funzionalità.

Verso la fine, però, la fase di verifica del corretto funzionamento del progetto e la correzione degli errori mi hanno richiesto più tempo del previsto.

Questa fase di **debug** mi è stata molto utile perché mi ha aiutato a individuare i punti deboli del progetto e a capire quali aspetti dovevano ancora essere sistemati.

Sicuramente il progetto può essere ancora migliorato, sia a livello di codice sia per quanto riguarda la logica del gioco, ma sono molto soddisfatto del risultato finale.

---