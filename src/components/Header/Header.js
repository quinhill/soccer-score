import React from 'react';
import { NavLink } from 'react-router-dom';
import { soccerAmericasKey } from '../../apiKeys';
import { fetchSchedule } from '../../thunks/fetchSchedule';
import { connect } from 'react-redux';
import './header.css';

export const Header = (props) => {

  const getFullDate = () => {
    const today = new Date()
    const year = today.getFullYear();
    let month = `0${today.getMonth() + 1}`;
    const day = today.getDate();
    return `${year}-${month}-${day}`
  }

  const url = `https://api.sportradar.us/soccer-t3/am/en/schedules/${getFullDate()}/schedule.json?api_key=${soccerAmericasKey}`;

  return (
    <header>
      <h1 className="logo">
        soccer-scores
      </h1>
      <button>
        Leagues
      </button>
      <button
        onClick={() => props.fetchSchedule(url)}
      >
        Schedule
      </button>
    </header>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  fetchSchedule: (url) => dispatch(fetchSchedule(url))
});

export default connect(null, mapDispatchToProps)(Header);