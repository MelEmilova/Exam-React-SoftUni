import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './page-skeleton.module.css';

const PageSkeleton = (props) => {
  return (
    <div className={styles.app}>
      <div>
        <Header />
      </div>

      <div >
        {props.children}
      </div>
      <div>
        <Footer />
      </div>

    </div >

  );
}

export default PageSkeleton