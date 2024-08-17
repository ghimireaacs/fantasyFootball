// pages/api/players.js
export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://fantasy.premierleague.com/api/bootstrap-static/"
    );
    const data = await response.json();

    // Extract the players data
    const players = data.elements;

    // Return the players
    res.status(200).json(players);
  } catch (error) {
    console.error("Error fetching FPL data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
