export default function ContactPage() {
  return (
    <div style={{ padding: '100px 0', backgroundColor: 'var(--background)' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: '3rem' }}>
          Get in <span className="gold-text">Touch</span>
        </h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <div>
            <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>Contact Information</h3>
            <p style={{ marginBottom: '1rem', color: 'var(--secondary-text)' }}>
              <strong>Phone / WhatsApp:</strong><br />
              +91 9474766771
            </p>
            <p style={{ marginBottom: '1rem', color: 'var(--secondary-text)' }}>
              <strong>Address:</strong><br />
              60, Mithapukur Road, Durgabari,<br />
              Towards Narkel Bagan Ln, near Water Pump House,<br />
              Bardhaman, West Bengal 713104, India
            </p>
            <p style={{ color: 'var(--secondary-text)' }}>
              <strong>Opening Hours:</strong><br />
              Mon - Sat: 10:00 AM - 8:00 PM
            </p>
          </div>

          <div>
            <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontSize: '1.5rem' }}>Send a Message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input type="text" placeholder="Your Name" style={{ padding: '12px', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--card-bg)', color: 'var(--foreground)' }} />
              <input type="email" placeholder="Your Email" style={{ padding: '12px', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--card-bg)', color: 'var(--foreground)' }} />
              <textarea placeholder="Your Message" rows={5} style={{ padding: '12px', border: '1px solid var(--border-color)', borderRadius: '8px', background: 'var(--card-bg)', color: 'var(--foreground)' }}></textarea>
              <button type="button" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
