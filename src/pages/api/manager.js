// pages/api/manager.js
export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://fantasy.premierleague.com/api/entry/8131775/"
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Failed to fetch manager data", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
