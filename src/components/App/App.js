import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import CreatePost from '../CreatePost/CreatePost'
import ExistingPosts from '../ExistingPosts/ExistingPosts';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state ={
      works: []
    }
 
  }

  getWorksData = () =>{
    axios.get('/scribbls')
    .then((response)=>{
      const works = response.data.works
      this.setState({
        works: works
      });
    })
  }

  componentDidMount(){
    this.getWorksData()
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route 
            exact path='/scribbls'
            component={ExistingPosts}
            works={this.state.works}
          />
          <Route 
            path='/create-scribbl' 
            component={CreatePost}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
