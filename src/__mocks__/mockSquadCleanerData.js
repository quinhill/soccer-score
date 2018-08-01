export const mockSquadData = [{
  appearences: 1,
  assists: 0,
  goals: 0,
  injured: false,
  lineups: 1,
  minutes: 61,
  number: 99,
  player: {
    data: {
      birthcountry: "Italy",
      birthdate: "25/02/1999",
      birthplace: "Castellammare di Stabia",
      common_name: "G. Donnarumma",
      country_id: 251,
      firstname: "Gianluigi",
      fullname: "Gianluigi Donnarumma",
      height: "196 cm",
      image_path: "https://cdn.sportmonks.com/images/soccer/players/11/129771.png",
      lastname: "Donnarumma",
      nationality: "Italy",
      player_id: 129771,
      position_id: 1,
      team_id: 113,
      weight: "90 kg",
    }
  },
  player_id: 129771,
  position: {
    data: {
      id: 1,
      name: "Goalkeeper"
    }
  },
  position_id: 1,
  redcards: 0,
  substitute_in: 0,
  substitute_out: 1,
  substitutes_on_bench: 1,
  yellowcards: 0,
  yellowred: 0
}]

export const mockExpectedSquad = [{ "id": 129771, "key": 0, "name": "Gianluigi Donnarumma", "number": 99, "position": { "data": { "id": 1, "name": "Goalkeeper" } } }]