import PremierLeagueTable from "./Tables/PremierLeagueTable";
import ManagerInfo from "./Tables/ManagerInfo"; // Import the new component
import PlaceholderTable from "./Tables/PlaceholderTable";

export default function Body() {
  return (
    <main className="grid grid-cols-3 gap-8 p-6 bg-bgCream min-h-screen">
      <ManagerInfo />
      <PremierLeagueTable />
      <PlaceholderTable
        title="Placeholder Table 2"
        content="Content coming soon..."
      />
    </main>
  );
}
