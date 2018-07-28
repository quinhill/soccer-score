export const cleanLive = (gamesData) => {
  return gamesData.map(game => ({
    league: game.league_id,
    homeTeamId: game.localteam_id,
    awayTeamId: game.visitorteam_id,
    homeFormation: game.localteam_formation,
    referee: game.referee_id,
    scores: game.scores,
    timeData: game.time
  }))
}