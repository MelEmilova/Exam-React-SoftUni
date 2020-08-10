
import React from 'react';
import styles from './footer.module.css';
import Link from '../link/link';
import getNavigation from '../../utils/navigation-footer'

const Footer = () => {
  const links = getNavigation();
  return (
    <footer className={styles.footer}>
      <ul>
        {
          links.map((navElement) => {
            return (
              <Link 
               key={navElement.title}  
              href={navElement.link} 
              title={navElement.title} 
              type="footer" />
            )
          })
        }
      </ul>
      <p className={styles["footer_p"]} >Something out of nothing in my kitchen  &#169; 2020</p>
    </footer>
  )
}

export default Footer;