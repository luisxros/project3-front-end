import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import MoviePage from './pages/MoviePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import { useState, useEffect } from 'react';

import { getUser,logout } from './services/userService';
import { getMovieDay } from './services/movie-api';



function App(props) {

  /* Component state*/

  const [ userState, setUserState ] = useState({ user: getUser() });

  const [ movieData, setMovieData ] = useState({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  })
 
  

  
  /* Helper function */

  function handleSignupOrLogin() {
    setUserState({ user: getUser() });
    props.history.push('/movie')
  }

  function handleLogout() {
    logout();
    setUserState({ user: null });
    props.history.push('/homepage')
  }


  async function getMovieData() {
    const data = await getMovieDay();
    setMovieData(data);
  }



  useEffect(() => {
    getMovieData();
  }, []);



  return (
    <div className="App">
      <Header user={userState.user} handleLogout={handleLogout} />

      <Switch>
      <Route exact path="/"  render={ props =>
        <HomePage />
      }/>
      <Route exact path="/movie"  render={ props =>

      getUser() ? 
      <div>
        {movieData.results.map((result, idx) => (
           <MoviePage result={result}/>
        ))}
      </div>
        :
        <Redirect to="/login" />
      }/>
      <Route exact path="/login"  render={ props =>
        <LoginPage  handleSignupOrLogin={handleSignupOrLogin} />
      }/>
      <Route exact path="/signup"  render={ props =>
        <SignupPage handleSignupOrLogin={handleSignupOrLogin} />
      }/>
      </Switch>

      <Footer />
    </div>
  );
}

export default withRouter(App);
