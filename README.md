# Projex - Designs Made to Stand Out

A full-stack web application for creating professional designs.

## Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. Install dependencies:
```bash
npm install
```

2. Generate mkcert certificates (for local HTTPS):
```bash
# On Windows, download mkcert first:
# Download from: https://github.com/FiloSottile/mkcert/releases
# Then run:
mkcert -install
mkcert -cert-file certs/localhost+2.pem -key-file certs/localhost+2-key.pem localhost 127.0.0.1 ::1
```

3. Start development servers:
```bash
# Terminal 1: Backend (https://localhost:3000)
npm run dev

# Terminal 2: Frontend (https://localhost:5001)
npm run dev:client
```

## Deployment

### Backend Deployment (Railway)

1. Create a Railway account at https://railway.app
2. Create a new project
3. Connect your GitHub repository
4. Deploy with these environment variables:
   - `NODE_ENV=production`
   - `PORT=3000`

### Frontend Deployment (Vercel)

1. Create a Vercel account at https://vercel.com
2. Import your GitHub repository
3. Set build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
4. Add environment variable:
   - `VITE_API_URL=` (your Railway backend URL)

## Project Structure

```
├── client/              # React frontend
│   └── src/
├── server/              # Express backend
├── shared/              # Shared types
├── attached_assets/     # Static assets
└── certs/              # SSL certificates (git ignored)
```

## Scripts

- `npm run dev` - Start backend in development mode
- `npm run dev:client` - Start frontend dev server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - Type check with TypeScript

## License

MIT
