import React, { useState } from 'react';

const UpdateAlleyForm = ({onChangeAlley}) => {
    const [home_alley, setHomeAlley] = useState('')

    const handleSubmit = (e) => {
        // debugger
            e.preventDefault();
            fetch('/change-alley', {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    home_alley: home_alley
                })
            })
            .then(res => res.json())
            .then(updatedUser => {
                // debugger
                onChangeAlley(updatedUser)
            })
            // console.log(this.state)
    }

    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        New Alley:
                    <input type="text" 
                    id="home_alley"
                    value={home_alley} onChange={(e) => setHomeAlley(e.target.value)}/>
                    </label>
                    <br/>
                    <button type="submit">Change Home Alley!</button> 
                </form>
            </div>
    )


}

export default UpdateAlleyForm