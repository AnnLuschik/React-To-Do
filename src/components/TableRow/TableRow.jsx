import React from 'react';
import styles from './styles.module.css';

export function TableRow({ data }) {
  const { city, country, temperature: tempC } = data;
  const tempF = Math.ceil((tempC * 1.8) + 32);

  return (
    <tr className={styles.tr}>
      <td className={styles.td}>{city}</td>
      <td className={styles.td}>{country}</td>
      <td className={styles.td}>{tempC}</td>
      <td className={styles.td}>{tempF}</td>
    </tr>
  );
}
