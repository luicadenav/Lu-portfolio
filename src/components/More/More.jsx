import Gallery from "./Gallery/Gallery";
import styles from "./more.module.css";

function More() {
  return (
    <section id="projects" className={styles.sectionContainer}>
      <div className={styles.infoContainer}>
        <h3 className={styles.subtitle}>
          <span className={styles.accent}>e</span>xplore mo
          <span className={styles.accent}>r</span>e
        </h3>
        <p className={styles.info}>
          They&apos;re so good, they&apos;ll make you want to stay on this page
          forever!
        </p>
        <Gallery />
      </div>
    </section>
  );
}
export default More;
