import React, {Component} from 'react'
import CreateForm from '../CreateForm/CreateForm'

class CreatePost extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='createPost'>
                <CreateForm />
            </div>
        )
    }
        
    
}

export default CreatePost