import styles from "./gallery.module.css";
import { useState, useRef } from "react";
import { projects } from "@/data/projectsData.js";
import { projectThemes } from "@/config/projectsThemes";
import GalleryCard from "./GalleryCard.jsx";
import AnimatedImage from "./AnimatedImage.jsx";

function Gallery() {
  const [activeProject, setActiveProject] = useState(null);
  const [rect, setRect] = useState(null);
  const containerRef = useRef(null);
  const themeClass = projectThemes[activeProject?.id] || "";

  const handleOpen = (e, project) => {
    const bounds = e.currentTarget.parentNode.getBoundingClientRect();
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
          <GalleryCard
            key={"card" + index}
            projectInfo={project}
            index={index}
            handleOpen={handleOpen}
          />
        );
      })}

      <AnimatedImage
        rect={rect}
        activeProject={activeProject}
        themeClass={themeClass}
        handleClose={handleClose}
      />
    </section>
  );
}
export default Gallery;
