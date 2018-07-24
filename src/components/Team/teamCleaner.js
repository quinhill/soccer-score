export const cleanTeam = (squad) => {
  const players = squad.players.map(player => (
    {
      name: player.name
    }
  ))
  return {
    teamName: squad.team.name,
    manager: {
      name: squad.manager.name,
      nationality: squad.manager.nationality
    },
    players,
    country: squad.team.country,
    stadium: {
      name: squad.venue.name,
      capacity: squad.venue.capacity
    }
  }
}

const teamObj = {
  manager: {
    country_code: "ARG",
    id: "sr:player:1018137",
    name: "Grioni, Marcelo",
    nationality: "Argentina"
  },
  players: [
    {
      country_code:"PER",
      date_of_birth:"1999-06-30",
      gender:"male",
      height:180,
      id:"sr:player:1408961",
      name:"Fuentes Pando, Gibson",
      nationality:"Peru",
      preferred_foot:"right",
      type:"forward",
      weight:76
    },
    { id: "sr:player:1017993", name: "Lliuya, Marcos", type: "midfielder", date_of_birth: "1992-03-27", nationality: "Peru"},
    { id: "sr:player:1408621", name: "Saune, Jonathan", type: "forward", date_of_birth: "1989-07-20", nationality: "Peru"},
    { id: "sr:player:1478884", name: "Menacho, Rodrigo", type: "defender", date_of_birth: "1999-04-13", nationality: "Peru"},
    { id: "sr:player:556856", name: "Salcedo, Ricardo", type: "midfielder", date_of_birth: "1990-03-23", nationality: "Peru"},
    { id: "sr:player:41714", name: "Pena, Victor", type: "midfielder", date_of_birth: "1987-05-14", nationality: "Peru"},
    { id: "sr:player:248243", name: "Monsalvo, Charles", type: "forward", date_of_birth: "1990-05-26", nationality: "Colombia"},
    { id: "sr:player:189207", name: "Deza, Jean", type: "forward", date_of_birth: "1993-06-09", nationality: "Peru"},
    { id: "sr:player:47413", name: "Trujillo, Luis", type: "midfielder", date_of_birth: "1990-12-27", nationality: "Peru"},
    { id: "sr:player:1425985", name: "Velasquez, Moises", type: "defender", date_of_birth: "1999-02-24", nationality: "Peru"},
    { id: "sr:player:937128", name: "Lojas, Sebastian", type: "defender", date_of_birth: "1995-07-04", nationality: "Peru"},
    { id: "sr:player:162425", name: "Hermoza, Eder", type: "goalkeeper", date_of_birth: "1990-04-04", nationality: "Peru"},
    { id: "sr:player:73666", name: "Valverde, Marcio Andres", type: "midfielder", date_of_birth: "1987-10-23", nationality: "Peru"},
    { id: "sr:player:1108885", name: "Calderon, Waldir", type: "midfielder", date_of_birth: "1997-06-09", nationality: "Peru"},
    { id: "sr:player:125040", name: "Pinto, Joel", type: "goalkeeper", date_of_birth: "1980-06-05", nationality: "Peru"}
  ],
  team: {
    abbreviation:"HUA",
    category:{ id: "sr:category:20", name: "Peru", country_code: "PER" },
    country:"Peru",
    country_code:"PER",
    id:"sr:competitor:33895",
    name: "Sport Huancayo"
  },
  venue: {
    capacity: 20000,
    city_name: "Huancayo",
    country_code: "PER",
    country_name: "Peru",
    id: "sr:venue:1175",
    map_coordinates: "-12.072796,-75.201588",
    name: "Estadio Huancayo"
  }
}