import React, { useState } from 'react';

const ScoreCardForm = ({addAScoreCard}) => {
    const [tournament, setTournament] = useState('')
    const [round_1, setRound1] = useState(0);
    const [round_2, setRound2] = useState(0);
    const [round_3, setRound3] = useState(0);
    const [round_4, setRound4] = useState(0);
    const [round_5, setRound5] = useState(0);
    const [round_6, setRound6] = useState(0);
    const [round_7, setRound7] = useState(0);
    const [round_8, setRound8] = useState(0);
    const [round_9, setRound9] = useState(0);
    const [round_10, setRound10] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
            
        addAScoreCard({
            tournament_name: tournament,
            round_1: round_1,
            round_2: round_2,
            round_3: round_3,
            round_4: round_4,
            round_5: round_5,
            round_6: round_6,
            round_7: round_7,
            round_8: round_8,
            round_9: round_9,
            round_10: round_10
            })
    }

    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Tournament:
                    <input type="text" 
                    id="tournament"
                    value={tournament} onChange={(e) => setTournament(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Round 1:
                    <input type="number" 
                    id="round_1"
                    value={round_1} onChange={(e) => setRound1(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Round 2:
                    <input type="text" 
                    id="round_2"
                    value={round_2} onChange={(e) => setRound2(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Round 3:
                    <input type="text" 
                    id="round_3"
                    value={round_3} onChange={(e) => setRound3(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Round 4:
                    <input type="text" 
                    id="round_4"
                    value={round_4} onChange={(e) => setRound4(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Round 5:
                    <input type="text" 
                    id="round_5"
                    value={round_5} onChange={(e) => setRound5(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Round 6:
                    <input type="text" 
                    id="round_6"
                    value={round_6} onChange={(e) => setRound6(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Round 7:
                    <input type="text" 
                    id="round_7"
                    value={round_7} onChange={(e) => setRound7(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Round 8:
                    <input type="text" 
                    id="round_8"
                    value={round_8} onChange={(e) => setRound8(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Round 9:
                    <input type="text" 
                    id="round_9"
                    value={round_9} onChange={(e) => setRound9(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Round 10:
                    <input type="text" 
                    id="round_10"
                    value={round_10} onChange={(e) => setRound10(e.target.value)}/>
                    </label>
                    <br/>
                    <button type="submit">Add Score Card!</button> 
                </form>
            </div>
    )


}

export default ScoreCardForm