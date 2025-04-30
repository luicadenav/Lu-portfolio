import styles from "./about.module.css";
import devImage from "@/assets/images/women.jpeg";
import Slider from "./SkillsSlider/SkillsSlider";
function About() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.wrapperInfo}>
        <div className={styles.infoContainer}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={devImage} alt="hero Image" />
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.subtitle}>
              be<span className={styles.accent}>h</span>ind the scr
              <span className={styles.accent}>e</span>en
            </h3>
            <p className={styles.info}>
              Hi! I&apos;m Luisa Cadena, a passionate developer who loves
              creating great web and mobile experiences. I&apos;ve worked on
              several projects and I am always excited to keep improving my
              skills. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis nostrum eaque debitis eius qui asperiores, nobis officia
              eum quidem ullam rem incidunt nesciunt veniam! Quo, maiores id?
              Earum, ut inventore.
            </p>
          </div>
        </div>
        <Slider />
        <p className={styles.subtitleSlider}> &lt;what i code with/&gt;</p>
      </div>
    </section>
  );
}
export default About;
