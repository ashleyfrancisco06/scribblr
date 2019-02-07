import React, {Component} from 'react'
import UpdateForm from '../UpdateForm/UpdateForm'

class UpdatePost extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='updateForm'>
                <UpdateForm scribbl = {this.props} />
            </div>
        )
    }
        
    
}

export default UpdatePost