export const cleanSquad = (squadData) => {
  console.log(squadData)
  const squad = squadData.map((squadPlayer, index) => {
    return {
      key: index,
      name: squadPlayer.player.data.fullname,
      position: squadPlayer.position,
      number: squadPlayer.number,
      id: squadPlayer.player.data.player_id
    }
  })
  return squad
};