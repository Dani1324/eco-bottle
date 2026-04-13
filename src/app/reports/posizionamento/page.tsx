import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import styles from "@/styles/report.module.css";
import {
  PositioningDataReferenceTable,
  PositioningBenefitsTable,
  PositioningSacrificesTable,
  PositioningProgrammedVsPerceivedTable,
  PositioningKanoTable,
} from "@/components/RicercaCharts/RicercaCharts";

export const metadata = {
  title: "Posizionamento di Prodotto — EcoBottle",
  description:
    "Customer value proposition, modello di Kano, catena mezzi-fini e posizionamento competitivo del brand ECOBOTTLE.",
};

export default function PosizionamentoPage() {
  return (
    <main className={styles.reportPage}>
      <div className={styles.inner}>
        <Link href="/" className={styles.backLink}>
          <IconArrowLeft size={16} />
          Torna alla home
        </Link>

        <h1 className={styles.title}>Posizionamento di Prodotto</h1>
        <p className={styles.subtitle}>
          Customer value proposition, modello di Kano, catena mezzi-fini e
          dichiarazione formale di posizionamento per il brand ECOBOTTLE.
        </p>
        <div className={styles.divider} />

        <div className={styles.content}>
          <h2>1. Punto di partenza dopo Segmentazione e Target</h2>
          <p>
            Dopo la segmentazione, il posizionamento deve tradurre i risultati
            empirici in una proposta di valore differenziale e in un sistema
            prodotto coerente.
          </p>
          <p>
            Il posizionamento resta un <strong>concetto relativo</strong>:
            ogni scelta va letta rispetto ai concorrenti e alle percezioni del
            cliente nel proprio insieme evocato. L&apos;obiettivo manageriale è
            allineare il <strong>posizionamento programmato</strong> con il
            <strong> posizionamento percepito</strong>, riducendo dispersioni
            interpretative del brand.
          </p>
          <p>
            Coerentemente con il report Insight, Target e Mercato (n=63),
            ECOBOTTLE lavora su una logica di <strong>focalizzazione sulla
            differenziazione</strong>, con segmento primario Eco-Millennials
            Urbani (39%) e sviluppo progressivo su Fitness Enthusiasts (26%),
            Design Seekers (17%) e Studenti Green (18%).
          </p>
          <div className={styles.infoBox}>
            <p>
              <strong>Regola metodologica:</strong> le quote segmentali
              39/26/17/18 sono stime da clustering interno; gli indicatori
              percentuali usati qui derivano dalla Sezione 6 della ricerca.
            </p>
          </div>

          <br />

          <h2>2. Base dati di riferimento (coerenza numerica)</h2>
          <PositioningDataReferenceTable />

          <br />

          <h2>3. Customer Value Proposition</h2>
          <p>
            La value proposition è la differenza tra <strong>benefici</strong>{" "}
            e <strong>sacrifici percepiti</strong>, rispetto alle alternative.
          </p>

          <h3>3.1 Benefici progettati</h3>
          <PositioningBenefitsTable />

          <h3>3.2 Sacrifici percepiti e risposta strategica</h3>
          <PositioningSacrificesTable />

          <h3>3.3 Fattori di superiorità competitiva</h3>
          <p>
            La proposta ECOBOTTLE integra tre dimensioni che, in combinazione,
            sostengono il differenziale competitivo nel target prioritario:
          </p>
          <ol>
            <li>
              <strong>Sostenibilita credibile</strong> con orientamento a
              materiali e comportamenti d&apos;uso responsabili.
            </li>
            <li>
              <strong>Utilità smart</strong> progettata per la routine
              quotidiana, non come feature accessoria.
            </li>
            <li>
              <strong>Design premium funzionale</strong> come elemento di
              riconoscibilità e valore percepito.
            </li>
          </ol>

          <h3>3.4 Coerenza con obiettivi aziendali</h3>
          <p>
            La focalizzazione sulla differenziazione è coerente con i segmenti
            selezionati e con la struttura di disponibilità a pagare emersa nel
            campione: l&apos;obiettivo non è competere sul prezzo minimo, ma
            offrire un equilibrio superiore tra qualità, significato e
            funzionalita.
          </p>

          <br />

          <h2>4. Posizionamento di prodotto (scelta teorica)</h2>
          <p>
            Il posizionamento è un concetto relativo: il brand occupa una
            posizione nella mente del consumatore in funzione delle alternative
            presenti nell&apos;insieme evocato.
          </p>
          <p>
            Per ECOBOTTLE la scelta combina tre logiche tra quelle previste dal
            framework teorico:
          </p>
          <ol>
            <li>
              <strong>Posizionamento per attributi</strong>: qualità materiali,
              usabilità, dimensione smart.
            </li>
            <li>
              <strong>Posizionamento per benefici attesi</strong>: idratazione
              più consapevole, maggiore praticità quotidiana.
            </li>
            <li>
              <strong>Posizionamento per valori</strong>: coerenza con uno
              stile di vita responsabile.
            </li>
          </ol>

          <h3>4.1 Lettura con il modello di Kano</h3>
          <p>
            Non tutti gli attributi hanno lo stesso effetto sulla
            soddisfazione. La lettura Kano permette di distinguere prerequisiti,
            driver lineari e leve di entusiasmo.
          </p>
          <PositioningKanoTable />

          <br />

          <h2>5. Programmato vs percepito</h2>
          <PositioningProgrammedVsPerceivedTable />
          <p>
            Obiettivo: massimizzare la convergenza tra programmato e percepito,
            evitando un posizionamento disperso.
          </p>

          <br />

          <h2>6. Come si decide il posizionamento programmato</h2>
          <h3>6.1 Fase 1: attributi rilevanti</h3>
          <p>
            Gli attributi prioritari emersi sono qualità materiali, prezzo,
            sostenibilità, design e utilità smart.
          </p>

          <h3>6.2 Fase 2: percezioni sulle marche (mappa percettiva)</h3>
          <p>
            Le percezioni nel campione sono guidate da brand noti (Air Up,
            Stanley, Chilly&apos;s). Questo indica un mercato già presidiato su
            notorietà, ma non necessariamente su combinazione eco+smart.
          </p>
          <p>
            La mappa percettiva consente di leggere il posizionamento relativo
            dei brand sulle dimensioni rilevanti; la successiva mappa di
            preferenza evidenzia dove si concentra il valore ricercato dal
            cliente.
          </p>

          <h3>6.3 Fase 3: preferenze dei consumatori (mappa di preferenza)</h3>
          <p>
            Le preferenze convergono su prodotti affidabili, con valore d&apos;uso
            quotidiano e prezzo sostenibile: 68,3% concentra la disponibilità
            di spesa tra 20 e 50 euro.
          </p>

          <div className={styles.infoBox}>
            <p>
              <strong>Gap identificato:</strong> spazio competitivo in area
              smart + sostenibilita con posizionamento di prezzo medio-premium
              (35-50 euro), evitando estremi low-cost e ultra-premium.
            </p>
          </div>

          <br />

          <h2>7. Strategie decisionali applicate</h2>
          <p>
            Le opzioni strategiche sono valutate secondo le logiche classiche:
            conservativa, riposizionamento, affiancamento, spostamento delle
            preferenze e modifica delle basi di posizionamento. Per ECOBOTTLE
            la combinazione prioritaria e la seguente.
          </p>
          <ol>
            <li>
              <strong>Affiancamento</strong>: ingresso con una proposta distinta
              rispetto ai player piu noti per notorieta.
            </li>
            <li>
              <strong>Spostamento delle preferenze</strong>: comunicazione che
              valorizza il trade-off qualità-smart-sostenibilita oltre la sola
              marca storica.
            </li>
            <li>
              <strong>Riposizionamento progressivo</strong>: ottimizzazione del
              messaggio in base ai dati post-lancio (brand lift, NPS, conversione).
            </li>
          </ol>

          <h3>7.1 Fondamento competitivo</h3>
          <p>
            Il vantaggio competitivo atteso si regge su tre condizioni
            manageriali da presidiare nel tempo:
          </p>
          <ol>
            <li>
              <strong>Durevolezza</strong>: coerenza della proposta eco-smart
              lungo le diverse fasi di sviluppo.
            </li>
            <li>
              <strong>Difendibilità</strong>: sistema di attributi multipli,
              piu difficile da imitare rispetto a una singola feature.
            </li>
            <li>
              <strong>Rilevanza</strong>: aderenza ai benefici realmente
              ricercati dal target, non solo a logiche interne di prodotto.
            </li>
          </ol>

          <br />

          <h2>8. Catena mezzi-fini e Laddering</h2>
          <p>
            La catena mezzi-fini collega attributi, benefici e valori. Per
            ECOBOTTLE la sequenza operativa è:
          </p>
          <pre>
            <code>
{`Attributi -> Benefici -> Valori
Materiali affidabili e sostenibili -> fiducia d'uso quotidiano -> sicurezza e responsabilità
Funzioni smart semplici -> monitoraggio idratazione -> benessere personale
Design riconoscibile -> piacere d'uso e identità -> autostima e auto-espressione`}
            </code>
          </pre>
          <p>
            Il <strong>punto di leva comunicativo</strong> è a metà catena:
            tradurre attributi concreti in benefici immediatamente percepibili,
            senza perdere il legame con i valori.
          </p>
          <p>
            In termini comunicativi, la sequenza ideale resta: attributi
            credibili - benefici concreti - significato personale e sociale.
          </p>

          <br />

          <h2>9. Dichiarazione formale di posizionamento</h2>
          <p>
            La dichiarazione è costruita per essere chiara, coerente e
            credibile:
          </p>
          <blockquote>
            Per <strong>giovani adulti e professionisti</strong> urbani attenti
            a benessere, qualità e sostenibilità,<br />
            che cercano una borraccia <strong>utile ogni giorno</strong> e non
            solo estetica,<br />
            ECOBOTTLE è una proposta eco-smart di fascia {" "}
            <strong>medio-premium</strong>,<br />
            che unisce affidabilità d&apos;uso, supporto al
            monitoraggio dell&apos;idratazione e design riconoscibile,<br />
            perché offre un <strong>equilibrio concreto</strong> tra valore
            funzionale, coerenza valoriale e accessibilità percepita.
          </blockquote>

          <h3>Payoff e razionale</h3>
          <ul>
            <li>
              <strong>Drink Smart</strong>: attiva la leva funzionale
              (utilità, controllo, performance d&apos;uso).
            </li>
            <li>
              <strong>Live Green</strong>: attiva la leva valoriale
              (responsabilità, identità, stile di vita).
            </li>
            <li>
              <strong>Struttura sintetica e memorabile</strong>: mantiene
              chiarezza strategica e facilita la riconoscibilità del brand.
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
