import React from 'react';
import styles from './styles.module.css';

export function Table({ children }) {
  return (
    <table className={styles.tableData}>
      <thead className={styles.thead}>
        <td className={styles.td}>City</td>
        <td className={styles.td}>Country</td>
        <td className={styles.td}>t, &#8451;</td>
        <td className={styles.td}>t, &#8457;</td>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
