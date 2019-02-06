import React, { Component } from 'react';
import Login from "../Login/Login";
import SignUp from '../SignUp/SignUp';
import '../Login/login.css'
import '../App/App.css'

class RenderLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoginOpen: true,
      isSignUpOpen: false
    }
  }

  showLoginBox() {
    this.setState({
      isLoginOpen: true, isSignUpOpen: false
    })
  }
  showSignupBox() {
    this.setState({
      isSignUpOpen: true, isLoginOpen: false
    })
  }
  render() {
    return (
      <div className="box-all">
        <div className="box-controller">

          <div className='controller'
            onClick={this.showLoginBox.bind(this)}>
            Login
        </div>


          <div className='controller'
            onClick={this.showSignupBox.bind(this)}>
            Sign Up
          </div>
        </div>

        <div className='box-container'>
          {this.state.isLoginOpen && <Login />}
          {this.state.isSignUpOpen && <SignUp />}
        </div>

      </div>


    );
  }
}

export default RenderLogin;