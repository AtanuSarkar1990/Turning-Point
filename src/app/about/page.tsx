export default function AboutPage() {
  return (
    <div style={{ padding: '100px 0', backgroundColor: 'var(--background)' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>
          About <span className="gold-text">The Turning Point</span>
        </h1>
        <div style={{ lineHeight: '1.8', color: 'var(--foreground)', fontSize: '1.1rem', maxWidth: '800px' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Welcome to <strong>The Turning Point</strong>, your destination for premium custom printing services in Bardhaman, West Bengal. Our mission is to "Turn Your Ideas Into Reality" by providing high-quality, personalized products that speak to your unique style.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            Whether you're looking for a custom T-shirt for a special event, a magic mug for a loved one, or professional canvas prints for your home decor, we combine the latest printing technology with a passion for excellence to deliver results that wow.
          </p>
          <p>
            Visit us at our physical location in Bardhaman or explore our online catalog to start creating your unique pieces today.
          </p>
        </div>
      </div>
    </div>
  );
}
