import styles from './Features.module.css';

const steps = [
  { 
    number: '01', 
    title: 'Choose Product', 
    description: 'Select from our wide range of premium apparel and gifts.' 
  },
  { 
    number: '02', 
    title: 'Upload Design', 
    description: 'Use our easy editor to upload your artwork or photos.' 
  },
  { 
    number: '03', 
    title: 'We Print & Deliver', 
    description: 'We use high-grade tech to bring your design to life.' 
  }
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>How It <span className="gold-text">Works</span></h2>
          <p className={styles.subtitle}>Simple steps to get your custom products.</p>
        </div>
        
        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.number} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
