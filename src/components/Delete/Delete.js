import React from 'react'
import axios from 'axios'

const Delete = (props) => {
    const deleteScribbl = () => {

        axios.delete(`/user/scribbl/${props.scribblId}`)
        // .then(props.removeDeletedScribbl(props.scribblId))
        .then(res => console.log(res.data, "Scribbl deleted"))

    }

    return (
        <div>
            <button onClick={deleteScribbl} >Delete</button>
        </div>
    )
}

export default Delete