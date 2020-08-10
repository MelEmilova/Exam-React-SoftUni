import React from 'react';
import styles from './input.module.css'

const Input = ({ id, label, value, onChange, type, onBlur }) => {

  return (

    <div className={styles.input_feld}>
      <label htmlFor={id}>
        {label}:
    </label>
      <input value={value} id={id} onChange={onChange} type={type} onBlur={onBlur} />
    </div>


  )
}

export default Input;