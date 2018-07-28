export const sortLiveSchedule = (games) => {
  return games.reduce((leagues, game) => {
    if (!leagues[game.league]) {
      leagues[game.league] = [game]
    } else {
      leagues[game.league].push(game)
    }
    return leagues
  }, {})
}