export const cleanPlayer = (playerData) => {
  const player = {
    image: playerData.image_path,
    name: playerData.fullname,
    nationality: playerData.nationality,
    birthdate: playerData.birthdate,
    birthplace: `${playerData.birthplace}, ${playerData.birthcountry}`,
    team: playerData.team.data.name,
    position: playerData.position.data.name
  }
  return player
}