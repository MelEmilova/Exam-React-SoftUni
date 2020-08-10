import React from 'react';
import styles from './button.module.css';

const SubmitButton = ({nameButton}) => {
  return (
    <button type='submit' className={styles.button} >{nameButton}</button>
  )
}

export default SubmitButton;