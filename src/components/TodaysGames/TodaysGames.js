import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Game } from '../Game/Game';
import { fetchTeam } from '../../thunks/fetchTeam';
import { soccerAmericasKey } from '../../apiKeys';
import Team from '../Team/Team';

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
        <div>
          {this.team()}
        </div>
      )
    } else {
      return (
        <div>
          {this.todaysGames()}
        </div>
      )
    }
  }
}

export const mapStateToProps = (state) => ({
  schedule: state.schedule,
  team: state.team
});

export const mapDispatchToProps = (dispatch) => ({
  fetchTeam: (url) => dispatch(fetchTeam(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodaysGames);