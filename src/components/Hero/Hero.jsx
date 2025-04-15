import styles from './hero.module.css';
import heroImage from '../../assets/hero_image.png';

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.subtitle}>hello, i&apos;m</h2>
        <h1 className={styles.title}>luisa cadena</h1>
        <h2 className={styles.subtitle}>front-end developer</h2>
      </div>
      <div className={styles.imageContainer}>
        <img src={heroImage} alt="hero Image" />
      </div>
    </section>
  );
}
export default Hero;
