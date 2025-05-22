import styles from "./highlightText.module.css";

export const HighlightText = ({ text, themeClass }) => {
  const highlightMap = {
    theme0: [2, 7, 11],
    theme1: [0, 3],
    theme2: [1, 5, 8],
    theme3: [2, 12],
  };

  const highlightChars = highlightMap[themeClass] || [];

  return (
    <h2 className={`${styles.title} ${styles[themeClass]}`}>
      {[...text].map((char, i) =>
        highlightChars.includes(i) ? (
          <span key={i} className={styles.accent}>
            {char}
          </span>
        ) : (
          <span key={i}>{char}</span>
        )
      )}
    </h2>
  );
};
