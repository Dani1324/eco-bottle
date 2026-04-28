import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import styles from "@/styles/report.module.css";

export const metadata = {
  title: "Canali di Distribuzione — EcoBottle",
  description:
    "Strategia distributiva multicanale, pricing e evoluzione dei canali per il brand ECOBOTTLE.",
};

export default function CanaliDistribuzionePage() {
  return (
    <main className={styles.reportPage}>
      <div className={styles.inner}>
        <Link href="/" className={styles.backLink}>
          <IconArrowLeft size={16} />
          Torna alla home
        </Link>

        <h1 className={styles.title}>Canali di Distribuzione</h1>
        <p className={styles.subtitle}>
          Strategia distributiva multicanale, architettura dei canali, pricing
          e piano di evoluzione per il brand ECOBOTTLE.
        </p>
        <div className={styles.divider} />

        <div className={styles.content}>
          <h2>1. Framework teorico: la distribuzione nel marketing mix</h2>
          <p>
            La distribuzione è una delle 4 leve del marketing operativo e
            riguarda le decisioni relative alla struttura del canale
            distributivo, ossia &quot;il percorso che il prodotto compie dal
            produttore al consumatore finale&quot;. Come definito nel corso, le
            funzioni commerciali della distribuzione sono:
          </p>
          <ul>
            <li>
              <strong>Trasferimento nello spazio</strong> (dal luogo di
              produzione al luogo di consumo)
            </li>
            <li>
              <strong>Trasferimento nel tempo</strong> (stoccaggio e
              magazzinaggio)
            </li>
            <li>
              <strong>Adattamento qualitativo</strong> (assortimento adeguato
              alle esigenze del consumatore)
            </li>
            <li>
              <strong>Adattamento quantitativo</strong> (frazionamento delle
              grandi quantità produttive in lotti adatti al consumo)
            </li>
          </ul>
          <p>
            Le decisioni distributive si articolano su due dimensioni
            principali: la <strong>lunghezza</strong> del canale (numero di
            livelli intermedi) e l&apos;<strong>ampiezza</strong> (numero di
            intermediari per livello).
          </p>

          <hr />

          <h2>2. Analisi e Selezione dei Canali di Distribuzione</h2>

          <h3>2.1 Brainstorming sui canali di distribuzione</h3>
          <p>
            Nella fase di esplorazione iniziale, sono stati analizzati i
            diversi canali disponibili e le loro caratteristiche, valutandone
            l&apos;adeguatezza per un prodotto premium e tech come ECOBOTTLE:
          </p>
          <ul>
            <li>
              <strong>E-commerce D2C (Direct-to-Consumer)</strong>: Canale{" "}
              <em>diretto</em> (produttore → consumatore). Offre il massimo
              controllo sul brand, sui prezzi e sui dati dei clienti, ma
              richiede investimenti significativi in digital marketing e
              logistica.
            </li>
            <li>
              <strong>Marketplace generalisti (es. Amazon)</strong>: Canale{" "}
              <em>indiretto corto</em>. Garantisce altissima visibilità e tassi
              di conversione elevati, sfruttando la logistica della piattaforma
              (FBA), ma riduce il controllo sul posizionamento e comporta
              commissioni sulle vendite.
            </li>
            <li>
              <strong>Grande Distribuzione Organizzata (GDO)</strong>: Canale{" "}
              <em>indiretto lungo</em>. Offre massima capillarità e volumi, ma
              i margini sono compressi, il controllo sull&apos;esposizione è
              minimo e il posizionamento di massa non si addice a un prodotto
              premium.
            </li>
            <li>
              <strong>
                Retail specializzato (Design, Eco-sostenibilità, Lifestyle)
              </strong>
              : Canale <em>indiretto corto</em>. Negozi fisici con target
              specifico (es. Rinascente, NaturaSì, Concept store). Offre
              un&apos;ottima &quot;supporting evidence&quot; (il cliente tocca
              il prodotto con mano), giustificando il price point premium.
            </li>
          </ul>

          <h3>2.2 Il trade-off investimento vs controllo</h3>
          <p>
            La scelta dei canali è guidata dal{" "}
            <strong>
              trade-off fondamentale tra investimento/rischio e
              controllo/conoscenza del mercato
            </strong>
            :
          </p>
          <ul>
            <li>
              Il <strong>canale diretto</strong> garantisce &quot;grado di
              controllo massimo ma investimento e rischio alti&quot;
            </li>
            <li>
              Il <strong>canale indiretto</strong> riduce investimento e rischio
              ma cede controllo ai distributori
            </li>
          </ul>

          <h3>2.3 Selezione dei canali e struttura (Architettura multicanale)</h3>
          <p>
            A seguito del brainstorming, ECOBOTTLE adotta una strategia{" "}
            <strong>multicanale</strong> scartando la GDO (incompatibile con il
            posizionamento premium) e selezionando tre canali complementari con
            lunghezze diverse, adatti al target di mercato:
          </p>

          <table>
            <thead>
              <tr>
                <th>Canale Scelto</th>
                <th>Struttura (Lunghezza)</th>
                <th>Tipo</th>
                <th>Quota vendite stimata (Anno 1)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>E-commerce D2C</strong> (ecobottle.com)
                </td>
                <td>
                  <strong>Diretto</strong> (0 livelli: produttore → consumatore)
                </td>
                <td>Diretto</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>
                  <strong>Amazon Marketplace</strong>
                </td>
                <td>
                  <strong>Indiretto Corto</strong> (1 livello: produttore →
                  piattaforma → consumatore)
                </td>
                <td>Indiretto</td>
                <td>30%</td>
              </tr>
              <tr>
                <td>
                  <strong>Retail selettivo</strong>
                </td>
                <td>
                  <strong>Indiretto Corto</strong> (1 livello: produttore →
                  dettagliante → consumatore)
                </td>
                <td>Indiretto</td>
                <td>20%</td>
              </tr>
            </tbody>
          </table>

          <h3>2.4 Giustificazione delle scelte fatte</h3>

          <p>
            <strong>Canale D2C (diretto)</strong>: Il canale diretto è il cuore
            della strategia perché garantisce:
          </p>
          <ul>
            <li>
              Massimo controllo sul brand storytelling e sull&apos;esperienza
              d&apos;acquisto
            </li>
            <li>Margine pieno (nessuna commissione a intermediari)</li>
            <li>
              Raccolta dati first-party per alimentare il CRM e il marketing
              data-driven
            </li>
            <li>
              Possibilità di costruire la relazione di lungo periodo con il
              cliente (come definito nel corso: &quot;il CRM mira alla
              creazione, allo sviluppo e al mantenimento delle relazioni con i
              clienti nel lungo periodo&quot;)
            </li>
          </ul>

          <p>
            L&apos;e-commerce riduce gli investimenti fissi rispetto a un
            negozio (affitto, personale, magazzino) mantenendo il massimo
            controllo.
          </p>

          <p>
            <strong>Amazon Marketplace (indiretto corto)</strong>: Amazon funge
            da dettagliante digitale — il canale è corto (1 livello) perché
            &quot;il produttore salta il grossista e va a vendere direttamente
            al dettagliante&quot;. La motivazione è duplice:
          </p>
          <ul>
            <li>
              <strong>Copertura ponderata elevata</strong>: Amazon è il
              dettagliante con il peso medio più alto nel mercato online
              italiano. Come studiato nel corso, la copertura ponderata è data
              dalla copertura semplice moltiplicata per il peso medio della
              clientela. Anche con un solo intermediario (copertura semplice
              bassa), il peso medio di Amazon è talmente elevato da generare
              una copertura ponderata significativa.
            </li>
            <li>
              <strong>Incremento dell&apos;indice di penetrazione</strong>:
              Amazon intercetta il consumatore nella fase di ricerca attiva,
              aumentando il &quot;tasso di penetrazione — tra i compratori della
              categoria, quanti hanno comprato il nostro brand&quot;.
            </li>
          </ul>

          <p>
            <strong>Retail selettivo (indiretto corto)</strong>: Negozi di
            design (Rinascente, WOW Design), concept store eco (NaturaSì
            flagship, Eataly), catene lifestyle (Flying Tiger premium). Il
            canale retail ha una funzione strategica di{" "}
            <strong>supporting evidence</strong>: vedere il prodotto fisicamente
            rafforza la credibilità del posizionamento premium.
          </p>

          <hr />

          <h2>3. Definizione della politica di vendita (Ampiezza del Canale)</h2>

          <p>
            Come definito nel corso, l&apos;ampiezza del canale (politica di
            vendita) si declina in tre livelli:
          </p>

          <table>
            <thead>
              <tr>
                <th>Strategia</th>
                <th>Descrizione</th>
                <th>Adatta a</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Intensiva</strong>
                </td>
                <td>Massimo numero di PdV, capillare</td>
                <td>Beni di largo consumo</td>
              </tr>
              <tr>
                <td>
                  <strong>Selettiva</strong>
                </td>
                <td>
                  &quot;Immagine particolare del prodotto&quot;, numero ristretto
                  di intermediari scelti in base a criteri qualitativi
                </td>
                <td>Beni comparabili, premium</td>
              </tr>
              <tr>
                <td>
                  <strong>Esclusiva</strong>
                </td>
                <td>
                  Un solo intermediario per area, diritto di esclusiva
                  territoriale
                </td>
                <td>Beni di lusso, alta gamma</td>
              </tr>
            </tbody>
          </table>

          <p>
            ECOBOTTLE adotta una politica di vendita basata sulla{" "}
            <strong>distribuzione selettiva</strong> per 5 motivazioni teoriche
            che giustificano la scelta:
          </p>

          <ol>
            <li>
              <strong>Coerenza con il posizionamento premium</strong>: la
              distribuzione selettiva è indicata quando il prodotto ha
              un&apos;&quot;immagine particolare&quot; da difendere. Essere
              presenti ovunque (distribuzione intensiva) diluirebbe la
              percezione di esclusività.
            </li>

            <li>
              <strong>
                Qualità del punto vendita come supporting evidence
              </strong>
              : il contesto di vendita influenza la percezione del prodotto. Un
              negozio di design comunica attributi astratti (premium, curato)
              che rafforzano il posizionamento.
            </li>

            <li>
              <strong>Controllo della quota nei clienti trattanti</strong>: con
              pochi intermediari selezionati, ECOBOTTLE può negoziare una
              posizione privilegiata nell&apos;assortimento (spazio espositivo,
              vetrina) aumentando la quota nei clienti trattanti (Qi/ACSi).
            </li>

            <li>
              <strong>Riduzione del conflitto multicanale</strong>: limitare il
              numero di retailer riduce la probabilità di conflitti di prezzo
              con il canale D2C.
            </li>

            <li>
              <strong>Compatibilità con le risorse</strong>: una startup non ha
              le risorse per una distribuzione intensiva (forza vendita,
              logistica capillare). La distribuzione selettiva ottimizza il
              rapporto tra copertura e investimento.
            </li>
          </ol>

          <hr />

          <h2>4. Il sito web come canale duale: distribuzione E comunicazione</h2>

          <p>
            Un aspetto strategico centrale è il ruolo{" "}
            <strong>duale del sito web ecobottle.com</strong>, che funge
            contemporaneamente da:
          </p>

          <h3>4.1 Canale di distribuzione (e-commerce D2C)</h3>
          <p>
            Il sito è il punto vendita diretto digitale — la funzione
            transazionale del canale diretto.
          </p>

          <h3>4.2 Canale di comunicazione (content hub + brand storytelling)</h3>
          <p>
            Il sito è anche il principale strumento di comunicazione
            commerciale, svolgendo le tre funzioni della comunicazione di
            marketing studiate nel corso:
          </p>
          <ul>
            <li>
              <strong>Sfera cognitiva</strong>: far conoscere il prodotto e le
              sue caratteristiche (pagine prodotto, specifiche)
            </li>
            <li>
              <strong>Atteggiamento</strong>: sviluppare percezioni positive
              (storytelling, visual, contenuti editoriali)
            </li>
            <li>
              <strong>Comportamento</strong>: spingere all&apos;acquisto (CTA,
              promozioni, urgenza)
            </li>
          </ul>

          <h3>
            4.3 Perché il sito web non è un &quot;canale di distribuzione
            separato&quot;
          </h3>
          <p>
            Dal punto di vista della teoria della distribuzione, il sito web
            non costituisce un canale aggiuntivo rispetto all&apos;e-commerce
            D2C — <strong>è lo stesso canale diretto</strong>, arricchito con
            funzionalità comunicative. Non c&apos;è un livello intermedio
            aggiuntivo. Tuttavia, le strategie di{" "}
            <strong>traffic acquisition</strong> che portano utenti al sito sono
            leve di comunicazione distinte, non canali distributivi:
          </p>

          <table>
            <thead>
              <tr>
                <th>Leva</th>
                <th>Tipo</th>
                <th>Funzione</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Programmatic SEO</strong>
                </td>
                <td>Traffic acquisition organica</td>
                <td>
                  Creare landing page programmatiche per intercettare ricerche
                  long-tail (es. &quot;bottiglia riutilizzabile con tracking
                  idratazione&quot;, &quot;borraccia acciaio riciclato
                  smart&quot;)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>AEO (Answer Engine Optimization)</strong>
                </td>
                <td>Traffic acquisition da AI</td>
                <td>
                  Ottimizzare i contenuti affinché le AI (ChatGPT, Perplexity,
                  Gemini, Google AI Overviews) citino ECOBOTTLE nelle risposte.
                  Oltre il 60% delle ricerche nel 2025 non genera click:
                  l&apos;utente ottiene la risposta direttamente dall&apos;AI.
                  AEO lavora su: linguaggio naturale, schema markup, topical
                  authority
                </td>
              </tr>
            </tbody>
          </table>

          <h3>4.4 Strategia di Programmatic SEO per ECOBOTTLE</h3>
          <p>
            La Programmatic SEO consiste nel &quot;usare automazione e dati per
            creare e ottimizzare grandi numeri di pagine su scala&quot;. Per
            ECOBOTTLE, questo si traduce in:
          </p>
          <ul>
            <li>
              <strong>Template pagine comparativa</strong>: &quot;ECOBOTTLE vs
              [competitor]&quot; (es. &quot;ECOBOTTLE vs 24Bottles&quot;,
              &quot;ECOBOTTLE vs LARQ&quot;) — pagine generate automaticamente da
              database competitor con attributi strutturati
            </li>
            <li>
              <strong>Template pagine uso</strong>: &quot;Migliore bottiglia
              smart per [contesto]&quot; (palestra, ufficio, viaggio, outdoor)
            </li>
            <li>
              <strong>Template pagine materiale</strong>: &quot;Bottiglia in
              [materiale] riciclato: guida completa&quot;
            </li>
          </ul>

          <p>
            Secondo i benchmark di settore, i brand e-commerce che implementano
            Programmatic SEO registrano un incremento medio del 30-80% del
            traffico organico.
          </p>

          <h3>4.5 Strategia AEO per ECOBOTTLE</h3>
          <p>
            L&apos;Answer Engine Optimization mira a rendere ECOBOTTLE la
            risposta che le AI forniscono alle query conversazionali degli
            utenti. I contenuti devono essere strutturati come &quot;risposte
            dirette alle domande&quot; (content that answers a question directly
            is 2.5x more likely to be selected as a featured snippet). Tattiche
            specifiche:
          </p>
          <ul>
            <li>
              <strong>Question clusters</strong>: struttura hub-and-spoke
              intorno a domande-tipo (&quot;Qual è la migliore bottiglia smart
              sostenibile?&quot;, &quot;Come tracciare l&apos;idratazione
              giornaliera?&quot;)
            </li>
            <li>
              <strong>Schema markup JSON-LD</strong>: Product, FAQ, HowTo — per
              alimentare i knowledge graph
            </li>
            <li>
              <strong>Entity building</strong>: costruire l&apos;entità
              &quot;ECOBOTTLE&quot; in modo che gli LLM la riconoscano come
              brand autorevole nel dominio smart eco-bottle
            </li>
          </ul>

          <hr />

          <h2>5. Strategia di prezzo: coerenza con la distribuzione</h2>

          <p>
            La strategia di pricing di ECOBOTTLE è una{" "}
            <strong>strategia di scrematura</strong> (skimming), come definita
            nel corso: prezzo iniziale elevato che &quot;screma&quot; i
            consumatori con maggiore disponibilità a pagare, per poi
            eventualmente ridurlo nel tempo.
          </p>

          <p>
            Secondo il modello delle <strong>3C del pricing</strong> (corso):
          </p>
          <ul>
            <li>
              <strong>Clienti/domanda (massimo)</strong>: WTP del target 55-75€,
              con picchi fino a 90€ per i Design Seekers → prezzo massimo di
              accettazione ~89€
            </li>
            <li>
              <strong>Costi (minimo)</strong>: costo unitario stimato ~22€ →
              prezzo minimo 22€
            </li>
            <li>
              <strong>Concorrenza</strong>: 24Bottles €29-49, LARQ €115-129,
              HidrateSpark €75-90 → fascia di riferimento competitiva
            </li>
          </ul>

          <div className={styles.infoBox}>
            <p>
              <strong>Prezzo di lancio: €59</strong> — posizionato:
            </p>
            <ul>
              <li>
                Sopra i competitor non-smart (24Bottles €35, Chilly&apos;s €35)
                → giustificato dalla componente tech
              </li>
              <li>
                Sotto i competitor tech puri (LARQ €129, HidrateSpark €80) →
                value proposition superiore per il target
              </li>
              <li>
                Nella sweet spot della WTP del segmento primario (55-75€)
              </li>
            </ul>
          </div>

          <hr />

          <h2>6. Evoluzione distributiva Anno 2-3</h2>

          <table>
            <thead>
              <tr>
                <th>Anno</th>
                <th>Azione</th>
                <th>Indicatore</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Anno 1</strong>
                </td>
                <td>Lancio D2C + Amazon + 15-20 PdV selettivi</td>
                <td>Copertura ponderata target: 25%</td>
              </tr>
              <tr>
                <td>
                  <strong>Anno 2</strong>
                </td>
                <td>Espansione a 50 PdV + ingresso Fnac/MediaWorld</td>
                <td>Copertura ponderata target: 45%</td>
              </tr>
              <tr>
                <td>
                  <strong>Anno 3</strong>
                </td>
                <td>
                  Apertura mercati EU (DE, FR, ES) via Amazon EU + retail
                  selettivo locale + valutazione pop-up store
                </td>
                <td>Copertura ponderata target: 60% EU</td>
              </tr>
            </tbody>
          </table>

          <p>
            L&apos;evoluzione segue il principio di crescita graduale della
            copertura ponderata: prima aumentare il peso medio della clientela
            (entrare nei retailer più importanti), poi la copertura semplice
            (aumentare il numero di PdV).
          </p>

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
