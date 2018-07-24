export const cleanTeam = (squad) => {
  const players = squad.players.map(player => (
    player.name
  ))
  return {
    teamName: squad.team.name,
    managerName: squad.manager.name,
    managerNationality: squad.manager.nationality,
    players,
    country: squad.team.country,
    stadiumName: squad.venue.name,
    stadiumCapacity: squad.venue.capacity
  }
}