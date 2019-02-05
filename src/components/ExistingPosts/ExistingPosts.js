import React from 'react'
import Select from "react-select"
import genres from "../../scripts/genres.json"

const genreOptions = genres.map((genre) => (
    {value: genre.value, label: genre.label}
    ))

const ExistingPosts = (props) => {
    console.log(props)
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