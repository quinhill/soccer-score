export const mockPlayerData = {
  birthcountry: "Italy",
  birthdate: "29/03/1991",
  birthplace: "Bentivoglio",
  common_name: "F. Borini",
  country_id: 251,
  firstname: "Fabio",
  fullname: "Fabio Borini",
  height: "180 cm",
  image_path: "https://cdn.sportmonks.com/images/soccer/players/1/833.png",
  lastname: "Borini",
  nationality:"Italy",
  player_id: 833,
  position: {
    data:{
      id: 4,
      name: "Attacker"
    }
  },
  position_id: 4,
  team: {
    data:{
      country_id: 251,
      founded: 1899,
      id: 113,
      legacy_id: 327,
      logo_path: "https://cdn.sportmonks.com/images/soccer/teams/17/113.png",
      name: "Milan",
      national_team: false,
      short_code: "MIL",
      twitter: "@acmilan",
      venue_id: 1721,
    }
  },
  team_id: 113,
  weight: "73 kg"
}

export const mockExpectedPlayer = { "birthdate": "29/03/1991", "birthplace": "Bentivoglio, Italy", "image": "https://cdn.sportmonks.com/images/soccer/players/1/833.png", "name": "Fabio Borini", "nationality": "Italy", "position": "Attacker", "team": "Milan" }