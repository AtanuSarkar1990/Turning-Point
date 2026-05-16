'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { products } from '@/data/products';
import styles from './products.module.css';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');

  const filteredProducts = categoryFilter 
    ? products.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase())
    : products;

  const subCategories = [
    { name: 'Half Sleeve', icon: '/images/tshirt-mockup.png' },
    { name: 'Oversized', icon: '/images/tshirt-mockup.png' },
    { name: 'Full Sleeve', icon: '/images/tshirt-mockup.png' },
    { name: 'V-Neck', icon: '/images/tshirt-mockup.png' },
    { name: 'Henley', icon: '/images/tshirt-mockup.png' },
    { name: 'Graphic', icon: '/images/tshirt-mockup.png' },
    { name: 'Polo', icon: '/images/tshirt-mockup.png' },
  ];

  const sidebarFilters = {
    colors: ['#FFD700', '#8B4513', '#A52A2A', '#800000', '#FF0000', '#FF00FF', '#8A2BE2', '#FFFF00', '#0000FF', '#008000', '#FFA500', '#FF6347', '#FFFFFF'],
    categories: [
      { name: 'All Products', slug: '' },
      { name: 'T-Shirts', slug: 't-shirts' },
      { name: 'Mugs & Cups', slug: 'mugs' },
      { name: 'Canvas Art', slug: 'canvas' },
      { name: 'Posters', slug: 'posters' }
    ]
  };

  return (
    <div className={styles.page}>
      <div className="container">
        <nav className={styles.breadcrumb}>
          <Link href="/">Home</Link> / 
          <Link href="/products">Products</Link> / 
          <span>{categoryFilter ? categoryFilter.replace('-', ' ') : 'All Collections'}</span>
        </nav>

        <div className={styles.mainContent}>
            <header className={styles.header}>
              <h1 className={styles.title}>
                {categoryFilter ? (
                  <>Custom <span className="gold-text">{categoryFilter.replace('-', ' ')}</span></>
                ) : (
                  <>All <span className="gold-text">Collections</span></>
                )}
              </h1>
            </header>

            {/* Sub-category Slider (only for t-shirts) */}
            {(categoryFilter === 't-shirts') && (
              <div className={styles.subCategorySlider}>
                {subCategories.map((sub, i) => (
                  <div key={i} className={styles.subCategoryItem}>
                    <div className={styles.subCategoryIcon}>
                      <Image src={sub.icon} alt={sub.name} width={60} height={60} style={{ objectFit: 'contain' }} />
                    </div>
                    <span className={styles.subCategoryName}>{sub.name}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Product Grid */}
            <div className={styles.grid}>
              {filteredProducts.map((product) => {
                const oldPrice = product.basePrice * 2.5;
                const savings = Math.round(((oldPrice - product.basePrice) / oldPrice) * 100);
                
                return (
                  <Link href={`/product/${product.id}`} key={product.id} className={styles.card}>
                    <div className={styles.imageWrapper}>
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill
                        style={{ objectFit: 'contain', padding: '20px' }}
                        className={styles.image}
                      />
                      <div className={styles.rating}>
                        <span>⭐ 4.8</span>
                      </div>
                      <div className={styles.badge}>SALE</div>
                    </div>
                    
                    <div className={styles.info}>
                      <h2 className={styles.productName}>{product.name}</h2>
                      <div className={styles.priceRow}>
                        <span className={styles.currentPrice}>₹{product.basePrice}</span>
                        <div>
                          <span className={styles.oldPrice}>₹{oldPrice.toFixed(0)}</span>
                          <span className={styles.savings}> Save {savings}%</span>
                        </div>
                      </div>
                      
                      <div className={styles.express}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                        Express
                      </div>
                      
                      <div className={styles.swatches}>
                        {['#000', '#fff', '#000080', '#FF0000', '#4169E1'].map((c, idx) => (
                          <div key={idx} className={styles.swatch} style={{ backgroundColor: c }} />
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
        </div>
      </div>
    </div>
  );
}
