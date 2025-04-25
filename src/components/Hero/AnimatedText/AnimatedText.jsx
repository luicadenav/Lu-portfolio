import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";
import styles from "./animated.module.css";

const AnimatedText = () => {
  const containerRef = useRef(null);

  const titles = [
    "web developer",
    "Efficient Engineer",
    "404: Limits not found",
    "Frontend & Backend",
    "Real-world solutions",
    "Design. Code. Repeat.",
  ];

  useEffect(() => {
    const titles = gsap.utils.toArray(
      containerRef.current.querySelectorAll("h2")
    );
    const tl = gsap.timeline({ repeat: -1 });

    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);

      tl.from(
        splitTitle.chars,
        { opacity: 0, y: 24, rotateX: -90, stagger: 0.02 },
        "<"
      ).to(
        splitTitle.chars,
        { opacity: 0, y: -24, rotateX: 90, stagger: 0.02 },
        "<2"
      );
    });
  }, []);

  return (
    <div className={styles.textContainer} ref={containerRef}>
      {titles.map((item, index) => {
        return (
          <h2 key={"title" + index} className={styles.subtitle}>
            {item}
          </h2>
        );
      })}
    </div>
  );
};

export default AnimatedText;
