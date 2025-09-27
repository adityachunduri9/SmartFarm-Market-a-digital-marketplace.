# SmartFarm-Market-a-digital-marketplace.
Build a web app where farmers list produce, buyers (retailers/households) can browse and make offers, and both parties get price trends, demand signals, and optional logistics scheduling. Make it lightweight and usable on low bandwidth; include language support and basic offline resilience.
# SmartFarm Market (MVP)

A simple marketplace to connect farmers and buyers, with price trends.

## Structure
- backend/ : Node.js + Express API
- frontend/ : React (Vite) UI
- price_predictor/ : simple Python price model

## Quick start (dev)
1. Start MongoDB locally (or set MONGODB_URI in backend/.env)
2. Backend:
   cd backend
   cp .env.example .env
   npm install
   npm run seed
   npm run dev
3. Frontend:
   cd frontend
   npm install
   npm run dev

## Notes
- Add env var JWT_SECRET
- For production, use cloud storage for images and HTTPS
