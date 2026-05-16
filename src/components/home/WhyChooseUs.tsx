import styles from './Features.module.css';

const features = [
  { 
    title: 'Premium Quality', 
    description: 'We use the finest materials and latest printing tech.',
    icon: '💎'
  },
  { 
    title: 'Fast Delivery', 
    description: 'Quick turnaround time with reliable shipping partners.',
    icon: '🚀'
  },
  { 
    title: 'Affordable Pricing', 
    description: 'Luxury quality doesn’t always mean luxury prices.',
    icon: '💰'
  },
  { 
    title: 'Custom Support', 
    description: 'Our team is here to help you at every step.',
    icon: '🎧'
  }
];

export default function WhyChooseUs() {
  return (
    <section className={`${styles.section} ${styles.bgDark}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.titleLight}>Why <span className="gold-text">Choose Us</span></h2>
          <p className={styles.subtitleLight}>Experience the difference of professional printing.</p>
        </div>
        
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.featureCard}>
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
