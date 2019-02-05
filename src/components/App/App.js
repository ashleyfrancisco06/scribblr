import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';
import Header from '../Header/Header'
import CreatePost from '../CreatePost/CreatePost'
import ExistingPosts from '../ExistingPosts/ExistingPosts';
import axios from 'axios';
import RenderLogin from "../RenderLogin-SignUp/RenderLogin-SignUp"
import SingleScribbl from "../SingleScribbl/SingleScribbl"

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedOption: null,
      works: [],
      searchedScribbls: null,
      selectedScribbl: "",
    }

  }

   selectScribbl = (e) => {
    let scribblId = e.currentTarget.id
    axios.get(`/scribbls/${scribblId}`)
    .then(response => {
        const scribbl = response.data.scribbl
        
        this.setState({
          selectScribbl: scribbl
        })

        console.log(this.state.selectScribbl)
        
    })
  
    console.log(scribblId)
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
            exact path='/scribbls'
            render={() =>
              (<ExistingPosts
                selectedOption={this.state.selectedOption}
                handleChange={this.handleChange}
                searchedScribbls={this.state.searchedScribbls}
                selectScribbl= {this.selectScribbl}
              />)
            }
          />

          <Route
            path='/login'
            component={RenderLogin} />
          <Route
            path='/create-scribbl'
            component={CreatePost}
          />

          <Route 
            path = "/scribbls/:id"
            render={(props)=>(
              <SingleScribbl {...props} scribbl = {this.state.scribblw}/> 
            )}
            />

        </Switch>
      </div>
    );
  }
}

export default App;
