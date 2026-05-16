import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandSection}>
          <h2 className={styles.logo}>The Turning Point</h2>
          <p className={styles.tagline}>Turn Your Ideas Into Reality</p>
          <div className={styles.contactInfo}>
            <p><strong>Call / WhatsApp:</strong> +91 9474766771</p>
            <p>
              <strong>Address:</strong><br />
              60, Mithapukur Road, Durgabari,<br />
              Towards Narkel Bagan Ln, near Water Pump House,<br />
              Bardhaman, West Bengal 713104, India
            </p>
          </div>
        </div>

        <div className={styles.linksSection}>
          <h3>Products</h3>
          <ul>
            <li><Link href="/products?category=t-shirts">Custom T-Shirts</Link></li>
            <li><Link href="/products?category=mugs">Printed Mugs</Link></li>
            <li><Link href="/products?category=mugs">Magic Mugs</Link></li>
            <li><Link href="/products?category=posters">Posters</Link></li>
            <li><Link href="/products?category=canvas">Canvas Prints</Link></li>
          </ul>
        </div>

        <div className={styles.linksSection}>
          <h3>Company</h3>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/shipping">Shipping & Returns</Link></li>
          </ul>
        </div>

        <div className={styles.socialSection}>
          <h3>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} The Turning Point. All rights reserved.</p>
      </div>
    </footer>
  );
}
