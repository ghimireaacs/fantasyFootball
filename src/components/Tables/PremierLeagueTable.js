import { useEffect, useState } from "react";
import { getPremierLeagueTable } from "@/api/fplApi";

export default function PremierLeagueTable() {
  const [teams, setTeams] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const teamsData = await getPremierLeagueTable(); // Call the utility function
        setTeams(teamsData);
      } catch (error) {
        console.error("Failed to fetch Premier League table", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchTeams();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!teams || teams.length === 0)
    return <div>No teams data available at the moment.</div>;

  return (
    <div className="bg-darkBackground text-whiteText p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Premier League Table
      </h2>
      <table className="min-w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-neonGreen">Position</th>
            <th className="px-4 py-2 border-b border-neonGreen">Team</th>
            <th className="px-4 py-2 border-b border-neonGreen">Played</th>
            <th className="px-4 py-2 border-b border-neonGreen">Points</th>
            <th className="px-4 py-2 border-b border-neonGreen">Strength</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id}>
              <td className="px-4 py-2 border-b border-neonGreen">
                {index + 1}
              </td>
              <td className="px-4 py-2 border-b border-neonGreen">
                {team.name}
              </td>
              <td className="px-4 py-2 border-b border-neonGreen">
                {team.played}
              </td>
              <td className="px-4 py-2 border-b border-neonGreen">
                {team.points}
              </td>
              <td className="px-4 py-2 border-b border-neonGreen">
                {team.strength}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
