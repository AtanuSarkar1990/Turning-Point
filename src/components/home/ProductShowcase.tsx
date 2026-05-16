import Link from 'next/link';
import styles from './ProductShowcase.module.css';

const categories = [
  { id: 't-shirts', name: 'Custom T-Shirts', description: 'Premium cotton shirts with your design.', icon: '👕' },
  { id: 'mugs', name: 'Printed Mugs', description: 'Start your day with a personal touch.', icon: '☕' },
  { id: 'magic-mugs', name: 'Magic Mugs', description: 'Surprise everyone with heat-reveal art.', icon: '✨' },
  { id: 'posters', name: 'Wall Posters', description: 'High-resolution prints for your walls.', icon: '🖼️' },
  { id: 'canvas', name: 'Canvas Prints', description: 'Turn your photos into museum art.', icon: '🎨' },
  { id: 'stickers', name: 'Custom Stickers', description: 'Durable stickers for any surface.', icon: '🏷️' },
];

export default function ProductShowcase() {
  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our <span className="gold-text">Categories</span></h2>
          <p className={styles.subtitle}>Choose from our wide range of premium printing services.</p>
        </div>
        
        <div className={styles.grid}>
          {categories.map((category) => (
            <Link href={`/products?category=${category.id}`} key={category.id} className={styles.card}>
              <div className={styles.icon}>{category.icon}</div>
              <h3 className={styles.categoryName}>{category.name}</h3>
              <p className={styles.categoryDescription}>{category.description}</p>
              <span className={styles.learnMore}>Explore &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
