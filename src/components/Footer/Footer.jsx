import React from "react";
import styles from "./footer.module.css";
import linkedinLogo from "@/assets/icons/linkedin.svg";
import gitHubLogo from "@/assets/icons/github.svg";
import LuLogo from "@/assets/Lu_lodo.svg";

function Footer() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.footerContainer}>
        <div className={styles.socialButtons}>
          <div className={styles.socialGroup}>
            <a
              href="https://github.com/luicadenav"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={styles.GitButton}
            >
              <img
                className={styles.logoIcon}
                src={gitHubLogo}
                alt="github logo"
              />
            </a>
            <p className={styles.nameButton}>GitHub</p>
          </div>

          <div className={styles.socialGroup}>
            <a
              href="https://www.linkedin.com/in/luisa-maria-cadena/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={styles.linkedinButton}
            >
              <img
                className={styles.logoIcon}
                src={linkedinLogo}
                alt="linkedin logo"
              />
            </a>
            <p className={styles.nameButton}>LinkedIn</p>
          </div>
          <p className={styles.connectText}>Let's connect!</p>
        </div>
        <div className={styles.info}>
          <div className={styles.infoWrapper}>
            <p className={styles.infoText}>
              Built with React - Deployed on Vercel
            </p>
            <p className={styles.infoText}>
              &copy; 2025 · Designed & developed by Luisa Cadena
            </p>
          </div>

          <img className={styles.logo} src={LuLogo} alt="personal logo" />
        </div>
      </div>
    </section>
  );
}

export default Footer;
