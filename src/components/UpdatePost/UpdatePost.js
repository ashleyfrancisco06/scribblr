import React, {Component} from 'react'
import UpdateForm from '../UpdateForm/UpdateForm'

class UpdatePost extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className='updateForm'>
                <UpdateForm />
            </div>
        )
    }
        
    
}

export default UpdatePost