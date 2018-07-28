import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Game } from '../Game/Game';
import { fetchTeam } from '../../thunks/fetchTeam';
import { fetchLeague } from '../../thunks/fetchLeague';
import * as key from '../../apiKeys';
import Team from '../Team/Team';
import PropTypes from 'prop-types';
import './todays-games.css'
import { sortLiveSchedule } from './sortLiveSchedule';

export class TodaysGames extends Component {
  constructor() {
    super()
    this.state = {
      team: false
    }
  }

  sortGames = () => {
    const games = sortLiveSchedule(this.props.liveScores)
    
  }


  fetchTeam = (url) => {
    this.props.fetchTeam(url);
    this.setState({team: !this.state.team});
    this.props.history.push('/team');
  }

  team = () => (<Team />)

  render() {
    if (this.state.team) {
      return (
        <div className="team">
          <div className="display">
            {this.team()}
          </div>
        </div>
      )
    } else {
      return (
        <div className="todays-games">
          <div className="display">
            {this.sortGames()}
          </div>
        </div>
      )
    }
  }
}

TodaysGames.propTypes = {
  schedule: PropTypes.array,
  team: PropTypes.object,
  fetchTeam: PropTypes.func
}

export const mapStateToProps = (state) => ({
  liveScores: state.liveScores,
  team: state.team
});

export const mapDispatchToProps = (dispatch) => ({
  fetchTeam: (url) => dispatch(fetchTeam(url)),
  fetchLeague: (url) => dispatch(fetchLeague(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodaysGames);