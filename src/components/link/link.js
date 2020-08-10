import React from 'react';
import styles from './link.module.css';
import {Link} from 'react-router-dom'

const LinkComonent = ({ title, href }) => {
  return (
    <div className={styles.linkItem}>
      <Link to={href} className={styles['aTag-Link']}>
        {title}
      </Link>
    </div>
  )
}


export default LinkComonent;