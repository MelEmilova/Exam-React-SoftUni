import React, { Component } from 'react';
import PageSkeleton from '../../components/page-skeleton/page-skeleton'
import UserContext from '../../Context';
import Button from '../../components/button/button'; 


class LogOutPage extends Component {

  static contextType = UserContext;
  Logout = () => {
    localStorage.clear();
    document.cookie = 'x-auth-token='
    window.location.href='http://localhost:3000/'
  }

  render() {
    return (
      <PageSkeleton>  
        <Button  onClick={this.Logout()}/>
      </PageSkeleton>

    )
  }
}
export default LogOutPage;