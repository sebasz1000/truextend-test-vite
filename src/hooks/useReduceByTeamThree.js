import { useState, useEffect } from "react";

/*** THIRD ELEGANT APPROACH!! Using Reduce ***/

export const useReduceByTeamThree = (Services) => {
  const [groups, setGroups] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTeams = async () => {
      try {
        setIsLoading(true);
        const players = await Services.getPlayers();

        //Reducing by team
        const teams = players?.reduce((obj, player) => {
          const { teamName } = player;
          !obj[teamName] && (obj[teamName] = []);
          obj[teamName].push(player);
          return obj;
        }, {});

        setTimeout(() => {
          setIsLoading(false);
          setGroups(teams);
        }, 1000);

        console.log("Using Third approach (reduce() method)");
      } catch (e) {
        console.log(e);
      }
    };
    getTeams();
  }, []);

  return [groups, isLoading];
};
