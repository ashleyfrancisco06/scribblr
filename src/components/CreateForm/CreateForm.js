import React, { Component } from 'react'
import './CreateForm.css';
import axios from 'axios';
import genres from "../../scripts/genres.json"
import { Alert } from 'react-bootstrap'

class CreateForm extends Component {
    constructor() {
        super()
        this.state = {
            work: [],
            created: false
        }
    }

    handleChange = (event) => {
        const element = event.target
        const { name, value } = element

        const newState = {}
        newState[name] = value

        this.setState(newState)
    }

    handleSubmit = (event) => {
        console.log('Scribbl submitted')
        event.preventDefault()

        let newWork = {
            type: this.state.type,
            title: this.state.title,
            content: this.state.content
        }

        axios.post('/user/create-scribbl', newWork)  //changed route in server.js in order to enable authorization functionality
            .then(res => console.log(`post ${res.data}`));

        this.setState({
            newWork: newWork,
            created: true
        })
    }

    getOptions = () => {
        const genreOptions = genres.map((genre, key) => {
            return(
                <option key={key} value={genre.value}>{genre.label}</option>
            )
        })
        return genreOptions
    }
    
    render() {
        return (
            <form id='post-form'
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}>
                <label htmlFor="title">Title: </label>
                <input type='text'
                    name='title'
                    value={this.state.title} />
                <label htmlFor="type">Genre: </label>
                <select form='post-form'
                    value={this.state.type}
                    name='type'
                    className='postDropdownSelect'>
                    <option value={this.state.value}>Select Genre</option>
                    { this.getOptions() }
                </select>
                <br />

                <textarea form='post-form'
                    name='content'
                    value={this.state.content}
                    placeholder='Work goes here...'
                    className='postContent'></textarea>
                <br />
                {this.state.created &&
                    <Alert variant={'success'}>
                        New Post Created
                    </Alert>
                }
                <button type='submit'
                    className='submitContent'
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                >Submit</button>
            </form>
        )
    }
}

export default CreateForm;