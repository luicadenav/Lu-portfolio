import Carousel from "../Carousel/Carousel";
import styles from "./about.module.css";

function About() {
  return (
    <section className={styles.heroContainer}>
      <Carousel />
    </section>
  );
}
export default About;
