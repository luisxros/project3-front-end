import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import MoviePage from './pages/MoviePage';
import TvPage from './pages/TvPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { GlobalStyles } from './components/Global/Global';
import { lightTheme, darkTheme } from './components/Themes/Themes';

import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import { useState, useEffect } from 'react';

import { getUser,logout } from './services/userService';
import { getMovieDay, getTvDay } from './services/movie-api';
import { ThemeProvider } from 'styled-components';



function App(props) {

  /* Component state*/

  const [ userState, setUserState ] = useState({ user: getUser() });

  const [ movieData, setMovieData ] = useState({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  })

  const [ tvData, setTvData ] = useState({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  })

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
 
  

  
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
    const movie = await getMovieDay();
    setMovieData(movie);
  }


  useEffect(() => {
    getMovieData();
  }, []);


  async function getTvData() {
    const tv = await getTvDay();
    setTvData(tv)
  }

  useEffect(() => {
    getTvData();
  }, []);

  

  return (

    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyles />

    <div className="App">
      <Header user={userState.user} handleLogout={handleLogout} />
      <button className="Switch" onClick={themeToggler}>Switch Theme</button>

      <Switch>
      <Route exact path="/"  render={ props =>
        <HomePage />
      }/>

      <Route exact path="/tv" render={ props => 
      getUser() ? 
        <TvPage tvData={tvData} />
        :
        <Redirect to="/login" />
      
      }/>

      <Route exact path="/movie"  render={ props =>

      getUser() ? 
  
      <MoviePage movieData={movieData} />
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
    </>
    </ThemeProvider>
  );
}

export default withRouter(App);
