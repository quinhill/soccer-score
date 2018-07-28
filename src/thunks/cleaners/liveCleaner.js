export const cleanLive = (gamesData) => {
  const cleanedGames = gamesData.map(game => {
    return {
      teamHome: game.localTeam.data.name,
      teamAway: game.visitorTeam.data.name,
      teamHomeId: game.localTeam.data.id,
      teamAwayId: game.visitorTeam.data.id,
      league: game.league.data.name,
      times: game.time,
      scores: game.scores,
      id: game.id
    }
  })
  return sortToLeagues(cleanedGames)
}

const sortToLeagues = (games) => (
  games.reduce((leagueObject, game) => {
    if (!leagueObject[game.league]) {
      leagueObject[game.league] = [game]
    } else {
      leagueObject[game.league].push(game)
    }
    return leagueObject
  }, {})
)