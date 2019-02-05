import React, { Component } from 'react'
import "./login.css"

// https://www.youtube.com/watch?v=OWYxMCfcTbY this video helped with login and sign up forms for front end( React)


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {};
    }

    submitLogin(e) {
        
     }
    render() {
        return (
            <div className='inner-container'>
                <div className='header'>
                    Login
                </div>
                {/* Login field */}
                <div className='box'>
                    {/* Username field */}
                    <div className='input-group'>
                        <label htmlFor='username'>Username: </label>
                        <input type='text'
                            name='username'
                            className='login-input'
                            placeholder='Username' />
                    </div>
                    {/* Password field */}
                    <div className='input-group'>
                        <label htmlFor='password'>Password: </label>
                        <input type='password'
                            name='password'
                            className='login-input'
                            placeholder='Password' />
                    </div>

                    {/* Login Button */}
                    <button type="button"
                        className="login-button"
                        // whenever user clicks, event will pop upand put the callback inside 
                        onClick={this.submitLogin.bind(this)}>
                        Login</button>

                </div>
            </div>
        )
    }
}

export default Login;