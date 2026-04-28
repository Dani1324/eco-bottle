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
          <h2>1. Architettura dei canali: la strategia multicanale di ECOBOTTLE</h2>
          <p>
            ECOBOTTLE adotta una strategia <strong>multicanale</strong> con tre
            canali complementari:
          </p>

          <table>
            <thead>
              <tr>
                <th>Canale Scelto</th>
                <th>Struttura (Lunghezza)</th>
                <th>Tipo</th>
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
              </tr>
            </tbody>
          </table>

          <h3>Motivazioni dei canali scelti</h3>

          <p>
            <strong>Canale D2C</strong>: Massimo controllo sul brand, margine
            pieno, raccolta dati first-party per il CRM. Riduce gli investimenti
            fissi rispetto al retail fisico.
          </p>

          <p>
            <strong>Amazon Marketplace</strong>: Garantisce una <strong>copertura ponderata elevata</strong>: un solo intermediario (copertura semplice bassa) ma con il peso medio dei clienti più alto del mercato online italiano. Intercetta il consumatore nella fase di ricerca attiva.
          </p>

          <p>
            <strong>Retail selettivo</strong>: Negozi di design (Rinascente),
            concept store eco (NaturaSì, Eataly). Offre supporting evidence:
            toccare il prodotto rafforza la credibilità del posizionamento
            premium.
          </p>

          <hr />

          <h2>2. Distribuzione selettiva: politica di ampiezza</h2>

          <p>
            ECOBOTTLE adotta la <strong>distribuzione selettiva</strong> per:
          </p>
          <ol>
            <li>
              <strong>Coerenza con il posizionamento premium</strong>: distribuire
              solo nei punti vendita giusti difende l&apos;immagine
            </li>
            <li>
              <strong>Qualità del punto vendita</strong>: il contesto comunica il
              valore del brand
            </li>
            <li>
              <strong>Controllo dell&apos;assortimento</strong>: negoziare spazi
              privilegiati nei negozi selezionati
            </li>
            <li>
              <strong>Riduzione conflitti</strong>: limitare i retailer evita
              scontri di prezzo tra canali
            </li>
            <li>
              <strong>Ottimizzazione risorse</strong>: una startup non ha risorse
              per distribuzione capillare
            </li>
          </ol>

          <hr />

          <h2>3. Scelta dei retailer fisici</h2>

          <p>
            <strong>Criteri di selezione:</strong>
          </p>

          <p>
            <strong>Oggettivi</strong> (economici): quota di mercato, trend
            vendite, copertura geografica, capacità logistiche
          </p>

          <p>
            <strong>Soggettivi</strong> (immagine): posizionamento premium,
            qualità del servizio, esperienza con prodotti eco/smart, assenza di
            competitor diretti nell&apos;assortimento (es. se il retailer vende già LARQ, potrebbe non dedicare la giusta attenzione a ECOBOTTLE)
          </p>

          <hr />

          <h2>4. Forza vendita e sales management</h2>

          <p>
            La forza vendita è il collegamento tra ECOBOTTLE e i retailer.
          </p>

          <p>
            <strong>Distinzione fondamentale</strong>:
          </p>
          <ul>
            <li>
              <strong>Intermediari commerciali</strong> (Rinascente, Amazon):
              acquistano il prodotto e lo rivendono → Canali distributivi
            </li>
            <li>
              <strong>Venditori</strong> (agenti): negoziano per conto del
              produttore, non acquisiscono la proprietà → Sales management
            </li>
          </ul>

          <p>
            ECOBOTTLE sceglierà <strong>3 agenti di vendita</strong> (forza
            vendita indiretta) piuttosto che venditori diretti, per motivi di
            costo:
          </p>

          <table>
            <thead>
              <tr>
                <th>Voce</th>
                <th>Agenti</th>
                <th>Venditori Diretti</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Costo fisso</td>
                <td>0 €</td>
                <td>72.000 €/anno (3 dipendenti)</td>
              </tr>
              <tr>
                <td>Provvigione</td>
                <td>4,5% sul venduto</td>
                <td>0,5% sul venduto</td>
              </tr>
              <tr>
                <td>
                  <strong>Fatturato previsto Anno 1</strong>
                </td>
                <td>
                  <strong>430.500 €</strong>
                </td>
                <td>
                  <strong>430.500 €</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Costo totale vendite</strong>
                </td>
                <td>
                  <strong>19.372,50 €</strong>
                </td>
                <td>
                  <strong>74.152,50 €</strong>
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            Con un fatturato di 430.500 €, gli{" "}
            <strong>agenti sono la scelta più conveniente</strong>. Solo al
            raggiungimento di <strong>1.800.000 € di fatturato</strong> converrebbe passare a venditori diretti (fatturato di pareggio: 72.000 / 0,04).
          </p>

          <hr />

          <h2>5. Trade marketing e gestione del punto vendita</h2>

          <p>
            La selezione del canale è solo il primo passo. Una volta ottenuta la presenza nei retailer, ECOBOTTLE deve garantirsi una <strong>presenza di qualità</strong> attraverso il trade marketing — l&apos;insieme delle azioni rivolte agli intermediari commerciali per ottenere visibilità e spazio coerenti con il posizionamento.
          </p>

          <p>
            <strong>Strumenti applicati a ECOBOTTLE:</strong>
          </p>
          <ul>
            <li>
              <strong>Condizioni commerciali</strong>: margini competitivi per incentivare i retailer a spingere il prodotto
            </li>
            <li>
              <strong>Merchandising in-store</strong>: display stand dedicato, packaging progettato per essere esposto in vetrina
            </li>
            <li>
              <strong>Formazione del personale</strong>: schede prodotto e brevi sessioni di training per i commessi dei concept store (il prodotto ha componente tech che va spiegata)
            </li>
            <li>
              <strong>Politiche promozionali</strong>: sconti stagionali concordati con il retailer senza intaccare il prezzo al pubblico
            </li>
          </ul>

          <h3>Category management</h3>

          <p>
            Nei concept store eco e lifestyle, ECOBOTTLE punta a posizionarsi come brand di riferimento della categoria <strong>&quot;Smart Hydration&quot;</strong> — che include borracce smart, filtri portatili e accessori idratazione premium. Produttore e distributore gestiscono questa categoria come una <strong>business unit</strong> con obiettivi di vendita propri, uno spazio espositivo dedicato e un retailing mix coerente. L&apos;obiettivo è diventare category captain in questa nicchia, così da avere voce in capitolo sulla gestione dell&apos;intera area scaffale.
          </p>

          <hr />

          <h2>6. Strategia di prezzo: coerenza con la distribuzione</h2>

          <p>
            La strategia di pricing di ECOBOTTLE è una{" "}
            <strong>strategia di scrematura</strong> (skimming): prezzo iniziale
            elevato che screma i consumatori con maggiore disponibilità a pagare.
          </p>

          <div className={styles.infoBox}>
            <p>
              <strong>Prezzo di lancio probabile: €59</strong> — posizionato tra:
            </p>
            <ul>
              <li>Competitor non-smart (24Bottles €35, Chilly&apos;s €35)</li>
              <li>Competitor tech puri (LARQ €129, HidrateSpark €80)</li>
              <li>
                <strong>Sweet spot della WTP del target: 55-75€</strong>
              </li>
            </ul>
          </div>

          <p>
            Il prezzo premium è coerente con i canali selezionati (D2C, Amazon,
            retail selettivo), tutti compatibili con un posizionamento
            non-mass market. La GDO è stata esclusa anche per questo motivo:
            richiederebbe margini elevati per il distributore, comprimendo il
            margine industriale e forzando un abbassamento del prezzo al pubblico.
          </p>

          <hr />

          <h2>7. Il sito web come canale D2C</h2>

          <p>
            Il sito ecobottle.com fungerebbe da:
          </p>
          <ul>
            <li>
              <strong>Canale di distribuzione</strong>: punto vendita diretto
              digitale
            </li>
            <li>
              <strong>Canale di comunicazione</strong>: content hub e brand
              storytelling (sfera cognitiva, atteggiamento, comportamento)
            </li>
          </ul>

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
