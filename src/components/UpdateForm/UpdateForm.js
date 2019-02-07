import React, { Component } from 'react'
// import './UpdateForm.css';
import axios from 'axios';
import genres from "../../scripts/genres.json"

class UpdateForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            work: this.props.scribbl.scribbl,
            updated: false,
        }
    }

    handleFormChange = (event) => {
        // const element = event.target
        // const { name, value } = element

        // const newState = {}
        // newState[name] = value

        // this.setState(newState)

        const element = event.target
        const {name, value} = element
      
        this.setState(prevState => {
          let newState = prevState.work
          newState[name] = value
          return newState
        })

    }

    handleFormSubmit = (event) => {
        console.log('Scribbl Updated')
        event.preventDefault()

        // let work = this.state.work

        let updatedWork = {
            title: this.state.work.title,
            content: this.state.work.content,
            type: this.state.work.type
        }
        axios.put(`/user/scribbls/${this.state.work.id}`, updatedWork)
            .then(res => console.log(res)).catch(e=>console.log(e))
        this.setState({
            work: updatedWork,
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
        // console.log(this.state.work.title)
        return (
            
            <form id='post-form'
                onSubmit={this.handleFormSubmit}
                onChange={this.handleFormChange}>
                <label htmlFor="title">Title: </label>
                <input type='text'
                    name='title'
                    defaultValue={this.state.work.title} />
                <label htmlFor="type">Genre: </label>
                <select form='post-form'
                    defaultValue={this.state.work.type}
                    name='type'
                    className='postDropdownSelect'>
                    <option value={this.state.work.value}>Select Genre</option>
                    { this.getOptions() }
                </select>
                <br />

                <textarea form='post-form'
                    name='content'
                    defaultValue={this.state.work.content}
                    placeholder='Work goes here...'
                    className='postContent'></textarea>
                <br />
                <button type='submit'
                    className='submitContent'
                    onSubmit={this.handleFormSubmit}
                    onChange={this.handleFromChange}
                >Update</button>
            </form>
        )
    }
}

export default UpdateForm;