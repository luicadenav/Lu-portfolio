import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import styles from "./carousel.module.css";

import img1 from "../../assets/icons/image_1.svg";
import img2 from "../../assets/icons/image_2.svg";
import img3 from "../../assets/icons/image_3.svg";
import img4 from "../../assets/icons/image_4.svg";
import img5 from "../../assets/icons/image_5.svg";
import img6 from "../../assets/icons/image_6.svg";
import img7 from "../../assets/icons/image_7.svg";
import img8 from "../../assets/icons/image_8.svg";
import img9 from "../../assets/icons/image_9.svg";
import img10 from "../../assets/icons/image_10.svg";

const images = [
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

const Carousel = () => {
  return (
    <section aria-label="stack technologies" className={styles.carouselWrapper}>
      <ul className={styles.carousel} style={{ "--quantity": images.length }}>
        <div className={styles.list}>
          {images.map((item, index) => (
            <li
              key={item.name}
              className={styles.carouselItem}
              style={{ "--position": index }}
              data-tooltip-id={`tooltip-${index}`}
            >
              <figure className={styles.imgContainer}>
                <img src={item.src} alt={`Logo de ${item.name}`} />
              </figure>
            </li>
          ))}
        </div>
      </ul>

      {/* Tooltips */}
      {images.map((item, index) => (
        <ReactTooltip
          key={`tooltip-${index}`}
          id={`tooltip-${index}`}
          place="bottom"
          content={item.name}
        />
      ))}
    </section>
  );
};

export default Carousel;
