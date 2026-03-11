import Image from "next/image";
import CTAButton from "../CTAButton/CTAButton";
import styles from "./Distribution.module.css";

export default function Distribution() {
  return (
    <section className={styles.distribution} id="distribution">
      <div className={styles.inner}>
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/images/distribution.png" 
              alt="Distribuzione" 
              fill 
              style={{ objectFit: 'cover' }} 
            />
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.subtitle}>
            DOVE POSSO TROVARE ECOBOTTLE?{" "}
            <span className={styles.highlight}>SEMPLICISSIMO</span>
          </h2>
          <p className={styles.description}>
            La strategia distributiva è costruita per garantire controllo sul
            brand, conversioni dirette digitali e presenza selettiva nei punti
            retail strategici. Il modello ibrido combina canale diretto digitale,
            marketplace e presenza selettiva nel piano di distribuzione
            strutturato con il posizionamento premium.
          </p>
          <div className={styles.ctaWrapper}>
            <CTAButton
              label="Scarica il report · Canali di distribuzione"
              href="/reports/canali-distribuzione"
              variant="dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
