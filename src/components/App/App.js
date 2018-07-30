import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { fetchLiveScores } from '../../thunks/fetchLiveScores';
import Header from '../Header/Header';
import TodaysGames from '../TodaysGames/TodaysGames';
import { Team } from '../Team/Team';
import PropTypes from 'prop-types';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route 
            path='/' 
            component={TodaysGames}
          />
          <Route exact path='/team' component={Team}/>
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
  fetchLiveScores: (url) => dispatch(fetchLiveScores(url))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
