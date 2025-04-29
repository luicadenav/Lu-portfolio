import styles from "./details.module.css";

function DetailsModal({ handleClose, projectInfo }) {
  return (
    <section className={styles.sectionContainer}>
      <button onClick={handleClose} className={styles.closeButton}>
        Close
      </button>
      <h2>{projectInfo.name}</h2>
      <p>{projectInfo.description}</p>
    </section>
  );
}
export default DetailsModal;
