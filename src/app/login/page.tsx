'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './login.module.css';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.card}>
          <h2 className={styles.title}>
            {isLogin ? 'Welcome ' : 'Join '}
            <span className="gold-text">Back</span>
          </h2>
          <p className={styles.subtitle}>
            {isLogin ? 'Login to access your orders and designs.' : 'Create an account to start your journey.'}
          </p>

          <form className={styles.form}>
            {!isLogin && (
              <div className={styles.field}>
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
            )}
            <div className={styles.field}>
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>
            <div className={styles.field}>
              <label>Password</label>
              <input type="password" placeholder="••••••••" />
            </div>
            
            <button type="button" className={`btn-primary ${styles.submitBtn}`}>
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <p className={styles.toggle}>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Register Here' : 'Login Here'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
