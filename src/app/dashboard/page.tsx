'use client';

import styles from './dashboard.module.css';

const orders = [
  { id: '#TTP-842910', date: 'Oct 12, 2023', total: 1299, status: 'Delivered', items: '2x Premium T-Shirt' },
  { id: '#TTP-310492', date: 'Nov 05, 2023', total: 449, status: 'In Transit', items: '1x Magic Mug' }
];

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <h1>User <span className="gold-text">Dashboard</span></h1>
          <p>Welcome back, John Doe</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <h3>Orders</h3>
              <p className={styles.statValue}>12</p>
            </div>
            <div className={styles.statCard}>
              <h3>Saved Designs</h3>
              <p className={styles.statValue}>5</p>
            </div>
            <div className={styles.statCard}>
              <h3>Rewards</h3>
              <p className={styles.statValue}>250 pts</p>
            </div>
          </div>

          <div className={styles.ordersSection}>
            <h3>Order History</h3>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id}>
                      <td className={styles.orderId}>{order.id}</td>
                      <td>{order.date}</td>
                      <td>{order.items}</td>
                      <td>₹{order.total}</td>
                      <td>
                        <span className={`${styles.status} ${styles[order.status.toLowerCase().replace(' ', '')]}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
