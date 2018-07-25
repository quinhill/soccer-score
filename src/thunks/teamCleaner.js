export const cleanTeam = (squad) => {
  const manager = squad.manager.name.split(',')
  const players = squad.players.map((player, index) => {
    const playerName = player.name.split(',')
    let name;
    if (playerName[1]) {
      name = `${playerName[1]} ${playerName[0]}`
    } else {
      name = playerName;
    }
    return {
      name,
      position: player.type,
      key: index
    }
  })
  return {
    teamName: squad.team.name,
    managerName: `${manager[1]} ${manager[0]}`,
    managerNationality: squad.manager.nationality,
    players,
    country: squad.team.country,
    stadiumName: squad.venue.name,
    stadiumCapacity: squad.venue.capacity
  }
}