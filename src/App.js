import React, { Component } from 'react';
import UserContext from './Context';

function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return cookieValue ? cookieValue[2] : null;
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: null,
      user: null
    };
  };

  logIn = (user) => {
    this.setState({
      loggedIn: true,
      user
    });
  };


  logOut = () => {
    document.cookie = 'x-auth-token=';
    this.setState({
      loggedIn: false,
      user: null
    });
  };


  componentDidMount() {
    const token = getCookie('x-auth-token');

    if (!token) {
      return;
    }

    fetch('http://localhost:3050/verify', {
      method: "POST",
      body: JSON.stringify({
        token
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(promise => {
      return promise.json()
    }).then(data => {
      if (data.status) {
        this.logIn({
          email: data.user.email,
          id: data.user._id
        })
      } else {
        this.logOut()
      }
    });
  };



  render() {
    const { loggedIn, user } = this.state;

    return (
      <UserContext.Provider value={{
        loggedIn,
        user,
        logIn: this.logIn,
        logOut: this.logOut
      }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default App