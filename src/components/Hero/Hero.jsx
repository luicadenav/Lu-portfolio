import styles from "./hero.module.css";
import heroImage from "@/assets/images/hero_mobile.webp";
import download from "@/assets/icons/download.svg";
import chat from "@/assets/icons/chat.svg";
import AnimatedText from "./AnimatedText/AnimatedText";

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.titleContainer}>
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

      <div className={styles.imageContainer}>
        <img src={heroImage} alt="hero Image" />
      </div>
    </section>
  );
}
export default Hero;
