import React, {Component} from 'react'
import UpdateForm from '../UpdateForm/UpdateForm'
import Delete from '../Delete/Delete'

class UpdatePost extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='updateForm'>
                <UpdateForm scribbl = {this.props} />
                <Delete 
                    scribblId={this.props.scribbl.id}
                    removeDeletedScribbl={this.props.removeDeletedScribbl}
                />
            </div>
        )
    }
        
    
}

export default UpdatePost