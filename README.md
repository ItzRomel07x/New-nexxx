# NexxAuth - Multi-Tenant Authentication System

## Deployment Guide

This project is now optimized for deployment on multiple platforms. Here are the configurations included:

### Platform Support

#### 1. **Vercel** (Recommended)
- Configuration: `vercel.json`
- Deploy: `vercel --prod`
- Environment variables already configured

#### 2. **Render**
- Configuration: `render.yaml`
- Automatic deployment from Git
- Includes database setup

#### 3. **Netlify**
- Configuration: `netlify.toml`
- Deploy: `netlify deploy --prod`
- Supports serverless functions

#### 4. **Docker/Container Platforms**
- Configuration: `Dockerfile`
- Build: `docker build -t nexxauth .`
- Run: `docker run -p 5000:5000 nexxauth`

#### 5. **Heroku**
- Use the existing `package.json` scripts
- Add environment variables in Heroku dashboard

### Environment Variables Required

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
DATABASE_URL=your_postgresql_url
SESSION_SECRET=your_session_secret
```

### Build Commands

- **Development**: `npm run dev` (full-stack) or `vite --config vite.static.config.ts` (frontend only)
- **Build for Deployment**: `vite build --config vite.static.config.ts`
- **Full Build**: `npm run build` (includes backend)
- **Production**: `npm start`
- **Database**: `npm run db:push`

### Project Structure (Now Standard!)

```
/
├── src/                    # Frontend source (moved from client/src)
├── public/                 # Static assets (moved from client/public)  
├── index.html             # Main HTML file (moved from client/)
├── server/                # Backend source (Express + TypeScript)
├── shared/                # Shared types and schemas
├── dist/                  # Built files
├── vite.static.config.ts  # Static build configuration
├── vercel.json           # Vercel deployment config
├── render.yaml           # Render deployment config
├── netlify.toml          # Netlify deployment config
├── Dockerfile            # Docker deployment config
└── package.json          # Dependencies and scripts
```

### Features

✅ Multi-tenant authentication system  
✅ Firebase Google OAuth integration  
✅ PostgreSQL database with Drizzle ORM  
✅ API key management  
✅ License key system  
✅ Webhook notifications  
✅ Real-time session tracking  
✅ Hardware ID locking  
✅ Admin dashboard  

### Quick Deploy

1. **Fork/Clone** this repository
2. **Set environment variables** on your platform
3. **Deploy** using platform-specific commands
4. **Run database migrations**: `npm run db:push`

The project is ready for deployment on any modern hosting platform!