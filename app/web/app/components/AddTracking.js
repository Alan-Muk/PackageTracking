"use client";

import { useState } from "react";

export default function AddTracking() {
  const [trackingNumber, setTrackingNumber] = useState("");

  async function handleSubmit() {
    await fetch("http://localhost:3001/trackings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        slug: "dhl",
        trackingNumber,
      }),
    });
  }

  return (
    <div>
      <input
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        placeholder="Tracking number"
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}