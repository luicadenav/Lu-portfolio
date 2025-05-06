import styles from "./about.module.css";
import SkillsGallery from "./SkillsGallery/SkillsGallery";

function About() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h3 className={styles.subtitle}>
            be<span className={styles.accent}>h</span>ind the scr
            <span className={styles.accent}>e</span>en
          </h3>
          <p className={styles.info}>
            Hi! I&apos;m Luisa Cadena, a passionate developer who loves creating
            great web and mobile experiences. I&apos;ve worked on several
            projects and I am always excited to keep improving my skills.
          </p>
        </div>
        <div className={styles.skillsWrapper}>
          <SkillsGallery />
          <div className={styles.subtitlesWrapper}>
            <h3 className={styles.subtitleInfo}>
              mo<span className={styles.accent}>B</span>ile
            </h3>
            <h3 className={styles.subtitleInfo}>
              back<span className={styles.accent}>e</span>nd
            </h3>
            <h3 className={styles.subtitleInfo}>
              web de<span className={styles.accent}>s</span>ign
            </h3>
            <h3 className={styles.subtitleInfo}>
              fron<span className={styles.accent}>t</span>end
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
