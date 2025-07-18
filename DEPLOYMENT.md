# Deployment Guide - Good Deals Website

## 🚀 Quick Deployment Steps

### Option 1: Local Development (Recommended for Testing)

1. **Start Backend Server**
   ```bash
   cd backend
   npm start
   ```
   Server runs on: http://localhost:3001

2. **Start Frontend Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Website runs on: http://localhost:5173

### Option 2: Production Build

1. **Build Frontend for Production**
   ```bash
   cd frontend
   npm run build
   ```
   This creates a `dist/` folder with optimized files

2. **Deploy Frontend** (Choose one):
   - **Vercel**: Upload `dist/` folder or connect GitHub
   - **Netlify**: Drag & drop `dist/` folder or connect GitHub
   - **AWS S3**: Upload files to S3 bucket with static hosting

3. **Deploy Backend** (Choose one):
   - **Heroku**: `git push heroku main`
   - **Railway**: Connect GitHub repository
   - **DigitalOcean**: Deploy on App Platform

### Option 3: Full-Stack Deployment

1. **Heroku (Recommended)**
   ```bash
   # Create two apps
   heroku create gooddeals-api
   heroku create gooddeals-frontend
   
   # Deploy backend
   cd backend
   git init && git add . && git commit -m "Initial commit"
   heroku git:remote -a gooddeals-api
   git push heroku main
   
   # Deploy frontend (update API URL first)
   cd ../frontend
   # Update API URL in App.jsx to your Heroku backend URL
   npm run build
   # Deploy to Netlify or Vercel
   ```

## 🔧 Configuration for Production

### Frontend Configuration
Update the API URL in `frontend/src/App.jsx`:
```javascript
// Change this line:
const response = await fetch('http://localhost:3001/api/contact', {

// To your production backend URL:
const response = await fetch('https://your-backend-url.herokuapp.com/api/contact', {
```

### Backend Configuration
Set environment variables:
```bash
# For Heroku
heroku config:set NODE_ENV=production
heroku config:set PORT=3001

# For other platforms, set these in your hosting dashboard:
NODE_ENV=production
PORT=3001
```

## 📱 Testing Checklist

Before going live, test:
- [ ] All sections load properly
- [ ] Contact form submits successfully
- [ ] Responsive design on mobile/tablet
- [ ] All links and buttons work
- [ ] Form validation works
- [ ] Success message appears after submission

## 🌐 Domain Setup

1. **Purchase Domain** (e.g., gooddeals.com)
2. **Configure DNS**:
   - Point A record to your hosting provider
   - Set up CNAME for www subdomain
3. **SSL Certificate**: Most hosting providers offer free SSL
4. **Update URLs**: Update any hardcoded URLs in the code

## 📊 Analytics & Monitoring

Consider adding:
- **Google Analytics**: Track website visitors
- **Google Search Console**: Monitor SEO performance
- **Hotjar**: User behavior analytics
- **Uptime Monitoring**: Monitor website availability

## 🔒 Security Considerations

For production:
- Enable HTTPS (SSL certificate)
- Set up proper CORS origins (not '*')
- Add rate limiting to API endpoints
- Implement input sanitization
- Set up monitoring and logging

## 📞 Support

If you need help with deployment:
1. Check the hosting provider's documentation
2. Verify all environment variables are set
3. Check server logs for error messages
4. Ensure all dependencies are installed

---

**Ready to launch!** 🚀

