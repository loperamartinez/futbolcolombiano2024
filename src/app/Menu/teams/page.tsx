
import Image from "next/image";
import { SimpleTeam, TeamsResponse } from "../../../teams";
import TeamsGrid from "@/teams/components/TeamsGrid";


const getTeams = async(): Promise<SimpleTeam[]> => {
  //El endpoint es de la eliminatoria conmebol, de allí queremos los equipos
  const data: TeamsResponse = await fetch(`https://v3.football.api-sports.io/teams?league=239&season=2024`,
  {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "67143ef7501d558d2d96770f04b6799e"
    }
  }
  )

  .then(res => res.json() );

  const teams = data.response.map( (team) => ({
    id:       team.team.id,
    name:     team.team.name,
    code:     team.team.code,
    country:  team.team.country,
    founded:  team.team.founded,
    national: team.team.national,
    logo:     team.team.logo,
  }))

  return teams;
}


export default async function MatchPage() {
  
  const teams = await getTeams();

    return (
      <div className="text-white flex flex-col">
        <span className="text-2xl my-2 flex flex-col items-center">Primera División del Fútbol Colombiano</span>

        <TeamsGrid teams={teams} />

        

      </div>
    );
}