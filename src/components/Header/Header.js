import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchSchedule } from '../../thunks/fetchSchedule';
import './header.css';
import { connect } from 'react-redux';
import { soccerAmericasKey} from '../../apiKeys';
import PropTypes from 'prop-types';


export class Header extends Component {

  getFullDate = () => {
    const today = new Date()
    const year = today.getFullYear();
    let month = `0${today.getMonth() + 1}`;
    const day = today.getDate();
    return `${year}-${month}-${day}`
  }

  handleClick = (link) => {
    if (link === 'leagues') {
      this.handleLeagueFetch()
    } else if (link === 'games') {
      this.handleScheduleFetch()
    }
  }
  
  handleLeagueFetch = () => {
    
  }
  
  handleScheduleFetch = () => {
    const url = `https://api.sportradar.us/soccer-t3/am/en/schedules/${this.getFullDate()}/schedule.json?api_key=${soccerAmericasKey}`;
    this.props.fetchSchedule(url);
  }

  render() {
    return (
      <header>
        <h1 className="logo">
          soccer-scores
        </h1>
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
  fetchSchedule: PropTypes.func
}

export const mapDispatchToProps = (dispatch) => ({
  fetchSchedule: (url) => dispatch(fetchSchedule(url))
});

export default connect(null, mapDispatchToProps)(Header);