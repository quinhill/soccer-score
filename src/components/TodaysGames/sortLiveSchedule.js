export const sortLiveSchedule = (games) => {
  return games.reduce((leagues, game) => {
    if (!leagues[game.tournament.name]) {
      leagues[game.tournament.name] = [game]
    } else {
      leagues[game.tournament.name].push(game)
    }
    return leagues
  }, {})
}