import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <nav className={styles.container}>
        <ul className={styles.uls}>
          <Link id={styles.link} href='/'>Home</Link>
          <Link id={styles.link} href='/blogs'>Blogs</Link>
          <Link id={styles.link} href='/about'>About</Link>
          <Link id={styles.link} href='/contact'>Contact Us</Link>
        </ul>
      </nav>

      <div className={styles.center}>
        <h1>HUNTING CODER</h1>
      </div>
      <div className={styles.description}>
        <p>A blog for coders by hunting coders</p>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>How to learn Nextjs</h3>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://react.dev/learn"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>How to learn Reactjs</h3>
          <p>Learn about React.js in an interactive course</p>
        </a>

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Learn Javascript</h3>
          <p>Explore all Javascript concepts</p>
        </a>

        <a
          href="https://www.w3schools.com/nodejs/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Learn NodeJs</h3>
          <p>Explore all the concepts of Node Js</p>
        </a>
      </div>
    </main>
  );
}
