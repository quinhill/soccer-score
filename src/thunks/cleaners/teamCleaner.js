export const cleanTeam = (teamData) => {
  const team = {
    manager: teamData.coach.data.fullname,
    nationality: teamData.coach.data.nationality,
    id: teamData.id,
    name: teamData.name,
    logo: teamData.logo_path,
    venue: teamData.venue.data.name,
    capacity: teamData.venue.data.capacity
  }
  return team
}

