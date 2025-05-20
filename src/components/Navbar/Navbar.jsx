import logo from "@/assets/Lu_lodo.svg";
import styles from "./navbar.module.css";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { useEffect, useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    if (isActive) {
      document.body.classList.remove("body-no-scroll");
    } else {
      document.body.classList.add("body-no-scroll");
    }
    setIsActive(!isActive);
  };

  const handleClick = () => {
    document.body.classList.remove("body-no-scroll");
    setIsActive(false);
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
            <a onClick={handleClick} href="#hero">
              home
            </a>
          </li>
          <li className={styles.navLink}>
            <a onClick={handleClick} href="#about">
              about me
            </a>
          </li>
          <li className={styles.navLink}>
            <a onClick={handleClick} href="#projects">
              projects
            </a>
          </li>
          <li className={styles.navLink}>
            <a onClick={handleClick} href="#footer">
              contact
            </a>
          </li>
        </ul>
        <BurgerMenu toggleMenu={toggleMenu} isActive={isActive} />
      </div>
    </nav>
  );
}

export default Navbar;
