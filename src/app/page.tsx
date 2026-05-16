import Hero from "@/components/home/Hero";
import ProductShowcase from "@/components/home/ProductShowcase";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      
      {/* Call to Action Banner */}
      <section style={{ 
        padding: '80px 0', 
        backgroundColor: 'var(--foreground)', 
        color: 'var(--background)',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ 
            fontFamily: 'var(--font-heading)', 
            fontSize: '2.5rem', 
            marginBottom: '1rem' 
          }}>
            Ready to <span className="gold-text">Start Designing?</span>
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '2.5rem', 
            opacity: 0.8,
            maxWidth: '600px',
            margin: '0 auto 2.5rem'
          }}>
            Create your unique products today and turn your creative ideas into high-quality reality.
          </p>
          <Link href="/products" className="btn-primary" style={{ backgroundColor: 'var(--gold-accent)', borderColor: 'var(--gold-accent)', color: '#000' }}>
            Get Started Now
          </Link>
        </div>
      </section>
    </>
  );
}
