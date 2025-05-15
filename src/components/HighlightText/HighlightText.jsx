import styles from "./highlightText.module.css";

export const HighlightText = ({ text, chars }) => {
  function highlightText(text, chars) {
    const highlightChars = chars || [];

    return [...text].map((char, i) =>
      highlightChars.includes(i) ? (
        <span key={i} className={styles.accent}>
          {char}
        </span>
      ) : (
        <span key={i}>{char}</span>
      )
    );
  }
  return <h2 className={styles.title}>{highlightText(text, chars)}</h2>;
};
