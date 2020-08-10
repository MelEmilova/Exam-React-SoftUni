import React from 'react';
import PageSkeleton from '../../components/page-skeleton/page-skeleton';
import styles from './aboutUs-page.module.css'

const ContactUs = () => {
  return (

    <PageSkeleton>
      <div className={styles.block}>
        <h1 className={styles.h1} >All about us</h1>
        <p name="" id="" cols="30" rows="10">
        Да направя описание на сайта</p>
      </div>
    </PageSkeleton>


  )
}

export default ContactUs;