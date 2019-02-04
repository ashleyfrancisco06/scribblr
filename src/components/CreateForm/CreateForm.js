import React, {Component} from 'react'
import './CreateForm.css';
import axios from 'axios';

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
        const { name , value } = element

        const newState = {}
        newState[name] = value

        this.setState(newState)

        console.log(newState)
    }

    handleSubmit = (event) => {
        console.log('Scribbl submitted')
        event.preventDefault()

        let newWork = {
            // type: this.state.type,
            title: this.state.title,
            content: this.state.content
        }
        console.log(newWork)

        axios.post('/create-scribbl', newWork)
        .then(res => console.log(res.data));

        this.setState({
            newWork: newWork,
            created: true
        })
    }

  
    

    

    render() {
        return (
                <form id='post-form' 
                onSubmit={this.handleSubmit}
                 onChange={this.handleChange}>
                    <input type='text'
                    value={this.state.title} />
                    {/* <select form='post-form' className='postDropdownSelect'>
                        <option value={this.state.value}>Select Genre</option>
                        <option value='short story'>Short Story</option>
                        <option value='poetry'>Poetry</option>
                        <option value='essay'>Essay</option>
                        <option value='misc'>Misc</option>
                    </select> */}
                    <br />
                    {/* <input type='text' className='postContent' /> */}
                    <textarea form='post-form'
                     value={this.state.content}
                      placeholder='Work goes here...'
                       className='postContent'></textarea>
                    <br />
                    <button type='submit' 
                    className='submitContent'
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                     >Submit</button>
                </form>
        )
    }
}

export default CreateForm