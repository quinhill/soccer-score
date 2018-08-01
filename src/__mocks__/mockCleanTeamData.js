export const mockTeamData = {
  coach: {
    data: {
      birthcountry: "Italy",
      birthdate: "08/09/1969",
      birthplace: "Pescara",
      coach_id: 458783,
      common_name: "E. Di Francesco",
      country_id: 251,
      firstname: "Eusebio",
      fullname: "E. Di Francesco",
      image_path: "https://cdn.sportmonks.com/images/soccer/players/31/458783.png",
      lastname: "Di Francesco",
      nationality: "Italy",
      team_id: 37,
    }
  },
  country_id: 251,
  founded: 1927,
  id: 37,
  legacy_id: 128,
  logo_path: "https://cdn.sportmonks.com/images/soccer/teams/5/37.png",name: "Roma",
  national_team: false,
  short_code: "ROM",
  twitter: "@OfficialASRoma",
  venue: {
    data: {
      address: "Viale dei Gladiatori, 2 / Via del Foro Italico",
      capacity: 68530,
      city: "Roma",
      coordinates: null,
      id: 7219,
      image_path: "https://cdn.sportmonks.com/images/soccer/venues/19/7219.png",
      name: "Stadio Olimpico",
      surface: "grass"
    }
  },
  venue_id: 7219
}

export const mockExpectedTeam = { "capacity": 68530, "id": 37, "logo": "https://cdn.sportmonks.com/images/soccer/teams/5/37.png", "manager": "E. Di Francesco", "name": "Roma", "nationality": "Italy", "venue": "Stadio Olimpico" }