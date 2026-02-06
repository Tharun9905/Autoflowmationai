# Quick Start Guide

## 5-Minute Local Setup

### 1. Backend (Terminal 1)
```bash
cd server
npm install
cp .env.example .env
# Edit .env and add your Brevo API key
npm run dev
```
✅ Server running on `http://localhost:5000`

### 2. Frontend (Terminal 2)  
```bash
cp .env.example .env.local
# VITE_API_URL should be http://localhost:5000
npm run dev
```
✅ Frontend running on `http://localhost:5173`

### 3. Test
- Open http://localhost:5173
- Fill form → Submit → Check your email inbox 📧

---

## Environment Variables

### Backend (server/.env)
```env
BREVO_API_KEY=xsb_xxx_xxx
BREVO_SENDER_EMAIL=noreply@yourcompany.com  
BREVO_ADMIN_EMAIL=you@yourcompany.com
PORT=5000
```

### Frontend (.env.local)
```env
VITE_API_URL=http://localhost:5000
```

---

## Useful Commands

```bash
# Backend
cd server && npm run dev      # Start dev server with auto-reload
cd server && npm start        # Start production server
cd server && npm install      # Install dependencies

# Frontend  
npm run dev                   # Start dev server
npm run build                 # Build for production
npm run preview               # Preview production build

# Git
git add .
git commit -m "feat: add secure backend API"
git push origin main          # No secrets! Safe now ✨
```

---

## API Reference

**Send Email**
```
POST http://localhost:5000/api/send-email
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-555-1234",
  "company": "Acme Corp",
  "industry": "Tech",
  "requirements": "We need automation..."
}
```

**Health Check**
```
GET http://localhost:5000/api/health
```

---

## Common Issues

| Issue | Solution |
|-------|----------|
| "Cannot find module" | Run `npm install` in /server |
| "Missing BREVO_API_KEY" | Create .env file in /server, add API key |
| "Connection refused" | Make sure backend `npm run dev` is running |
| "CORS error" | Check VITE_API_URL in .env.local |
| "Email not sent" | Verify Brevo API key and sender email verified |

---

## Getting Brevo API Key

1. Go to https://app.brevo.com/settings/keys/api
2. Click "Generate new API key"  
3. Copy key to server/.env as `BREVO_API_KEY`
4. Go to https://app.brevo.com/settings/senders
5. Verify your sender email
6. Use that email in `BREVO_SENDER_EMAIL`

---

## Deployment to Vercel

```bash
# Backend
cd server
vercel --prod

# Frontend (from root)
vercel --prod

# Set env variables in Vercel dashboard and redeploy
```

---

## File Structure

```
autoflowmationai/
├── server/                    ← NEW: Backend API
│   ├── server.js              ← Express server
│   ├── package.json
│   ├── .env                   ← Add your secrets here (DON'T commit)
│   ├── .env.example           ← Template (safe to commit)
│   ├── .gitignore             ← Prevents .env from being committed
│   └── README.md              ← Backend docs
│
├── components/
│   ├── RequirementsForm.tsx   ← UPDATED: Calls backend instead
│   └── ...
│
├── .env.example               ← UPDATED: Frontend config
├── .env.local                 ← Create locally
├── SETUP.md                   ← Complete setup guide
├── BACKEND_CHANGES.md         ← What changed
└── DEPLOYMENT_CHECKLIST.md    ← Step-by-step deployment
```

---

## What Changed?

**Before:** ❌ API key in frontend code → GitHub detects secret  
**After:** ✅ API key only in backend → Secure!

- Frontend now calls `POST /api/send-email` on your backend
- Backend calls Brevo API with secure API key
- Git history is now clean (no exposed secrets)

---

## Next Steps

1. ✅ Setup backend locally (npm install, .env, npm run dev)
2. ✅ Setup frontend locally (.env.local, npm run dev)  
3. ✅ Test form submission
4. ✅ Deploy backend to Vercel
5. ✅ Deploy frontend to Vercel
6. ✅ Test production

See **SETUP.md** for detailed instructions!
