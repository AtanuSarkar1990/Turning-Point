export default function TermsPage() {
  return (
    <div style={{ padding: '80px 0', backgroundColor: 'var(--background)' }}>
      <div className="container">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Terms & <span className="gold-text">Conditions</span></h1>
        <div style={{ lineHeight: '1.6', color: 'var(--secondary-text)' }}>
          <p style={{ marginBottom: '1rem' }}>Last updated: October 2023</p>
          <h3 style={{ color: 'var(--foreground)', marginTop: '2rem', marginBottom: '1rem' }}>1. Introduction</h3>
          <p>By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our website.</p>
          
          <h3 style={{ color: 'var(--foreground)', marginTop: '2rem', marginBottom: '1rem' }}>2. Intellectual Property</h3>
          <p>All content, designs, and materials on this website are the property of The Turning Point or its content suppliers. You may not reproduce, distribute, or create derivative works from this content without express written permission.</p>
          
          <h3 style={{ color: 'var(--foreground)', marginTop: '2rem', marginBottom: '1rem' }}>3. Product Customization</h3>
          <p>Users are responsible for the content they upload for customization. The Turning Point reserves the right to refuse printing any content that is illegal, offensive, or violates third-party intellectual property rights.</p>
          
          <h3 style={{ color: 'var(--foreground)', marginTop: '2rem', marginBottom: '1rem' }}>4. Limitation of Liability</h3>
          <p>The Turning Point shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.</p>
        </div>
      </div>
    </div>
  );
}
