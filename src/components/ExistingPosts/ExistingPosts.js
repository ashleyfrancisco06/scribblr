import React, { Component } from 'react'
import Select from "react-select"
import genres from "../../genres.json"
// import axios from "axios"

const genreOptions = genres.map((genre) => (
    {value: genre.value, label: genre.label}
    ))

const ExistingPosts = (props) => {
    console.log(props)
    // handleChange = (selectedOption) => {
    //     const value = selectedOption.value
    //     this.setState({selectedOption: selectedOption.value})
    //     this.loadData(value)
    // }

    // loadData = async (value) => {
    //     const scribbls = await axios.get('/scribbls')
    //     this.setState({
    //         allScribbls: scribbls
    //     })
    // }
    const getCurrentScribbls = () => {
        const currentScribbls = props.searchedScribbls.map((scribbl, key) => {
            return (
                <div key={key}>
                    <h1>{scribbl.title}</h1>
                    <p>{scribbl.content}</p>
                </div>
            )
        })
        return currentScribbls
    }
    // render() {
        return (
            <div>
                <Select
                    value={props.selectedOption}
                    onChange={props.handleChange}
                    options={genreOptions}
                />
                {props.searchedScribbls && getCurrentScribbls()}
            </div>
        )
        // }
}

export default ExistingPosts