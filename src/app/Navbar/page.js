import React from 'react'
import styles from "../page.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.container}>
        <ul className={styles.uls}>
          <Link id={styles.link} href='/'>Home</Link>
          <Link id={styles.link} href='/blogs'>Blogs</Link>
          <Link id={styles.link} href='/about'>About</Link>
          <Link id={styles.link} href='/contact'>Contact Us</Link>
        </ul>
      </nav>
  )
}

export default Navbar
