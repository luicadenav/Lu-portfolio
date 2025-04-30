/* eslint-disable no-unused-vars */
import styles from "./collaborative.module.css";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DetailsModal from "./DetailsModal/DetailsModal";
import uwvc from "@/assets/images/flag_us.webp";
import ezvisa from "@/assets/images/passport.webp";
import plaza from "@/assets/images/workers.webp";
import img1 from "@/assets/icons/image_1.svg";
import img2 from "@/assets/icons/image_2.svg";
import img3 from "@/assets/icons/image_3.svg";

function Collaborative() {
  const [activeProject, setActiveProject] = useState(null);
  const [rect, setRect] = useState(null);
  const containerRef = useRef(null);

  const handleOpen = (e, project) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    setRect(bounds);
    setActiveProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setActiveProject(null);
    document.body.style.overflow = "auto";
  };

  const projects = [
    {
      id: 0,
      src: uwvc,
      name: "united veterans war",
      description:
        "Lorem ipsum dolor  0 sit amet, consectetur adipisicing elit. Suscipit saepe aspernatur illo aut et, veniam id. Voluptas magni deserunt sequi cupiditate possimus. Eos, placeat doloremque earum dolorem inventore architecto maiores.",
      stack: [
        { name: "tecnology", src: img1 },
        { name: "tecnology", src: img3 },
        { name: "tecnology", src: img2 },
      ],
      link: "",
    },
    {
      id: 1,
      src: ezvisa,
      name: " ez visa",
      description:
        "Lorem ipsum dolor 1 sit amet, consectetur adipisicing elit. Suscipit saepe aspernatur illo aut et, veniam id. Voluptas magni deserunt sequi cupiditate possimus. Eos, placeat doloremque earum dolorem inventore architecto maiores.",
      stack: [
        { name: "tecnology", src: img1 },
        { name: "tecnology", src: img3 },
        { name: "tecnology", src: img2 },
      ],
      link: "",
    },
    {
      id: 2,
      src: plaza,
      name: "plaza",
      description:
        "Lorem ipsum dolor  2 sit amet, consectetur adipisicing elit. Suscipit saepe aspernatur illo aut et, veniam id. Voluptas magni deserunt sequi cupiditate possimus. Eos, placeat doloremque earum dolorem inventore architecto maiores.",
      stack: [
        { name: "tecnology", src: img1 },
        { name: "tecnology", src: img3 },
        { name: "tecnology", src: img2 },
      ],
      link: "",
    },
  ];
  return (
    <section className={styles.sectionBackground}>
      <div className={styles.infoContainer}>
        <h3 className={styles.subtitle}>
          To <span className={styles.accent}>c</span>oncept to cl
          <span className={styles.accent}>i</span>ent
        </h3>
        <div className={styles.galleryContainer} ref={containerRef}>
          {projects.map((project) => (
            <div
              key={project.src}
              className={styles.imageWrapper}
              onClick={(e) => handleOpen(e, project)}
            >
              <img src={project.src} alt="" className={styles.galleryImage} />
              <p></p>
            </div>
          ))}

          <AnimatePresence>
            {activeProject && rect && (
              <motion.div
                className={styles.activeImage}
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
        </div>
      </div>
    </section>
  );
}
export default Collaborative;
