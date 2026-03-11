import Link from "next/link";
import Image from "next/image";
import { IconArrowLeft } from "@tabler/icons-react";
import ReportTabs from "@/components/ReportTabs/ReportTabs";
import styles from "@/styles/report.module.css";

export const metadata = {
  title: "Insight, Target e Mercato — EcoBottle",
  description:
    "Ricerca di mercato, segmentazione, targeting e analisi competitiva per il brand ECOBOTTLE.",
};

/* ──────────────────── TAB 1: Ricerca di Mercato ──────────────────── */
function RicercaDiMercato() {
  return (
    <div className={styles.content}>
      <h2>1. Inquadramento metodologico</h2>
      <p>
        La presente ricerca si colloca nell&apos;ambito della{" "}
        <strong>ricerca descrittiva di tipo quantitativo</strong>, finalizzata a
        raccogliere dati primari sulla domanda potenziale nel mercato delle
        bottiglie riutilizzabili smart. Come definito nel corso, la ricerca
        descrittiva si avvale di sondaggi (survey) per ottenere informazioni
        generalizzabili con reach alta ma reachness bassa, il che rende
        indispensabile una progettazione accurata del questionario per
        massimizzare la profondità informativa entro i limiti strutturali dello
        strumento.
      </p>
      <p>
        Il mercato globale delle bottiglie riutilizzabili è stimato a{" "}
        <strong>10,17 miliardi USD</strong> nel 2025 con un CAGR del 4,62% fino
        al 2034 (Precedence Research, 2025). Il segmento smart bottles vale
        circa <strong>271,6 milioni USD</strong> nel 2024 con un CAGR del 7,3%
        (Jadhav, 2025). Questi dati di contesto giustificano l&apos;investimento
        in una ricerca primaria strutturata.
      </p>

      <hr />

      <h2>2. Fabbisogno informativo</h2>
      <p>
        Il fabbisogno informativo è stato articolato in{" "}
        <strong>7 aree tematiche</strong>, ciascuna collegata a una specifica
        decisione di marketing strategico e operativo:
      </p>
      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>Obiettivo informativo</th>
            <th>Decisione collegata</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A. Profilo demografico</td>
            <td>
              Identificare le caratteristiche socio-demografiche del campione
            </td>
            <td>
              Criteri di segmentazione descrittivi (capacità identificativa)
            </td>
          </tr>
          <tr>
            <td>B. Abitudini di idratazione</td>
            <td>
              Mappare frequenza, contesto e volumi di consumo d&apos;acqua
            </td>
            <td>
              Criteri comportamentali (intensità d&apos;uso, occasioni)
            </td>
          </tr>
          <tr>
            <td>C. Sensibilità ambientale</td>
            <td>
              Misurare l&apos;orientamento valoriale verso la sostenibilità
            </td>
            <td>Criteri psicografici (stili di vita) e benefit segmentation</td>
          </tr>
          <tr>
            <td>D. Propensione tecnologica</td>
            <td>
              Valutare l&apos;interesse verso funzionalità smart (tracking, app)
            </td>
            <td>Definizione sistema-prodotto e innovazione</td>
          </tr>
          <tr>
            <td>E. Willingness to Pay</td>
            <td>
              Stimare l&apos;elasticità al prezzo e la disponibilità a pagare
              un premium price
            </td>
            <td>Strategia di pricing (scrematura vs penetrazione)</td>
          </tr>
          <tr>
            <td>F. Preferenze di canale</td>
            <td>
              Identificare i canali d&apos;acquisto preferiti dal target
            </td>
            <td>
              Politica distributiva (ampiezza e lunghezza canale)
            </td>
          </tr>
          <tr>
            <td>G. Brand awareness</td>
            <td>
              Misurare la notorietà dei competitor nel mercato di riferimento
            </td>
            <td>Analisi competitiva e posizionamento</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Motivazione teorica.</strong> Come insegna il corso, i criteri di
        segmentazione devono possedere tre capacità:{" "}
        <strong>identificativa</strong> (chi è il consumatore),{" "}
        <strong>discriminante</strong> (cosa lo differenzia) ed{" "}
        <strong>esplicativa</strong> (perché si comporta così). Le aree A-B
        coprono la capacità identificativa e comportamentale; le aree C-D
        quella esplicativa e psicografica; le aree E-F-G forniscono dati
        operativi per il marketing mix.
      </p>

      <hr />

      <h2>3. Piano di campionamento</h2>
      <p>
        Secondo la teoria, il piano di campionamento richiede decisioni su tre
        aspetti fondamentali:
      </p>
      <h3>3.1 Unità di campionamento (Chi?)</h3>
      <p>
        Individui residenti in Italia, età 18-45 anni, con accesso a internet e
        almeno una minima sensibilità verso tematiche ambientali o benessere.
        La scelta della fascia 18-45 deriva dall&apos;analisi del mercato: il
        segmento smart bottle è dominato da Millennials e Gen-Z urbani.
      </p>
      <h3>3.2 Dimensione del campione (Quanti?)</h3>
      <p>
        <strong>Target: 200-300 rispondenti validi.</strong> Si mira a un
        campione sufficientemente ampio da ridurre l&apos;errore campionario
        (che, come definito nel corso, è la &quot;differenza tra il valore
        stimato sul campione e il valore reale della popolazione&quot;)
        mantenendo al contempo gestibile l&apos;errore non campionario (errori
        di trascrizione, misurazione, elaborazione).
      </p>
      <h3>3.3 Procedura di campionamento (Come?)</h3>
      <p>
        <strong>
          Campione non probabilistico di convenienza con distribuzione
          selezionata.
        </strong>{" "}
        Il questionario viene distribuito via link diretto (campione
        selezionato) attraverso social media (Instagram, LinkedIn, community
        eco-friendly). Questa scelta garantisce un elevato grado di controllo
        sul campione: conosciamo i canali di provenienza e possiamo sostituire
        gli invii se necessario.
      </p>

      <hr />

      <h2>4. Metodo di contatto: Web Interview</h2>
      <p>
        La scelta ricade sulla <strong>web interview</strong> somministrata
        tramite Google Moduli. Come illustrato nel corso, la web interview
        offre vantaggi specifici:
      </p>
      <ul>
        <li>
          <strong>Riduzione dei tempi</strong> di svolgimento dell&apos;indagine
        </li>
        <li>
          <strong>Riduzione dei costi</strong> della ricerca (nessun costo di
          stampa, spedizione, data entry manuale)
        </li>
        <li>
          <strong>Aumento dell&apos;ampiezza del campione</strong> senza costi
          aggiuntivi, riducendo il trade-off errore campionario / errore non
          campionario
        </li>
        <li>
          <strong>Libertà di compilazione</strong> per l&apos;intervistato, che
          aumenta il tasso di partecipazione
        </li>
        <li>
          Possibilità di inserire <strong>contenuti multimediali</strong>{" "}
          (immagine concept ECOBOTTLE) e <strong>skipping automatico</strong> delle
          risposte
        </li>
      </ul>

      <hr />

      <h2>5. Struttura del questionario — Domande, opzioni e tipo di risposta</h2>
      <p>
        L&apos;ordine delle domande segue il principio studiato nel corso:
        l&apos;apertura è la parte più delicata, in cui l&apos;intervistatore
        &quot;si gioca il successivo rapporto di empatia e di fiducia con
        l&apos;intervistato&quot;. Le domande di apertura devono essere semplici
        e condurre a una risposta positiva. Le domande più difficili (prezzo,
        scelte complesse) sono poste al centro. Sono stati evitati i 3 errori
        principali: domande doppie, domande che orientano la risposta e domande
        ambigue.
      </p>

      <div className={styles.infoBox}>
        <p>
          Il questionario è <strong>bilingue</strong> (italiano / inglese),
          strutturato in 7 sezioni ed è stato somministrato via Google Moduli
          con il titolo: <em>"Indagine sulle abitudini di idratazione e borracce
          ecologiche 'smart' – Survey on hydration habits and eco-friendly smart
          water bottles"</em>
        </p>
      </div>

      <hr />

      <h3>Tracciamento amministrativo (campi automatici)</h3>
      <table>
        <thead>
          <tr>
            <th>Campo</th>
            <th>Contenuto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Response Number</td>
            <td>Identificativo progressivo automatico</td>
          </tr>
          <tr>
            <td>Respondent Email</td>
            <td>Email raccolta alla compilazione</td>
          </tr>
          <tr>
            <td>Date Submitted</td>
            <td>Data e ora di invio</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h3>SEZIONE A — DATI DEMOGRAFICI / SOCIO-DEMOGRAPHIC DATA</h3>

      <p>
        <strong>A1. Qual è la tua fascia d&apos;età? – What is your age group?</strong>
        <br />
        <em>Tipo: risposta singola obbligatoria</em>
      </p>
      <ul>
        <li>Under 18</li>
        <li>18–24</li>
        <li>25–34</li>
        <li>35–44</li>
        <li>45–54</li>
        <li>Over 54</li>
      </ul>

      <p>
        <strong>A2. Qual è il tuo genere? – What is your gender?</strong>
        <br />
        <em>Tipo: risposta singola obbligatoria</em>
      </p>
      <ul>
        <li>Maschio – Male</li>
        <li>Femmina – Female</li>
        <li>Altro – Other</li>
        <li>Preferisco non specificare – Prefer not to say</li>
      </ul>

      <p>
        <strong>A3. Qual è la tua occupazione principale? – What is your main occupation?</strong>
        <br />
        <em>Tipo: risposta singola obbligatoria</em>
      </p>
      <ul>
        <li>Studente – Student</li>
        <li>Lavoratore dipendente – Employee</li>
        <li>Lavoratore autonomo / Libero professionista – Self-employed / Freelancer</li>
        <li>Sportivo / Atleta – Athlete</li>
        <li>Pensionato – Retired</li>
        <li>Altro – Other</li>
      </ul>

      <p>
        <strong>A4. In quale area geografica risiedi? – In which area do you live?</strong>
        <br />
        <em>Tipo: risposta singola obbligatoria</em>
      </p>
      <ul>
        <li>Nord Italia – Northern Italy</li>
        <li>Centro Italia – Central Italy</li>
        <li>Sud Italia e Isole – Southern Italy and Islands</li>
        <li>Estero – Abroad</li>
      </ul>

      <hr />

      <h3>SEZIONE B — ABITUDINI DI IDRATAZIONE / HYDRATION HABITS</h3>

      <p>
        <strong>B1. Quanti litri d&apos;acqua bevi mediamente al giorno? – On average, how many litres of water do you drink per day?</strong>
        <br />
        <em>Tipo: risposta singola obbligatoria</em>
      </p>
      <ul>
        <li>Meno di 0,5 litri – Less than 0.5 L</li>
        <li>Tra 0,5 e 1 litro – Between 0.5 and 1 L</li>
        <li>Tra 1 e 1,5 litri – Between 1 and 1.5 L</li>
        <li>Tra 1,5 e 2 litri – Between 1.5 and 2 L</li>
        <li>Più di 2 litri – More than 2 L</li>
      </ul>

      <p>
        <strong>B2. Utilizzi già una borraccia riutilizzabile? – Do you currently use a reusable water bottle?</strong>
        <br />
        <em>Tipo: risposta singola obbligatoria</em>
      </p>
      <ul>
        <li>Sì, quotidianamente – Yes, every day</li>
        <li>Sì, occasionalmente – Yes, occasionally</li>
        <li>No, ma vorrei iniziare – No, but I would like to start</li>
        <li>No, e non mi interessa – No, and I am not interested</li>
      </ul>

      <p>
        <strong>B3. In quali contesti utilizzi (o utilizzeresti) una borraccia riutilizzabile? – In which situations do you use (or would you use) a reusable water bottle?</strong>
        <br />
        <em>Tipo: risposta multipla (checkbox) obbligatoria</em>
      </p>
      <ul>
        <li>Al lavoro / università – At work / university</li>
        <li>Durante l&apos;attività sportiva – During sports activities</li>
        <li>In viaggio – While travelling</li>
        <li>A casa – At home</li>
        <li>All&apos;aperto / escursioni – Outdoors / hiking</li>
        <li>Altro – Other</li>
      </ul>

      <hr />

      <h3>SEZIONE C — PREFERENZE SUL PRODOTTO / PRODUCT PREFERENCES</h3>

      <p>
        <strong>C1. Quanto sono importanti per te le seguenti caratteristiche in una borraccia? – How important are the following features to you when choosing a water bottle?</strong>
        <br />
        <em>Tipo: matrice Likert a 5 gradi</em>
      </p>
      <table>
        <thead>
          <tr>
            <th>Caratteristica</th>
            <th>Scala</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Materiali ecologici / sostenibili – Eco-friendly / sustainable materials</td>
            <td>1 – 2 – 3 – 4 – 5</td>
          </tr>
          <tr>
            <td>Monitoraggio dell&apos;idratazione – Hydration tracking</td>
            <td>1 – 2 – 3 – 4 – 5</td>
          </tr>
          <tr>
            <td>Mantenimento della temperatura (caldo/freddo) – Temperature retention (hot/cold)</td>
            <td>1 – 2 – 3 – 4 – 5</td>
          </tr>
          <tr>
            <td>Design elegante / estetica – Elegant design / appearance</td>
            <td>1 – 2 – 3 – 4 – 5</td>
          </tr>
          <tr>
            <td>Leggerezza e praticità – Lightness and practicality</td>
            <td>1 – 2 – 3 – 4 – 5</td>
          </tr>
          <tr>
            <td>Facilità di pulizia – Ease of cleaning</td>
            <td>1 – 2 – 3 – 4 – 5</td>
          </tr>
          <tr>
            <td>Prezzo accessibile – Affordable price</td>
            <td>1 – 2 – 3 – 4 – 5</td>
          </tr>
          <tr>
            <td>Marca nota / affidabile – Well-known / reliable brand</td>
            <td>1 – 2 – 3 – 4 – 5</td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>C2. Quale materiale preferisci per una borraccia? – Which material do you prefer for a water bottle?</strong>
        <br />
        <em>Tipo: risposta singola obbligatoria</em>
      </p>
      <ul>
        <li>Acciaio inossidabile – Stainless steel</li>
        <li>Materiali biodegradabili / bio-based – Biodegradable / bio-based materials</li>
        <li>Vetro – Glass</li>
        <li>Plastica riciclata – Recycled plastic</li>
        <li>Non ho preferenze – No preference</li>
      </ul>

      <p>
        <strong>C3. Quale capacità preferisci? – Which size do you prefer?</strong>
        <br />
        <em>Tipo: risposta singola obbligatoria</em>
      </p>
      <ul>
        <li>Piccola (350–500 ml) – Small (350–500 ml)</li>
        <li>Media (500–750 ml) – Medium (500–750 ml)</li>
        <li>Grande (750 ml – 1 litro) – Large (750 ml – 1 L)</li>
        <li>Extra large (oltre 1 litro) – Extra large (more than 1 L)</li>
      </ul>

      <p>
        <strong>C4. Quali colori preferiresti per una borraccia ecologica? – Which colours would you prefer for an eco-friendly water bottle?</strong>
        <br />
        <em>Tipo: risposta multipla (checkbox) obbligatoria</em>
      </p>
      <ul>
        <li>Colori naturali (verde, marrone, beige) – Natural colours (green, brown, beige)</li>
        <li>Colori vivaci (rosso, arancione, giallo) – Bright colours (red, orange, yellow)</li>
        <li>Colori neutri (nero, bianco, grigio) – Neutral colours (black, white, grey)</li>
        <li>Colori pastello – Pastel colours</li>
        <li>Effetto legno / pietra naturale – Wood / stone effect</li>
        <li>Altro – Other</li>
      </ul>

      <hr />

      <h3>SEZIONE D — TECNOLOGIA E APP / TECHNOLOGY AND APP</h3>

      <p>
        <strong>D1. Saresti interessato/a a una borraccia che monitora la tua idratazione e ti invia promemoria tramite app? – How interested would you be in a water bottle that tracks your hydration and sends reminders via an app?</strong>
        <br />
        <em>Tipo: risposta singola obbligatoria</em>
      </p>
      <ul>
        <li>Molto interessato/a – Very interested</li>
        <li>Abbastanza interessato/a – Quite interested</li>
        <li>Poco interessato/a – Slightly interested</li>
        <li>Per niente interessato/a – Not interested at all</li>
      </ul>

      <p>
        <strong>D2. Quali funzionalità vorresti in un&apos;app collegata alla borraccia? – Which features would you like in an app connected to the water bottle?</strong>
        <br />
        <em>Tipo: risposta multipla (checkbox) obbligatoria</em>
      </p>
      <ul>
        <li>Promemoria per bere acqua – Drink reminders</li>
        <li>Tracciamento giornaliero dell&apos;idratazione – Daily hydration tracking</li>
        <li>Statistiche settimanali/mensili – Weekly / monthly statistics</li>
        <li>Obiettivi personalizzati – Personalised goals</li>
        <li>Integrazione con app fitness (Apple Health, Google Fit, ecc.) – Integration with fitness apps</li>
        <li>Gamification (sfide, badge, classifiche) – Gamification (challenges, badges, leaderboards)</li>
        <li>Consigli personalizzati sull&apos;idratazione – Personalised hydration tips</li>
        <li>Monitoraggio della qualità dell&apos;acqua – Water quality monitoring</li>
        <li>Altro – Other</li>
      </ul>

      <hr />

      <h3>SEZIONE E — PREZZO E DISPONIBILITÀ A PAGARE / PRICE AND WILLINGNESS TO PAY</h3>

      <p>
        <strong>E1. Quanto saresti disposto/a a spendere per una borraccia ecologica e intelligente come EcoBottle? – How much would you be willing to spend for an eco-friendly and smart bottle like EcoBottle?</strong>
        <br />
        <em>Tipo: risposta singola obbligatoria</em>
      </p>
      <ul>
        <li>Meno di 20 € – Less than €20</li>
        <li>20–35 €</li>
        <li>35–50 €</li>
        <li>50–70 €</li>
        <li>70–100 €</li>
        <li>Più di 100 € – More than €100</li>
      </ul>

      <p>
        <strong>E2. Quale fattore influenzerebbe maggiormente la tua decisione d&apos;acquisto? – Which factor would most influence your purchase decision?</strong>
        <br />
        <em>Tipo: risposta singola obbligatoria</em>
      </p>
      <ul>
        <li>Prezzo – Price</li>
        <li>Qualità dei materiali – Material quality</li>
        <li>Funzionalità smart (app/tracking) – Smart features (app/tracking)</li>
        <li>Design ed estetica – Design and appearance</li>
        <li>Sostenibilità ambientale – Environmental sustainability</li>
        <li>Recensioni e passaparola – Reviews and word of mouth</li>
        <li>Marca / brand noto – Well-known brand</li>
      </ul>

      <hr />

      <h3>SEZIONE F — CANALI D&apos;ACQUISTO E COMUNICAZIONE / PURCHASE AND COMMUNICATION CHANNELS</h3>

      <p>
        <strong>F1. Dove preferiresti acquistare una borraccia ecologica e intelligente? – Where would you prefer to buy an eco-friendly and smart water bottle?</strong>
        <br />
        <em>Tipo: risposta multipla (checkbox) obbligatoria</em>
      </p>
      <ul>
        <li>E-commerce del produttore (sito ufficiale) – Brand&apos;s official online store</li>
        <li>Amazon / marketplace online – Amazon / other marketplaces</li>
        <li>Negozi di articoli sportivi – Sports shops</li>
        <li>Negozi di elettronica – Electronics stores</li>
        <li>Negozi bio / ecologici – Organic / eco stores</li>
        <li>Grande distribuzione (supermercati) – Supermarkets</li>
        <li>Negozi di design / lifestyle – Design / lifestyle stores</li>
        <li>Altro – Other</li>
      </ul>

      <p>
        <strong>F2. Attraverso quali canali vorresti ricevere informazioni su prodotti eco-friendly o tecnologici? – Through which channels would you like to receive information about eco-friendly or tech products?</strong>
        <br />
        <em>Tipo: risposta multipla (checkbox) obbligatoria</em>
      </p>
      <ul>
        <li>Instagram</li>
        <li>TikTok</li>
        <li>YouTube</li>
        <li>Facebook</li>
        <li>Blog e siti di settore – Blogs and specialised websites</li>
        <li>Newsletter via email – Email newsletters</li>
        <li>Influencer / creator</li>
        <li>Pubblicità tradizionale (TV, radio, stampa) – Traditional advertising (TV, radio, print)</li>
        <li>Passaparola – Word of mouth</li>
        <li>Altro – Other</li>
      </ul>

      <p>
        <strong>F3. Segui influencer o creator che parlano di sostenibilità, lifestyle o fitness? – Do you follow influencers or creators who talk about sustainability, lifestyle or fitness?</strong>
        <br />
        <em>Tipo: risposta singola obbligatoria</em>
      </p>
      <ul>
        <li>Sì, regolarmente – Yes, regularly</li>
        <li>Sì, occasionalmente – Yes, occasionally</li>
        <li>No</li>
      </ul>

      <hr />

      <h3>SEZIONE G — BRAND AWARENESS E COMMENTI APERTI / BRAND AWARENESS AND OPEN FEEDBACK</h3>

      <p>
        <strong>G1. Conosci qualcuno di questi brand di borracce? – Do you know any of the following water bottle brands?</strong>
        <br />
        <em>Tipo: risposta multipla (checkbox) obbligatoria</em>
      </p>
      <ul>
        <li>24Bottles</li>
        <li>Chilly&apos;s</li>
        <li>Hydro Flask</li>
        <li>CamelBak</li>
        <li>Stanley</li>
        <li>Air Up</li>
        <li>Nessuno di questi – None of these</li>
      </ul>

      <p>
        <strong>G2. C&apos;è qualcosa che vorresti aggiungere riguardo alle tue preferenze o esigenze per una borraccia ecologica e intelligente? – Is there anything you would like to add regarding your needs or preferences for an eco-friendly and smart water bottle?</strong>
        <br />
        <em>Tipo: risposta aperta (campo di testo libero, facoltativa)</em>
      </p>

      <hr />

      <h2>6. Piano di analisi</h2>
      <table>
        <thead>
          <tr>
            <th>Tipo di analisi</th>
            <th>Domande coinvolte</th>
            <th>Output atteso</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Distribuzioni di frequenza</strong></td>
            <td>A1, A2, A3, A4</td>
            <td>Profilo socio-demografico del campione (età, genere, occupazione, area geografica)</td>
          </tr>
          <tr>
            <td><strong>Distribuzioni di frequenza</strong></td>
            <td>B2, B3</td>
            <td>Penetrazione borraccia riutilizzabile e contesti d&apos;uso prevalenti</td>
          </tr>
          <tr>
            <td><strong>Distribuzioni di frequenza</strong></td>
            <td>C2, C3, C4</td>
            <td>Preferenze di materiale, formato e colore</td>
          </tr>
          <tr>
            <td><strong>Distribuzioni di frequenza</strong></td>
            <td>G1</td>
            <td>Brand awareness competitiva (notorietà spontanea dei competitor)</td>
          </tr>
          <tr>
            <td><strong>Medie e deviazioni standard</strong></td>
            <td>C1 (matrice Likert 1–5)</td>
            <td>Ranking di importanza degli attributi di prodotto: materiali eco, tracking, temperatura, design, praticità, pulizia, prezzo, brand</td>
          </tr>
          <tr>
            <td><strong>Medie e deviazioni standard</strong></td>
            <td>B1</td>
            <td>Consumo medio giornaliero d&apos;acqua nel campione</td>
          </tr>
          <tr>
            <td><strong>Medie e deviazioni standard</strong></td>
            <td>D1</td>
            <td>Propensione media all&apos;acquisto di una smart bottle con tracking</td>
          </tr>
          <tr>
            <td><strong>Tabulazioni incrociate</strong></td>
            <td>A1 × E1</td>
            <td>Età × Willingness to Pay: segmenti price-sensitive vs premium</td>
          </tr>
          <tr>
            <td><strong>Tabulazioni incrociate</strong></td>
            <td>A3 × E1</td>
            <td>Occupazione × WTP: differenze tra studenti, lavoratori, professionisti</td>
          </tr>
          <tr>
            <td><strong>Tabulazioni incrociate</strong></td>
            <td>A1 × D1</td>
            <td>Età × Propensione tecnologica: adozione smart feature per fascia d&apos;età</td>
          </tr>
          <tr>
            <td><strong>Tabulazioni incrociate</strong></td>
            <td>C1 (eco) × E2</td>
            <td>Importanza sostenibilità × Fattore d&apos;acquisto: coerenza valoriale</td>
          </tr>
          <tr>
            <td><strong>Tabulazioni incrociate</strong></td>
            <td>B2 × C2</td>
            <td>Uso borraccia attuale × Materiale preferito: abitudini vs aspirazioni</td>
          </tr>
          <tr>
            <td><strong>Analisi delle risposte multiple</strong></td>
            <td>B3, C4, D2, F1, F2</td>
            <td>Frequenze pesate per domande checkbox: contesti, colori, funzionalità app, canali acquisto, canali informativi</td>
          </tr>
          <tr>
            <td><strong>Analisi cluster</strong></td>
            <td>C1 + D1 + E1</td>
            <td>Individuazione micro-segmenti: es. &quot;Eco-price sensitive&quot;, &quot;Tech-premium&quot;, &quot;Design-first&quot;</td>
          </tr>
          <tr>
            <td><strong>Analisi testuale</strong></td>
            <td>G2</td>
            <td>Analisi qualitativa del feedback aperto: temi ricorrenti, bisogni latenti, obiezioni</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>7. Limiti metodologici</h2>
      <p>
        Come evidenziato nella teoria, ogni ricerca presenta limiti che è
        necessario dichiarare per garantire trasparenza e credibilità:
      </p>
      <ol>
        <li>
          <strong>Campione non probabilistico</strong>: i risultati non sono
          generalizzabili all&apos;intera popolazione italiana. La distribuzione
          via social media introduce un bias di auto-selezione.
        </li>
        <li>
          <strong>Concept test su immagine statica</strong>: la valutazione del
          prodotto avviene senza esperienza tattile o funzionale, il che può
          distorcere la percezione di valore.
        </li>
        <li>
          <strong>Variabilità temporale</strong>: le preferenze nel mercato
          smart bottle sono in rapida evoluzione.
        </li>
        <li>
          <strong>Desiderabilità sociale</strong>: le domande sulla sostenibilità
          ambientale tendono a generare risposte inflate.
        </li>
      </ol>

      <p className={styles.docNote}>
        Documento redatto nell&apos;ambito del Project Work di Marketing —
        Università Politecnica delle Marche, A.A. 2025/2026
        <br />
        Brand: ECOBOTTLE — Drink Smart. Live Green.
      </p>
    </div>
  );
}

