import { useEffect, useState } from "react";

/*** Second Approach using FoEach */

export const useGroupByTeamTwo = (Services) => {
  const [groups, setGroups] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getPlayers = async () => {
      try {
        const players = await Services.getPlayers();
        // Emulates data debouncing
        setTimeout(() => {
          setIsLoading(false);
          const groupsByTeamsObj = getGroupsByTeam(players);
          setGroups(groupsByTeamsObj);
          console.log("using second ELEGANT approach");
        }, 1000);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    };
    getPlayers();
  }, []);

  const getGroupsByTeam = (players) => {
    const obj = {};
    players?.forEach((player) => {
      const { teamName } = player;
      obj[teamName]
        ? (obj[teamName] = [...obj[teamName], player])
        : (obj[teamName] = [player]);
    });
    return obj;
  };

  return [groups, isLoading];
};
