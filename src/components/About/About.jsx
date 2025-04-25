import Carousel from "../Carousel/Carousel";
import styles from "./about.module.css";
import devImage from "../../assets/images/women.jpeg";
function About() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.textContainer}>
        <h3 className={styles.subtitle}>
          be<span className={styles.accent}>h</span>ind the scr
          <span className={styles.accent}>e</span>en
        </h3>
        <p className={styles.info}>
          Hi! I&apos;m Luisa Cadena, a passionate developer who loves creating
          great web and mobile experiences. I&apos;ve worked on several projects
          and I am always excited to keep improving my skills
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={devImage} alt="hero Image" />
      </div>

      <Carousel />
    </section>
  );
}
export default About;
