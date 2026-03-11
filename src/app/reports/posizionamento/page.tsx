import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import styles from "@/styles/report.module.css";

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
          <h2>1. Dal posizionamento programmato al posizionamento percepito</h2>
          <p>
            Come definito nel corso, &quot;ogni prodotto è formato da un insieme
            di attributi, che lo differenziano più o meno nettamente dai prodotti
            concorrenti e che lo qualificano in un certo modo nella mente del
            consumatore, consentendogli di occupare una certa posizione rispetto
            agli altri.&quot;
          </p>
          <p>
            Il posizionamento è sempre un <strong>concetto relativo</strong>:
            esiste in relazione al posizionamento delle imprese concorrenti.
            L&apos;obiettivo è far coincidere il{" "}
            <strong>posizionamento programmato</strong> (desiderato
            dall&apos;impresa) con il{" "}
            <strong>posizionamento percepito</strong> (nella mente del
            consumatore), puntando a un posizionamento{" "}
            <strong>appuntito</strong> — la maggior parte delle percezioni dei
            consumatori convergono ad un&apos;unica posizione.
          </p>

          <hr />

          <h2>2. Customer Value Proposition</h2>
          <p>
            La <strong>customer value proposition</strong> è la differenza tra i
            benefici e i sacrifici che i consumatori percepiscono dell&apos;offerta
            aziendale, in rapporto a quella dei concorrenti.
          </p>

          <h3>
            2.1 Quali fattori determinano il valore percepito dal cliente?
          </h3>
          <table>
            <thead>
              <tr>
                <th>Livello catena</th>
                <th>Elemento ECOBOTTLE</th>
                <th>Descrizione</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Attributi concreti</strong>
                </td>
                <td>
                  Acciaio inox riciclato 75%, sensore IoT, isolamento doppia
                  parete
                </td>
                <td>Caratteristiche fisiche e tecniche del prodotto</td>
              </tr>
              <tr>
                <td>
                  <strong>Attributi astratti</strong>
                </td>
                <td>
                  &quot;Made in Italy&quot;, design minimalista, certificazione
                  eco
                </td>
                <td>Proprietà non direttamente osservabili</td>
              </tr>
              <tr>
                <td>
                  <strong>Benefici funzionali</strong>
                </td>
                <td>Mantiene temperatura 24h caldo/freddo, traccia idratazione</td>
                <td>Performance tangibile</td>
              </tr>
              <tr>
                <td>
                  <strong>Benefici esperienziali</strong>
                </td>
                <td>
                  App intuitiva, unboxing premium, senso di cura personale
                </td>
                <td>Esperienza d&apos;uso e relazione col prodotto</td>
              </tr>
              <tr>
                <td>
                  <strong>Benefici sociali</strong>
                </td>
                <td>
                  Appartenenza a community eco-smart, riconoscibilità sociale
                </td>
                <td>
                  &quot;Lo compro perché mi sento parte di una community&quot;
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Benefici psicologici</strong>
                </td>
                <td>
                  Senso di responsabilità ambientale, autostima, sicurezza nelle
                  scelte salutari
                </td>
                <td>
                  &quot;Usare un prodotto ci fa stare bene, ci dà
                  sicurezza&quot;
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Valori strumentali</strong>
                </td>
                <td>
                  Indipendenza, onestà verso l&apos;ambiente, apertura mentale
                </td>
                <td>Intermediari verso i valori terminali</td>
              </tr>
              <tr>
                <td>
                  <strong>Valori terminali</strong>
                </td>
                <td>
                  Armonia interna, rispetto per sé stessi, benessere
                </td>
                <td>Obiettivi di vita ultimi del consumatore</td>
              </tr>
            </tbody>
          </table>

          <h3>
            2.2 Su quali fattori ECOBOTTLE può superare la concorrenza?
          </h3>
          <p>
            La superiorità competitiva si fonda sulla{" "}
            <strong>combinazione simultanea</strong> di tre dimensioni che
            nessun competitor possiede congiuntamente:
          </p>
          <ol>
            <li>
              <strong>Sostenibilità verificabile</strong> (superiore a LARQ e
              HidrateSpark)
            </li>
            <li>
              <strong>Funzionalità smart</strong> (superiore a 24Bottles,
              Chilly&apos;s, S&apos;well)
            </li>
            <li>
              <strong>Design premium minimalista</strong> (superiore a
              HidrateSpark)
            </li>
          </ol>

          <h3>
            2.3 Coerenza con obiettivi e strategie aziendali
          </h3>
          <p>
            La strategia competitiva di ECOBOTTLE è la{" "}
            <strong>focalizzazione sulla differenziazione</strong>: si focalizza
            su un ambito di mercato ristretto, cercando di soddisfare i bisogni
            specifici di un dato segmento in modo migliore rispetto ai
            competitor. La combinazione eco+smart+design è coerente con il
            target Eco-Millennials Urbani e con la strategia di pricing di
            scrematura.
          </p>

          <hr />

          <h2>3. Analisi secondo il modello di Kano</h2>
          <p>
            Non tutti gli attributi sono uguali in termini di relazione con il
            livello di soddisfazione del cliente:
          </p>
          <table>
            <thead>
              <tr>
                <th>Tipo attributo (Kano)</th>
                <th>Attributo ECOBOTTLE</th>
                <th>Implicazione strategica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Basic</strong>
                  <br />
                  <em>(se assente → alta insoddisfazione)</em>
                </td>
                <td>
                  Tenuta stagna, resistenza materiali, sicurezza alimentare
                </td>
                <td>
                  Non comunicabili come differenziale — devono semplicemente
                  esserci
                </td>
              </tr>
              <tr>
                <td>
                  <strong>One-dimensional</strong>
                  <br />
                  <em>(relazione lineare soddisfazione)</em>
                </td>
                <td>
                  Isolamento termico, autonomia batteria, accuratezza tracking
                </td>
                <td>
                  Comunicabili con dati oggettivi (24h, ±2% precisione)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Exciting</strong>
                  <br />
                  <em>(se presente → alta soddisfazione)</em>
                </td>
                <td>
                  Display e-ink integrato, materiali bio-based, community
                  gamificata
                </td>
                <td>
                  <strong>Leva principale di differenziazione.</strong>{" "}
                  &quot;Sono attributi su cui si gioca molto per differenziarsi
                  dalla concorrenza&quot;
                </td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>4. La catena mezzi-fini di ECOBOTTLE e il punto di leva</h2>
          <p>
            Secondo la tecnica del <strong>Laddering</strong>, la catena
            mezzi-fini si costruisce in 4 fasi:
          </p>

          <h3>I. Definizione della catena</h3>
          <pre>
            <code>
{`Attributi concreti → Attributi astratti → Benefici funzionali → Benefici psicologici → Valori
Acciaio riciclato 75%  → Eco-design     → Riduce impatto    → Mi sento responsabile → Armonia interna
Sensore IoT integrato  → Smart-health   → Monitora idrataz. → Cura di sé            → Benessere
Design minimalista     → Premium feel    → Piacere estetico  → Autostima, status     → Rispetto per sé`}
            </code>
          </pre>

          <h3>II. La sequenza ideale</h3>
          <p>
            ECOBOTTLE sceglie la sequenza:{" "}
            <strong>
              Materiali eco + Tracking smart → Idratazione consapevole e
              sostenibile → Responsabilità e benessere → Armonia con sé e con
              l&apos;ambiente
            </strong>
            .
          </p>

          <h3>III. Il punto di leva</h3>
          <p>
            Il punto di leva si colloca a <strong>metà catena</strong>, tra
            benefici funzionali e benefici psicologici/sociali. Non comunichiamo
            solo attributi (razionalità pura) né solo valori (emozionalità
            pura), ma il ponte tra i due:
          </p>
          <blockquote>
            &quot;Bere in modo smart è il tuo contributo quotidiano al
            pianeta&quot;
          </blockquote>

          <h3>IV. Dichiarazione formale di posizionamento</h3>
          <p>
            La dichiarazione formale deve essere chiara, coerente rispetto al
            prodotto/servizio e credibile. Deve esprimere a chi ci rivolgiamo,
            quali bisogni vogliamo soddisfare e perché.
          </p>
          <blockquote>
            <strong>Per</strong> i giovani professionisti urbani attenti alla
            sostenibilità e al benessere personale,
            <br />
            <strong>che</strong> desiderano un&apos;idratazione quotidiana
            consapevole senza compromessi tra etica e tecnologia,
            <br />
            <strong>ECOBOTTLE è</strong> la smart water bottle in materiali bio-based
            <br />
            <strong>che</strong> unisce tracking intelligente
            dell&apos;idratazione, isolamento termico premium e design
            minimalista italiano
            <br />
            <strong>perché</strong> è l&apos;unica bottiglia riutilizzabile che
            integra sostenibilità certificata, funzionalità smart e
            un&apos;estetica progettata per diventare parte della tua identità.
          </blockquote>

          <hr />

          <h2>5. Payoff: &quot;Drink Smart. Live Green.&quot;</h2>

          <h3>Razionale linguistico</h3>
          <ul>
            <li>
              <strong>&quot;Drink Smart&quot;</strong> → leva funzionale
              (tracking, tecnologia, salute) — punto di leva verso i benefici
            </li>
            <li>
              <strong>&quot;Live Green&quot;</strong> → leva valoriale
              (sostenibilità, stile di vita) — punto di leva verso i valori
              terminali
            </li>
            <li>
              <strong>Struttura parallela</strong> imperativo + aggettivo:
              memorabilità, ritmo, simmetria
            </li>
            <li>
              <strong>Lingua inglese</strong>: coerente con target cosmopolita,
              internazionalizzabile, evoca premium positioning
            </li>
          </ul>

          <h3>Verifica di coerenza</h3>
          <p>
            La comunicazione è coerente quando il claim riflette il principale
            elemento differenziale. &quot;Drink Smart. Live Green.&quot;
            comunica esplicitamente la doppia dimensione che differenzia ECOBOTTLE
            dalla concorrenza (smart + green), a differenza di un ipotetico
            &quot;La bottiglia del futuro&quot; (generico) o &quot;Bevi di
            più&quot; (riduttivo, non distingue da HidrateSpark).
          </p>

          <hr />

          <h2>6. Strategia competitiva: Focalizzazione sulla differenziazione</h2>
          <p>
            La strategia di differenziazione consiste nel conferire ai prodotti
            caratteristiche distintive rilevanti all&apos;occhio del cliente,
            tali da differenziarli dai prodotti dei competitor. Il cliente è
            disposto a pagare un <strong>premium price</strong> grazie alle sue
            caratteristiche distintive.
          </p>
          <p>
            Il vantaggio competitivo di ECOBOTTLE è di tipo{" "}
            <strong>esterno</strong> — si basa su caratteri e qualità distintive
            del prodotto e della marca. Rispetta le tre caratteristiche
            richieste:
          </p>
          <ol>
            <li>
              <strong>Durevolezza</strong>: la combinazione eco+smart+design è
              un sistema integrato, non un singolo elemento facilmente imitabile
            </li>
            <li>
              <strong>Difendibilità</strong>: ECOBOTTLE difende il vantaggio
              attraverso molteplici barriere simultanee (materiali, tech,
              design, brand)
            </li>
            <li>
              <strong>Rilevanza</strong>: gli elementi di differenziazione sono
              direttamente collegati ai benefici primari ricercati dal target
            </li>
          </ol>

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
