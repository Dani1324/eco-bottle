import Link from "next/link";
import Image from "next/image";
import { IconArrowLeft } from "@tabler/icons-react";
import ReportTabs from "@/components/ReportTabs/ReportTabs";
import styles from "@/styles/report.module.css";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  AgeDistributionChart,
  GenderDistributionChart,
  OccupationDistributionChart,
  AreaGeographicaChart,
  WaterConsumptionChart,
  BottleUsageChart,
  MaterialPreferenceChart,
  CapacityPreferenceChart,
  ColorPreferenceChart,
  AppInterestChart,
  AppFeaturesChart,
  WTPChart,
  PurchaseDriverChart,
  BrandAwarenessChart,
  PurchaseChannelChart,
  CommunicationChannelChart,
  InfluencerFollowingChart,
  ProductCharacteristicsChart,
  CharacteristicsImportanceTable,
  OpenFeedbackTable,
  UsageContextsChart,
} from "@/components/RicercaCharts/RicercaCharts";

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

      <br />

      <h2>2. Fabbisogno informativo</h2>
      <p>
        Il fabbisogno informativo è stato articolato in{" "}
        <strong>7 aree tematiche</strong>, ciascuna collegata a una specifica
        decisione di marketing strategico e operativo:
      </p>
      <p>
        <strong>Link al sondaggio:</strong>{" "}
        <a href="https://forms.gle/SRVsVse8pfzUZ1X16" target="_blank" rel="noopener noreferrer">
          https://forms.gle/SRVsVse8pfzUZ1X16
        </a>
      </p>
      <table>
        <thead>
          <tr>
            <th>Area</th>
            <th>Obiettivo informativo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>A. Preferenze di prodotto</strong></td>
            <td>
              Identificare le preferenze relative a materiale, capacità e caratteristiche del prodotto
            </td>
          </tr>
          <tr>
            <td><strong>B. Tecnologia e app</strong></td>
            <td>
              Valutare l&apos;interesse verso funzionalità smart (tracking idratazione, app)
            </td>
          </tr>
          <tr>
            <td><strong>C. Prezzo e fattori decisionali</strong></td>
            <td>
              Stimare la willingness to pay e identificare i fattori che influenzano la decisione di acquisto
            </td>
          </tr>
          <tr>
            <td><strong>D. Canali d&apos;acquisto e comunicazione</strong></td>
            <td>
              Identificare i canali distributivi preferiti e i canali informativi per raggiungere il target
            </td>
          </tr>
          <tr>
            <td><strong>E. Brand awareness</strong></td>
            <td>
              Misurare la notorietà dei competitor nel mercato di riferimento
            </td>
          </tr>
          <tr>
            <td><strong>F. Profilo socio-demografico</strong></td>
            <td>
              Identificare le caratteristiche socio-demografiche del campione (età, genere, occupazione, area geografica)
            </td>
          </tr>
          <tr>
            <td><strong>G. Abitudini di idratazione e uso della borraccia</strong></td>
            <td>
              Mappare il consumo e le abitudini di idratazione, valutando la penetrazione della borraccia riutilizzabile
            </td>
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

      <br />

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
        <strong>Risultato: 63 rispondenti validi (Marzo 2026).</strong> La ricerca empirica ha raccolto 63 risposte complete, inferiore al target iniziale di 200-300 rispondenti ma comunque significativa per un&apos;analisi qualitativa del target market. Il campione ha subito riduzioni dovute a limitazioni di tempo e risorse, ma mantiene sufficiente rappresentatività per i segmenti chiave del target (giovani adulti 18-45, maggioranza nel segmento 18-34).
      </p>
      <p>
        <strong>Profilo demografico realizzato:</strong>
      </p>
      <ul>
        <li><strong>Fascia d&apos;età</strong>: 18–24 anni (42,86%, n=27), 25–34 anni (23,81%, n=15), 35–44 anni (9,52%, n=6), 45–54 anni (23,81%, n=15)</li>
        <li><strong>Genere</strong>: Femmina (52,38%), Maschio (28,57%), Preferisco non specificare/Altro (19,05%)</li>
        <li><strong>Occupazione</strong>: Studente (38,10%), Lavoratore dipendente (38,10%), Autonomo/Libero professionista (19,05%), Sportivo/Atleta (4,76%)</li>
        <li><strong>Area geografica</strong>: Centro Italia (60,0%), Nord Italia (14,29%), Sud Italia e Isole (14,29%), Estero (9,52%)</li>
      </ul>
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

      <br />

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

      <br />

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

      <br />

      <h2>6. Risultati della ricerca e risposte per domanda</h2>

      <h3>SEZIONE A — PREFERENZE DI PRODOTTO</h3>

      <h4>A1. Caratteristiche di importanza (scala Likert)</h4>
      <CharacteristicsImportanceTable />

      <h4>A2. Quale materiale preferisci per una borraccia?</h4>
      <MaterialPreferenceChart />

      <h4>A3. Quale capacità preferisci?</h4>
      <CapacityPreferenceChart />

      <h4>A4. Quali colori preferiresti per una borraccia ecologica?</h4>
      <ColorPreferenceChart />

      <hr />

      <h3>SEZIONE B — TECNOLOGIA E APP</h3>

      <h4>B1. Saresti interessato a una borraccia che monitora l&apos;idratazione?</h4>
      <AppInterestChart />

      <h4>B2. Quali funzionalità smart ti interesserebbero di più?</h4>
      <AppFeaturesChart />

      <hr />

      <h3>SEZIONE C — PREZZO E FATTORI DECISIONALI</h3>

      <h4>C1. Quanto saresti disposto a spendere per una borraccia smart eco-friendly?</h4>
      <WTPChart />

      <h4>C2. Quale fattore influenzerebbe maggiormente la tua decisione di acquisto?</h4>
      <PurchaseDriverChart />

      <hr />

      <h3>SEZIONE D — CANALI D&apos;ACQUISTO E COMUNICAZIONE</h3>

      <h4>D1. Dove preferiresti acquistare una borraccia eco-intelligente?</h4>
      <PurchaseChannelChart />

      <h4>D2. Attraverso quali canali vorresti ricevere informazioni su prodotti eco/tech?</h4>
      <CommunicationChannelChart />

      <h4>D3. Segui influencer/creator che parlano di sostenibilità, lifestyle o fitness?</h4>
      <InfluencerFollowingChart />

      <hr />

      <h3>SEZIONE E — BRAND AWARENESS</h3>

      <h4>E1. Conosci qualcuno di questi brand di borracce?</h4>
      <BrandAwarenessChart />

      <h4>E2. Feedback e suggerimenti aperti (risposte qualitative)</h4>
      <OpenFeedbackTable />

      <hr />

      <h3>SEZIONE F — PROFILO SOCIO-DEMOGRAFICO</h3>
      
      <h4>F1. Quale fascia d&apos;età ti appartiene?</h4>
      <AgeDistributionChart />

      <h4>F2. Quale genere ti rappresenta?</h4>
      <GenderDistributionChart />

      <h4>F3. Qual è la tua situazione lavorativa/scolastica?</h4>
      <OccupationDistributionChart />

      <h4>F4. In quale area geografica risiedi?</h4>
      <AreaGeographicaChart />

      <hr />

      <h3>SEZIONE G — ABITUDINI DI IDRATAZIONE E USO DELLA BORRACCIA</h3>

      <h4>G1. Quanto litri d&apos;acqua bevi mediamente al giorno?</h4>
      <WaterConsumptionChart />

      <h4>G2. Usi una borraccia riutilizzabile?</h4>
      <BottleUsageChart />

      <h4>G3. In quali contesti utilizzi una borraccia? (Risposta multipla)</h4>
      <UsageContextsChart />

      <br />

      <h2>7. Piano di analisi</h2>
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
            <td>A1, A2</td>
            <td>Preferenze di materiale e capacità della borraccia</td>
          </tr>
          <tr>
            <td><strong>Distribuzioni di frequenza</strong></td>
            <td>F1, F2, F3, F4</td>
            <td>Profilo socio-demografico del campione (età, genere, occupazione, area geografica)</td>
          </tr>
          <tr>
            <td><strong>Distribuzioni di frequenza</strong></td>
            <td>G1, G2</td>
            <td>Penetrazione borraccia riutilizzabile e consumo medio d&apos;acqua giornaliera</td>
          </tr>
          <tr>
            <td><strong>Distribuzioni di frequenza</strong></td>
            <td>E1</td>
            <td>Brand awareness competitiva (notorietà spontanea dei competitor)</td>
          </tr>
          <tr>
            <td><strong>Distribuzioni di frequenza</strong></td>
            <td>B1</td>
            <td>Interesse verso applicazione di tracking idratazione</td>
          </tr>
          <tr>
            <td><strong>Medie e distribuzioni</strong></td>
            <td>C1</td>
            <td>Willingness to Pay: distribuzione degli intervalli di prezzo e media stimata</td>
          </tr>
          <tr>
            <td><strong>Distribuzioni ordinate</strong></td>
            <td>C2</td>
            <td>Ranking dei fattori decisionali: qualità, prezzo, design, sostenibilità</td>
          </tr>
          <tr>
            <td><strong>Distribuzioni multiple</strong></td>
            <td>D1, D2, D3</td>
            <td>Canali d&apos;acquisto, canali informativi e fruizione influencer (risposte multipie)</td>
          </tr>
          <tr>
            <td><strong>Tabulazioni incrociate</strong></td>
            <td>F1 × C1</td>
            <td>Fascia d&apos;età × Willingness to Pay: segmenti price-sensitive vs premium</td>
          </tr>
          <tr>
            <td><strong>Tabulazioni incrociate</strong></td>
            <td>F3 × C1</td>
            <td>Situazione lavorativa × WTP: differenze tra studenti, lavoratori, professionisti</td>
          </tr>
          <tr>
            <td><strong>Tabulazioni incrociate</strong></td>
            <td>F1 × B1</td>
            <td>Fascia d&apos;età × Propensione tecnologica: adozione smart feature per target</td>
          </tr>
          <tr>
            <td><strong>Tabulazioni incrociate</strong></td>
            <td>G2 × A1</td>
            <td>Uso attuale borraccia × Preferenza materiale: abitudini vs aspirazioni</td>
          </tr>
          <tr>
            <td><strong>Tabulazioni incrociate</strong></td>
            <td>F3 × C2</td>
            <td>Occupazione × Fattore decisionale: priorità diverse per segmenti</td>
          </tr>
          <tr>
            <td><strong>Analisi cluster</strong></td>
            <td>A1 + A2 + B1 + C1 + C2</td>
            <td>Individuazione micro-segmenti: es. &quot;Eco-conscious premium&quot;, &quot;Tech-enthusiast&quot;, &quot;Price-sensitive&quot;</td>
          </tr>
        </tbody>
      </table>

      <br />

      <h2>8. Limiti metodologici e implicazioni</h2>
      <p>
        Come evidenziato nella teoria, ogni ricerca presenta limiti che è
        necessario dichiarare per garantire trasparenza:
      </p>
      <ol>
        <li>
          <strong>Campione non probabilistico (n=63)</strong>: i risultati non sono
          generalizzabili all&apos;intera popolazione italiana. La distribuzione via
          social media introduce un bias di auto-selezione verso pubblici consapevoli.
        </li>
        <li>
          <strong>Concept test su immagine statica</strong>: la valutazione del
          prodotto avviene senza esperienza tattile, funzionale o trial, il che può
          distorcere la percezione di valore e soddisfazione.
        </li>
        <li>
          <strong>Variabilità temporale</strong>: le preferenze nel mercato smart
          bottle evolvono rapidamente. Quello rilevato a marzo 2026 potrebbe variare
          nei prossimi mesi.
        </li>
        <li>
          <strong>Desiderabilità sociale</strong>: le domande sulla sostenibilità
          tendono a generare risposte inflate rispetto al comportamento reale di acquisto.
        </li>
        <li>
          <strong>Sovrarappresentazione geografica</strong>: il 68,3% dal Centro Italia
          introduce bias. Nord e Sud sottorapresentati.
        </li>
      </ol>
      <p>
        <em>Implicazione strategica</em>: ECOBOTTLE dovrebbe validare i risultati
        con follow-up research su segmenti regionali e con customer interviews
        post-acquisto una volta lanciato.
      </p>

      <br />

      <h2>9. Key Success Metrics e KPI</h2>
      <ul>
        <li>
          <strong>Awareness</strong>: Crescita da 0% a 8-10% entro 12 mesi (vs Air Up 31,7%)
        </li>
        <li>
          <strong>Consideration</strong>: 25% del target conscio considera attivamente l&apos;acquisto
        </li>
        <li>
          <strong>Penetrazione canale primario</strong>: 40%+ vendita via Amazon + sito
          brand (Fasi 1-2)
        </li>
        <li>
          <strong>NPS efficacy</strong>: Net Promoter Score &gt;45 entro 6 mesi (vs
          competitive 35-40)
        </li>
        <li>
          <strong>Retention 12m</strong>: 60%+ dei clienti Fase 1 acquista di nuovo o
          raccomanda (LTV &gt;150€)
        </li>
      </ul>

      <p className={styles.docNote}>
        Documento redatto nell&apos;ambito del Project Work di Marketing —
        Università Politecnica delle Marche, A.A. 2025/2026 x Daniele Ronchini
        <br />
        <strong>Data survey</strong>: N=63 rispondenti | <strong>Periodo</strong>: Marzo 2026
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

      <br />

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

      <br />

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

      <br />

      <h2>4. Profilo dei segmenti individuati — Ricalibramento sulla base dei dati della ricerca (n=63)</h2>
      <p>
        Dall&apos;incrocio della <strong>ricerca empirica (n=63)</strong> con i
        criteri multi-dimensionali emergono <strong>4 micro-segmenti</strong> distinti:
      </p>

      <h3>Segmento 1 — Eco-Millennials Urbani Consapevoli (39%)</h3>
      <ul>
        <li>
          <strong>Profilo demografico</strong>: 18-34 anni (69,8%), 52,4% donne,
          42,9% dipendenti + 19% autonomi, Centro Italia (68,3%)
        </li>
        <li>
          <strong>Stile di vita</strong>: Consapevoli, omnichannel, ricerca
          approfondita, tech-savvy, attenti alla salute
        </li>
        <li>
          <strong>Beneficio primario</strong>: Espressione valoriale eco +
          Monitoraggio salute + Design estetico
        </li>
        <li>
          <strong>Fattori d&apos;acquisto</strong>: Qualità materiali (23,8%),
          Sostenibilità (15,9%), Design (17,5%) — Pragmatici non entusiasti
        </li>
        <li>
          <strong>Comportamento d&apos;acquisto</strong>: Omnichannel (Amazon 33,3%,
          Sito 21,6%, Specialty retail 37,2%), WTP medio 47,8€ con 35% disposto &gt;50€
        </li>
        <li>
          <strong>App interest</strong>: 76,2% interessato ma pragmatico
        </li>
        <li>
          <strong>Penetrazione borraccia</strong>: 71,4% già utente
        </li>
        <li>
          <strong>Dimensione campione</strong>: 39% (n=25 su 63)
        </li>
      </ul>

      <h3>Segmento 2 — Fitness Enthusiasts (26%)</h3>
      <ul>
        <li>
          <strong>Profilo demografico</strong>: 25-34 anni dominanti (33,3%), mix
          studenti (36,5%) e dipendenti (42,9%), Centro Italia (68,3%)
        </li>
        <li>
          <strong>Beneficio primario</strong>: Performance funzionale +
          Monitoraggio salute + Sostenibilità (secondaria)
        </li>
        <li>
          <strong>Fattori d&apos;acquisto</strong>: Qualità (23,8%), Prezzo (20,6%),
          Design (17,5%) — Più price-sensibili rispetto a Millennials
        </li>
        <li>
          <strong>App interest</strong>: 76,2% interessato con focus su integrazioni
          fitness (Apple Health, Google Fit)
        </li>
        <li>
          <strong>Comportamento d&apos;acquisto</strong>: Online-first (Amazon 33,3%) +
          Specialty retail sport (37,2%), WTP medio 47,8€
        </li>
        <li>
          <strong>Penetrazione borraccia</strong>: 71,4% utente
        </li>
        <li>
          <strong>Dimensione campione</strong>: 26% (n=16 su 63)
        </li>
      </ul>

      <h3>Segmento 3 — Design Seekers (17%)</h3>
      <ul>
        <li>
          <strong>Profilo demografico</strong>: 25-34 anni prevalenti (33,3%), 52,4%
          donne, 42,9% dipendenti professionali + 19% autonomi, urbani
        </li>
        <li>
          <strong>Beneficio primario</strong>: Status e design elegante +
          Espressione valoriale eco + Funzionalità (secondaria)
        </li>
        <li>
          <strong>Fattori d&apos;acquisto</strong>: Qualità materiali (23,8%), Design
          (17,5%), Sostenibilità (15,9%) — Non price-sensitive
        </li>
        <li>
          <strong>App interest</strong>: 76,2% interessato globale ma come valore
          aggiunto, non driver decisionale
        </li>
        <li>
          <strong>Comportamento d&apos;acquisto</strong>: Design boutiques + Amazon +
          Omnichannel, WTP medio 47,8€ con 35% disposto &gt;50€
        </li>
        <li>
          <strong>Penetrazione borraccia</strong>: 71,4% utente
        </li>
        <li>
          <strong>Dimensione campione</strong>: 17% (n=11 su 63)
        </li>
      </ul>

      <h3>Segmento 4 — Studenti Green / Gen-Z Attivisti (18%)</h3>
      <ul>
        <li>
          <strong>Profilo demografico</strong>: 18-24 anni dominanti (36,5%), 52,4%
          donne, 36,5% studenti, Centro Italia (68,3%), budget basso-medio
        </li>
        <li>
          <strong>Beneficio primario</strong>: Sostenibilità come credenza (15,9%
          driver primario) + Qualità + Design
        </li>
        <li>
          <strong>Fattori d&apos;acquisto</strong>: Sostenibilità (15,9%), Qualità
          (23,8%), Prezzo (20,6%) — Community-driven
        </li>
        <li>
          <strong>App interest</strong>: 76,2% interessato globale ma possibile
          preferenza versione no-app
        </li>
        <li>
          <strong>Comportamento d&apos;acquisto</strong>: Online-first (Amazon 33,3%,
          Sito 21,6%), WTP medio 47,8€ ma sensibile al prezzo
        </li>
        <li>
          <strong>Penetrazione borraccia</strong>: 71,4% utente + 25,4% in transizione
          (vorrei iniziare)
        </li>
        <li>
          <strong>Dimensione campione</strong>: 18% (n=11 su 63) con alto growth
          potential
        </li>
      </ul>

      <hr />

      <h2>5. Valutazione attrattività e praticabilità — Data-driven</h2>
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
              <span className={styles.stars}>★★★★★</span> 39% campione, WTP 47,8€
              (35% &gt;50€), 71,4% penetrazione, elasticità bassa
            </td>
            <td>
              <span className={styles.stars}>★★★★★</span> Allineamento perfetto
              (eco+smart+design), omnichannel naturale, advocacy alta
            </td>
            <td>
              <strong>TARGET PRIMARIO CONFERMATO</strong>
            </td>
          </tr>
          <tr>
            <td>2. Fitness Enthusiasts</td>
            <td>
              <span className={styles.stars}>★★★★☆</span> 26% campione, WTP 47,8€,
              app interest 76,2%
            </td>
            <td>
              <span className={styles.stars}>★★★☆☆</span> Concorrenza presente
              (HidrateSpark). Requires parità tech. Specialty retail accessibile.
            </td>
            <td><strong>TARGET SECONDARIO ANNO 1</strong></td>
          </tr>
          <tr>
            <td>3. Design Seekers</td>
            <td>
              <span className={styles.stars}>★★★☆☆</span> 17% campione, WTP 47,8€
              (35% &gt;50€), elasticità bassa
            </td>
            <td>
              <span className={styles.stars}>★★★★☆</span> Differenziazione
              design possibile. Investimento design richiesto.
            </td>
            <td><strong>TARGET ESPANSIONE (ANNO 2)</strong></td>
          </tr>
          <tr>
            <td>4. Studenti Green</td>
            <td>
              <span className={styles.stars}>★★★☆☆</span> 18% campione, WTP 47,8€
              ma sensibili al prezzo (20%), alto growth Gen-Z
            </td>
            <td>
              <span className={styles.stars}>★★☆☆☆</span> Online-feasible. Margini
              35-40%. CAC medio. Solo se partnership low-cost.
            </td>
            <td><strong>OPPORTUNISTICO + GROWTH</strong></td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>6. Strategia di Targeting: Focalizzazione + Apertura progressiva</h2>
      <p>
        ECOBOTTLE adotta una <strong>strategia focalizzata</strong> sul Segmento 1
        (Eco-Millennials Urbani 39%) con <strong>apertura progressiva</strong> al Segmento 2
        (Fitness Enthusiasts 26%) e opportunità di espansione ai Segmenti 3-4.
      </p>

      <h3>Fase 1 — Lancio (Mesi 1-6): Focus Eco-Millennials</h3>
      <ul>
        <li>
          <strong>Target</strong>: Eco-Millennials Urbani + early adopters Design Seekers
        </li>
        <li>
          <strong>Canali prioritari</strong>: Sito brand (community), Amazon, specialty
          retail design + sport
        </li>
        <li>
          <strong>Volume target</strong>: 500-1000 unità (high-value, brand-building)
        </li>
        <li>
          <strong>Messaging</strong>: Design + Sostenibilità verificata + Tech pragmatico
        </li>
      </ul>

      <h3>Fase 2 — Expansion (Mesi 4-6): Apertura Fitness</h3>
      <ul>
        <li>
          <strong>Target aggiunto</strong>: Fitness Enthusiasts (partnership atletiche,
          integrazione fitness apps)
        </li>
        <li>
          <strong>Canali aggiuntivi</strong>: Specialty sport retail (Decathlon, JD Sports)
        </li>
        <li>
          <strong>Volume target</strong>: +1500-2000 unità
        </li>
        <li>
          <strong>Messaging</strong>: Performance + Trust + Eco-credibility
        </li>
      </ul>

      <h3>Fase 3 — Scale (Mesi 7+): Students + Diffusione</h3>
      <ul>
        <li>
          <strong>Target aggiunto</strong>: Studenti Green (TikTok, email, campus
          partnerships)
        </li>
        <li>
          <strong>Canali</strong>: TikTok, NFT/social commerce, partnership eco-influencer
        </li>
        <li>
          <strong>Volume</strong>: +2000-3000 unità (volume driver)
        </li>
      </ul>

      <h3>Motivazioni della strategia:</h3>
      <ol>
        <li>
          <strong>Massima coerenza prodotto-segmento (39%)</strong>: il
          sistema-prodotto ECOBOTTLE (eco + smart + design) risponde ai benefici primari
          di Eco-Millennials.
        </li>
        <li>
          <strong>Attrattività e praticabilità empiriche</strong>: dimensione 39%
          (robusta), WTP 47,8€, 35% premium &gt;50€, elasticità bassa.
        </li>
        <li>
          <strong>Gap competitivo evidente</strong>: nessun competitor offre
          eco+smart+design simultaneamente (leader sono Air Up 31,7%, Chilly&apos;s 28,6%).
        </li>
        <li>
          <strong>Difendibilità multi-dimensionale</strong>: materiali eco verificati
          + tech nativa + design premium crea barriera complessa.
        </li>
        <li>
          <strong>Potenziale di espansione graduale</strong>: cross-sell verso Fitness
          (26%) e Studenti (18%) con messaging customizzato.
        </li>
        <li>
          <strong>Viralità community-driven</strong>: Eco-Millennials + Studenti Green
          sono early opinion leaders con alto advocacy.
        </li>
      </ol>

      <p className={styles.docNote}>
        Documento redatto nell&apos;ambito del Project Work di Marketing —
        Università Politecnica delle Marche, A.A. 2025/2026 x Daniele Ronchini
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
        Università Politecnica delle Marche, A.A. 2025/2026 x Daniele Ronchini
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
      disabled: true,
      content: <SegmentazioneTargeting />,
    },
    {
      label: "Analisi Concorrenza",
      value: "concorrenza",
      disabled: true,
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
