import React from 'react';
import { NavLink } from 'react-router-dom';
import { soccerEuropeKey } from '../../apiKeys';
import { fetchSchedule } from '../../thunks/fetchSchedule';
import { connect } from 'react-redux';

export const Header = (props) => {

  const url = `https://api.sportradar.us/soccer-xt3/eu/en/matches/sr:match:11830742/summary.json?api_key=${soccerEuropeKey}`;

  return (
    <header>
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