import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Game } from '../Game/Game';
import { fetchTeam } from '../../thunks/fetchTeam';
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

  fetchLeague = () => {

  }

  fetchTeam = (url) => {
    this.props.fetchTeam(url);
    this.setState({team: !this.state.team});
    this.props.history.push('/team');
  }

  team = () => (<Team />)

  // displayGames = () => {
  //   const leagues = this.sortGames()
  //   return Object.keys(leagues).map(league => {
  //     const games = leagues[league].map(game => {
  //       return (
  //         <Game {...game} sortTeamFetch={this.sortTeamFetch}/>
  //       )
  //     })
  //     return (
  //       <div>
  //         <h1>{league}</h1>
  //         {games}
  //       </div>
  //     )
  //   })
  // }

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
  // scheduleAM: state.scheduleAM,
  // scheduleAS: state.scheduleAS,
  // scheduleEU: state.scheduleEU,
  // liveAM: state.liveAM,
  // liveAS: state.liveAS,
  // liveEU: state.liveEU,
  team: state.team
});

export const mapDispatchToProps = (dispatch) => ({
  fetchTeam: (url) => dispatch(fetchTeam(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodaysGames);