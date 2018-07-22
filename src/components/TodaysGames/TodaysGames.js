import React from 'react';
import { connect } from 'react-redux';
import { Game } from '../Game/Game';
import { fetchTeam } from '../../thunks/fetchTeam';
import { soccerAmericasKey } from '../../apiKeys';

export const TodaysGames = (props) => {

  const fetchTeam = (id) => {
    const url = `https://api.sportradar.us/soccer-t3/am/en/teams/${id}/profile.json?api_key=${soccerAmericasKey}`
    props.fetchTeam(url)
  }

  const todaysGames = props.schedule.map((event, index) => {
      return <Game 
        {...event} 
        fetchTeam={fetchTeam} 
        key={index} 
      />
    })

    return (
      <div>
        {todaysGames}
      </div>
    )
}

export const mapStateToProps = (state) => ({
  schedule: state.schedule,
  team: state.team
});

export const mapDispatchToProps = (dispatch) => ({
  fetchTeam: (url) => dispatch(fetchTeam(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodaysGames);