"use client";

import { useState } from "react";

export default function AddTracking() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit() {
    if (!trackingNumber.trim()) {
      setMessage("Please enter a tracking number.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:3001/trackings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trackingNumber,
          courierCode: "dhl",
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create tracking.");
      }

      setMessage("Tracking added successfully!");
      setTrackingNumber("");
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <input
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        placeholder="Tracking number"
        disabled={loading}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Adding..." : "Add"}
      </button>

      {message && <p>{message}</p>}
    </div>
  );
}