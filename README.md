# CookingMana - Demo Frontend

CookingMana is a demo React + TypeScript + Vite application for client presentation.
The app showcases a restaurant website with booking, auth, admin pages, cart, checkout,
and order history flows.

## Run

- `npm install`
- `npm run dev`
- `npm test`
- `npm run lint`

## Demo Mode vs Production Mode

This repository is currently in **demo mode**:

- No real backend API.
- No real database.
- Auth token and user profile are stored in `localStorage`.
- Cart and orders are stored in `localStorage`.
- Stripe checkout and webhook are simulated to demonstrate UX flow.

### What is covered in demo mode

- Frontend routing and page layout.
- Header and footer.
- Home sections (carousel, weekly menu, restaurant, chefs, reviews).
- Reservation page route (`/reservation`).
- User auth UX (register/login/logout), route guards, profile edition.
- Cart -> checkout -> order history flow.
- Admin area protected by `RequireAdmin` route guard.

### For production

To move to production, replace simulated services with real backend integration:

- Real auth API with password hashing (`bcrypt`) server-side.
- Persistent data in SQL/NoSQL database.
- Real Stripe Checkout session endpoint and signed webhook endpoint.
- Server-side authorization checks for admin and user resources.
