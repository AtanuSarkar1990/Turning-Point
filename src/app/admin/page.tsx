'use client';

import { useState } from 'react';
import styles from './admin.module.css';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'products'>('overview');

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1>Admin <span className="gold-text">Panel</span></h1>
          <p>Manage products, orders, and view analytics.</p>
        </div>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <button className={activeTab === 'overview' ? styles.active : ''} onClick={() => setActiveTab('overview')}>Overview</button>
            <button className={activeTab === 'orders' ? styles.active : ''} onClick={() => setActiveTab('orders')}>Orders</button>
            <button className={activeTab === 'products' ? styles.active : ''} onClick={() => setActiveTab('products')}>Products</button>
          </aside>

          <main className={styles.content}>
            {activeTab === 'overview' && (
              <div className={styles.overview}>
                <div className={styles.stats}>
                  <div className={styles.statCard}>
                    <p>Total Revenue</p>
                    <h3>₹1,24,500</h3>
                  </div>
                  <div className={styles.statCard}>
                    <p>Pending Orders</p>
                    <h3>24</h3>
                  </div>
                  <div className={styles.statCard}>
                    <p>Total Customers</p>
                    <h3>450</h3>
                  </div>
                </div>
                <div className={styles.recentActivity}>
                  <h3>Recent Sales</h3>
                  <div className={styles.activityList}>
                    <div className={styles.activityItem}>
                      <p><strong>Custom T-Shirt</strong> sold to Rahul S.</p>
                      <span>2 mins ago</span>
                    </div>
                    <div className={styles.activityItem}>
                      <p><strong>Magic Mug</strong> sold to Priya D.</p>
                      <span>15 mins ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'orders' && (
              <div className={styles.orders}>
                <h3>Manage Orders</h3>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Customer</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#TTP-9921</td>
                      <td>Atanu M.</td>
                      <td>₹499</td>
                      <td><span className={styles.statusPending}>Pending</span></td>
                      <td><button className={styles.actionBtn}>Process</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'products' && (
              <div className={styles.products}>
                <div className={styles.sectionHeader}>
                  <h3>Manage Products</h3>
                  <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Add New</button>
                </div>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Category</th>
                      <th>Base Price</th>
                      <th>Stock</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Premium T-Shirt</td>
                      <td>Apparel</td>
                      <td>₹499</td>
                      <td>500</td>
                      <td><button className={styles.actionBtn}>Edit</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
