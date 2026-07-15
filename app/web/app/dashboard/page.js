import { getTrackings } from "@/lib/api";
import AddTracking from "../components/AddTracking";

export default async function Dashboard() {
  const trackings = await getTrackings();

  return (
    <main>
      <h1>Tracking Dashboard</h1>

      <AddTracking />

      <div>
        {trackings.map((tracking) => (
          <div key={tracking.id}>
            <strong>{tracking.trackingNumber}</strong> —{" "}
            {tracking.status ?? "Pending"}
          </div>
        ))}
      </div>
    </main>
  );
}