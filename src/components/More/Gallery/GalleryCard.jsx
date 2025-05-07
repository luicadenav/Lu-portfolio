import styles from "./galleryCard.module.css";

function GalleryCard({ index, projectInfo, handleOpen }) {
  return (
    <div
      key={index}
      className={`${styles.imageContainer} ${styles[`gridItem${index + 1}`]} `}
    >
      <img src={projectInfo.src} />
      <div className={styles.overlay}>
        <p className={styles.titleProject}>{projectInfo.name}</p>
        <button
          className={styles.button}
          onClick={(e) => {
            handleOpen(e, projectInfo);
          }}
        >
          View project
        </button>
      </div>
    </div>
  );
}

export default GalleryCard;