/* ──────────────────── TAB 2: Segmentazione e Targeting ──────────────────── */
function SegmentazioneTargeting() {
  return (
    <div className={styles.content}>
      <h2>1. Inquadramento nel processo STP</h2>
      <p>
        Il presente documento si inserisce nel percorso{" "}
        <strong>Segmentazione → Targeting → Posizionamento (STP)</strong>, cuore
        del marketing strategico. Il marketing strategico si articola in:
        segmentazione (suddivisione del mercato in gruppi distinti di
        acquirenti), targeting (scelta di uno o più segmenti obiettivo),
        posizionamento (decisione sul posizionamento competitivo del prodotto).
      </p>

      <hr />

      <h2>2. Macro-segmentazione: il Modello di Abell</h2>
      <p>
        Prima della micro-segmentazione, è necessario definire l&apos;
        <strong>Area Strategica d&apos;Affari (ASA)</strong> in cui opera ECOBOTTLE.
        Secondo il modello di Abell, l&apos;ASA si determina incrociando tre
        dimensioni:
      </p>

      <h3>Asse Tecnologia (Come?)</h3>
      <p>
        Processo produttivo basato su: acciaio inossidabile riciclato al 75%,
        isolamento termico a doppia parete, sensore IoT integrato per tracking
        idratazione, assemblaggio modulare low-carbon. La componente tecnologica
        colloca ECOBOTTLE nel segmento <em>smart reusable bottles</em>.
      </p>

      <h3>Asse Funzioni (A cosa serve?)</h3>
      <ul>
        <li>
          <strong>Funzione primaria</strong>: idratazione quotidiana in mobilità
        </li>
        <li>
          <strong>Funzioni secondarie</strong>: monitoraggio consumo idrico
          (salute), riduzione impatto ambientale (sostenibilità), espressione di
          uno stile di vita (identità sociale)
        </li>
      </ul>

      <h3>Asse Clienti (A chi?)</h3>
      <p>
        Consumatori finali B2C, giovani adulti 22-38 anni, urbani, con reddito
        medio-alto, orientati alla sostenibilità e all&apos;uso di tecnologia
        wearable/smart.
      </p>

      <div className={styles.infoBox}>
        <p>
          <strong>ASA risultante:</strong> ECOBOTTLE opera nell&apos;intersezione
          Tecnologia smart-eco × Funzione idratazione + monitoraggio salute +
          espressione valoriale × Clienti eco-conscious urbani 22-38.
        </p>
      </div>

      <hr />

      <h2>3. Micro-segmentazione: identificazione dei criteri</h2>
      <p>
        La micro-segmentazione identifica sottogruppi di acquirenti con
        aspettative e comportamenti omogenei al loro interno, ma diversi fra
        gruppi. Abbiamo adottato un approccio{" "}
        <strong>multi-criterio</strong> combinando tre famiglie di variabili.
      </p>

      <h3>3.1 Criteri descrittivi</h3>
      <p>
        <em>
          Alta capacità identificativa, bassa capacità discriminante ed
          esplicativa.
        </em>
      </p>
      <table>
        <thead>
          <tr>
            <th>Variabile</th>
            <th>Livelli considerati</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Età</td>
            <td>18-24 / 25-34 / 35-45</td>
          </tr>
          <tr>
            <td>Area geografica</td>
            <td>Urbana (&gt;100k ab.) / Suburbana / Rurale</td>
          </tr>
          <tr>
            <td>Reddito</td>
            <td>Basso (&lt;20k) / Medio (20-40k) / Medio-alto (40k+)</td>
          </tr>
          <tr>
            <td>Istruzione</td>
            <td>Diplomati / Laureati / Post-lauream</td>
          </tr>
        </tbody>
      </table>

      <h3>3.2 Criteri comportamentali</h3>
      <p>
        <em>
          Alta capacità discriminante ed esplicativa, bassa capacità
          identificativa.
        </em>
      </p>
      <table>
        <thead>
          <tr>
            <th>Variabile</th>
            <th>Livelli considerati</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intensità d&apos;uso bottiglia riutilizzabile</td>
            <td>Non utente / Occasionale / Quotidiano</td>
          </tr>
          <tr>
            <td>Fedeltà alla marca</td>
            <td>Brand switcher / Brand loyal</td>
          </tr>
          <tr>
            <td>Canali utilizzati</td>
            <td>Solo online / Solo offline / Omnichannel</td>
          </tr>
          <tr>
            <td>Risposta a stimoli eco</td>
            <td>Indifferente / Sensibile / Attivista</td>
          </tr>
        </tbody>
      </table>

      <h3>3.3 Criteri basati sui benefici ricercati</h3>
      <table>
        <thead>
          <tr>
            <th>Beneficio primario</th>
            <th>Descrizione</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Performance funzionale</td>
            <td>Isolamento termico, resistenza, portabilità</td>
          </tr>
          <tr>
            <td>Monitoraggio salute</td>
            <td>Tracking idratazione, sync con app fitness</td>
          </tr>
          <tr>
            <td>Espressione valoriale eco</td>
            <td>Materiali sostenibili, carbon footprint ridotto</td>
          </tr>
          <tr>
            <td>Status e design</td>
            <td>Estetica premium, riconoscibilità sociale</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>4. Profilo dei segmenti individuati</h2>
      <p>
        Dall&apos;incrocio dei criteri emergono{" "}
        <strong>5 micro-segmenti</strong>:
      </p>

      <h3>Segmento 1 — Eco-Millennials Urbani</h3>
      <ul>
        <li>
          <strong>Profilo</strong>: 25-35 anni, laureati, reddito medio-alto,
          centri urbani &gt;100k
        </li>
        <li>
          <strong>Stile di vita</strong>: Consapevoli, informati, tech-savvy,
          attenti alla salute
        </li>
        <li>
          <strong>Beneficio primario</strong>: Espressione valoriale eco +
          monitoraggio salute
        </li>
        <li>
          <strong>Comportamento d&apos;acquisto</strong>: Omnichannel, ricerca
          approfondita pre-acquisto, WTP premium 55-75€
        </li>
        <li>
          <strong>Dimensione stimata</strong>: ~35% del mercato target
        </li>
      </ul>

      <h3>Segmento 2 — Fitness Enthusiasts</h3>
      <ul>
        <li>
          <strong>Profilo</strong>: 22-38 anni, utilizzatori intensivi di
          fitness tracker
        </li>
        <li>
          <strong>Beneficio primario</strong>: Performance funzionale +
          monitoraggio salute
        </li>
        <li>
          <strong>Comportamento d&apos;acquisto</strong>: Online-first,
          community fitness, WTP 40-60€
        </li>
        <li>
          <strong>Dimensione stimata</strong>: ~25% del mercato target
        </li>
      </ul>

      <h3>Segmento 3 — Design Seekers</h3>
      <ul>
        <li>
          <strong>Profilo</strong>: 28-42 anni, reddito medio-alto, sensibilità
          estetica
        </li>
        <li>
          <strong>Beneficio primario</strong>: Status e design + espressione
          valoriale
        </li>
        <li>
          <strong>Comportamento d&apos;acquisto</strong>: Negozi di design e
          concept store, WTP 60-90€
        </li>
        <li>
          <strong>Dimensione stimata</strong>: ~15% del mercato target
        </li>
      </ul>

      <h3>Segmento 4 — Studenti Green</h3>
      <ul>
        <li>
          <strong>Profilo</strong>: 18-24 anni, studenti universitari, reddito
          basso-medio
        </li>
        <li>
          <strong>Beneficio primario</strong>: Espressione valoriale eco
        </li>
        <li>
          <strong>Comportamento d&apos;acquisto</strong>: Sensibili al prezzo,
          online esclusivo, WTP 30-45€
        </li>
        <li>
          <strong>Dimensione stimata</strong>: ~15% del mercato target
        </li>
      </ul>

      <h3>Segmento 5 — Corporate Wellness</h3>
      <ul>
        <li>
          <strong>Profilo</strong>: 30-50 anni, dipendenti aziende con programmi
          welfare, B2B2C
        </li>
        <li>
          <strong>Beneficio primario</strong>: Performance funzionale + branding
          aziendale
        </li>
        <li>
          <strong>Comportamento d&apos;acquisto</strong>: Acquisti bulk, WTP
          40-55€/unità
        </li>
        <li>
          <strong>Dimensione stimata</strong>: ~10% del mercato target
        </li>
      </ul>

      <hr />

      <h2>5. Valutazione attrattività e praticabilità</h2>
      <table>
        <thead>
          <tr>
            <th>Segmento</th>
            <th>Attrattività</th>
            <th>Praticabilità</th>
            <th>Valutazione</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Eco-Millennials Urbani</td>
            <td>
              <span className={styles.stars}>★★★★★</span> Alta dimensione, alta
              WTP, CAGR 7,3%
            </td>
            <td>
              <span className={styles.stars}>★★★★★</span> Forte allineamento
              con value proposition
            </td>
            <td>
              <strong>TARGET PRIMARIO</strong>
            </td>
          </tr>
          <tr>
            <td>2. Fitness Enthusiasts</td>
            <td>
              <span className={styles.stars}>★★★★☆</span> Buona dimensione, WTP
              media
            </td>
            <td>
              <span className={styles.stars}>★★★☆☆</span> Concorrenza forte
              (HidrateSpark)
            </td>
            <td>Target secondario</td>
          </tr>
          <tr>
            <td>3. Design Seekers</td>
            <td>
              <span className={styles.stars}>★★★☆☆</span> Alta WTP, dimensione
              ridotta
            </td>
            <td>
              <span className={styles.stars}>★★★★☆</span> Differenziazione
              possibile
            </td>
            <td>Target di espansione (Anno 2)</td>
          </tr>
          <tr>
            <td>4. Studenti Green</td>
            <td>
              <span className={styles.stars}>★★★★☆</span> Alta dimensione,
              crescita
            </td>
            <td>
              <span className={styles.stars}>★★☆☆☆</span> WTP bassa
            </td>
            <td>Non prioritario</td>
          </tr>
          <tr>
            <td>5. Corporate Wellness</td>
            <td>
              <span className={styles.stars}>★★★☆☆</span> Volumi interessanti
            </td>
            <td>
              <span className={styles.stars}>★★☆☆☆</span> Richiede forza
              vendita B2B
            </td>
            <td>Non prioritario</td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>6. Scelta della strategia: Strategia Focalizzata</h2>
      <p>
        ECOBOTTLE adotta una <strong>strategia focalizzata</strong> sul Segmento 1
        (Eco-Millennials Urbani) con apertura progressiva al Segmento 2.
      </p>

      <h3>Motivazioni della scelta:</h3>
      <ol>
        <li>
          <strong>Massima coerenza prodotto-segmento</strong>: il
          sistema-prodotto ECOBOTTLE (eco + smart + design) risponde ai tre benefici
          primari ricercati dal segmento.
        </li>
        <li>
          <strong>Attrattività e praticabilità elevate</strong>: dimensione 35%,
          WTP 55-75€, CAGR 7,3%.
        </li>
        <li>
          <strong>Difendibilità del vantaggio competitivo</strong>: la
          combinazione eco+smart+design crea una barriera multi-dimensionale.
        </li>
        <li>
          <strong>Compatibilità con le risorse</strong>: meno risorse rispetto a
          una strategia differenziata.
        </li>
        <li>
          <strong>Potenziale di espansione</strong>: verso Fitness Enthusiasts e
          Design Seekers.
        </li>
        <li>
          <strong>Evoluzione tribale</strong>: il target presenta le
          caratteristiche per sviluppare una <strong>neotribù</strong> intorno
          al brand.
        </li>
      </ol>

      <p className={styles.docNote}>
        Documento redatto nell&apos;ambito del Project Work di Marketing —
        Università Politecnica delle Marche, A.A. 2025/2026
        <br />
        Brand: ECOBOTTLE — Drink Smart. Live Green.
      </p>
    </div>
  );
}

