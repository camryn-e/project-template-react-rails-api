import React, { useState } from 'react';

const LoginForm = ({onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
            e.preventDefault();
            fetch('/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(res => res.json())
            .then(user => {
                    if(user.error){
                        console.log(user.error)
                        setError(user.error)
                    }else{
                        onLogin(user)
                    }
                })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                <br/>
                <label>
                    Password:
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button type="submit" value='login'>Log In!</button>
                </form>
                <h3>{error}</h3> 
        </div>
    )


}

export default LoginForm