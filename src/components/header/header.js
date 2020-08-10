import React, { Component } from 'react';
import styles from './header.module.css';
import getNavigation from '../../utils/navigation-header';
import Link from '../link/link';
import UserContext from '../../Context';
import logo from '../../components/images/logo.png';


class Header extends Component {

  static contextType = UserContext;

  render() {
    const {loggedIn, user} = this.context;

    const links = getNavigation(loggedIn, user);

    return (
      <header className={styles.header}>
        <img className={styles.logo} src={logo} alt="" />
        <h2 className={styles.header_p}>Something out of nothing in my kitchen</h2>
        <ul>
          {
            links.map((navElement) => {
              return (
                <Link
                  key={navElement.title}
                  href={navElement.link}
                  title={navElement.title}
                  type="header" />
              );
            })
          }
        </ul>
      </header>
    );
  };
};

export default Header;