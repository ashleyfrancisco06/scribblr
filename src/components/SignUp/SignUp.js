import React, { Component } from 'react'
import { Alert } from "react-bootstrap"
import "../Login/login.css"
import Axios from 'axios';
class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newUser: false
        };
    }

    handleChange = (e) => {
        const element = e.target
        const { name, value } = element

        const newState = {}
        newState[name] = value

        this.setState(newState)
    }

    submitSignUp = (e) => {
        e.preventDefault()
        console.log("clicked")
        
        const user = {
            user_name: this.state.user_name,
            email: this.state.email,
            password: this.state.password
        }

        console.log(`user info: ${user}`)

        Axios.post('/auth/signup', user)
            .then(res => this.setState({
                newUser: res.data.newUserId.user_name}))

            // } else {
            //     console.log(res.data)
            //     this.setState({
            //         error: res.data
            //     })
     }
    render() {
        return (
            <div className='inner-container'>
                <div className='header'>
                    Sign Up
                </div>
                {
                    this.state.newUser && 
                        <Alert variant={'info'}>
                            Welcome to Scribblr {this.state.newUser}
                        </Alert>
                }
                {/* Login field */}
                <div className='box'>
                    {/* Username field */}
                    <div className='input-group'>
                        <label htmlFor='user_name'>Username: </label>
                        <input type='text'
                            name='user_name'
                            onChange={this.handleChange}
                            className='signup-input'
                            placeholder='Username' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='email'>E-mail: </label>
                        <input type='text'
                        name='email'
                        onChange={this.handleChange}
                        className='signup-input'
                        placeholder='E-mail'
                        />
                    </div>
                    {/* Password field */}
                    <div className='input-group'>
                        <label htmlFor='password'>Password: </label>
                        <input type='password'
                            name='password'
                            onChange={this.handleChange}
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