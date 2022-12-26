import { useState } from "react";
import { getData } from "../api/getData";
export const useReduceByTeamFour = (Services) => {
  const [groups, setGroups] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const players = [];
  const reduceByGroups = (players) => {
    const groupsByTeam = players.reduce((obj, player) => {
      const { teamName } = player;
      !obj[teamName] && (obj[teamName] = []);
      obj[teamName].push(player);
    }, {});
    console.log(groupsByTeam);
    setGroups(groupsByTeam);
  };
  setIsLoading(true);
  getData(Services.getPlayers())
    .then((players) => {
      reduceByGroups(players);
    })
    .then(() => setIsLoading(false));

  return [groups, isLoading];
};
