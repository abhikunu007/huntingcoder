import React from 'react'
import styles from '../styles/about.module.css'

const About = () => {
  return (
    <div>
      <main className={styles.main}>
          <section className={styles.sec}>
            <h2 className={styles.h2}>Our Mission</h2>
            <p>
              Welcome to <strong>Hunting Coder</strong>, your go-to blog for all things tech. Our mission is to provide 
              insightful, in-depth, and up-to-date articles on the latest trends in technology, programming, and software development.
            </p>
          </section>
          <section className={styles.sec}>
            <h2>Who We Are</h2>
            <p>
              At <strong>Hunting Coder</strong>, we are a team of passionate developers, tech enthusiasts, and writers who are dedicated 
              to sharing our knowledge and experiences with the tech community. Our goal is to make complex tech topics accessible to 
              everyone, from beginners to experienced professionals.
            </p>
          </section>
          <section className={styles.sec}>
            <h2>What We Offer</h2>
            <ul className={styles.uls}>
              <li>Detailed tutorials and guides on various programming languages and frameworks.</li>
              <li>Latest news and updates in the tech industry.</li>
              <li>Insights and analyses on emerging technologies.</li>
              <li>Tips and tricks to enhance your coding skills.</li>
            </ul>
          </section>
          <section className={styles.sec}>
            <h2>Join Us</h2>
            <p>
              We believe in the power of community and collaboration. If you're passionate about technology and want to contribute 
              to our blog, feel free to reach out to us. Together, we can continue to grow and learn in this ever-evolving tech landscape.
            </p>
          </section>
          <section className={styles.sec}>
            <h2>Contact Us</h2>
            <p>
              Have any questions, suggestions, or feedback? We'd love to hear from you! You can contact us at 
              <a href="mailto:contact@huntingcoder.com"> contact@huntingcoder.com</a>.
            </p>
          </section>
        </main>
    </div>
  )
}

export default About