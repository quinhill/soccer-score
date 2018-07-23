import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { fetchSchedule } from '../../thunks/fetchSchedule';
import Header from '../Header/Header';
import TodaysGames from '../TodaysGames/TodaysGames';
import { Home } from '../Home/Home';
import Team from '../Team/Team';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route 
            exact path='/todaysgames' 
            component={TodaysGames}
          />
          <Route exact path='/team' component={Team}/>
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
});

export const mapDispatchToProps = (dispatch) => ({
  fetchSchedule: (url) => dispatch(fetchSchedule(url))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
