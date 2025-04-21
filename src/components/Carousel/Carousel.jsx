import React from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import styles from "./carousel.module.css";

import img1 from "../../assets/image_1.svg";
import img2 from "../../assets/image_2.svg";
import img3 from "../../assets/image_3.svg";
import img4 from "../../assets/image_4.svg";
import img5 from "../../assets/image_5.svg";
import img6 from "../../assets/image_6.svg";
import img7 from "../../assets/image_7.svg";
import img8 from "../../assets/image_8.svg";
import img9 from "../../assets/image_9.svg";

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
