#  AfterShip Tracking Dashboard

This project lets you track shipments in real time, store tracking history, and visualize delivery status in a clean dashboard UI.

---

# Features

*  Add and track shipments via AfterShip
*  Real-time updates via webhooks
*  Persistent storage with PostgreSQL
*  Fast UI with Next.js App Router
*  REST API with Express
*  Dockerized for easy local development

---

# Tech Stack

* **Frontend:** Next.js (React)
* **Backend:** Node.js + Express
* **Database:** PostgreSQL
* **ORM:** Prisma
* **API:** AfterShip

---

# Project Structure

```
aftership-dashboard/
├── apps/
│   ├── web/        # Next.js frontend
│   └── api/        # Express backend
├── packages/
│   └── db/         # Prisma schema & client
├── docker-compose.yml
├── .env.example
└── README.md
```

---



# API Endpoints

# Create tracking

```
POST /trackings
```

Body:

```json
{
  "slug": "dhl",
  "trackingNumber": "1234567890"
}
```

---

# Get all trackings

```
GET /trackings
```

---

# Webhooks (Required)

To receive real-time updates, configure a webhook in your AfterShip dashboard:

```
http://your-server/webhooks/aftership
```



# Database

The app uses Prisma with PostgreSQL.

To run migrations manually:

```
npx prisma migrate dev
```

---

# How it works

1. You create a tracking via the dashboard
2. Backend sends it to AfterShip
3. AfterShip monitors shipment status
4. Webhooks send updates to your backend
5. Data is stored in PostgreSQL
6. Frontend reads from your API

---

# Important Notes

* Do NOT call AfterShip directly from the frontend
* Always use webhooks instead of polling
* Ensure your webhook endpoint is publicly accessible
* Handle duplicate tracking numbers properly

---

# Future Improvements

*  Authentication (multi-user support)
*  Analytics dashboard (delivery times, failures)
*  Notifications (email / Slack)
*  Search & filtering
*  Real-time UI (WebSockets)


