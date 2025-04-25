import styles from "./collaborative.module.css";
import uwvc from "../../assets/images/flag_us.webp";
import ezvisa from "../../assets/images/passport.webp";
import plaza from "../../assets/images/workers.webp";
function Collaborative() {
  return (
    <section className={styles.sectionContainer}>
      <h3 className={styles.subtitle}>
        To <span className={styles.accent}>c</span>oncept to cl
        <span className={styles.accent}>i</span>ent
      </h3>
      <div className={styles.imageContainer}>
        <img src={uwvc} alt="project 1 image" />
      </div>
      <div className={styles.imageContainer}>
        <img src={ezvisa} alt="project 2 image" />
      </div>
      <div className={styles.imageContainer}>
        <img src={plaza} alt="project 3 image" />
      </div>
    </section>
  );
}
export default Collaborative;
