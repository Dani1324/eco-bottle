"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IconLeaf, IconMenu2, IconX } from "@tabler/icons-react";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Ricerca", href: "#research" },
  { label: "Valore", href: "#value-proposition" },
  { label: "Distribuzione", href: "#distribution" },
  { label: "Comunicazione", href: "#communication" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Se non è montato nel client, non renderizzare il mobile menu per evitare hydration mismatch
  if (!mounted) {
    return (
      <nav className={styles.navbar}>
        <div className={styles.navbarInner}>
          <Link href="/" className={styles.logo}>
            EcoBottle
            <IconLeaf size={20} className={styles.logoLeaf} />
          </Link>

          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarInner}>
          <Link href="/" className={styles.logo}>
            EcoBottle
            <IconLeaf size={20} className={styles.logoLeaf} />
          </Link>

          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={styles.menuButton}
            onClick={() => setMobileOpen(true)}
            aria-label="Apri menu"
          >
            <IconMenu2 size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ""}`}>
        <button
          className={styles.closeButton}
          onClick={() => setMobileOpen(false)}
          aria-label="Chiudi menu"
        >
          <IconX size={28} />
        </button>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={styles.mobileMenuLink}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
