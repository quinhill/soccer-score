export const mockCleanLiveData = [{
  aggregate_id: null,
  attendance: null,
  id: 10321885,
  league: {
    data: {
      country_id: 190324,
      coverage: { 
        topscorer_goals: false, 
        topscorer_assists: false, 
        topscorer_cards: false 
      },
      current_round_id: 146713,
      current_season_id: 12720,
      current_stage_id: 5120897,
      id: 1121,
      is_cup: true,
      legacy_id: 402,
      live_standings: false,
      name: "International Champions Cup"
    },
  },
  league_id: 1121,
  localTeam: {
    data: {
      country_id: 462,
      founded: 1878,
      id: 14,
      legacy_id: 375,
      logo_path: "https://cdn.sportmonks.com/images/soccer/teams/14/14.png",
      name: "Manchester United",
      national_team: false,
      short_code: "MUN",
      twitter: "@ManUtd",
      venue_id: 206
    }
  },
  localteam_id: 14,
  scores: {
    et_score: null,
    ft_score: "2-1",
    ht_score: "2-1",
    localteam_pen_score: null,
    localteam_score: 2,
    visitorteam_pen_score: null,
    visitorteam_score: 1,
  },
  season_id: 12720,
  visitorTeam: {
    data: {
      country_id: 32,
      founded: 1902,
      id: 3468,
      legacy_id: 117,
      logo_path:
      "https://cdn.sportmonks.com/images/soccer/teams/12/3468.png",
      name: "Real Madrid",
      national_team: false,
      short_code: "MAD",
      twitter: "@realmadrid",
      venue_id: 2020,
    }
  },
  visitorteam_id: 3468
}
]

export const mockExpectedLive = { "International Champions Cup": [{ "id": 10321885, "league": "International Champions Cup", "scores": { "et_score": null, "ft_score": "2-1", "ht_score": "2-1", "localteam_pen_score": null, "localteam_score": 2, "visitorteam_pen_score": null, "visitorteam_score": 1 }, "seasonId": 12720, "teamAway": "Real Madrid", "teamAwayId": 3468, "teamHome": "Manchester United", "teamHomeId": 14, "times": undefined }] }