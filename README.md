# Shipment Tracking Dashboard

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-API-000000?logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-4169E1?logo=postgresql)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker)
![License](https://img.shields.io/badge/License-MIT-green)

A shipment tracking platform that integrates with AfterShip to provide real-time delivery updates, tracking history, and shipment analytics through a modern dashboard interface.

The system demonstrates:

- event-driven backend architecture
- webhook-based integrations
- REST API design
- database persistence
- full-stack application development

Built using:

- Next.js
- Express.js
- PostgreSQL
- Prisma
- Docker
- Ship24 API

---

# Overview

Ship24 Tracking Dashboard provides a centralized interface for managing and monitoring shipments.

The application workflow:

```text
User Dashboard

      ↓

Next.js Frontend

      ↓

Express API

      ↓

Ship24 Integration

      ↓

Webhook Events

      ↓

PostgreSQL Database

      ↓

Dashboard Updates
```

Instead of continuously polling shipment providers, the system uses webhook events to receive shipment changes as they occur.

---

# Problem

Shipment tracking systems need reliable communication between external providers and internal applications.

A scalable tracking platform must handle:

- external API integration
- asynchronous status updates
- persistent shipment history
- duplicate event handling
- user-facing visualization

This project explores how event-driven systems solve these challenges.

---

# Architecture

```text
                 Next.js Dashboard

                        |

                        ↓

                 Express API Layer

                  /            \

                 ↓              ↓

        Ship24 API       PostgreSQL

                 

                 ↓

          Webhook Event Stream
```

---

# Components

## Next.js Frontend

Responsible for:

- dashboard interface
- shipment creation
- tracking visualization
- API communication

Features:

- modern React architecture
- responsive UI
- server/client component separation

---

## Express Backend

Acts as the application API layer.

Responsibilities:

- REST endpoint handling
- AfterShip communication
- webhook processing
- validation
- business logic

---

## Ship24 Integration

Provides:

- shipment tracking
- carrier communication
- delivery status updates

The application communicates with Ship24 through:

- API requests for tracking creation
- webhooks for status changes

---

## PostgreSQL Database

Stores:

- shipment records
- tracking numbers
- carrier information
- status history
- timestamps

Prisma provides:

- database schema management
- type-safe queries
- migrations

---

# Event Flow

```text
1. User creates shipment tracking

            ↓

2. Backend registers tracking with AfterShip

            ↓

3. Ship24 monitors shipment

            ↓

4. Shipment status changes

            ↓

5. Webhook event sent to backend

            ↓

6. Backend validates and stores update

            ↓

7. Dashboard displays latest status
```

---

# Features

## Shipment Tracking

Users can:

- add shipments
- monitor delivery progress
- view tracking history

Supported workflow:

```text
Carrier

↓

Tracking Number

↓

Shipment Status
```

---

## Webhook-Based Updates

The application uses event-driven updates instead of polling.

Benefits:

- lower API usage
- faster updates
- better scalability
- reduced system overhead

---

## Persistent Tracking History

All shipment events are stored.

This enables:

- historical tracking
- delivery analytics
- debugging
- reporting

---

## REST API

Example endpoints:

---

## Create Tracking

```http
POST /trackings
```

Request:

```json
{
  "slug": "dhl",
  "trackingNumber": "1234567890"
}
```

---

## Get Trackings

```http
GET /trackings
```

Returns stored shipment information.

---

## Ship24 Webhook

```http
POST /webhooks/aftership
```

Receives shipment status events.

---

# Project Structure

```text
Ship24-dashboard/

├── apps/
│
│   ├── web/
│   │   └── Next.js frontend
│   │
│   └── api/
│       └── Express backend
│
├── packages/
│
│   └── db/
│       └── Prisma schema + database client
│
├── docker-compose.yml
├── .env.example
└── README.md
```

---

# Tech Stack

## Frontend

- Next.js
- React
- TypeScript

## Backend

- Node.js
- Express.js

## Database

- PostgreSQL
- Prisma ORM

## Infrastructure

- Docker

## External Services

- Ship24 API
- Webhooks

---

# Engineering Highlights

This project demonstrates:

- event-driven architecture
- third-party API integration
- webhook processing
- REST API design
- relational database modeling
- full-stack development
- containerized local environments

---

# Design Decisions

## Webhooks Over Polling

Shipment status updates are received asynchronously.

Advantages:

- reduced API requests
- near real-time updates
- better scalability

---

## Backend API Boundary

The frontend never communicates directly with Ship24.

Instead:

```text
Frontend

↓

Backend

↓

External Provider
```

Benefits:

- API key security
- centralized business logic
- easier provider replacement

---

## Persistent Event History

Tracking events are stored rather than overwritten.

This enables:

- shipment timelines
- analytics
- auditing

---

# Setup Instructions

## Install Dependencies

```bash
npm install
```

---

## Configure Environment

Create:

```text
.env
```

Example:

```env
DATABASE_URL=your_database_url
Ship24_API_KEY=your_api_key
```

---

## Run Database Migration

```bash
npx prisma migrate dev
```

---

## Start Development Environment

Using Docker:

```bash
docker compose up
```

---

# Important Considerations

Production deployments should handle:

- webhook signature verification
- duplicate webhook events
- retry failures
- API rate limits
- background processing

---

# Future Improvements

## User Features

- authentication
- multi-user accounts
- saved shipments
- notification preferences

---

## Analytics

- delivery performance metrics
- carrier comparisons
- failure analysis
- shipment trends

---

## Real-Time Experience

- WebSocket dashboard updates
- live notification system
- activity streams

---

## Infrastructure

- message queue integration
- Redis caching
- cloud deployment
- CI/CD pipeline

---

# What This Project Demonstrates

Ship24 Tracking Dashboard demonstrates practical experience with:

- backend API development
- event-driven systems
- external service integration
- database-backed applications
- full-stack engineering
- scalable application design

---

# License

MIT License
