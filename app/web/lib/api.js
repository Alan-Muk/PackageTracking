export async function getTrackings() {
  try {
    const res = await fetch(`${process.env.API_URL}/trackings`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch trackings");
    }

    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}