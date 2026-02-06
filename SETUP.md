# Setup Guide: Frontend + Backend Integration

## Overview

Your application now has a secure two-tier architecture:

```
┌─────────────────────┐         ┌──────────────────────────────────┐
│   React Frontend    │────────▶│   Node.js/Express Backend       │
│   (No secrets)      │         │   (Brevo API Key Protected)     │
└─────────────────────┘         └──────────────────────────────────┘
   /components/                       /server/
   - RequirementsForm.tsx             - server.js
   - App.tsx                          - package.json
   - etc.                             - .env (NEVER commit)
```

## Quick Start

### 1. Backend Setup

#### Install Backend Dependencies
```bash
cd server
npm install
```

#### Configure Environment Variables
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your Brevo credentials:
# - BREVO_API_KEY: Get from https://app.brevo.com/settings/keys/api
# - BREVO_SENDER_EMAIL: Your verified sender email
# - BREVO_ADMIN_EMAIL: Where form submissions are sent
```

#### Start Backend Server
```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

Server will run on `http://localhost:5000`

### 2. Frontend Setup

#### Configure Environment Variables
```bash
# In the root directory, copy .env.example to .env.local
cp .env.example .env.local

# Edit .env.local:
VITE_API_URL=http://localhost:5000
```

#### Start Frontend Dev Server
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

### 3. Test the Integration

1. Open http://localhost:5173 in your browser
2. Navigate to the Requirements Form
3. Fill out the form and submit
4. You should receive two emails:
   - **Admin email**: Form submission with all details
   - **User email**: Confirmation message

## API Endpoints

### Health Check
```
GET /api/health
```

### Send Email
```
POST /api/send-email
Content-Type: application/json

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123-456-7890",
  "company": "Acme Corp",
  "industry": "Tech",
  "requirements": "I need automation for..."
}
```

## Vercel Deployment

### Deploy Backend to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Create `vercel.json` in the server directory (already exists in template)

3. Deploy:
```bash
cd server
vercel
```

4. Note the deployment URL (e.g., `https://your-api.vercel.app`)

5. Update your frontend's `.env.production` or Vercel environment variables:
```
VITE_API_URL=https://your-api.vercel.app
```

### Deploy Frontend to Vercel

1. In root directory:
```bash
vercel
```

2. Configure environment variables in Vercel dashboard:
```
VITE_API_URL=https://your-api.vercel.app
```

## Environment Variables Reference

### Backend (.env in /server)
```env
# Brevo Configuration
BREVO_API_KEY=xsb_xxx_xxx          # Required: Get from Brevo dashboard
BREVO_SENDER_EMAIL=noreply@...     # Required: Must be verified in Brevo
BREVO_SENDER_NAME=Autoflowmation   # Optional: Display name for emails
BREVO_ADMIN_EMAIL=admin@...        # Required: Where submissions are sent

# Server Configuration
PORT=5000                            # Optional: Default 5000
NODE_ENV=development                 # development or production
FRONTEND_URL=http://localhost:5173  # Optional: CORS origin
```

### Frontend (.env.local or .env.production)
```env
VITE_API_URL=http://localhost:5000  # Development
# OR
VITE_API_URL=https://your-api.vercel.app  # Production
```

## Brevo Setup Instructions

### 1. Get Your API Key
- Go to https://app.brevo.com/settings/keys/api
- Click "Generate a new API key"
- Copy and save it securely
- Paste into backend `.env` file

### 2. Verify Sender Email
- Go to https://app.brevo.com/settings/senders
- Click "Add a sender"
- Enter your email (e.g., noreply@yourcompany.com)
- Verify the email by clicking the link in confirmation email
- Use this email in `BREVO_SENDER_EMAIL`

## Troubleshooting

### Frontend can't connect to backend
- Check backend is running: `http://localhost:5000/api/health`
- Verify VITE_API_URL is correct in .env.local
- Check CORS is configured (backend allows your frontend URL)

### Backend won't send emails
- Verify BREVO_API_KEY is correct and valid
- Check BREVO_SENDER_EMAIL is verified in Brevo
- Check BREVO_ADMIN_EMAIL is valid
- Review backend console for detailed error messages

### "Missing environment variables" error
- Run `npm install` in /server directory
- Make sure .env file exists in /server
- Restart backend server after creating/updating .env

### CORS errors
- Update `FRONTEND_URL` in backend .env
- For production, add your frontend domain to CORS origins

## Security Best Practices

✅ **API Key Security**
- Never commit .env files
- Use .gitignore to exclude .env
- Rotate API keys regularly
- Use different keys for dev/prod

✅ **Data Validation**
- Backend validates all input
- Email format is checked
- Required fields are enforced

✅ **Error Handling**
- Sensitive errors not exposed to frontend
- User-friendly error messages in UI

## Next Steps

1. ✅ Set up backend with Brevo API KEY
2. ✅ Test locally with npm run dev
3. ✅ Deploy backend to Vercel
4. ✅ Deploy frontend with backend URL
5. ✅ Test production emails
6. ✅ Monitor and maintain

## Need Help?

- Backend README: [server/README.md](server/README.md)
- Brevo Documentation: https://developers.brevo.com/
- Vercel Docs: https://vercel.com/docs

---

**Your architecture is now production-ready with:**
- ✅ Secure API key management
- ✅ Input validation & XSS prevention  
- ✅ CORS protection
- ✅ Error handling
- ✅ Email confirmation flows
