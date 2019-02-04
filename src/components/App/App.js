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
            route={() => <ExistingPosts />}
          />
          <Route 
            path='/create-work' 
            component={CreatePost}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
