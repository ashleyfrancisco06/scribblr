import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import CreatePost from '../CreatePost/CreatePost'
import ExistingPosts from '../ExistingPosts/ExistingPosts';
import RenderLogin from '../RenderLogin-SignUp/RenderLogin-SignUp';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedOption: null,
      works: [],
      searchedScribbls: null
    }

  }

  handleChange = (selectedOption) => {
    const value = selectedOption.value
    this.setState({ selectedOption: selectedOption.value })
    this.loadData(value)
  }

  loadData = async (value) => {
    // console.log(value)
    const res = await axios.get(`/scribbls/byType/${value}`)
    const searchedScribbls = res.data.scribbls
    this.setState({
      searchedScribbls
    })
  }

  getWorksData = () => {
    axios.get('/scribbls')
      .then((response) => {
        const works = response.data.works
        this.setState({
          works: works
        });
      })
  }

  componentDidMount() {
    this.getWorksData()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>

        <Route
            exact path={'/login'}
            component={RenderLogin} />

          <Route
            path='/scribbls'
            render={() =>
              (<ExistingPosts
                selectedOption={this.state.selectedOption}
                handleChange={this.handleChange}
                searchedScribbls={this.state.searchedScribbls}
              />)
            }
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
