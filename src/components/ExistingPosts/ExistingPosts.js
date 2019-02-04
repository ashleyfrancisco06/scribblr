import React, { Component } from 'react'
import Select from "react-select"
import genres from "../../genres.json"
import axios from "axios"

const genreOptions = genres.map((genre) => (
    {value: genre.value, label: genre.label}
    ))

class ExistingPosts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedOption: null,
            allScribbls: null
        }
    }

    handleChange = (selectedOption) => {
        const value = selectedOption.value
        this.setState({selectedOption: selectedOption.value})
        this.loadData(value)
    }

    loadData = async (value) => {
        const scribbls = await axios.get('/scribbls')
        this.setState({
            allScribbls: scribbls
        })
    }

    render() {
        console.log(this.state.allScribbls)
        return (
            <Select
                value={this.state.selectedOption}
                onChange={this.handleChange}
                options={genreOptions}
            />
        )
    }
}

export default ExistingPosts