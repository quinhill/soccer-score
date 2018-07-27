import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { fetchScheduleAM } from '../../thunks/fetchSchedules/fetchScheduleAM';
import Header from '../Header/Header';
import TodaysGames from '../TodaysGames/TodaysGames';
import { Home } from '../Home/Home';
import Team from '../Team/Team';
import PropTypes from 'prop-types';
import Live from '../Live/Live';

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
          <Route exact path='/live' component={Live}/>
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool,
  hasErrored: PropTypes.bool,
  fetchSchedule: PropTypes.func
}

export const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
});

export const mapDispatchToProps = (dispatch) => ({
  fetchScheduleAM: (url) => dispatch(fetchScheduleAM(url))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
