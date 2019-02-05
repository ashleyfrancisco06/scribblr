import React from 'react'
import Select from "react-select"
import genres from "../../scripts/genres.json"
import axios from 'axios'

const genreOptions = genres.map((genre) => (
    {value: genre.value, label: genre.label}
    ))

const selectScribbl = (e) => {
    let scribblToUpdate = e.currentTarget.id
    axios.get(`/scribbls/${scribblToUpdate}`)
    .then(response => {
        const work = response.data
        
        console.log(work)
    })
    console.log(scribblToUpdate)
}

const ExistingPosts = (props) => {
    console.log(props)
    const getCurrentScribbls = () => {
        const currentScribbls = props.searchedScribbls.map((scribbl, key) => {
            return (
                <div id={scribbl.id} key={key} onClick={selectScribbl}>
                    <h1>{scribbl.title}</h1>
                    <p>{scribbl.content}</p>
                </div>
            )
        })
        return currentScribbls
    }

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
}

export default ExistingPosts