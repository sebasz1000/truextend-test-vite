// comment
/*
  NBA Players
  Implement a React component that:
    1. Shows the list of players of each team.

  Example: Following the data from getPlayers service, the result should be as follows:
  ============================
  Team: Lakers
    - LeBron James
    - Anthony Davis
    - Thomas Bryant
  Team: Celtics
    - Jabari Bird
    - Michael Smith
  Team: Pistons
    - Zach Lofton
    - Keenan Evans
  ============================

  Note:
    - Consider getPlayers service as it was a real backend endpoint.

*/

import { useGroupByTeamOne, useGroupByTeamTwo, useReduceByTeamThree, useReduceByTeamFour } from './hooks'
import { List } from './components/List'
const Services = {
  getPlayers() {
    const data = [
      { name: "LeBron", lastName: "James", weight: 100, teamName: "Lakers" },
      { name: "Thomas", lastName: "Bryant", weight: 100, teamName: "Lakers" },
      { name: "Zach", lastName: "Lofton", weight: 270, teamName: "Pistons" },
      { name: "Anthony", lastName: "Davis", weight: 100, teamName: "Lakers" },
      { name: "Jabari", lastName: "Bird", weight: 230, teamName: "Celtics" },
      { name: "Keenan", lastName: "Evans", weight: 170, teamName: "Pistons" },
      { name: "Michael", lastName: "Smith", weight: 100, teamName: "Celtics" },
    ];
    return Promise.resolve(data);
  },
};


export const NBAPlayers = () => {

  /*** FIRST APPROACH (teams extraction extra step) */
  //const [groups, isLoading] = useGroupByTeam(Services)

  /**** SECOND APPROACH (Using forEach() method) ****/
  //const [groups, isLoading] = useGroupByTeam2(Services)

  /**** THIRD APPROACH (Using reduce() method) ****/
  const [groups, isLoading] = useReduceByTeamThree(Services)

  /**** FOURTH APPROACH (Using reduce() and API approach - no useEffect) ****/
  //const [groups, isLoading] = useReduceByTeamFour(Services)

  return (
    <div>
      <h1>NBA Players</h1>
      {isLoading ? <p>Loading...</p> : null}
      {
        /* DISPLAY FIRST APPROACH (Using Object.entries())
        Object.entries(groups).map(list =>
          <List team={list[0]} players={list[1]} key={list[0]} />
        )
        */
        Object.keys(groups)?.map(
          team => <List team={team} players={groups[team]} key={team} />
        )
      }
    </div>
  );
};


export default function App() {
  return (
    <div className="App">
      <NBAPlayers />
    </div>
  );
}
