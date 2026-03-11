import Image from "next/image";
import { IconLeaf } from "@tabler/icons-react";
import CTAButton from "../CTAButton/CTAButton";
import HeroVideo from "../HeroVideo/HeroVideo";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroInner}>
        <div className={styles.heroLeft}>
          <div className={styles.decorLeaves}>
            <IconLeaf size={180} />
          </div>
          <div className={styles.heroImageWrapper}>
            <HeroVideo />
          </div>
          <div className={styles.heroBottle}>
            <Image
              src="/images/hero-bottle.png"
              alt="Bottiglia EcoBottle"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>

        <div className={styles.heroRight}>
          <h1 className={styles.heroTagline}>
            DRINK SMART.<br />
            LIVE GREEN.
          </h1>
          <p className={styles.heroDescription}>
            ECOBOTTLE nasce da un progetto di ricerca di marketing su oltre 50 persone.
            Abbiamo unito materiali bio-based, isolamento termico e tracking
            intelligente dell&apos;idratazione in un unico prodotto pensato per la vita urbana.
          </p>
          <div className={styles.heroCta}>
            <CTAButton label="View Details" href="#research" variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
