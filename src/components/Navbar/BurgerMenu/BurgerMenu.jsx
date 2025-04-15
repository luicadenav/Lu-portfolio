import styles from './burgerMenu.module.css'; // Importamos el CSS Module

function BurgerMenu({ toggleMenu, isActive }) {
  return (
    <div className={styles.box}>
      <div
        className={`${styles.container} ${isActive ? styles.active : ''}`}
        onClick={toggleMenu}
      >
        <div className={styles.line5}></div>
        <div className={styles.line5}></div>
        <div className={styles.line5}></div>
      </div>
    </div>
  );
}

export default BurgerMenu;
