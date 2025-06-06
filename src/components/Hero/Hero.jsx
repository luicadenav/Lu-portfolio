import styles from "./hero.module.css";
import download from "@/assets/icons/download.svg";
import chat from "@/assets/icons/chat.svg";
import AnimatedText from "./AnimatedText/AnimatedText";
import { logEvent } from "./../../analytics";

const handleDownload = () => {
  logEvent("PDF", "download", "LuisaMariaCadena_Developer.pdf");
  const url = "/assets/LuisaMariaCadena_Developer.pdf";
  const link = document.createElement("a");
  link.href = url;
  link.download = "LuisaMariaCadena_Developer.pdf";
  link.click();
};

const WHATSAPP_LINK =
  "https://wa.me/573022127272?text=Open%20to%20work%20and%20new%20challenges.%20Contact%20me!";

function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.infoContainer}>
        <h2 className={styles.subtitleHead}>here we meet.</h2>
        <h1 className={styles.title}>luisa cadena</h1>
        <AnimatedText />
        <div className={styles.buttonsContainer}>
          <a
            className={styles.sharedButton}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.whatsappIcon} src={chat} alt="chat icon" />
            <span>let's talk</span>
          </a>
          <button onClick={handleDownload} className={styles.sharedButton}>
            <img
              className={styles.downloadIcon}
              src={download}
              alt="download icon"
            />
            Resume
          </button>
        </div>
      </div>
    </section>
  );
}
export default Hero;
