import React from "react";
import { SimpleTeam } from "..";
import Image from "next/image";
import Link from "next/link";

interface Props {
  team: SimpleTeam;
}

const teamsCard = ({ team }: Props) => {
  const { id, name } = team;

  return (
    <div className="p-2 sm:p-10 text-center cursor-pointer">
      <div className="py-6 max-w-xs rounded overflow-hidden shadow-lg bg-[#242526]">
        <div className="space-y-4">
          <div className="flex items-center justify-center">
            <Image
              key={team.id}
              src={`https://media.api-sports.io/football/teams/${team.id}.png`}
              width={100}
              height={100}
              alt="escudo equipo"
            />
          </div>
          <div className="px-6 py-4 bg-[#b7f14d]">
            <div className="font-bold text-lg text-[#242526]">{name}</div>
          </div>

          <div className="flex flex-col items-center">
            <Link
              href={`/Menu/teams/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Saber más
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default teamsCard;
