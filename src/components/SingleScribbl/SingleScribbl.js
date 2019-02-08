import React from "react";
import {Route, Link} from 'react-router-dom'
import UpdatePost from "../UpdatePost/UpdatePost";
    

const SingleScribbl = (props) => {
    // switch(props.viewUpdateForm) {

    // }
    const showUpdate = (props) => {
        if (props.viewUpdateForm === true) {
        return(
            <div>
                <br />
               
                <div className="scribbl-content">
                <h2>{props.location.state.title}</h2>
                {props.location.state.content}
                </div>
                    {/* <Route 
                            path = "/scribbls/:id"
                            render={(props)=>{
                                console.log(props)
                            return (
                                <UpdatePost 
                                    removeDeletedScribbl = {props.removeDeletedScribbl}
                                    scribbl = {props.location.state}
                                /> )
                            }}
                        /> */}
                    <UpdatePost 
                                    removeDeletedScribbl = {props.removeDeletedScribbl}
                                    scribbl = {props.location.state}
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
    return showUpdate(props)

}


export default SingleScribbl