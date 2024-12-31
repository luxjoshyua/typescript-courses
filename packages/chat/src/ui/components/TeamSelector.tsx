import * as React from 'react'
import TeamLink from './TeamSelector/TeamLink'
import { ITeam } from '../../types'

const TeamSelector = ({ teams }:
  // everything on iteam except for messages
   {teams: Pick<ITeam, Exclude<keyof ITeam, 'messages'>>[]}) => (
  <nav className="flex-none block pt-2 text-purple-300 bg-indigo-900 border-r-2 border-indigo-900 team-selector">
    {teams.map((team) => {
      const { id, ...rest } = team
      return <TeamLink team={team} key={id} {...rest} />
    })}

    <div className="inline-block p-4 cursor-pointer team-selector__add-team-button sm:block">
      <div className="flex items-center justify-center w-12 h-12 mb-1 overflow-hidden text-2xl font-semibold text-black bg-white rounded-lg opacity-25">
        <svg
          aria-hidden="true"
          className="block w-10 h-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"></path>
        </svg>
      </div>
    </div>
  </nav>
)

export default TeamSelector
