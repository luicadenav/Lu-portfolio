import styles from "./details.module.css";
import { projectThemes } from "@/config/projectsThemes";

function DetailsModal({ handleClose, projectInfo }) {
  const themeClass = projectThemes[projectInfo.id] || "";

  const highlightMap = {
    theme0: ["i", "a", "d"],
    theme1: ["p"],
    theme2: ["i", "e", "m"],
    theme3: ["u", "n"],
  };

  function highlightText(text, theme) {
    const highlightChars = highlightMap[theme] || [];

    return [...text].map((char, i) =>
      highlightChars.includes(char.toLowerCase()) ? (
        <span key={i} className={styles.accent}>
          {char}
        </span>
      ) : (
        <span key={i}>{char}</span>
      )
    );
  }

  return (
    <section className={`${styles.sectionContainer} ${styles[themeClass]}`}>
      <div className={styles.infoContainer}>
        <button onClick={handleClose} className={styles.closeButton}>
          Close
        </button>
        <div className={styles.logoContainer}>
          <img src={projectInfo.logo} />
        </div>
        <h2 className={styles.title}>
          {highlightText(projectInfo.name, themeClass)}
        </h2>
        <p className={styles.description}>{projectInfo.description}</p>
        <h3 className={styles.subtitle}>approach and tools</h3>
        <div className={styles.approachContainer}>
          {projectInfo.approach.map((item, index) => {
            return <p key={"approach" + index}>{item}</p>;
          })}
        </div>
        <div className={styles.stackContainer}>
          {projectInfo.stack.map((item, index) => {
            return (
              <div key={"stack" + index} className="imgContainer">
                <img src={item.src} alt={`Logo de ${item.name}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default DetailsModal;
