import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import TodaysGames from '../TodaysGames/TodaysGames';
import Team from '../Team/Team';
import FullGame from '../FullGame/FullGame';
import Player from '../Player/Player';
import PropTypes from 'prop-types';

export class App extends Component {

  render() {
    return (
      <div className="App">
      <div className="color-overlay">
        <Header />
        <Switch>
          <Route path='/' component={TodaysGames}/>
          <Route exact path='/team' component={Team}/>
          <Route exact path='/fullgame' component={FullGame}/>
          <Route exact path='/player' component={Player}/>
        </Switch>
      </div>
      </div>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool,
  hasErrored: PropTypes.bool,
  fetchLiveScores: PropTypes.func
}

export default App;