import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import "./login.css"
import App from '../App/App';
import Container from "../Container/Container"

// https://www.youtube.com/watch?v=OWYxMCfcTbY this video helped with login and sign up forms for front end( React)


class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password:'',
            clicked:false,
            isLoggedIn: false
        };
        this.submitLogin = this.submitLogin.bind(this)
    }
    onChangeHandler = (e)=>{
        console.log(e.target.name)
        console.log(e.target.value)
        const target = e.target.name
        const value = e.target.value
        this.setState(prevState => ({
            [target]: prevState.value + value
        }))
    }
    

    submitLogin=(e)=> {
        console.log('clicked')
       
    this.setState({
        clicked:true,
        isLoggedIn: true
    })
    }
    render() {

         if(this.state.isLoggedIn){
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
                        <label htmlFor='username'>Username: </label>
                        <input type='text'
                            name='username' 
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