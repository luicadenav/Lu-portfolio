import styles from "./hero.module.css";
import download from "@/assets/icons/download.svg";
import chat from "@/assets/icons/chat.svg";
import AnimatedText from "./AnimatedText/AnimatedText";

function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.infoContainer}>
        <h2 className={styles.subtitleHead}>here we meet.</h2>
        <h1 className={styles.title}>luisa cadena</h1>
        <AnimatedText />
        <div className={styles.buttonsContainer}>
          <a className={styles.sharedButton} href="">
            <img className={styles.whatsappIcon} src={chat} alt="" />
            <span>let's talk</span>
          </a>
          <a className={styles.sharedButton} href="">
            <img className={styles.downloadIcon} src={download} alt="" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
export default Hero;
