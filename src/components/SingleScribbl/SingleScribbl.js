import React from "react";
import {Route, Link} from 'react-router-dom'
import UpdatePost from "../UpdatePost/UpdatePost";
    

const SingleScribbl = (props) => {
    console.log(props.location.state)
    console.log(props.scribbl)
    // switch(props.viewUpdateForm) {

    // }
    const showUpdate = () => {
        console.log(props)
        if (props.viewUpdateForm == true) {
        return(
            <div>
                <br />
                <h3>{props.location.state.title}</h3>
                <p>{props.location.state.content}</p>
                    <Route 
                            path = "/scribbls/:id"
                            render={(props)=>(
                            <UpdatePost scribbl = {props.location.state}/> 
                            )}
                        />
                
                </div>
                
            )} else {
                return(
                <div>
                    <br />
                    <h3>{props.location.state.title}</h3>
                    <p>{props.location.state.content}</p>
                </div>
                )
            }
        }
    return showUpdate()

}


export default SingleScribbl