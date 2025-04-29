import styles from "./gallery.module.css";

import img2 from "@/assets/images/project_0.webp";
import img1 from "@/assets/images/project_1.webp";
import img3 from "@/assets/images/project_4.webp";
import img4 from "@/assets/images/project_3.webp";

const projects = [
  { src: img1, name: "Expo" },
  { src: img2, name: "Git" },
  { src: img3, name: "JavaScript" },
  { src: img4, name: "Material UI" },
];

function Gallery() {
  return (
    <section className={styles.galleryContainer}>
      {projects.map((item, index) => {
        return (
          <div
            className={`${styles.imageContainer} ${
              styles[`gridItem${index + 1}`]
            } `}
          >
            <img key={index} src={item.src} />;
          </div>
        );
      })}
    </section>
  );
}
export default Gallery;
