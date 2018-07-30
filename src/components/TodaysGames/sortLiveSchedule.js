// import { getLeague, getTeam } from '../../apiKeys';

// export const sortLiveSchedule = async (games) => {
//   const fullGames = games.map(async game => {
//     const leagueUrl = getLeague(game.leagueId)
//     const leagueName = await fetchLeagueName(leagueUrl)
//     return { ...game, league: leagueName }
//   })
//   const resolved = await Promise.all(fullGames)
//   console.log(resolved)
//   // addTeamName(games)
// }


// const fetchLeagueName = async (url) => {
//   const response = await fetch(url);
//   const result = await response.json();
//   return result.data.name;
// }

// // export const addTeamName = async (games) => {
// //   const addedTeams = games.map(async game => {
// //     const homeTeamUrl = getTeam(game.homeTeamId)
// //     const awayTeamUrl = getTeam(game.awayTeamId)
// //     const homeTeam = await fetchTeam(homeTeamUrl)
// //     const awayTeam = await fetchTeam(awayTeamUrl)
// //     return { ...game, homeTeam, awayTeam }
// //   })
// //   const resolved = await Promise.all(addedTeams)
// //   console.log(resolved)
// // }


// // const fetchTeam = async (url) => {
// //   const response = await fetch(url);
// //   const result = await response.json();
// //   return result.data;
// // }