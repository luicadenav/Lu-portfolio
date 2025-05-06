import { Tooltip as ReactTooltip } from "react-tooltip";
import styles from "./skills.module.css";

import img1 from "@/assets/icons/image_1.svg";
import img2 from "@/assets/icons/image_2.svg";
import img3 from "@/assets/icons/image_3.svg";
import img4 from "@/assets/icons/image_4.svg";
import img5 from "@/assets/icons/image_5.svg";
import img6 from "@/assets/icons/image_6.svg";
import img7 from "@/assets/icons/image_7.svg";
import img8 from "@/assets/icons/image_8.svg";
import img9 from "@/assets/icons/image_9.svg";
import img10 from "@/assets/icons/image_10.svg";

const skillsIcons = [
  { src: img1, name: "Expo" },
  { src: img2, name: "Git" },
  { src: img3, name: "JavaScript" },
  { src: img4, name: "Material UI" },
  { src: img5, name: "Next.js" },
  { src: img6, name: "Node" },
  { src: img7, name: "React" },
  { src: img8, name: "Tailwind CSS" },
  { src: img9, name: "TypeScript" },
  { src: img10, name: "Figma" },
];

export default function SkillsGallery() {
  return (
    <section className={styles.Container}>
      <div className={styles.skillsContainer}>
        {skillsIcons.slice(0, 6).map((slide, index) => (
          <div
            key={index + "slide"}
            data-tooltip-id={`tooltip-${index}`}
            className={`${styles.skillItem} ${styles[`gridItem${index}`]}`}
          >
            <div className={styles.imgContainer}>
              <img src={slide.src} alt={`Logo de ${slide.name}`} />
            </div>
          </div>
        ))}

        <p className={`${styles.skillItem} ${styles.gridItem6}`}>
          &lt; what i <span className={styles.accent}> code </span>
          with / &gt;
        </p>

        {skillsIcons.slice(6).map((slide, index) => (
          <div
            key={index + "slide"}
            data-tooltip-id={`tooltip-${index}`}
            className={`${styles.skillItem} ${styles[`gridItem${index + 7}`]}`}
          >
            <div className={styles.imgContainer}>
              <img src={slide.src} alt={`Logo de ${slide.name}`} />
            </div>
          </div>
        ))}
      </div>

      {skillsIcons.map((item, index) => (
        <ReactTooltip
          key={`tooltip-${index}`}
          id={`tooltip-${index}`}
          place="top"
          content={item.name}
          openOnClick
        />
      ))}
    </section>
  );
}
