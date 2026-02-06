# Deployment Checklist

## Local Testing (Development)

### Backend Setup
- [ ] Navigate to `/server` directory
- [ ] Run `npm install`
- [ ] Create `.env` file from `.env.example`
- [ ] Add your Brevo API credentials:
  - [ ] BREVO_API_KEY (from Brevo dashboard)
  - [ ] BREVO_SENDER_EMAIL (verified in Brevo)
  - [ ] BREVO_ADMIN_EMAIL (your email)
- [ ] Run `npm run dev` (should see "🚀 Server running on http://localhost:5000")
- [ ] Verify health check: Visit http://localhost:5000/api/health

### Frontend Setup
- [ ] Navigate to root directory
- [ ] Create `.env.local` from `.env.example`
- [ ] Set `VITE_API_URL=http://localhost:5000`
- [ ] Run `npm run dev` (should see "Local: http://localhost:5173")
- [ ] Open http://localhost:5173 in browser

### Test Form Submission
- [ ] Click "Initiate Audit" button
- [ ] Fill out requirements form completely
- [ ] Click "Deploy Audit Protocol"
- [ ] See success message
- [ ] Check admin email (should have received submission)
- [ ] Check user email (should have confirmation)

---

## Production Deployment

### Deploy Backend to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   cd server
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Save the URL** (e.g., `https://autoflowmation-backend.vercel.app`)

5. **Add Environment Variables in Vercel Dashboard**
   - Go to https://vercel.com/dashboard
   - Select your project
   - Settings → Environment Variables
   - Add:
     - `BREVO_API_KEY` = your Brevo API key
     - `BREVO_SENDER_EMAIL` = verified email
     - `BREVO_SENDER_NAME` = "Autoflowmation AI"
     - `BREVO_ADMIN_EMAIL` = your email
     - `FRONTEND_URL` = https://your-frontend-domain.com
     - `NODE_ENV` = production

6. **Redeploy with env vars**
   ```bash
   vercel --prod --env
   ```

### Deploy Frontend to Vercel

1. **Navigate to root**
   ```bash
   cd ..  # Leave server directory
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Configure Environment Variables**
   - In Vercel Dashboard → Environment Variables
   - Add: `VITE_API_URL` = https://your-backend-vercel-url

4. **Redeploy**
   ```bash
   vercel --prod --env
   ```

### Post-Deployment Testing

- [ ] Visit your frontend domain
- [ ] Fill out and submit form
- [ ] Verify admin email received
- [ ] Verify user confirmation email received
- [ ] Check for any errors in Vercel logs

---

## Troubleshooting

### Backend Issues

**"Cannot POST /api/send-email"**
- Check backend is deployed and running
- Verify VITE_API_URL points to correct backend
- Check browser network tab for actual request URL

**"Failed to send email"**
- Verify BREVO_API_KEY is correct
- Verify BREVO_SENDER_EMAIL is verified in Brevo
- Check Brevo dashboard for any account issues
- Review Vercel logs for error details

**CORS Error**
- Add FRONTEND_URL to backend env variables
- Update FRONTEND_URL to your actual domain
- Redeploy backend

### Frontend Issues

**Form doesn't submit**
- Check VITE_API_URL in .env or .env.local
- Open DevTools → Console for error messages
- Check Network tab to see API response

**Can't connect to backend**
- Verify backend is deployed and running
- Check VITE_API_URL is correct
- Test backend directly: Visit `https://your-backend-url/api/health`

---

## Git & Version Control

### Before Committing
- [ ] Delete `.env` file (never commit!)
- [ ] `.gitignore` includes `/server/.env` ✓
- [ ] `.gitignore` includes `.env.local` ✓
- [ ] No API keys in any committed files

### Push to GitHub
```bash
git add .
git commit -m "Add backend API for security"
git push origin main
```

No secrets should be blocked this time! ✨

---

## Monitoring

### Check Backend Health
- Regular endpoint: `https://your-backend-url/api/health`
- Vercel Dashboard: Monitor builds and runtime

### Email Tracking
- Monitor Brevo dashboard for bounces
- Check email delivery reports
- Monitor server logs for errors

### Performance
- Backend should respond in <500ms
- Email sending takes 1-3 seconds
- Vercel shows request logs in dashboard

---

## Maintenance

### Update Backend
1. Make changes locally
2. Test with `npm run dev`
3. Push to GitHub
4. Vercel auto-deploys on push

### Rotate API Keys
1. Generate new key in Brevo
2. Update env variable in Vercel
3. Delete old key from Brevo
4. Monitor for any issues

### Scale Plan
- Free tier handles ~200-500 emails/day
- For higher volume, consider dedicated server
- Monitor Vercel costs in dashboard

---

## Success Criteria

✅ Backend deployed to Vercel  
✅ Frontend deployed with correct API URL  
✅ Form submissions create emails in inbox  
✅ No API keys in git history  
✅ CORS working correctly  
✅ Error messages user-friendly  
✅ Response times <2 seconds  

---

**Need help?** See SETUP.md or BACKEND_CHANGES.md for more details.
