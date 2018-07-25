import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Game } from '../Game/Game';
import { fetchTeam } from '../../thunks/fetchTeam';
import { soccerAmericasKey } from '../../apiKeys';
import Team from '../Team/Team';
import PropTypes from 'prop-types';
import './todays-games.css'

export class TodaysGames extends Component {
  constructor() {
    super()
    this.state = {
      team: false
    }
  }

  fetchTeam = (id) => {
    const url = `https://api.sportradar.us/soccer-t3/am/en/teams/${id}/profile.json?api_key=${soccerAmericasKey}`
    this.props.fetchTeam(url)
    this.setState({team: !this.state.team})
    this.props.history.push('/team')
  }

  team = () => {
    return <Team />
  }

  todaysGames = () => {
    return this.props.schedule.map((event, index) => (
        <Game 
          {...event}
          fetchTeam={this.fetchTeam}
          key={index}
        />
      ))
  }

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
            {this.todaysGames()}
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
  schedule: state.schedule,
  team: state.team
});

export const mapDispatchToProps = (dispatch) => ({
  fetchTeam: (url) => dispatch(fetchTeam(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodaysGames);