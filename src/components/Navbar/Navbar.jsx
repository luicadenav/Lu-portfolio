import logo from "@/assets/Lu_lodo.svg";
import styles from "./navbar.module.css";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useEffect, useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbarSection} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.navbarContainer}>
        <img className={styles.logo} src={logo} alt="personal logo" />
        <ul className={`${styles.navList} ${isActive ? styles.isActive : ""}`}>
          <li className={styles.navLink}>
            <a href="#hero">home</a>
          </li>
          <li className={styles.navLink}>
            <a href="#about">about me</a>
          </li>
          <li className={styles.navLink}>
            <a href="#projects">projects</a>
          </li>
          <li className={styles.navLink}>
            <a href="#contact">contact</a>
          </li>
        </ul>
        <BurgerMenu toggleMenu={toggleMenu} isActive={isActive} />
      </div>
    </nav>
  );
}

export default Navbar;
