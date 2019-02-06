import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import "./login.css"
import App from '../App/App';
import Axios from "axios"

// https://www.youtube.com/watch?v=OWYxMCfcTbY this video helped with login and sign up forms for front end( React)

let isLoggedIn = false
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user_name: '',
            password:'',
            clicked:false,
            isLoggedIn: false
        };
        this.submitLogin = this.submitLogin.bind(this)
    }
    onChangeHandler = (e)=>{
        const element = e.target
        const { name, value } = element

        const newState = {}
        newState[name] = value

        this.setState(newState)
    }

    submitLogin=(e)=> {
        e.preventDefault()

        const user = {
            user_name: this.state.user_name,
            password: this.state.password
        }

        Axios.post('/auth/login', user)
        .then(res => {
            if (res.data.result) {
            isLoggedIn = res.data.result
            this.setState({isLoggedIn: true})
            }
        })
    }

    render() {
        console.log(isLoggedIn)
        if(isLoggedIn){
            return <Redirect to='/scribbls' />
        }

        return (
            <div className='inner-container'>
                <Route path='/home'
                       component={App}
                />
                <div className='header'>
                    Login
                </div>
                {/* Login field */}
                <div className='box'>
                    {/* Username field */}
                    <div className='input-group'>
                        <label htmlFor='user_name'>Username: </label>
                        <input type='text'
                            name='user_name' 
                            className='login-input'
                            placeholder='Username'
                            onChange={this.onChangeHandler}
                            required />
                    </div>
                    {/* Password field */}
                    <div className='input-group'>
                        <label htmlFor='password'>Password: </label>
                        <input type='password'
                            name='password'
                            className='login-input'
                            placeholder='Password'
                            onChange={this.onChangeHandler}
                            required />
                    </div>

                    {/* Login Button */}

                    <button type="submit"
                        className="login-button"
                        // whenever user clicks, event will pop up and put the callback inside 
                        onClick={this.submitLogin}>
                        Login</button>

                </div>
            </div>
        )
    }
}

export default Login;