/* ──────────────────── TAB 3: Analisi della Concorrenza ──────────────────── */
function AnalisiConcorrenza() {
  return (
    <div className={styles.content}>
      <h2>1. Framework: dal modello di Porter al benchmarking</h2>
      <p>L&apos;analisi della concorrenza si articola su due livelli:</p>
      <ol>
        <li>
          <strong>Analisi delle forze strutturali</strong> (modello delle cinque
          forze di Porter): quadro macro della struttura del settore.
        </li>
        <li>
          <strong>Benchmarking competitivo</strong>: processo continuo di
          misurazione mediante il confronto con i concorrenti più forti.
        </li>
      </ol>

      <hr />

      <h2>2. Le cinque forze competitive</h2>

      <h3>2.1 Rivalità tra concorrenti esistenti</h3>
      <p>
        Il settore è <strong>moderatamente concentrato</strong> nella fascia
        premium-smart. I principali player controllano circa il 30-35% del
        mercato premium. La concorrenza si gioca sulla{" "}
        <strong>differenziazione</strong> (design, tecnologia, sostenibilità).
      </p>

      <h3>2.2 Potere contrattuale dei fornitori</h3>
      <p>
        <strong>Medio-basso.</strong> Materie prime disponibili presso molteplici
        fornitori. La standardizzazione dei moduli BLE riduce la dipendenza.
      </p>

      <h3>2.3 Potere contrattuale degli acquirenti</h3>
      <p>
        D2C: <strong>basso</strong>. Retail: <strong>medio-alto</strong> (Amazon
        e retailer selettivi impongono condizioni).
      </p>

      <h3>2.4 Minaccia di prodotti sostitutivi</h3>
      <p>
        <strong>Media.</strong> Bottiglie riutilizzabili non-smart, borracce
        filtranti, usa e getta (in calo).
      </p>

      <h3>2.5 Minaccia di nuovi entranti</h3>
      <p>
        <strong>Media.</strong> Barriere moderate: investimento tech, brand
        awareness. Ma assenza di brevetti bloccanti.
      </p>

      <hr />

      <h2>3. Benchmarking competitivo: schede brand</h2>

      <h3>3.1 24Bottles (Italia, 2013)</h3>
      <ul>
        <li>
          <strong>Posizionamento</strong>: Design italiano + sostenibilità (B
          Corp)
        </li>
        <li>
          <strong>Prezzi</strong>: €29-49
        </li>
        <li>
          <strong>Forza</strong>: Brand awareness Italia, &gt;3.500 PdV
        </li>
        <li>
          <strong>Debolezza</strong>: Nessuna funzionalità smart
        </li>
      </ul>

      <h3>3.2 Chilly&apos;s Bottles (UK, 2010)</h3>
      <ul>
        <li>
          <strong>Posizionamento</strong>: Design accessibile + performance
          termica
        </li>
        <li>
          <strong>Prezzi</strong>: €30-45
        </li>
        <li>
          <strong>Forza</strong>: Collaborazioni artisti, forte social presence
        </li>
        <li>
          <strong>Debolezza</strong>: Nessuna funzionalità smart
        </li>
      </ul>

      <h3>3.3 Hydro Flask (USA, 2009)</h3>
      <ul>
        <li>
          <strong>Posizionamento</strong>: Performance outdoor + lifestyle
        </li>
        <li>
          <strong>Prezzi</strong>: €35-55
        </li>
        <li>
          <strong>Forza</strong>: Tecnologia TempShield™, community outdoor
        </li>
        <li>
          <strong>Debolezza</strong>: No smart, eco debole
        </li>
      </ul>

      <h3>3.4 S&apos;well (USA, 2010)</h3>
      <ul>
        <li>
          <strong>Posizionamento</strong>: Fashion + hydration
        </li>
        <li>
          <strong>Prezzi</strong>: €35-50
        </li>
        <li>
          <strong>Forza</strong>: Collaborazioni fashion, gifting
        </li>
        <li>
          <strong>Debolezza</strong>: No smart, innovazione rallentata
        </li>
      </ul>

      <h3>3.5 LARQ (USA, 2017)</h3>
      <ul>
        <li>
          <strong>Posizionamento</strong>: High-tech purification + premium
          design
        </li>
        <li>
          <strong>Prezzi</strong>: $95-129
        </li>
        <li>
          <strong>Forza</strong>: Purificazione UV-C brevettata, tracking nella
          PureVis 2
        </li>
        <li>
          <strong>Debolezza</strong>: Prezzo elevato, accuratezza tracking 85%
        </li>
      </ul>

      <h3>3.6 HidrateSpark (USA, 2014)</h3>
      <ul>
        <li>
          <strong>Posizionamento</strong>: Smart hydration tracking leader
        </li>
        <li>
          <strong>Prezzi</strong>: $60-90
        </li>
        <li>
          <strong>Forza</strong>: SipSense (accuratezza 92%), LED glow,
          integrazione app, batteria 10gg
        </li>
        <li>
          <strong>Debolezza</strong>: Design non premium, sostenibilità debole
        </li>
      </ul>

      <hr />

      <h2>4. Tabella comparativa sintetica</h2>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Attributo</th>
              <th>24Bottles</th>
              <th>Chilly&apos;s</th>
              <th>Hydro Flask</th>
              <th>S&apos;well</th>
              <th>LARQ</th>
              <th>HidrateSpark</th>
              <th>ECOBOTTLE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Design premium</td>
              <td><span className={styles.stars}>★★★★★</span></td>
              <td><span className={styles.stars}>★★★★☆</span></td>
              <td><span className={styles.stars}>★★★☆☆</span></td>
              <td><span className={styles.stars}>★★★★☆</span></td>
              <td><span className={styles.stars}>★★★★★</span></td>
              <td><span className={styles.stars}>★★★☆☆</span></td>
              <td><span className={styles.stars}>★★★★★</span></td>
            </tr>
            <tr>
              <td>Sostenibilità</td>
              <td><span className={styles.stars}>★★★★★</span></td>
              <td><span className={styles.stars}>★★★☆☆</span></td>
              <td><span className={styles.stars}>★★☆☆☆</span></td>
              <td><span className={styles.stars}>★★☆☆☆</span></td>
              <td><span className={styles.stars}>★★★☆☆</span></td>
              <td><span className={styles.stars}>★★☆☆☆</span></td>
              <td><span className={styles.stars}>★★★★★</span></td>
            </tr>
            <tr>
              <td>Tracking</td>
              <td>✗</td>
              <td>✗</td>
              <td>✗</td>
              <td>✗</td>
              <td><span className={styles.stars}>★★★☆☆</span></td>
              <td><span className={styles.stars}>★★★★★</span></td>
              <td><span className={styles.stars}>★★★★☆</span></td>
            </tr>
            <tr>
              <td>Isolamento termico</td>
              <td><span className={styles.stars}>★★★★☆</span></td>
              <td><span className={styles.stars}>★★★★☆</span></td>
              <td><span className={styles.stars}>★★★★★</span></td>
              <td><span className={styles.stars}>★★★★☆</span></td>
              <td><span className={styles.stars}>★★★★☆</span></td>
              <td><span className={styles.stars}>★★★☆☆</span></td>
              <td><span className={styles.stars}>★★★★☆</span></td>
            </tr>
            <tr>
              <td>App ecosystem</td>
              <td>✗</td>
              <td>✗</td>
              <td>✗</td>
              <td>✗</td>
              <td><span className={styles.stars}>★★★☆☆</span></td>
              <td><span className={styles.stars}>★★★★★</span></td>
              <td><span className={styles.stars}>★★★★☆</span></td>
            </tr>
            <tr>
              <td>Prezzo medio</td>
              <td>€35</td>
              <td>€35</td>
              <td>€45</td>
              <td>€40</td>
              <td>€115</td>
              <td>€75</td>
              <td><strong>€59</strong></td>
            </tr>
            <tr>
              <td>Distribuzione IT</td>
              <td><span className={styles.stars}>★★★★★</span></td>
              <td><span className={styles.stars}>★★★★☆</span></td>
              <td><span className={styles.stars}>★★★☆☆</span></td>
              <td><span className={styles.stars}>★★☆☆☆</span></td>
              <td><span className={styles.stars}>★★☆☆☆</span></td>
              <td><span className={styles.stars}>★☆☆☆☆</span></td>
              <td><span className={styles.stars}>★★★☆☆</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr />

      <h2>5. Mappa percettiva</h2>
      <p>
        Sugli assi i due attributi strategici più rilevanti:{" "}
        <strong>Innovazione tecnologica</strong> (X) e{" "}
        <strong>Impegno ecologico</strong> (Y).
      </p>
      <div style={{ marginTop: "24px", marginBottom: "24px", position: "relative", width: "100%", height: "auto" }}>
        <Image
          src="/images/mappa_percettiva.png"
          alt="Mappa percettiva dei competitor: assi innovazione tecnologica vs impegno ecologico"
          width={800}
          height={600}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      <h3>5.1 Identificazione del gap competitivo</h3>
      <p>
        Emerge un <strong>vuoto di offerta</strong> nel quadrante HIGH-TECH +
        HIGH-ECO:
      </p>
      <ul>
        <li>
          <strong>24Bottles</strong> → leader eco, ma nessuna tecnologia smart
        </li>
        <li>
          <strong>LARQ / HidrateSpark</strong> → leader tech, eco debole
        </li>
        <li>
          Il gap eco+smart è esattamente dove ECOBOTTLE si posiziona
        </li>
      </ul>
      <div className={styles.infoBox}>
        <p>
          <strong>Questo gap competitivo</strong> rappresenta la ragion
          d&apos;essere strategica del brand ECOBOTTLE.
        </p>
      </div>

      <hr />

      <h2>6. Implicazioni per il posizionamento</h2>
      <p>
        L&apos;analisi suggerisce un{" "}
        <strong>posizionamento di affiancamento</strong> nel quadrante scoperto.
        ECOBOTTLE non compete frontalmente con 24Bottles (design puro) né con
        HidrateSpark (tracking puro), ma crea una categoria nuova: la{" "}
        <strong>smart eco-bottle premium</strong>.
      </p>

      <p className={styles.docNote}>
        Documento redatto nell&apos;ambito del Project Work di Marketing —
        Università Politecnica delle Marche, A.A. 2025/2026
        <br />
        Brand: ECOBOTTLE — Drink Smart. Live Green.
      </p>
    </div>
  );
}

/* ──────────────────── PAGE ──────────────────── */
export default function InsightTargetMercatoPage() {
  const tabs = [
    {
      label: "Ricerca di Mercato",
      value: "ricerca",
      content: <RicercaDiMercato />,
    },
    {
      label: "Segmentazione & Targeting",
      value: "segmentazione",
      content: <SegmentazioneTargeting />,
    },
    {
      label: "Analisi Concorrenza",
      value: "concorrenza",
      content: <AnalisiConcorrenza />,
    },
  ];

  return (
    <main className={styles.reportPage}>
      <div className={styles.inner}>
        <Link href="/" className={styles.backLink}>
          <IconArrowLeft size={16} />
          Torna alla home
        </Link>

        <h1 className={styles.title}>Insight, Target e Mercato</h1>
        <p className={styles.subtitle}>
          Ricerca di mercato, segmentazione, targeting e analisi competitiva per
          il brand ECOBOTTLE.
        </p>
        <div className={styles.divider} />

        <ReportTabs tabs={tabs} />
      </div>
    </main>
  );
}
