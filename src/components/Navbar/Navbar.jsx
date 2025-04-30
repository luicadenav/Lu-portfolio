import logo from "@/assets/Lu_lodo.svg";
import styles from "./navbar.module.css";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={styles.navbarSection}>
      <div className={styles.navbarContainer}>
        <img className={styles.logo} src={logo} alt="personal logo" />
        <ul className={`${styles.navList} ${isActive ? styles.isActive : ""}`}>
          <li className={styles.navLink}>
            <a href="">home</a>
          </li>
          <li className={styles.navLink}>
            <a href="">about me</a>
          </li>
          <li className={styles.navLink}>
            <a href="">clients</a>
          </li>
          <li className={styles.navLink}>
            <a href="">projects</a>
          </li>
          <li className={styles.navLink}>
            <a href="">contact</a>
          </li>
        </ul>
        <BurgerMenu toggleMenu={toggleMenu} isActive={isActive} />
      </div>
    </nav>
  );
}

export default Navbar;
