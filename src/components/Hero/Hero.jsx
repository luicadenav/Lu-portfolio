import styles from './hero.module.css';
import heroImage from '../../assets/hero_image.png';
import download from '../../assets/download_icon.svg';
import whatsapp from '../../assets/whatsapp_icon.svg';

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.subtitle}>hello, i&apos;m</h2>
        <h1 className={styles.title}>luisa cadena</h1>
        <h2 className={styles.subtitle}>front-end developer</h2>
        <div className={styles.buttonsContainer}>
          <a className={styles.sharedButton} href="">
            <img className={styles.whatsappIcon} src={whatsapp} alt="" />
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
