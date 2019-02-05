import React from 'react'
import Select from "react-select"
import {Link} from 'react-router-dom'
import genres from "../../scripts/genres.json"
import axios from 'axios'

const genreOptions = genres.map((genre) => (
    {value: genre.value, label: genre.label}
    ))



const ExistingPosts = (props) => {
    console.log(props)
    const getCurrentScribbls = () => {
        const currentScribbls = props.searchedScribbls.map((scribbl, key) => {
            return (
            
                <div id={scribbl.id} onClick={props.selectScribbl} key = {key}>
                <Link to={{pathname: `/scribbls/${scribbl.id}`, state: scribbl}}>
                    <h1>{scribbl.title}</h1>
                    <p>{scribbl.content}</p>
                    </Link>
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