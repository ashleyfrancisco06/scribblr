import React from "react";
import {Route, Link} from 'react-router-dom'
import UpdatePost from "../UpdatePost/UpdatePost";

const showUpdate = () => {
    return(
        this.state.updateButtonClicked ? this.setState({updateButtonClicked: true}) : this.setState({updateButtonClicked: false})
    )}

const SingleScribbl = (props) => {
    console.log(props.location.state)

    return ( <div>
    <br />
    <h3>{props.location.state.title}</h3>
    <p>{props.location.state.content}</p>

      <button onClick={showUpdate}>Update</button>

       {/* <Route 
            path = "/scribbls/:id"
            render={(props)=>(
              <UpdatePost/> 
            )}
            /> */}
    </div>
    )}


export default SingleScribbl