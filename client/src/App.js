import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router';
import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Navbar from './components/NavBar';
import LoginForm from './components/LoginForm';
import UpdateAlleyForm from './components/UpdateAlleyForm';
import SignupForm from './components/SignupForm';
import ScoreCards from './components/ScoreCards';
import ScoreCard from './components/ScoreCard';


function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState({})
  const history = useHistory();
  
  useEffect(() => {
    fetch('/me')
    .then(r => {
      if(r.ok){
        r.json()
        .then( u => {
          setLoggedIn(true)
          setUser(u)
        })
      }
    })
  },[])

  const loginUser = (u) => {
    setLoggedIn(true)
    setUser(u)
    history.push('/')
  }

  const logoutUser = () => {
    fetch('/logout',{
      method: 'DELETE'
    })
    .then(() => {
      console.log('logged out')
      setLoggedIn(false)
      setUser({})
    })
    history.push('/')
  }

  const updateAlley = (u) => {
    setLoggedIn(true)
    setUser(u)
    history.push('/')
  }

  const deleteAccount = () => {
    fetch('/delete-account',{
      method: 'DELETE'
    })
    .then(() => {
      setLoggedIn(false)
      setUser({})
    })
    history.push('/')
  }

  return (
    <div className="App">
      <Navbar user={user} loggedIn={loggedIn} logoutUser={logoutUser} deleteAccount={deleteAccount}/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' render={routerProps => <LoginForm {...routerProps} onLogin={loginUser}/>} />
        <Route exact path='/signup' render={routerProps => <SignupForm {...routerProps} onLogin={loginUser}/>} />
        <Route path={`/scorecards/:id`} component={ScoreCard} />
        <Route exact path='/scorecards' render={routerProps => <ScoreCards {...routerProps} user={user} loggedIn={loggedIn}/>} />
        <Route exact path='/change-alley' render={routerProps => <UpdateAlleyForm {...routerProps} user={user} loggedIn={loggedIn} onChangeAlley={updateAlley}/>} />
      </Switch>
    </div>
  );
}

export default App;
