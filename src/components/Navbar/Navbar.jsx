import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../Images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  function closeMenu() {
    setMenuOpen(false);
  }
  return (
    <header className={styles.navbar}>
      <a className={styles.brand} href="#" onClick={closeMenu}>
        <img
          src={logo}
          alt="Marketing Association logo"
          className={styles.logo}
        />
        <span>Marketing Association</span>
      </a>
      <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <a href="#" className={styles.navBtn} onClick={closeMenu}>
          Home
        </a>
        <a href="#" className={styles.navBtn} onClick={closeMenu}>
          News
        </a>
        <a href="#" className={styles.navBtn} onClick={closeMenu}>
          Contact Us
        </a>
        <a href="#" className={styles.navBtn} onClick={closeMenu}>
          Login/Register
        </a>
      </nav>

      <button
        type="button"
        className={styles.menuToggle}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
      >
        {menuOpen ? "x" : "☰"}
      </button>
    </header>
  );
}
