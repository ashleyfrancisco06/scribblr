import React, {Component} from 'react'
import UpdateForm from '../UpdateForm/UpdateForm'
import Delete from '../Delete/Delete'

class UpdatePost extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <div className='updateForm'>
                <UpdateForm scribbl = {this.props} />
                <Delete scribblId={this.props.scribbl.id} />
            </div>
        )
    }
        
    
}

export default UpdatePost