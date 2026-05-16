import Link from 'next/link';

export default function CustomDesignPage() {
  return (
    <div style={{ padding: '100px 0', textAlign: 'center', backgroundColor: 'var(--background)' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
          Custom <span className="gold-text">Design Studio</span>
        </h1>
        <p style={{ color: 'var(--secondary-text)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Our full design studio is coming soon! For now, you can customize any of our individual products from the catalog.
        </p>
        <Link href="/products" className="btn-primary">
          Go to Product Catalog
        </Link>
      </div>
    </div>
  );
}
