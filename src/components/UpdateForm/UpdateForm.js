import React, { Component } from 'react'
import './CreateForm.css';
import axios from 'axios';
import genres from "../../scripts/genres.json"

class UpdateForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            work: [],
            updated: false


        }
    }

    handleFormChange = (event) => {
        const element = event.target
        const { name, value } = element

        const newState = {}
        newState[name] = value

        this.setState(newState)

        console.log(newState)
    }

    handleFormSubmit = (event) => {
        console.log('Scribbl Updated')
        event.preventDefault()

        let updateWork = {
            type: this.state.type,
            title: this.state.title,
            content: this.state.content
        }
        console.log(updateWork)

        axios.put('/scribbls/:id', updateWork)
            .then(res => console.log(res.data));

        this.setState({
            updateWork: updateWork,
            updated: true
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
                onSubmit={this.handleFormSubmit}
                onChange={this.handleFormChange}>
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
                <button type='submit'
                    className='submitContent'
                    onSubmit={this.handleFormSubmit}
                    onChange={this.handleFromChange}
                >Submit</button>
            </form>
        )
    }
}

export default UpdateForm;