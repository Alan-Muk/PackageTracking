import { getTrackings } from "@/lib/api";
import AddTracking from "../components/AddTracking";

export default async function Dashboard() {
  const data = await getTrackings();

  return (
    <div>
      <h1>Tracking Dashboard</h1>
      <AddTracking />

      {data.map((t) => (
        <div key={t.id}>
          <strong>{t.trackingNumber}</strong> — {t.status}
        </div>
      ))}
    </div>
  );
}