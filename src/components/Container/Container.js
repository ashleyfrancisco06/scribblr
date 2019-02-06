import React from "react"
import { Switch, Route } from 'react-router-dom'
import Header from "../Header/Header";
import ExistingPosts from "../ExistingPosts/ExistingPosts";
import CreatePost from "../CreatePost/CreatePost";
import Nav from "../Nav/Nav"

const Container = () => {
    return (
        <div>
            <Switch>
            <Header />
            <Nav />
                <Route
                    path='/scribbls'
                    render={() =>
                        (<ExistingPosts
                            selectedOption={this.state.selectedOption}
                            handleChange={this.handleChange}
                            searchedScribbls={this.state.searchedScribbls}
                        />)}
                />
                <Route
                    path='/create-scribbl'
                    component={CreatePost}
                />
            </Switch>Î
        </div>
    )
}

export default Container;