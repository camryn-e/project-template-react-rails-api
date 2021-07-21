import React, {useState, useEffect} from 'react'


const ScoreCard = (props) => {

    const [scoreCard, setScoreCard] = useState({
        tournament_name: "",
        round_1: 0,
        round_2: 0,
        round_3: 0,
        round_4: 0,
        round_5: 0,
        round_6: 0,
        round_7: 0,
        round_8: 0,
        round_9: 0,
        round_10: 0
    })

    useEffect(() => {
        fetch(`/scorecards/${props.match.params.id}`)
          .then(response => response.json())
          .then(cardData => {
              setScoreCard(cardData)
          })
    }, [props.match.params.id])

    return (
        <div>
            <div>
            <h2>{scoreCard.tournament_name}</h2>
            <p>Round 1: {scoreCard.round_1}</p>
            <p>Round 2: {scoreCard.round_2}</p>
            <p>Rount 3: {scoreCard.round_3}</p>
            <p>Round 4: {scoreCard.round_4}</p>
            <p>Round 5: {scoreCard.round_5}</p>
            <p>Rount 6: {scoreCard.round_6}</p>
            <p>Round 7: {scoreCard.round_7}</p>
            <p>Round 8: {scoreCard.round_8}</p>
            <p>Rount 9: {scoreCard.round_9}</p>
            <p>Rount 10: {scoreCard.round_10}</p>
            </div>
            <br/>
            {console.log(scoreCard)}
        </div>
    )
}

export default ScoreCard
