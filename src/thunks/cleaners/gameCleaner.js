export const cleanGame = (gameData) => {
  return {
    cards: gameData.cards.data,
    formations: gameData.formations,
    goals: gameData.goals.data,
    homeTeam: gameData.localTeam.data.name,
    homeLogo: gameData.localTeam.data.logo_path,
    homeId: gameData.localteam_id,
    homeScores: gameData.scores.localteam_score,
    awayScores: gameData.scores.visitorteam_score,
    awayTeam: gameData.visitorTeam.data.name,
    awayLogo: gameData.visitorTeam.data.logo_path,
    awayId: gameData.visitorteam_id,
    substitutions: gameData.substitutions.data,
    time: gameData.time,
    startingAt: gameData.time.starting_at
  }
}