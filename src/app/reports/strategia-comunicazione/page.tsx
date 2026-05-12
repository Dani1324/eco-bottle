import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import styles from "@/styles/report.module.css";

export const metadata = {
  title: "Strategia di Comunicazione — EcoBottle",
  description:
    "Copy strategy, mix comunicazionale, branding visivo e piano di lancio per il brand ECOBOTTLE.",
};

export default function StrategiaComunicazionePage() {
  return (
    <main className={styles.reportPage}>
      <div className={styles.inner}>
        <Link href="/" className={styles.backLink}>
          <IconArrowLeft size={16} />
          Torna alla home
        </Link>

        <h1 className={styles.title}>Strategia di Comunicazione</h1>
        <p className={styles.subtitle}>
          Copy strategy, mix comunicazionale, branding visivo e piano di lancio
          per il brand ECOBOTTLE.
        </p>
        <div className={styles.divider} />

        <div className={styles.content}>
          <h2>
            1. Inquadramento: la comunicazione commerciale nel marketing mix
          </h2>
          <p>
            Ancor prima di definire messaggi e mezzi, la campagna si fonda sull&apos;<strong>individuazione del target</strong>: giovani professionisti, eco-lifestyle enthusiast e frequentatori del circuito fitness/wellness.
          </p>
          <p>
            La comunicazione commerciale è volta a sviluppare relazioni con il
            mercato dei consumatori. Il suo obiettivo è influenzare la percezione
            di valore da parte dei clienti. Persegue tre obiettivi fondamentali:
          </p>
          <ol>
            <li>
              <strong>Sfera cognitiva</strong>: far conoscere il prodotto, il
              brand e l&apos;impresa (brand awareness)
            </li>
            <li>
              <strong>Atteggiamento</strong>: differenziare il prodotto e la
              marca, sviluppare percezioni positive
            </li>
            <li>
              <strong>Comportamento</strong>: spingere alla prova,
              all&apos;acquisto, al riacquisto
            </li>
          </ol>
          <p>
            Per ECOBOTTLE, in fase di lancio, la priorità è la{" "}
            <strong>sfera cognitiva</strong> (il consumatore non conosce il
            brand) seguita dall&apos;<strong>atteggiamento</strong> (far
            percepire ECOBOTTLE come unica nel mercato).
          </p>

          <hr />

          <h2>2. Evoluzione dei modelli di comunicazione</h2>
          <table>
            <thead>
              <tr>
                <th>Modello</th>
                <th>Caratteristica</th>
                <th>Applicazione ECOBOTTLE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Mass media (one-to-many)</strong>
                </td>
                <td>
                  L&apos;azienda è la principale fonte di informazioni,
                  messaggio standardizzato
                </td>
                <td>
                  Non adatto: budget insufficiente per TV/stampa, target
                  specifico → spreco di reach
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Social media (many-to-many)</strong>
                </td>
                <td>
                  Interazione tra clienti e consumatori, l&apos;azienda non ha
                  più un ruolo centrale
                </td>
                <td>
                  <strong>Canale primario</strong>: Instagram, TikTok, LinkedIn.
                  Il target è nativo social e influenzato da UGC e peer review
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Media diretti (one-to-one)</strong>
                </td>
                <td>
                  Personalizzazione del messaggio, comunicazione bidirezionale
                </td>
                <td>
                  <strong>Canale secondario</strong>: email marketing, WhatsApp
                  Business per CRM post-acquisto
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Il budget di comunicazione è stato definito secondo il <strong>metodo degli obiettivi e delle attività (obiettivi e compiti)</strong>, il criterio più logico e accurato per una startup in fase di lancio che non ha uno storico di vendite e non può fare un mero confronto competitivo. Definita la necessità primaria di generare awareness e spingere alla prova iniziale all&apos;interno di un target altamente digitalizzato, il budget è stato ripartito al <strong>75% sul modello many-to-many (social media/influencer)</strong> per la visibilità in target e al <strong>25% sul modello one-to-one (email marketing/direct)</strong> per la conversione. L&apos;approccio esclude del tutto la pubblicità di massa (one-to-many), considerata uno spreco di risorse vista la forte verticalità del segmento.
          </p>

          <hr />

          <h2>3. Copy Strategy (modello P&amp;G)</h2>

          <h3>3.1 Posizionamento sintetizzato nel claim</h3>
          <blockquote>
            <strong>&quot;Drink Smart. Live Green.&quot;</strong>
          </blockquote>

          <h3>3.2 Promise (beneficio principale)</h3>
          <blockquote>
            Un&apos;idratazione quotidiana monitorata intelligentemente, nel
            pieno rispetto dell&apos;ambiente, con un design che eleva il gesto
            di bere a scelta consapevole.
          </blockquote>

          <h3>3.3 Reason-why</h3>
          <blockquote>
            ECOBOTTLE è realizzata con il 75% di acciaio riciclato e materiali
            bio-based; inoltre, integra una sensoristica affidabile per il tracciamento del consumo
            idrico sincronizzato direttamente tramite app mobile con ecosistemi come Apple Health 
            e Google Fit.
          </blockquote>

          <h3>3.4 Supporting evidence</h3>
          <ul>
            <li>Certificazione qualitativa sui materiali (BPA-free e Acciaio Inox 304)</li>
            <li>
              Garanzia di 2 anni e documentazione sulla precisione della componente elettronica
            </li>
            <li>
              Recensioni e testimonianze dirette dei beta tester coinvolti in fase di pre-lancio
            </li>
            <li>
              Partnership ufficiale con un ente ecologico certificato per la compensazione di CO₂
            </li>
          </ul>

          <h3>3.5 Tone of voice</h3>
          <p>
            Autorevole ma accessibile, tecnico ma umano, premium ma non
            elitario. ECOBOTTLE parla come un amico competente: non predica la
            sostenibilità, la pratica con naturalezza. Si distanzia sia dal tono
            ironico (Ceres, Taffo) sia da quello freddo-lusso (Louis Vuitton).
          </p>

          <hr />

          <h2>4. Mix comunicazionale: gli strumenti</h2>

          <p>
            Il classico <strong>mix comunicazionale</strong> si compone di una pluralità di strumenti, tra cui la pubblicità, il product placement, le promozioni, il passaparola, le pubbliche relazioni, le sponsorizzazioni, la comunicazione personale e il marketing diretto.
            Nel caso specifico del lancio di ECOBOTTLE, per operare in una logica di forte <strong>comunicazione integrata</strong> orientata all&apos;efficienza sul target, si è scelto di selezionare e valorizzare solo gli strumenti più contemporanei, misurabili e strategici per intercettare il segmento di riferimento primario:
          </p>

          <h3>4.1 Social Media Advertising</h3>
          <p>
            La pubblicità è ogni forma di presentazione e promozione impersonale
            di idee, beni o servizi. I social media ads superano i limiti della
            pubblicità tradizionale:
          </p>
          <ul>
            <li>
              Costo per esposizione contenuto basso
            </li>
            <li>
              Possibilità di <strong>misurare l&apos;efficacia</strong>{" "}
              (click-through rate, conversion rate, ROAS)
            </li>
            <li>
              Alto livello di <strong>personalizzazione</strong> (targeting per
              interessi, comportamenti, lookalike)
            </li>
            <li>
              Superamento della logica dell&apos;interruzione (contenuti nativi
              nel feed)
            </li>
          </ul>

          <h4>Piattaforme e razionale</h4>
          <table>
            <thead>
              <tr>
                <th>Piattaforma</th>
                <th>Formato</th>
                <th>Target</th>
                <th>KPI</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Instagram</td>
                <td>Reel 15-30s, Carousel educativo, Stories</td>
                <td>25-35, eco-lifestyle, design</td>
                <td>Engagement rate, Save rate</td>
              </tr>
              <tr>
                <td>TikTok</td>
                <td>Short-form video 15-60s, UGC style</td>
                <td>22-30, early adopter, virale</td>
                <td>Views, Share rate</td>
              </tr>
              <tr>
                <td>LinkedIn</td>
                <td>Carousel professionale, articolo</td>
                <td>28-40, corporate wellness</td>
                <td>Click-through rate</td>
              </tr>
            </tbody>
          </table>

          <div className={styles.infoBox}>
            <p>
              <strong>Esempio post Instagram (Reel):</strong>
            </p>
            <p>
              <em>Visual:</em> Slow-motion di ECOBOTTLE che viene riempita
              d&apos;acqua, il display e-ink si illumina mostrando
              &quot;76%&quot;, zoom-out su ragazza in contesto urbano.
            </p>
            <p>
              <em>Copy:</em> &quot;La gran parte di noi fatica a bere la giusta quantità d&apos;acqua ogni giorno; ECOBOTTLE aiuta a mantenere il ritmo quotidiano, traccia quanto bevi e lo fa con il 75% di acciaio riciclato. Drink Smart. Live Green. 💧🌿&quot;
            </p>
          </div>

          <h3>4.2 Influencer Marketing</h3>
          <p>
            L&apos;influencer marketing rientra nell&apos;evoluzione
            many-to-many della comunicazione. Approccio a <strong>3 fasi</strong>
            :
          </p>

          <h4>Fase 1 — Pre-lancio (teasing)</h4>
          <p>
            Invio prodotto a 10-15 <strong>micro-influencer</strong> (10k-100k
            follower) nel settore sustainability e wellness, senza briefing
            rigido — l&apos;autenticità del contenuto genera credibilità.
          </p>

          <h4>Fase 2 — Lancio</h4>
          <p>
            3-5 <strong>macro-influencer</strong> (100k-500k) con contenuto
            sponsorizzato ma nativo (day-in-my-life con ECOBOTTLE integrata). Il
            contenuto deve sembrare organico per superare la resistenza dei
            consumatori.
          </p>

          <h4>Fase 3 — Post-lancio (community building)</h4>
          <p>
            Programma ambassador con 20-30 utenti reali che diventano brand
            advocate. Il prodotto è parte della vita quotidiana
            dell&apos;ambassador, non il protagonista.
          </p>

          <h4>Criterio di selezione influencer</h4>
          <ul>
            <li>
              Coerenza tra valori dell&apos;influencer e brand ECOBOTTLE
              (autenticità)
            </li>
            <li>
              Engagement rate &gt; 3% (community attiva vs follower passivi)
            </li>
            <li>
              Contenuti precedenti su sostenibilità/benessere (credibilità
              tematica)
            </li>
          </ul>

          <h3>4.3 Content Marketing (SEO + AEO)</h3>
          <p>
            Il sito ecobottle.com come <strong>hub di contenuto educativo</strong>{" "}
            che lavora su tutti e tre gli obiettivi della comunicazione:
          </p>
          <table>
            <thead>
              <tr>
                <th>Obiettivo</th>
                <th>Tipo di contenuto</th>
                <th>Esempio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Cognitivo</strong>
                </td>
                <td>Guide educative, infografiche</td>
                <td>
                  &quot;Quanta acqua dovresti bere? La guida scientifica
                  all&apos;idratazione&quot;
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Atteggiamento</strong>
                </td>
                <td>Storytelling, dietro le quinte</td>
                <td>
                  &quot;Come nasce ECOBOTTLE: dal design al materiale
                  riciclato&quot;
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Comportamento</strong>
                </td>
                <td>Comparativi, review, landing page</td>
                <td>
                  &quot;ECOBOTTLE vs 24Bottles: quale scegliere?&quot;
                </td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>5. Focus: Branding e differenziazione visiva</h2>
          <p>
            Al di là degli aspetti operativi (come mezzi e tipologia di media usati), 
            il branding visivo è un pilastro essenziale per consolidare l&apos;<strong>atteggiamento</strong> 
            e garantire la <strong>differenziazione del brand</strong> dai concorrenti.
          </p>

          <h3>
            5.1 Palette cromatica: Verde foresta (#2D4A2E) + Crema (#F5F0E8)
          </h3>
          <p>
            Il verde scuro aggiunge una forte dimensione <strong>premium</strong> e di autorevolezza, allontanando 
            il brand da sfumature troppo brillanti o plastiche percepite come &quot;cheap&quot;. 
            A differenza dei competitor che comunicano molta freddezza (utilizzando grigi metallici, neri, o azzurri tecnologici), 
            il Crema caldo garantisce un bilanciamento umano, facendo apparire la componente <em>&quot;smart&quot;</em> molto 
            più vicina alle abitudini di vita quotidiana del consumatore. Da un punto di vista dell&apos;accessibilità, 
            questa palette garantisce chiarezza ed elevata fruibilità visiva in tutte le interazioni digitali.
          </p>

          <h3>5.2 Tipografia: Sans-serif umanistico e minimalista</h3>
          <p>
            Diversi studi evidenziano come la scelta del carattere tipografico influenzi la risposta emotiva. 
            I font <em>sans-serif</em> di stampo &quot;umanistico&quot; accrescono nella mente del cliente 
            la percezione di innovatività e prominenza del brand. 
            La scelta di un font netto ma non freddamente geometrico conferisce ad ECOBOTTLE <strong>innovazione</strong> e <strong>modernità</strong> 
            (posizionamento tech) rimanendo però percepibile come <strong>accessibile</strong> e affidabile. 
            Permette anche di ottenere ottima leggibilità negli spazi più piccoli degli schermi mobili, senza distrazioni.
          </p>

          <h3>5.3 Minimalismo: la strategia del &quot;Quiet Luxury&quot;</h3>
          <p>
            La pulizia visiva che sposa la filosofia del <em>less is more</em> non assolve 
            solo a un ruolo estetico. Riducendo le eccessive stimolazioni visive, si riduce il carico cognitivo dell&apos;utente, 
            permettendo una fruizione più rapida del messaggio chiave. 
            Inoltre, nel mondo dei beni premium, l&apos;assenza di decorazione superflua viene sempre più percepita 
            come un chiaro segnale di differenziazione e pregio (Quiet Luxury), portando maggiore coerenza tra un 
            messaggio pubblicitario limpido e un prodotto minimalista.
          </p>

          <hr />

          <h2>6. Piano di comunicazione — Lancio (settimane 1-8)</h2>
          <table>
            <thead>
              <tr>
                <th>Settimana</th>
                <th>Azione</th>
                <th>Canale</th>
                <th>Obiettivo (sfera)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-2</td>
                <td>
                  Teasing: &quot;Something green is coming&quot; su Instagram
                  Stories
                </td>
                <td>Social</td>
                <td>Cognitivo (curiosità)</td>
              </tr>
              <tr>
                <td>-1</td>
                <td>
                  Invio prodotto a micro-influencer, unboxing non scriptato
                </td>
                <td>Influencer</td>
                <td>Cognitivo + Atteggiamento</td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  Lancio sito ecobottle.com + primo carousel Instagram
                </td>
                <td>D2C + Social</td>
                <td>Cognitivo + Comportamento</td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Pubblicazione guida &quot;Idratazione smart: la guida
                  definitiva&quot;
                </td>
                <td>Content SEO</td>
                <td>Cognitivo (SEO)</td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Macro-influencer: day-in-my-life con ECOBOTTLE
                </td>
                <td>Influencer</td>
                <td>Atteggiamento</td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  Instagram Reel educativo: &quot;La maggior parte di noi non beve abbastanza&quot;
                </td>
                <td>Social ADV</td>
                <td>Atteggiamento + Comportamento</td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  Email welcome sequence per primi acquirenti
                </td>
                <td>One-to-one</td>
                <td>Comportamento (retention)</td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  Lancio programma ambassador &quot;Green Circle&quot;
                </td>
                <td>Community</td>
                <td>Atteggiamento (advocacy)</td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  Prima serie pagine programmatic SEO (10 comparativi)
                </td>
                <td>Content SEO</td>
                <td>Cognitivo (traffico organico)</td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  Ottimizzazione AEO: FAQ strutturate, schema markup
                </td>
                <td>Content AEO</td>
                <td>Cognitivo (visibilità AI)</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>7. Controllo dei risultati</h2>
          <p>
            Al termine delle fasi di lancio previste, la campagna si chiude con l&apos;esame e
            il <strong>controllo dei risultati</strong>. Per misurare l&apos;effettivo raggiungimento 
            degli obiettivi cognitivi e comportamentali vengono impiegati 4 KPI principali:
          </p>
          <ol>
            <li><strong>Brand Awareness (Sfera Cognitiva)</strong>: misurazione di Impression e Reach totale delle campagne per valutare la penetrazione nel target.</li>
            <li><strong>Engagement Rate (Atteggiamento)</strong>: misurazione dell&apos;interazione attiva del pubblico (like, salvataggi, condivisioni) ai contenuti, utile a dimostrare interesse.</li>
            <li><strong>Traffico al Sito (Comportamento Iniziale)</strong>: quantità di visitatori unici in target che atterrano sulla pagina D2C o sui contenuti del blog, filtrati per canale di acquisizione.</li>
            <li><strong>Conversion e Trial Rate (Comportamento)</strong>: tasso di conversione finale in acquisto o iscrizione alla newsletter di prelancio, essenziale per valutare una reale intenzione di adozione del prodotto.</li>
          </ol>

          <p className={styles.docNote}>
            Documento redatto nell&apos;ambito del Project Work di Marketing —
            Università Politecnica delle Marche, A.A. 2025/2026 x Daniele Ronchini
            <br />
            Brand: ECOBOTTLE — Drink Smart. Live Green.
          </p>
        </div>
      </div>
    </main>
  );
}
