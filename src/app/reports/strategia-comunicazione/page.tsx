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
            ECOBOTTLE concentra il <strong>75% del budget</strong> sul modello
            many-to-many (social media) e il 25% su one-to-one (email, direct),
            bypassando il modello one-to-many (mass media).
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
            bio-based, integra un sensore IoT che traccia il consumo idrico con
            precisione del 95% e si sincronizza con Apple Health, Google Fit e
            Samsung Health.
          </blockquote>

          <h3>3.4 Supporting evidence</h3>
          <ul>
            <li>Certificazione di sostenibilità dei materiali (ISO 14001)</li>
            <li>
              Test di laboratorio indipendenti sull&apos;accuratezza del sensore
            </li>
            <li>
              Partnership con associazione ambientalista per compensazione CO₂
            </li>
            <li>Recensioni di early adopter e beta tester</li>
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
              <em>Copy:</em> &quot;Il 73% dei giovani adulti non beve abbastanza
              acqua ogni giorno. ECOBOTTLE ti ricorda quando bere, traccia quanto
              bevi e lo fa con il 75% di acciaio riciclato. Drink Smart. Live
              Green. 💧🌿&quot;
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

          <h2>5. Focus: Branding visivo</h2>

          <h3>
            5.1 Palette cromatica: Verde foresta (#2D4A2E) + Crema (#F5F0E8)
          </h3>

          <h4>Ragioni psicologiche</h4>
          <p>
            Il verde è universalmente associato a natura, crescita, salute e
            sostenibilità. Il <strong>verde scuro/foresta</strong> aggiunge una
            dimensione di premium e autorevolezza: è associato a gemme preziose
            (giada, smeraldo) e al denaro, rafforzando la percezione di valore.
          </p>
          <p>
            Il <strong>crema caldo</strong> (#F5F0E8) evoca naturalezza e
            artigianalità, crea contrasto morbido con il verde e comunica calore
            umano in un prodotto tecnologico.
          </p>

          <h4>Ragioni tecniche</h4>
          <ul>
            <li>
              <strong>Contrasto WCAG AA</strong>: rapporto minimo 4.5:1
              garantito
            </li>
            <li>
              <strong>Resa cross-device</strong>: consistenza su OLED, LCD e
              stampa (Pantone 5535 C)
            </li>
          </ul>

          <h4>Ragioni funzionali</h4>
          <ul>
            <li>
              <strong>Differenziazione</strong>: i competitor usano palette
              fredde (nero/argento/azzurro). Il verde foresta crea
              riconoscibilità istantanea
            </li>
            <li>
              <strong>Coerenza contenuto-contenitore</strong>: il colore
              rispecchia il contenuto valoriale (sostenibilità)
            </li>
          </ul>

          <h3>5.2 Tipografia: Sans-serif minimalista</h3>

          <h4>Ragioni psicologiche</h4>
          <p>
            Lo studio Monotype/Neurons (2022) ha dimostrato che la scelta del
            typeface influenza la risposta emotiva fino al{" "}
            <strong>13%</strong>. I sans-serif umanistici generano un incremento
            del 9% nella percezione di innovatività e del 7% nella prominenza.
          </p>
          <p>Per ECOBOTTLE il sans-serif umanistico comunica:</p>
          <ul>
            <li>
              <strong>Innovazione e modernità</strong> → coerente con
              posizionamento tech-forward
            </li>
            <li>
              <strong>Accessibilità e umanità</strong> → font &quot;caldo&quot;,
              non geometrico/freddo
            </li>
            <li>
              <strong>Affidabilità senza rigidità</strong> → diverso dai serif
              luxury e dai monospace tech
            </li>
          </ul>

          <h4>Ragioni tecniche</h4>
          <ul>
            <li>
              <strong>Leggibilità digitale</strong>: migliore su schermi piccoli
              (mobile-first)
            </li>
            <li>
              <strong>Hinting ottimizzato</strong>: font come Inter e DM Sans
              nativi per rendering su schermo
            </li>
            <li>
              <strong>Compatibilità web</strong>: Google Fonts, performance Core
              Web Vitals ottimale
            </li>
          </ul>

          <h3>5.3 Minimalismo visivo: la strategia del &quot;less is more&quot;</h3>

          <h4>Ragioni psicologiche</h4>
          <ol>
            <li>
              <strong>Riduzione del carico cognitivo</strong>: meno stimoli
              visivi = più attenzione per ciascun elemento
            </li>
            <li>
              <strong>Percezione di esclusività (Quiet Luxury)</strong>:
              l&apos;assenza di decorazione è essa stessa un segnale di status
            </li>
            <li>
              <strong>Atemporalità</strong>: il design minimalista resiste ai
              trend estetici, riducendo i costi di rebranding
            </li>
          </ol>

          <h4>Ragioni tecniche</h4>
          <ul>
            <li>
              <strong>Scalabilità</strong>: funziona da favicon 16×16px a
              billboard 6×3m
            </li>
            <li>
              <strong>Peso pagina ridotto</strong>: Core Web Vitals migliori =
              ranking SEO superiore
            </li>
            <li>
              <strong>Adattabilità responsive</strong>: layout con white space
              si adatta a qualsiasi viewport
            </li>
          </ul>

          <h4>Ragioni funzionali</h4>
          <ul>
            <li>
              <strong>Riduzione del tasso di abbandono</strong>: landing page
              minimaliste con CTA chiara → tassi di conversione superiori
            </li>
            <li>
              <strong>Coerenza con il prodotto</strong>: la comunicazione
              rispecchia il design industriale minimalista di ECOBOTTLE
            </li>
          </ul>

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
                  Instagram Reel virale: &quot;Il 73% non beve abbastanza&quot;
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
