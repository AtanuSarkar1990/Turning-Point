import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Small Business Owner',
    text: 'The Turning Point delivered exactly what I needed for my team. The T-shirt quality is exceptional and the print hasn’t faded even after several washes.',
    avatar: '👨‍💼'
  },
  {
    name: 'Priya Das',
    role: 'Creative Designer',
    text: 'I love the customization tool! It was so easy to upload my artwork and see how it would look on a magic mug. Highly recommended!',
    avatar: '👩‍🎨'
  },
  {
    name: 'Amit Verma',
    role: 'Home Decor Enthusiast',
    text: 'The canvas prints are museum-quality. They’ve completely transformed my living room. Fast delivery and great support.',
    avatar: '🏠'
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>What Our <span className="gold-text">Clients Say</span></h2>
          <p className={styles.subtitle}>Real stories from satisfied customers.</p>
        </div>
        
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.quote}>“</div>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.footer}>
                <div className={styles.avatar}>{testimonial.avatar}</div>
                <div>
                  <h4 className={styles.name}>{testimonial.name}</h4>
                  <p className={styles.role}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
