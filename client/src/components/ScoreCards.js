import React, { useState, useEffect } from 'react';
import ScoreCardForm from './ScoreCardForm';

const ScoreCards = () => {
    const [cards, setCards] = useState([]);
    const [error, setError] = useState('')
    const [formFlag, setFormFlag] = useState(false)

    useEffect(() => {
        // debugger
            // e.preventDefault();
            fetch('/scorecards')
            .then(res => res.json())
            .then(cardData => {
                // debugger
                // console.log("cards on mount:", cardData)
                if(cardData.error){
                    setError(cardData.error)
                } else {
                    setCards(cardData)
                }
            })
            // console.log(this.state)
    }, [])

    const addScoreCard = (card) => {
        // debugger
            fetch('/scorecards', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(card)
            })
            .then(res => res.json())
            .then(newCard => {
                console.log("newCard: ", newCard)
                setCards([...cards, newCard])
                console.log("cards after submit: ", cards)
            })
            // console.log(this.state)
            setFormFlag(false)
    }

    const scoreCardList = cards.map(card => <div><li key={card.id}>{card.tournament_name}</li></div>)

    if(error === ''){
        return (
            <div>
                <ul>
                    {/* {cards} */}
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
    // return (
    //         <div>
    //             <ul>
    //                 {scoreCardList}
    //                 {formFlag ? <ScoreCardForm addAScoreCard={addScoreCard}/> : <button onClick={() => setFormFlag(true)}>Add Score Card</button>}
    //             </ul>
    //         </div>
    // )


}

export default ScoreCards