export const cleanTeam = (squad) => {
  const players = squad.players.map((player, index) => {
    return {
      name: player.name,
      position: player.type,
      key: index
    }
  })
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