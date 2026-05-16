export default function ShippingPage() {
  return (
    <div style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
      <div className="container">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Shipping & <span className="gold-text">Returns</span></h1>
        <div style={{ lineHeight: '1.6', color: 'var(--secondary-text)' }}>
          <h3 style={{ color: 'var(--foreground)', marginTop: '2rem', marginBottom: '1rem' }}>1. Shipping Policy</h3>
          <p>We ship nationwide across India. Orders are typically processed within 2-3 business days. Delivery times vary by location but usually take 5-7 business days after processing.</p>
          
          <h3 style={{ color: 'var(--foreground)', marginTop: '2rem', marginBottom: '1rem' }}>2. Shipping Costs</h3>
          <p>We offer FREE shipping on all orders above ₹999. For orders below this amount, a flat shipping fee of ₹50 will be charged.</p>
          
          <h3 style={{ color: 'var(--foreground)', marginTop: '2rem', marginBottom: '1rem' }}>3. Return & Refund Policy</h3>
          <p>Due to the personalized nature of our products, we do not accept returns unless the product is defective or damaged upon arrival. If you receive a damaged item, please contact us within 48 hours of delivery with photos of the damage.</p>
          
          <h3 style={{ color: 'var(--foreground)', marginTop: '2rem', marginBottom: '1rem' }}>4. Cancellations</h3>
          <p>Orders can only be canceled within 1 hour of placement, as we start the printing process shortly after. Please contact us immediately if you need to cancel an order.</p>
        </div>
      </div>
    </div>
  );
}
