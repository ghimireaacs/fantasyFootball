import { useEffect, useState } from "react";
import { getFplManager } from "@/api/fplApi";

export default function ManagerInfo() {
  const [manager, setManager] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchManagerData = async () => {
      try {
        const managerData = await getFplManager();
        setManager(managerData);
      } catch (error) {
        console.error("Failed to fetch manager data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchManagerData();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!manager) return <div>No manager data available at the moment.</div>;

  return (
    <div className="bg-darkBackground text-whiteText p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Manager Info</h2>
      <table className="min-w-full text-left">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-neonGreen">Detail</th>
            <th className="px-4 py-2 border-b border-neonGreen">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b border-neonGreen">Name</td>
            <td className="px-4 py-2 border-b border-neonGreen">
              {manager.player_first_name} {manager.player_last_name}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-neonGreen">Team Name</td>
            <td className="px-4 py-2 border-b border-neonGreen">
              {manager.name}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-neonGreen">
              Favorite Team
            </td>
            <td className="px-4 py-2 border-b border-neonGreen">
              {manager.favourite_team}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-neonGreen">
              Overall Points
            </td>
            <td className="px-4 py-2 border-b border-neonGreen">
              {manager.summary_overall_points}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-neonGreen">
              Overall Rank
            </td>
            <td className="px-4 py-2 border-b border-neonGreen">
              {manager.summary_overall_rank}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b border-neonGreen">Leagues</td>
            <td className="px-4 py-2 border-b border-neonGreen">
              {manager.leagues.classic.map((league, index) => (
                <div key={index}>
                  {league.name} - Rank: {league.entry_rank || "N/A"}
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
