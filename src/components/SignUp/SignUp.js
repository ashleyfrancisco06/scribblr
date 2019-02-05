import React, { Component } from 'react'
import "../Login/login.css"
class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {};
    }

    submitSignUp(e) {
        
     }
    render() {
        return (
            <div className='inner-container'>
                <div className='header'>
                    Sign Up
                </div>
                {/* Login field */}
                <div className='box'>
                    {/* Username field */}
                    <div className='input-group'>
                        <label htmlFor='username'>Username: </label>
                        <input type='text'
                            name='username'
                            className='signup-input'
                            placeholder='Username' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='email'>E-mail: </label>
                        <input type='text'
                        name='email'
                        className='signup-input'
                        placeholder='E-mail'
                        />
                    </div>
                    {/* Password field */}
                    <div className='input-group'>
                        <label htmlFor='password'>Password: </label>
                        <input type='password'
                            name='password'
                            className='signup-input'
                            placeholder='Password' />
                    </div>

                    {/* Login Button */}
                    <button type="button"
                        className="signup-button"
                        // whenever user clicks, event will pop upand put the callback inside 
                        onClick={this.submitSignUp.bind(this)}>
                        Sign Up</button>

                </div>
            </div>
        )
    }
}

export default SignUp;