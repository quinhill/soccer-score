import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { fetchScheduleAM } from '../../thunks/fetchSchedules/fetchScheduleAM';
import { fetchScheduleAS } from '../../thunks/fetchSchedules/fetchScheduleAS';
import { fetchScheduleEU } from '../../thunks/fetchSchedules/fetchScheduleEU';
import { fetchLiveAM } from '../../thunks/fetchLive/fetchLiveAM';
import { fetchLiveEU } from '../../thunks/fetchLive/fetchLiveEU';
import { fetchLiveAS } from '../../thunks/fetchLive/fetchLiveAS';
import './header.css';
import { connect } from 'react-redux';
import * as key from '../../apiKeys';
import PropTypes from 'prop-types';


export class Header extends Component {

  handleClick = (link) => {
    if (link === 'leagues') {
      this.handleLeagueFetch()
    } else if (link === 'games') {
      this.handleScheduleFetch()
    } else if (link === 'live') {
      this.handleLiveFetch()
    }
  }
  
  handleLeagueFetch = () => {
    
  }
  
  handleScheduleFetch = () => {
    this.props.fetchScheduleAM(key.urlAM());
    this.props.fetchScheduleAS(key.urlAS());
    this.props.fetchScheduleEU(key.urlEU());
  }

  handleLiveFetch = () => {
    this.props.fetchLiveAM(key.urlAMstring);
    this.props.fetchLiveEU(key.urlEUstring);
    this.props.fetchLiveAS(key.urlASstring);
  }

  render() {
    return (
      <header>
        <Link to='/' className="logo-link">
          <h1 className="logo">
            soccer-scores
          </h1>
        </Link>
        <div className="nav-container">
          <div className="nav">
            <NavLink
              className="leagues-link link"
              onClick={() => this.handleClick('leagues')}
              to='/leagues'
            >
              leagues
            </NavLink>
            <NavLink 
              className="games-link link"
              onClick={() => this.handleClick('games')}
              to='/todaysgames'
            >
              today's games
            </NavLink>
            <NavLink
              className="live-link link"
              onClick={() => this.handleClick('live')}
              to='/live'
            >
              live
            </NavLink>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  fetchScheduleAM: PropTypes.func,
  fetchScheduleAS: PropTypes.func,
  fetchScheduleEU: PropTypes.func,
  fetchLiveAM: PropTypes.func,
  fetchLiveAS: PropTypes.func,
  fetchLiveEU: PropTypes.func,
}

export const mapDispatchToProps = (dispatch) => ({
  fetchScheduleAM: (url) => dispatch(fetchScheduleAM(url)),
  fetchScheduleAS: (url) => dispatch(fetchScheduleAS(url)),
  fetchScheduleEU: (url) => dispatch(fetchScheduleEU(url)),
  fetchLiveAM: (url) => dispatch(fetchLiveAM(url)),
  fetchLiveEU: (url) => dispatch(fetchLiveEU(url)),
  fetchLiveAS: (url) => dispatch(fetchLiveAS(url)),
});

export default connect(null, mapDispatchToProps)(Header);