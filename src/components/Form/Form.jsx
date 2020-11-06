import React, { useCallback } from 'react';
import styles from './styles.module.css';

export function Form({ onSubmit, children }) {
  const onSubmitHandler = useCallback((event) => {
    event.preventDefault();
    onSubmit();
  }, [onSubmit]);

  return <form className={styles.form} onSubmit={onSubmitHandler}>{children}</form>;
}
