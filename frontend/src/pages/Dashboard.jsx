import Map from "@/components/Map";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow p-4">
        <h1 className="text-xl font-bold">Rail Defect Dashboard</h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-4">
          <Card className="p-4 mb-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <p className="text-sm text-muted-foreground">Coming soon...</p>
          </Card>
        </aside>

        {/* Map */}
        <main className="flex-1 p-4">
          <Map />
        </main>
      </div>
    </div>
  );
}
