import React, { useCallback } from 'react';
import styles from './Input.module.css';

export function Input({ onChangeText, value }) {
  const onChange = useCallback((event) => onChangeText(event.target.value), [onChangeText]);

  return <input className={styles.input} value={value} onChange={onChange} />;
}
