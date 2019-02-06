import React from "react"
import { Switch, Route } from 'react-router-dom'
import ExistingPosts from "../ExistingPosts/ExistingPosts";
import CreatePost from "../CreatePost/CreatePost";
import Header from "../Header/Header"



const Container = (props) => {
    return (
        <div>
            <Header />
         
            <Switch>

                <Route
                    path='/scribbls'
                    render={(props) =>
                        (<ExistingPosts
                            selectedOption={props.selectedOption}
                            handleChange={props.handleChange}
                            searchedScribbls={props.searchedScribbls}
                        />)}
                />
                <Route
                    path='/create-scribbl'
                    component={CreatePost}
                />
            </Switch>
        </div>

    )
}

export default Container;