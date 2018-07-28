import {getLeague} from '../../apiKeys';

export const sortLiveSchedule = async (games) => {
  const fullGames = games.map(async game => {
    const leagueUrl = getLeague(game.leagueId)
    const leagueName = await fetchLeagueName(leagueUrl)
    return { ...game, league: leagueName }
  })
  const resolved = await Promise.all(fullGames)
  console.log(resolved)
}


const fetchLeagueName = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  return result.data.name;
}