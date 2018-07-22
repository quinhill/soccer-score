import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { fetchSchedule } from '../../thunks/fetchSchedule';
import Header from '../Header/Header';
import Main from '../Main/Main';
// import Team from '../Team/Team';

export class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' component={Main}/>
          {/* <Route exact path='/team' component={Team}/> */}
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  liveData: state.liveData,
  isLoading: state.isLoading,
  hasErrored: state.hasErrored
});

export const mapDispatchToProps = (dispatch) => ({
  fetchSchedule: (url) => dispatch(fetchSchedule(url))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
