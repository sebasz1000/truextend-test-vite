import { useEffect, useState } from "react";

/*** FIRST APPROACH (COULD BE BETTER) ***/

export const useGroupByTeamOne = (Services) => {
  const [groups, setGroups] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getPlayers = async () => {
      setIsLoading(true);
      const players = await Services.getPlayers();
      const teams = getTeams(players);
      const groups = getGroupsByTeam(players, teams);
      setIsLoading(false);
      setGroups(groups);
      console.log("using first approach");
    };
    getPlayers();
  }, []);

  const getTeams = (players) => {
    let teams = [];
    players.forEach(
      ({ teamName }) =>
        !teams.includes(teamName) && (teams = [...teams, teamName])
    );
    return teams;
  };

  const getGroupsByTeam = (players, teams) => {
    /* NOT OPTIMAL LOPPING since filters for every player
    const groups = {};
    players.forEach(({ teamName }) => {
      let team = teams[teams.indexOf(teamName)];
      groups[team] = players.filter(({ teamName }) => teamName === team);
    });
    return groups;
    */
    let groups = {};
    teams.forEach(
      (team) =>
        (groups[team] = players.filter(({ teamName }) => teamName === team))
    );
    return groups;
  };

  return [groups, isLoading];
};
