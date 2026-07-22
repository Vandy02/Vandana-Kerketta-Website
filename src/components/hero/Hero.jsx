import React from 'react'
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Vandana! </h1>
                <p className={styles.description}>I'm a full-stack developer with 2+ years
                    of experience in software development,
                    passionate about building scalable and
                    user-focused applications. Based in the
                    United States, I'm always excited to connect
                    and collaborate—feel free to reach out!</p>
                <a href="https://drive.google.com/file/d/1GcOhiBWniuyDJ7zOKyDu0QV9EwvWclM7/view?usp=sharing" className={styles.contactBtn}> My Resume </a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="heroImage" className={styles.heroImg} />
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};
