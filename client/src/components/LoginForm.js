// import React, { Component } from 'react';

// export default class LoginForm extends Component {
//     state = {
//         username: '',
//         password: ''
//     }

//     handleUsernameChange = (e) => {
//         e.preventDefault();
//         this.setState({
//             username: e.target.value
//         })
//     }

//     handlePasswordChange = (e) => {
//         e.preventDefault();
//         this.setState({
//             password: e.target.value
//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(this.state)
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                         Username:
//                     <input type="text" name="username" value={this.state.value} onChange={this.handleUsernameChange}/>
//                     </label>
//                     <br/>
//                     <label>
//                         Password:
//                     <input type="text" name="password" value={this.state.value} onChange={this.handlePasswordChange}/>
//                     </label>
//                 </form>
//                 <button type="submit" value='Login!' /> 
//             </div>
//         )
//     }

// }

import React, { useState } from 'react';

const LoginForm = ({onLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        // debugger
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
                // debugger
                onLogin(user)
            })
            // console.log(this.state)
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
                    <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </label>
                    <button type="submit" value='login'>Log In!</button>
                </form>
                {/* <button type="submit" value='Login!' />  */}
            </div>
    )


}

export default LoginForm