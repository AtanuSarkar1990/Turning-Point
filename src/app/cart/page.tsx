'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import styles from './cart.module.css';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <div className="container">
          <h2>Your cart is <span className="gold-text">empty</span></h2>
          <p>Looks like you haven't added anything yet.</p>
          <Link href="/products" className="btn-primary" style={{ marginTop: '2rem' }}>
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>Shopping <span className="gold-text">Cart</span></h1>
        
        <div className={styles.layout}>
          <div className={styles.items}>
            {cart.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.imageWrapper}>
                  <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <div className={styles.itemInfo}>
                  <div className={styles.itemHeader}>
                    <h3>{item.name}</h3>
                    <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>&times;</button>
                  </div>
                  <p className={styles.itemMeta}>{item.size} | {item.material}</p>
                  <div className={styles.itemFooter}>
                    <div className={styles.qtyControls}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <p className={styles.itemPrice}>₹{item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <h3>Order Summary</h3>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>FREE</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total</span>
              <span>₹{cartTotal}</span>
            </div>
            <Link href="/checkout" className={`btn-primary ${styles.checkoutBtn}`}>
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
