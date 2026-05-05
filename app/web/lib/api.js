export async function getTrackings() {
  const res = await fetch("http://localhost:3001/trackings", {
    cache: "no-store",
  });

  return res.json();
}