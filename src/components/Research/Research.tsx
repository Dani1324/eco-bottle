import Image from "next/image";
import CTAButton from "../CTAButton/CTAButton";
import styles from "./Research.module.css";

export default function Research() {
  return (
    <section className={styles.research} id="research">
      <div className={styles.researchInner}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/research.png"
            alt="Ricerca di mercato EcoBottle"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.content}>
          <span className={styles.subtitle}>COME TUTTE LE ALTRE?</span>
          <h2 className={styles.title}>NON PROPRIO</h2>
          <p className={styles.description}>
            Dalle interviste e dai sondaggi online è emerso che i giovani
            adulti vogliono una borraccia che sia davvero sostenibile,
            belle da vedere e in grado di migliorare il proprio stile. ECOBOTTLE
            vuole avere l&apos;impatto di un vero prodotto.
          </p>
          <p className={styles.description}>
            Abbiamo condotto una ricerca di mercato strutturata con
            questionari su 267 persone, 7 analisi tematiche, scale
            psicometriche Likert, differenziale semantico, aperti verbali e un
            piano di campionamento controllato. I risultati hanno
            guidato ogni decisione di design e funzionalità.
          </p>
          <div className={styles.ctaWrapper}>
            <CTAButton
              label="Scarica il report · Insight, Target e Mercato"
              href="/reports/insight-target-mercato"
              variant="dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
