import React from "react";


const SingleScribbl = (props) => {
    console.log(props.location.state)

    return <div>{props.location.state.title}</div>
}


export default SingleScribbl