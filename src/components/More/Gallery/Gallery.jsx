/* eslint-disable no-unused-vars */
import styles from "./gallery.module.css";
import { useState, useRef } from "react";
import { projects } from "@/data/projectsData.js";
import { motion, AnimatePresence } from "framer-motion";
import DetailsModal from "../DetailsModal/DetailsModal.jsx";
import { projectThemes } from "@/config/projectsThemes";

function Gallery() {
  const [activeProject, setActiveProject] = useState(null);
  const [rect, setRect] = useState(null);
  const containerRef = useRef(null);
  const themeClass = projectThemes[activeProject?.id] || "";

  const handleOpen = (e, project) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    setRect(bounds);
    setActiveProject(project);

    const scrollPosition = window.pageYOffset;
    document.body.classList.add("body-no-scroll");
    document.body.style.top = `${scrollPosition}px`;
  };

  const handleClose = () => {
    setActiveProject(null);

    const scrollPosition = document.body.style.top.replace("px", "");
    document.body.classList.remove("body-no-scroll");
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollPosition, 10));
  };

  return (
    <section className={styles.galleryContainer} ref={containerRef}>
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className={`${styles.imageContainer} ${
              styles[`gridItem${index + 1}`]
            } `}
            onClick={(e) => {
              handleOpen(e, project);
            }}
          >
            <img src={project.src} />
          </div>
        );
      })}

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
    </section>
  );
}
export default Gallery;
