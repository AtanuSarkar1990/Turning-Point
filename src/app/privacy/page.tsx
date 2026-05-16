export default function PrivacyPage() {
  return (
    <div style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
      <div className="container">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Privacy <span className="gold-text">Policy</span></h1>
        <div style={{ lineHeight: '1.6', color: 'var(--secondary-text)' }}>
          <p style={{ marginBottom: '1rem' }}>Last updated: October 2023</p>
          <h3 style={{ color: 'var(--foreground)', marginTop: '2rem', marginBottom: '1rem' }}>1. Data Collection</h3>
          <p>We collect information you provide directly to us when you create an account, place an order, or contact us. This includes your name, email, shipping address, and payment information.</p>
          
          <h3 style={{ color: 'var(--foreground)', marginTop: '2rem', marginBottom: '1rem' }}>2. How We Use Your Data</h3>
          <p>We use your data to process orders, communicate with you about your account, and improve our services. We do not sell your personal information to third parties.</p>
          
          <h3 style={{ color: 'var(--foreground)', marginTop: '2rem', marginBottom: '1rem' }}>3. Data Security</h3>
          <p>We implement industry-standard security measures to protect your personal data. However, no method of transmission over the internet is 100% secure.</p>
          
          <h3 style={{ color: 'var(--foreground)', marginTop: '2rem', marginBottom: '1rem' }}>4. Cookies</h3>
          <p>We use cookies to enhance your browsing experience and analyze website traffic. You can manage your cookie preferences through your browser settings.</p>
        </div>
      </div>
    </div>
  );
}
