import React from 'react';
import { HashRouter, Router, Route, Switch } from 'react-router-dom';
// import './App.css';
// Main Import Pages
import Navbar from './components/Navbar';
import Home from './components/Home';
import MostViewed from './components/MostViewed';
import Movies from './components/Movies';
import MovieDetail from './components/MovieDetail';
import Error from './components/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tvs from './components/Tvs';
import TvDetail from './components/TvDetail';
import ParticularSeason from './components/ParticularSeason';
import Sp from './components/Sp';

function App() {
  return (
    <HashRouter>
      <Navbar />
      {/* <AsideRight />
      <AsideLeft /> */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/mostviewed'>
          <MostViewed />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/tvs'>
          <Tvs />
        </Route>
        <Route path='/sp/:id/:name'>
          <Sp />
        </Route>
        <Route path='/moviedetail/:id'>
          <MovieDetail />
        </Route>
        <Route path='/tvdetail/:id'>
          <TvDetail />
        </Route>
        <Route path='/tvseason/:id/season/:nseason'>
          <ParticularSeason />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
