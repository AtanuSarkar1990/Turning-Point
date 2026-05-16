import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={`${styles.content} animate-fade-in`}>
          <h1 className={styles.title}>
            Turn Your <span className="gold-text">Ideas</span> <br />
            Into Reality
          </h1>
          <p className={styles.subtitle}>
            Premium custom printing for T-Shirts, Mugs, & unique gifts. 
            Experience luxury quality with a personal touch.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/products" className={`btn-primary ${styles.heroBtnPrimary}`}>
              Start Designing
            </Link>
            <Link href="/how-it-works" className={`btn-outline ${styles.heroBtnOutline}`}>
              Learn More
            </Link>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.imageBackdrop}></div>
          <Image 
            src="/images/hero.png" 
            alt="Custom Printing Showcase" 
            width={600} 
            height={600} 
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
