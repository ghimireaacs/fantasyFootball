export const getPremierLeagueTable = async () => {
  try {
    const response = await fetch(
      "https://fantasy.premierleague.com/api/bootstrap-static/"
    );
    const data = await response.json();
    return data.teams;
  } catch (error) {
    console.error("Failed to fetch Premier League table", error);
    throw error;
  }
};

export const getPlayers = async () => {
  try {
    const response = await fetch(
      "https://fantasy.premierleague.com/api/bootstrap-static/"
    );
    const data = await response.json();
    return data.elements; // Returning player data
  } catch (error) {
    console.error("Failed to fetch player data", error);
    throw error;
  }
};
export const getFplManager = async () => {
  try {
    const response = await fetch(
      "https://fantasy.premierleague.com/api/entry/8131775/"
    );
    const data = await response.json();
    return data.elements; // Returning player data
  } catch (error) {
    console.error("Failed to fetch player data", error);
    throw error;
  }
};
