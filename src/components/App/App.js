import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import CreatePost from '../CreatePost/CreatePost'
import ExistingPosts from '../ExistingPosts/ExistingPosts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route 
            exact path='/'
            component={ExistingPosts}
          />
          <Route 
            path='/createPost' 
            component={CreatePost}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
