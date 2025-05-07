/* eslint-disable no-unused-vars */
import styles from "./animatedImage.module.css";
import { motion, AnimatePresence } from "framer-motion";
import DetailsModal from "../DetailsModal/DetailsModal.jsx";

function AnimatedImage({ rect, activeProject, themeClass, handleClose }) {
  return (
    <>
      <AnimatePresence>
        {activeProject && rect && (
          <motion.div
            className={`${styles.activeImage} ${styles[themeClass]}`}
            initial={{
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
            }}
            animate={{
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
            }}
            exit={{
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img src={activeProject.src} alt={activeProject.name} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeProject && rect && (
          <motion.div
            className={styles.details}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            exit={{
              x: "-100%",
              opacity: 0,
              transition: { duration: 0.3, delay: 0 },
            }}
          >
            <DetailsModal
              handleClose={handleClose}
              projectInfo={activeProject}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AnimatedImage;
