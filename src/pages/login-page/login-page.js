import React, { Component } from 'react';

import PageSkeleton from '../../components/page-skeleton/page-skeleton';
import Title from '../../components/title/title';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import styles from './login-page.module.css';
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      passwordError:"",
    }
  };

  static contextType = UserContext;

  handleChange = (event, type) => {
    const newState = {}
    newState[type] = event.target.value
    this.setState(newState)
  };


  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    await authenticate('http://localhost:3050/login', {
      email,
      password
    }, (user) => {
      this.context.logIn(user)
      this.props.history.push('/')
    }, (err) => {
      console.log('Error', err);
    }
    );
  };


  handlePasswordBlur = () => {
    const { password } = this.state;
    if (password.length < 8) {
      this.setState({
        passwordError: true
      });
    } else if (this.state.passwordError){
      this.setState({
        passwordError: false
      });
    }
};

  render() {
    const { email, password, passwordError} = this.state;
    return (
      <PageSkeleton>
        <form className={styles.container} onSubmit={this.handleSubmit}>
          <Title title="Login" />
          <Input
            type="text"
            value={email}
            onChange={(e) => this.handleChange(e, 'email')}
            label="Email"
            id="email"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => this.handleChange(e, 'password')}
            label="Password"
            id="password"
            onBlur={this.handlePasswordBlur}
          />
              {passwordError ? (<div>Password must be at least 8 characters long</div>) : null}
          <Button type='submit' nameButton="Login" />
        </form>
      </PageSkeleton>

    );
  };
};

export default LoginPage;