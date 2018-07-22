import React from 'react';
import { NavLink } from 'react-router-dom';
import { fetchSchedule } from '../../thunks/fetchSchedule';
import './header.css';
import { connect } from 'react-redux';
import { soccerAmericasKey} from '../../apiKeys';


export const Header = (props) => {

  const getFullDate = () => {
    const today = new Date()
    const year = today.getFullYear();
    let month = `0${today.getMonth() + 1}`;
    const day = today.getDate();
    return `${year}-${month}-${day}`
  }

  const handleClick = (link) => {
    if (link === 'leagues') {
      handleLeagueFetch()
    } else if (link === 'games') {
      handleScheduleFetch()
    }
  }

  const handleLeagueFetch = () => {

  }

  const handleScheduleFetch = () => {
    const url = `https://api.sportradar.us/soccer-t3/am/en/schedules/${getFullDate()}/schedule.json?api_key=${soccerAmericasKey}`;
    props.fetchSchedule(url);
  }

  return (
    <header>
      <h1 className="logo">
        soccer-scores
      </h1>
      <NavLink
        onClick={() => handleClick('leagues')}
        to='/leagues'
      >
        leagues
      </NavLink>
      <NavLink 
        onClick={() => handleClick('games')}
        parrams="games"
        to='/todaysgames'
      >
        today's games
      </NavLink>
    </header>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  fetchSchedule: (url) => dispatch(fetchSchedule(url))
});

export default connect(null, mapDispatchToProps)(Header);