import Link from "next/link";
import styles from "./CTAButton.module.css";

interface CTAButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "outline" | "dark";
  icon?: React.ReactNode;
  external?: boolean;
  dark?: boolean;
}

export default function CTAButton({
  label,
  href,
  variant = "primary",
  icon,
  external = false,
  dark = false,
}: CTAButtonProps) {
  const className = `${styles.ctaButton} ${styles[variant]}`;

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {label}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
      {icon}
    </Link>
  );
}
