import { HighlightText } from "../../HighlightText/HighlightText";
import styles from "./details.module.css";
import { projectThemes } from "@/config/projectsThemes";

function DetailsModal({ handleClose, projectInfo }) {
  const themeClass = projectThemes[projectInfo.id] || "";

  const highlightMap = {
    theme0: [2, 7, 11],
    theme1: [0, 3],
    theme2: [3, 5, 8],
    theme3: [2, 16],
  };

  return (
    <section className={`${styles.sectionContainer} ${styles[themeClass]}`}>
      <div className={styles.infoContainer}>
        <button onClick={handleClose} className={styles.closeButton}>
          Close
        </button>
        <div className={styles.logoContainer}>
          <img src={projectInfo.logo} />
        </div>
        <HighlightText
          text={projectInfo.name}
          chars={highlightMap[themeClass]}
        />
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
