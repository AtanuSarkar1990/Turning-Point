export default function HowItWorksPage() {
  return (
    <div style={{ padding: '100px 0', backgroundColor: 'var(--background)' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: '3rem' }}>
          How It <span className="gold-text">Works</span>
        </h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</div>
            <h3>1. Choose Product</h3>
            <p style={{ color: 'var(--secondary-text)' }}>Select from our range of T-Shirts, Mugs, or Canvas prints.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎨</div>
            <h3>2. Customize</h3>
            <p style={{ color: 'var(--secondary-text)' }}>Upload your design or choose from our trending library.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💳</div>
            <h3>3. Place Order</h3>
            <p style={{ color: 'var(--secondary-text)' }}>Securely checkout using UPI, Card, or Cash on Delivery.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📦</div>
            <h3>4. Fast Delivery</h3>
            <p style={{ color: 'var(--secondary-text)' }}>Your custom product is printed and shipped to your doorstep.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
