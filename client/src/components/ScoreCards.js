import React, { useState, useEffect } from 'react';
import ScoreCardForm from './ScoreCardForm';
import ScoreCardLink from './ScoreCardLink';

const ScoreCards = () => {
    const [cards, setCards] = useState([]);
    const [error, setError] = useState('')
    const [formFlag, setFormFlag] = useState(false)

    useEffect(() => {
            fetch('/scorecards')
            .then(res => res.json())
            .then(cardData => {
                if(cardData.error){
                    setError(cardData.error)
                } else {
                    setCards(cardData)
                }
            })
    }, [])

    const addScoreCard = (card) => {
            fetch('/scorecards', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(card)
            })
            .then(res => res.json())
            .then(newCard => {
                setCards([...cards, newCard])
            })
            setFormFlag(false)
    }

    const scoreCardList = cards.map(c => <ScoreCardLink key={c.id} scoreCard={c}/>)

    if(error === ''){
        return (
            <div>
                <ul>
                    {scoreCardList}
                    {formFlag ? <ScoreCardForm addAScoreCard={addScoreCard}/> : <button onClick={() => setFormFlag(true)}>Add Score Card</button>}
                </ul>
            </div>
        )
    } else {
        return(
        <h3>Sign Up or Log In to View</h3>
        )
    }
}

export default ScoreCards