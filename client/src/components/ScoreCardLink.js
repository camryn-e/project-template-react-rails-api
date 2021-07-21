import React from 'react'
import { Link } from 'react-router-dom'

const ScoreCardLink = (props) => {

    

    return (
        <div>
            <Link to={`/scorecards/${props.scoreCard.id}`}>
                <h2>{props.scoreCard.tournament_name}</h2>
            </Link>
        </div>
    )
}

export default ScoreCardLink