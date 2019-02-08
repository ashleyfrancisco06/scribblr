import React from 'react'
import Select from "react-select"
import { Link } from 'react-router-dom'
import genres from "../../scripts/genres.json"
import { Card } from "react-bootstrap"




const genreOptions = genres.map((genre) => (
    { value: genre.value, label: genre.label }
))



const ExistingPosts = (props) => {
    console.log(props)
    const getCurrentScribbls = () => {
        const currentScribbls = props.searchedScribbls.map((scribbl, key) => {
            return (
                    <Card style={{ width: '18rem' }} id={scribbl.id} onClick={props.selectScribbl} key={key} className="scribbl-post">
                        <Card.Body>
                            <Card.Title>{scribbl.title}</Card.Title>
                            <Card.Text>{scribbl.content.substr(0,75)}...</Card.Text>
                            <Link className="existing-post" id={scribbl.id} onClick={props.selectScribbl} to={{ pathname: `/scribbls/${scribbl.id}`, state: scribbl }}>Read More</Link>
                        </Card.Body>
                    </Card>
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
            <div className='grid'>
            {props.searchedScribbls && getCurrentScribbls()}
            </div>
        </div>
    )
}

export default ExistingPosts