# 🔧 Authentication System Debugging Guide

## 🚨 Current Issue: "Internal server error" on registration API

Let's debug this step by step to identify the exact problem.

## 📋 Step-by-Step Debugging

### Step 1: Create Environment File
```bash
# Run this command to create .env.local
create-env.bat
```

### Step 2: Test Basic API Functionality
Visit these URLs in order:

1. **Simple API Test:**
   ```
   http://localhost:3000/api/test-simple
   ```
   - Should return environment variable status
   - If this fails, there's a basic server issue

2. **Environment Check:**
   ```
   http://localhost:3000/api/check-env
   ```
   - Should show if all required variables are set
   - If variables are missing, fix .env.local

3. **Database Connection Test:**
   ```
   http://localhost:3000/api/test-connection
   ```
   - Should test MongoDB connection
   - If this fails, MongoDB is not running or URI is wrong

### Step 3: Check MongoDB Status

**Option A: Local MongoDB**
```bash
# Check if MongoDB is running locally
mongod --version
# Start MongoDB if not running
mongod
```

**Option B: MongoDB Atlas**
- Use your MongoDB Atlas connection string
- Replace the MONGODB_URI in .env.local

### Step 4: Test Registration API

**Using Browser:**
```
http://localhost:3000/debug-registration
```
- Click "Run Tests" to see detailed results

**Using curl:**
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "TestPass123!",
    "role": "student"
  }'
```

## 🔍 Common Issues & Solutions

### Issue 1: No .env.local file
**Symptoms:** All environment variables show as "Not set"
**Solution:** Run `create-env.bat`

### Issue 2: MongoDB not running
**Symptoms:** Database connection test fails
**Solutions:**
- Start MongoDB: `mongod`
- Or use MongoDB Atlas connection string

### Issue 3: Invalid MongoDB URI
**Symptoms:** Connection refused or authentication failed
**Solutions:**
- For local: `mongodb://localhost:27017/qurvia`
- For Atlas: `mongodb+srv://username:password@cluster.mongodb.net/database`

### Issue 4: Server not restarted
**Symptoms:** Environment changes not reflected
**Solution:** 
1. Stop server (Ctrl+C)
2. Run `npm run dev`

## 🛠️ Quick Fix Commands

```bash
# 1. Create environment file
create-env.bat

# 2. Install dependencies (if needed)
npm install

# 3. Start MongoDB (if using local)
mongod

# 4. Start development server
npm run dev
```

## 📊 Expected Results

### ✅ Successful Setup Should Show:

**Environment Check:**
```json
{
  "status": "ok",
  "environment": {
    "hasAllRequiredVars": true,
    "missingVariables": [],
    "variables": {
      "MONGODB_URI": "Set",
      "NEXTAUTH_SECRET": "Set",
      "NEXTAUTH_URL": "Set"
    }
  }
}
```

**Database Test:**
```json
{
  "message": "Database connection successful",
  "environment": {
    "hasMongoUri": true,
    "hasNextAuthSecret": true,
    "hasNextAuthUrl": true
  }
}
```

**Registration Test:**
```json
{
  "message": "User registered successfully. Please check your email to verify your account.",
  "user": {
    "name": "Test User",
    "email": "test@example.com",
    "role": "student"
  }
}
```

## 🆘 Still Having Issues?

If you're still getting errors:

1. **Check the browser console** for detailed error messages
2. **Check the terminal** where you ran `npm run dev` for server logs
3. **Share the exact error message** from the debug page
4. **Try the simple API test first** to isolate the issue

## 📞 Next Steps

After running the tests:
1. Share the results from `/api/test-simple`
2. Share the results from `/api/check-env`
3. Share any error messages from the terminal
4. Let me know which step fails and I'll help you fix it!
