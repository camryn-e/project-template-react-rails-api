import React, { useState } from 'react';

const SignupForm = ({onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [name, setName] = useState('');
    const [home_alley, setHomeAlley] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
            e.preventDefault();
            fetch('/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    password_confirmation: passwordConfirmation,
                    name: name,
                    home_alley: home_alley
                })
            })
            .then(res => res.json())
            .then(newUser => {
                if(newUser.error){
                    console.log(newUser.error)
                    setError(newUser.error)
                }else{
                    onLogin(newUser)
                }
            })
    }

    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                    <input type="text" 
                    id="username"
                    value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Password:
                    <input type="password" 
                    id="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Confirm Password:
                    <input type="password" 
                    id="password_comformation"
                    value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Name:
                    <input type="text" 
                    id="name"
                    value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <br/>
                    <label>
                        Home Alley:
                    <input type="text" 
                    id="home_alley"
                    value={home_alley} onChange={(e) => setHomeAlley(e.target.value)}/>
                    </label>
                    <br/>
                    <button type="submit">Sign Up!</button> 
                </form>
                <h3>{error}</h3> 
            </div>
    )


}

export default SignupForm