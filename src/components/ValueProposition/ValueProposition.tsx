import Image from "next/image";
import {
  IconRecycle,
  IconDeviceWatch,
  IconPalette,
  IconFlame,
} from "@tabler/icons-react";
import CTAButton from "../CTAButton/CTAButton";
import styles from "./ValueProposition.module.css";

const features = [
  {
    icon: <IconRecycle size={28} />,
    title: "ECO",
    description:
      "75% acciaio riciclato, materiali bio-based, carbon offset certificato.",
  },
  {
    icon: <IconDeviceWatch size={28} />,
    title: "SMART",
    description:
      "Sensore IoT, tracking idratazione, sync Apple Health / Google Fit.",
  },
  {
    icon: <IconPalette size={28} />,
    title: "DESIGN",
    description:
      "Estetica minimalista italiana, display e-ink integrato, palette verde foresta.",
  },
  {
    icon: <IconFlame size={28} />,
    title: "THERMAL",
    description:
      "Mantiene caldo o freddo anche nelle giornate più lunghe.",
  },
];

export default function ValueProposition() {
  return (
    <section className={styles.valueProposition} id="value-proposition">
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>LA PROPOSTA DI VALORE</h2>

        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <div className={styles.featureHeader}>
                <span className={styles.featureIcon}>{feature.icon}</span>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
              </div>
              <p className={styles.featureDescription}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/images/value-proposition.png"
            alt="La proposta di valore EcoBottle — ECO, SMART, DESIGN, THERMAL"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className={styles.positioningSection}>
          <div className={styles.positioningImageWrapper}>
            <Image
              src="/images/product-positioning.png"
              alt="Posizionamento del prodotto EcoBottle"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className={styles.positioningCtaWrapper}>
            <CTAButton
              label="Scarica il report · Posizionamento del prodotto"
              href="/reports/posizionamento"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
