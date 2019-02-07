import React from 'react'
import Select from "react-select"
import {Link} from 'react-router-dom'
import genres from "../../scripts/genres.json"




const genreOptions = genres.map((genre) => (
    {value: genre.value, label: genre.label}
    ))



const ExistingPosts = (props) => {
    console.log(props)
    const getCurrentScribbls = () => {
        const currentScribbls = props.searchedScribbls.map((scribbl, key) => {
            return (
            
                <div id={scribbl.id} onClick={props.selectScribbl} key = {key}>
                <Link className="existing-post" id={scribbl.id}  onClick={props.selectScribbl}  to={{pathname: `/scribbls/${scribbl.id}`, state: scribbl}}>
                    <h2>{scribbl.title}</h2>
                    <h5>{scribbl.content}</h5>
                    </Link>
                </div>
               
            )
        })
        return currentScribbls
    }

        return (
           
            <div className="Posts">
                <h4 id="scribbls-h2"> Most Recent Scribbls </h4>
             
             <label className="genre-label">Select a Genre: </label>
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