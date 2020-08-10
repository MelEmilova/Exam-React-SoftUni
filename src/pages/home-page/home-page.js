import React, { Component } from 'react';

import PageSkeleton from '../../components/page-skeleton/page-skeleton';
import UserContext from '../../Context';
import styles from './home-page.module.css';



class HomePage extends Component {
  static contextType = UserContext;


  loginRedirect(event) {
    event.event.preventDefault();
    window.location.href = 'http://localhost:3000/login'
  }

  render() {
    return (
      <div>
        <PageSkeleton>
          <div className={styles.block}>
            <h1 className={styles.block_h1}>Save Recipe</h1>
            <p>

            </p>
            <p className={styles.block_p}>
              CREATE AN ACCOUNT & SAVE YOUR RECIPES
            </p>
            {/* <form action="" onSubmit={this.loginRedirect}>
              <Button nameButton="SIGN UP NOW" />
            </form> */}
          </div>
        </PageSkeleton>
      </div>
    )
  }

}

export default HomePage;