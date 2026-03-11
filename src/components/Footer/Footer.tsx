import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logoRow}>
          <Image
            src="/images/text-logo.png"
            alt="EcoBottle"
            width={210}
            height={53}
            className={styles.logoImage}
          />
          <span className={styles.separator}>x</span>
          <Image
            src="/images/univpm-logo.png"
            alt="Università Politecnica delle Marche"
            width={172}
            height={80}
            className={styles.uniLogoImage}
          />
        </div>

        <div className={styles.divider} />

        <p className={styles.projectInfo}>
          Project work — Corso di Marketing 2025/2026 — Università Politecnica
          delle Marche
        </p>

        <p className={styles.author}>Daniele Ronchini</p>
      </div>
    </footer>
  );
}
