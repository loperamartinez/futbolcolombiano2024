import React from 'react'
import { SimpleTeam } from '..'; 
import TeamsCard from './TeamsCard';

interface Props{
    teams: SimpleTeam[];
}

const teamsGrid = ({teams}: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">

        {
        teams.map((team) => (
            <TeamsCard key={team.id} team={team}/>
        ))
        }
      
    </div>
  )
}

export default teamsGrid
