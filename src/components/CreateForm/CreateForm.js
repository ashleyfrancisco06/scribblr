import React, {Component} from 'react'
import './CreateForm.css'

class CreateForm extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }

    handleSubmit = (event) => {
        alert(`You have chosen ${this.state.value}`)
        event.preventDefault()
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    

    render() {
        return (
                <form id='post-form' onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <input type='text' />
                    <select form='post-form' className='postDropdownSelect'>
                        <option value={this.state.value}>Select Genre</option>
                        <option value='short story'>Short Story</option>
                        <option value='poetry'>Poetry</option>
                        <option value='essay'>Essay</option>
                        <option value='misc'>Misc</option>
                    </select>
                    <br />
                    {/* <input type='text' className='postContent' /> */}
                    <textarea form='post-form' defaultValue='' placeholder='Work goes here...' className='postContent'></textarea>
                    <br />
                    <input type='submit' className='submitContent' />
                </form>
        )
    }
}

export default CreateForm