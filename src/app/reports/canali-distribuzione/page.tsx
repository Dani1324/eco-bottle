import Link from "next/link";
import Image from "next/image";
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
            La distribuzione riguarda le decisioni relative alla struttura del
            canale distributivo, ossia il percorso che il prodotto compie dal
            produttore al consumatore finale. Le funzioni commerciali della
            distribuzione sono:
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

          <h2>2. Decisioni sulla lunghezza del canale</h2>

          <h3>2.1 Il trade-off investimento vs controllo</h3>
          <p>
            Esiste un <strong>trade-off fondamentale</strong> tra
            investimento/rischio e controllo/conoscenza del mercato: il canale
            diretto garantisce grado di controllo massimo ma investimento e
            rischio alti; il canale indiretto riduce investimento e rischio ma
            cede controllo ai distributori.
          </p>

          <h3>2.2 Architettura multicanale di ECOBOTTLE</h3>
          <p>
            ECOBOTTLE adotta una strategia <strong>multicanale</strong> —
            l&apos;impresa si avvale sia di e-shop che di punti vendita al
            dettaglio — articolata in tre canali con lunghezze diverse:
          </p>
          <table>
            <thead>
              <tr>
                <th>Canale</th>
                <th>Tipo</th>
                <th>Lunghezza</th>
                <th>Quota vendite (Anno 1)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>E-commerce D2C</strong> (ecobottle.com)
                </td>
                <td>Diretto</td>
                <td>0 livelli (produttore → consumatore)</td>
                <td>50%</td>
              </tr>
              <tr>
                <td>
                  <strong>Amazon Marketplace</strong>
                </td>
                <td>Indiretto corto</td>
                <td>1 livello (produttore → piattaforma → consumatore)</td>
                <td>30%</td>
              </tr>
              <tr>
                <td>
                  <strong>Retail selettivo</strong>
                </td>
                <td>Indiretto corto</td>
                <td>1 livello (produttore → dettagliante → consumatore)</td>
                <td>20%</td>
              </tr>
            </tbody>
          </table>

          <h3>2.3 Motivazioni per ciascun canale</h3>

          <h4>Canale D2C (diretto)</h4>
          <p>Cuore della strategia, garantisce:</p>
          <ul>
            <li>
              Massimo controllo sul brand storytelling e sull&apos;esperienza
              d&apos;acquisto
            </li>
            <li>
              Margine pieno (nessuna commissione a intermediari)
            </li>
            <li>
              Raccolta dati first-party per CRM e marketing data-driven
            </li>
            <li>
              Costruzione della relazione di lungo periodo con il cliente
            </li>
          </ul>

          <h4>Amazon Marketplace (indiretto corto)</h4>
          <p>
            Amazon funge da dettagliante digitale — canale corto (1 livello)
            perché il produttore salta il grossista. Motivazione duplice:
          </p>
          <ul>
            <li>
              <strong>Copertura ponderata elevata</strong>: Amazon è il
              dettagliante con il peso medio più alto nel mercato online
              italiano
            </li>
            <li>
              <strong>Incremento dell&apos;indice di penetrazione</strong>:
              intercetta il consumatore nella fase di ricerca attiva
            </li>
          </ul>

          <h4>Retail selettivo (indiretto corto)</h4>
          <p>
            Negozi di design (Rinascente, WOW Design), concept store eco
            (NaturaSì flagship, Eataly), catene lifestyle (Flying Tiger
            premium). Funzione strategica di{" "}
            <strong>supporting evidence</strong>: vedere il prodotto fisicamente
            rafforza la credibilità del posizionamento premium.
          </p>

          <hr />

          <h2>3. Decisione sull&apos;ampiezza: Distribuzione Selettiva</h2>
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
                  Immagine particolare del prodotto, intermediari scelti per
                  criteri qualitativi
                </td>
                <td>Beni comparabili, premium</td>
              </tr>
              <tr>
                <td>
                  <strong>Esclusiva</strong>
                </td>
                <td>Un solo intermediario per area, esclusiva territoriale</td>
                <td>Beni di lusso, alta gamma</td>
              </tr>
            </tbody>
          </table>
          <p>
            ECOBOTTLE adotta la <strong>distribuzione selettiva</strong> per 5
            motivazioni:
          </p>
          <ol>
            <li>
              <strong>Coerenza con il posizionamento premium</strong>: la
              distribuzione selettiva difende l&apos;immagine particolare del
              prodotto. La distribuzione intensiva diluirebbe la percezione di
              esclusività.
            </li>
            <li>
              <strong>Qualità del punto vendita come supporting evidence</strong>
              : il contesto di vendita influenza la percezione del prodotto.
            </li>
            <li>
              <strong>Controllo della quota nei clienti trattanti</strong>: con
              pochi intermediari selezionati, ECOBOTTLE può negoziare una posizione
              privilegiata nell&apos;assortimento.
            </li>
            <li>
              <strong>Riduzione del conflitto multicanale</strong>: limitare i
              retailer riduce la probabilità di conflitti di prezzo con il
              canale D2C.
            </li>
            <li>
              <strong>Compatibilità con le risorse</strong>: una startup non ha
              le risorse per la distribuzione intensiva. La distribuzione
              selettiva ottimizza il rapporto copertura/investimento.
            </li>
          </ol>

          <hr />

          <h2>
            4. Il sito web come canale duale: distribuzione e comunicazione
          </h2>

          <h3>4.1 Canale di distribuzione (e-commerce D2C)</h3>
          <p>
            Il sito è il punto vendita diretto digitale — la funzione
            transazionale del canale diretto.
          </p>

          <h3>4.2 Canale di comunicazione (content hub + brand storytelling)</h3>
          <p>
            Il sito è anche il principale strumento di comunicazione
            commerciale, svolgendo le tre funzioni della comunicazione di
            marketing:
          </p>
          <ul>
            <li>
              <strong>Sfera cognitiva</strong>: far conoscere il prodotto e le
              sue caratteristiche
            </li>
            <li>
              <strong>Atteggiamento</strong>: sviluppare percezioni positive
              (storytelling, visual)
            </li>
            <li>
              <strong>Comportamento</strong>: spingere all&apos;acquisto (CTA,
              promozioni)
            </li>
          </ul>

          <h3>4.3 Strategie di traffic acquisition</h3>
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
                  Landing page programmatiche per ricerche long-tail (es.
                  &quot;bottiglia riutilizzabile con tracking idratazione&quot;)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>AEO (Answer Engine Optimization)</strong>
                </td>
                <td>Traffic acquisition da AI</td>
                <td>
                  Ottimizzare i contenuti affinché le AI (ChatGPT, Perplexity,
                  Gemini) citino ECOBOTTLE nelle risposte
                </td>
              </tr>
            </tbody>
          </table>

          <h4>Strategia di Programmatic SEO</h4>
          <ul>
            <li>
              <strong>Template pagine comparativa</strong>: &quot;ECOBOTTLE vs
              [competitor]&quot; — pagine generate da database competitor
            </li>
            <li>
              <strong>Template pagine uso</strong>: &quot;Migliore bottiglia
              smart per [contesto]&quot; (palestra, ufficio, viaggio)
            </li>
            <li>
              <strong>Template pagine materiale</strong>: &quot;Bottiglia in
              [materiale] riciclato: guida completa&quot;
            </li>
          </ul>

          <h4>Strategia AEO</h4>
          <ul>
            <li>
              <strong>Question clusters</strong>: struttura hub-and-spoke
              intorno a domande-tipo
            </li>
            <li>
              <strong>Schema markup JSON-LD</strong>: Product, FAQ, HowTo
            </li>
            <li>
              <strong>Entity building</strong>: costruire l&apos;entità
              &quot;ECOBOTTLE&quot; nei knowledge graph degli LLM
            </li>
          </ul>

          <hr />

          <h2>
            5. Strategia di prezzo: coerenza con la distribuzione
          </h2>
          <p>
            La strategia di pricing è una{" "}
            <strong>strategia di scrematura</strong> (skimming): prezzo iniziale
            elevato che &quot;screma&quot; i consumatori con maggiore
            disponibilità a pagare.
          </p>
          <p>
            Secondo il modello delle <strong>3C del pricing</strong>:
          </p>
          <ul>
            <li>
              <strong>Clienti/domanda (massimo)</strong>: WTP del target 55-75€,
              picchi fino a 90€ → prezzo massimo ~89€
            </li>
            <li>
              <strong>Costi (minimo)</strong>: costo unitario ~22€ → prezzo
              minimo 22€
            </li>
            <li>
              <strong>Concorrenza</strong>: 24Bottles €29-49, LARQ €115-129,
              HidrateSpark €75-90
            </li>
          </ul>

          <div className={styles.infoBox}>
            <p>
              <strong>Prezzo di lancio: €59</strong> — posizionato sopra i
              competitor non-smart (24Bottles €35), sotto i competitor tech puri
              (LARQ €129, HidrateSpark €80), nella sweet spot della WTP del
              segmento primario (55-75€).
            </p>
          </div>

          <div style={{ margin: "2rem 0" }}>
            <Image
              src="/images/confronto_prezzi.png.png"
              alt="Confronto prezzi ECOBOTTLE vs competitori nel mercato"
              width={800}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
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
                  selettivo locale + pop-up store
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
            Università Politecnica delle Marche, A.A. 2025/2026
            <br />
            Brand: ECOBOTTLE — Drink Smart. Live Green.
          </p>
        </div>
      </div>
    </main>
  );
}
