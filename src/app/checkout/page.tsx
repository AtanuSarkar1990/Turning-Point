'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './checkout.module.css';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');
  const [orderId, setOrderId] = useState<number | null>(null);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'details') {
      setStep('payment');
    } else if (step === 'payment') {
      // Simulate order processing
      const lastId = localStorage.getItem('ttp_last_order_id');
      const nextId = lastId ? parseInt(lastId) + 1 : 10000;
      localStorage.setItem('ttp_last_order_id', nextId.toString());
      setOrderId(nextId);
      setStep('success');
      clearCart();
    }
  };

  if (step === 'success') {
    return (
      <div className={styles.success}>
        <div className="container">
          <div className={styles.successCard}>
            <div className={styles.successIcon}>🎉</div>
            <h2>Order <span className="gold-text">Successful!</span></h2>
            <p>Thank you for shopping with The Turning Point. Your order has been placed and will be processed shortly.</p>
            <p className={styles.orderId}>Order ID: #Turning Point-{orderId}</p>
            <a href="/" className="btn-primary" style={{ marginTop: '2rem' }}>Back to Home</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>Secure <span className="gold-text">Checkout</span></h1>
        
        <div className={styles.layout}>
          <form className={styles.form} onSubmit={handlePlaceOrder}>
            {step === 'details' ? (
              <div className={styles.section}>
                <h3>Shipping Details</h3>
                <div className={styles.grid}>
                  <div className={styles.field}>
                    <label>Full Name</label>
                    <input type="text" required placeholder="John Doe" />
                  </div>
                  <div className={styles.field}>
                    <label>Phone Number</label>
                    <div className={styles.phoneInput}>
                      <span className={styles.prefix}>+91</span>
                      <input 
                        type="tel" 
                        required 
                        placeholder="00000 00000" 
                        pattern="[0-9]{10}" 
                        title="Please enter a valid 10-digit phone number"
                      />
                    </div>
                  </div>
                  <div className={`${styles.field} ${styles.full}`}>
                    <label>Address</label>
                    <textarea required placeholder="House No, Street, Landmark" rows={3}></textarea>
                  </div>
                  <div className={styles.field}>
                    <label>City</label>
                    <input type="text" required placeholder="Bardhaman" />
                  </div>
                  <div className={styles.field}>
                    <label>Pincode</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="713101" 
                      pattern="[0-9]{6}"
                      title="Pincode must be 6 digits"
                    />
                  </div>
                </div>
                <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
                  Continue to Payment
                </button>
              </div>
            ) : (
              <div className={styles.section}>
                <h3>Payment Method</h3>
                <div className={styles.paymentOptions}>
                  <label className={`${styles.paymentCard} ${paymentMethod === 'upi' ? styles.active : ''}`}>
                    <input type="radio" name="payment" value="upi" checked={paymentMethod === 'upi'} onChange={() => setPaymentMethod('upi')} />
                    <div className={styles.paymentInfo}>
                      <span className={styles.methodTitle}>UPI</span>
                      <span className={styles.methodDesc}>Pay using GPay, PhonePe, or Paytm</span>
                    </div>
                  </label>
                  <label className={`${styles.paymentCard} ${paymentMethod === 'card' ? styles.active : ''}`}>
                    <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                    <div className={styles.paymentInfo}>
                      <span className={styles.methodTitle}>Debit/Credit Card</span>
                      <span className={styles.methodDesc}>Secure payment via Razorpay</span>
                    </div>
                  </label>
                  <label className={`${styles.paymentCard} ${paymentMethod === 'cod' ? styles.active : ''}`}>
                    <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                    <div className={styles.paymentInfo}>
                      <span className={styles.methodTitle}>Cash on Delivery</span>
                      <span className={styles.methodDesc}>Pay when you receive the product</span>
                    </div>
                  </label>
                </div>
                <div className={styles.actionRow}>
                  <button type="button" onClick={() => setStep('details')} className={styles.backBtn}>Back</button>
                  <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
                    Place Order (₹{cartTotal})
                  </button>
                </div>
              </div>
            )}
          </form>

          <div className={styles.summary}>
            <h3>Order Summary</h3>
            <div className={styles.summaryItems}>
              {cart.map(item => (
                <div key={item.id} className={styles.summaryItem}>
                  <span>{item.name} (x{item.quantity})</span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className={styles.totalRow}>
              <span>Total Amount</span>
              <span>₹{cartTotal}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
