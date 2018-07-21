import React, { Component } from 'react';
import * as APIKey from '../../apiKeys';
import './App.css';
import { connect } from 'react-redux';
import {Link, NavLink, Route, Switch, withRouter } from 'react-router-dom';
import { fetchSchedule } from '../../thunks/fetchSchedule';
import Header from '../Header/Header';

export class App extends Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div className="App">
        <Header />
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
