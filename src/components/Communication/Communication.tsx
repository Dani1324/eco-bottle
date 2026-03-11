import Image from "next/image";
import CTAButton from "../CTAButton/CTAButton";
import styles from "./Communication.module.css";

export default function Communication() {
  return (
    <section className={styles.communication} id="communication">
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>SIAMO ANCHE QUI</h2>
        <p className={styles.sectionDescription}>
          La comunicazione di ECOBOTTLE traduce il posizionamento del brand in
          messaggi efficaci, riconoscibili e coerenti. La strategia integra copy,
          strategy, visual, pubblicitari e contenuti creativi per raggiungere il
          target con un tono contemporaneo, accessibile e distintivo.
        </p>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/communication.png"
            alt="Strategia di comunicazione EcoBottle — Social Media e Blog"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className={styles.ctaWrapper}>
          <CTAButton
            label="Scarica il report · Strategia di comunicazione"
            href="/reports/strategia-comunicazione"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
}
