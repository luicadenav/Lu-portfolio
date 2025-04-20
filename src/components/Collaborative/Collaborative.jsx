import styles from "./collaborative.module.css";
import uwvc from "../../assets/uwvc.webp";
import ezvisa from "../../assets/ezvisa.webp";

function Collaborative() {
  return (
    <section className={styles.sectionContainer}>
      <h3 className={styles.subtitle}>Collaborative Projects</h3>
      <div className={styles.imageContainer}>
        <img src={uwvc} alt="project 1 image" />
      </div>
      <div className={styles.imageContainer}>
        <img src={ezvisa} alt="project 2 image" />
      </div>
    </section>
  );
}
export default Collaborative;
