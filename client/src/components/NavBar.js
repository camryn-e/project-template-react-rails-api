import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavBar = (props) => {
    if (props.loggedIn){
        return (
            <div>
                <h1>Welcome {props.user.name}!</h1>
                <h3>Your Home Alley Is: {props.user.home_alley}!</h3>
                <Link to='/change-alley'>
                    <button>Change Home Alley?</button>
                </Link>
                <br />
                <button onClick={props.logoutUser}>Logout</button>
                <br/>
                <Link to='/scorecards'>
                    <button>Score Cards</button>
                </Link>
                <br/>
                <button onClick={props.deleteAccount}>Delete Account</button>
            </div>
        )
    } else {
        return (
            <div>
                <Link to='/signup'>
                    <button>Signup!</button>
                </Link>
                <br />
                <Link to='/login'>
                    <button>Login!</button>
                </Link>
            </div>
        )
    }
}

export default NavBar;