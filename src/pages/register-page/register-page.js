import React, {Component} from 'react';

import PageSkeleton from '../../components/page-skeleton/page-skeleton';
import Title from '../../components/title/title';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import styles from './register-page.module.css'
import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';

class RegisterPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      emailError: false,
      password: '',
      passwordError: false,
      rePassword: '',
      rePasswordError: false
    };
  };

  static contextType = UserContext;

  handleChange = (event, type) => {
    const newState = {}
    newState[type] = event.target.value
    this.setState(newState)
  };

  handleEmailBlur = () => {
    if (!this.state.email.includes('@')) {
      this.setState({
        emailError: true
      });
    }else if (this.state.emailError){
      this.setState({
        emailError: false,
      });
    }
  }

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

  handleRepeatPasswordBlur = () => {
      const { password, rePassword } = this.state;
      if (password !== rePassword) {
        this.setState({
          rePasswordError: true
        });
      } else if (this.state.rePasswordError){
        this.setState({
          rePasswordError: false,
        });
        console.log('All s OK final');
      }
  };


  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    await authenticate('http://localhost:3050/register', {
      email,
      password
    }, (user) => {
      this.context.logIn(user);
      this.props.history.push('/');
    }, (err) => {
      console.log('Error', err);
    }
    );
  };


 render(){
  const { email, password, rePassword, emailError, passwordError, rePasswordError } = this.state;
  return (
      <PageSkeleton>
      <form action="" className={styles.container} onSubmit={this.handleSubmit}>
        <Title title="Register" />
       
        <Input
           type='email' 
            value={email} 
            onChange={(e) => this.handleChange(e, 'email')}
            label='Email'
            id='email' 
            onBlur={this.handleEmailBlur}
            />
            
        {emailError ? (<div>Errror missing @</div>) : null}
          <Input
           type='password'
            value={password}
            onChange={(e) =>  this.handleChange(e, 'password')}
            label='Password'
            id='password' 
            onBlur={this.handlePasswordBlur}
            />
            {passwordError ? (<div>Password must be at least 8 characters long</div>) : null}
            

          <Input id='rePassword' 
          type='password'
          value={rePassword} 
          label='RePassword'
          onBlur={this.handleRepeatPasswordBlur}
          onChange={(e) =>  this.handleChange(e, 'rePassword')}
          />
          {rePasswordError ? (<div>RePassword does not mutch</div>) : null}
     
        <Button nameButton="Register"/>
       </form>
      </PageSkeleton>
    )
  }
}

export default RegisterPage;