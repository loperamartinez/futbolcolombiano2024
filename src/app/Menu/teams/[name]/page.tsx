import { Info, Streak } from "@/teams/interfaces/info";
import { Teamc, Team, Venue } from "@/teams/interfaces/team";
import Image from "next/image";

interface CombinedData {
    team: Team;
    venue: Venue;
    teamId: number;
}

interface Data {
    streak: Streak;
}

interface Props {
    params: { name: string }
}

const getTeam = async (name: string): Promise<CombinedData | null> => {
    try {
        const response = await fetch(`https://v3.football.api-sports.io/teams?name=${name}`, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "X-RapidAPI-Key": "67143ef7501d558d2d96770f04b6799e",
            },
        });

        const data: Teamc = await response.json();
        const team = data.response[0]?.team;
        const venue = data.response[0]?.venue;
        const teamId = team?.id;

        if (!team || !venue || !teamId) {
            return null;
        }

        return { team, venue, teamId };
    } catch (error) {
        console.error("Error fetching team data:", error);
        return null;
    }
};


async function getMatchStats(id: number): Promise<Data> {
  
      const response = await fetch(`https://v3.football.api-sports.io/teams/statistics?league=239&season=2024&team=${id}`, {
          method: "GET",
          headers: {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "X-RapidAPI-Key": "67143ef7501d558d2d96770f04b6799e",
          },
      });

      const data: Info = await response.json();

      const streak = data.response[0]?.streaks;

      return {streak};

}


export default async function TeamPage({ params }: Props) {
  const combinedData = await getTeam(params.name);

  if (!combinedData) {
      return <div>No se encontraron datos del equipo o del estadio.</div>;
  }

  const { team, venue} = combinedData;

  const matchStats = await getMatchStats(team.id);


    return (
        <div className="p-16">
            <div className="p-8 bg-[#242526] shadow mt-24">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0 text-[#242526]">
                        <div>
                            <p className="font-bold  text-xl">22</p>
                            <p className="">Victorias</p>
                        </div>

                        <div>
                            <p className="font-bold  text-xl">4</p>
                            <p className="">Empates</p>
                        </div>

                        <div>
                            <p className="font-bold  text-xl">5</p>
                            <p className="">Perdidas</p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="w-48 h-48 bg-gray-200 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                            <Image
                                key={team.id}
                                src={`https://media.api-sports.io/football/teams/${team.id}.png`}
                                width={125}
                                height={125}
                                alt="escudo equipo"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center border-b pb-12">
                    <h1 className="text-4xl font-medium text-[#b7f14d]">
                        {team.name}, <span className="font-light text-white">{team.founded}</span>
                    </h1>

                    <p className="font-light text-white mt-3">Juega en: {venue.city}</p>

                    <div className="flex justify-center items-center my-4">
                        <Image
                            key={venue.id}
                            src={`https://media.api-sports.io/football/venues/${venue.id}.png`}
                            width={400}
                            height={400}
                            alt="estadio equipo"
                        />
                    </div>

                    <p className="mt-4 text-white">
                        {venue.name}
                    </p>
                </div>
            </div>
        </div>
    );
}



