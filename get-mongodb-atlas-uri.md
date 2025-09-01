# 🔗 How to Get Your MongoDB Atlas Connection String

## 🚨 Current Issue
You're getting "Authentication failed" because your MongoDB Atlas credentials are incorrect or the connection string is wrong.

## 📋 Steps to Get Your MongoDB Atlas URI

### Step 1: Log into MongoDB Atlas
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Sign in to your account

### Step 2: Get Your Connection String
1. Click on your **cluster** (database)
2. Click **"Connect"** button
3. Choose **"Connect your application"**
4. Select **"Node.js"** as your driver
5. Copy the connection string

### Step 3: Update Your Connection String
The connection string will look like this:
```
mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
```

**Important:** Replace `username`, `password`, and `database` with your actual values!

### Step 4: Fix Your Environment
Run this command:
```bash
fix-mongodb-atlas.bat
```

Then paste your MongoDB Atlas connection string when prompted.

## 🔧 Alternative: Use Local MongoDB

If you prefer to use local MongoDB instead:

1. **Install MongoDB locally:**
   - Download from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
   - Install and start MongoDB

2. **Use local connection:**
   ```bash
   create-env.bat
   ```

3. **Start MongoDB:**
   ```bash
   mongod
   ```

## 🧪 Test Your Connection

After updating your connection string:

1. **Restart your server:**
   ```bash
   npm run dev
   ```

2. **Test the connection:**
   ```
   http://localhost:3000/api/test-connection
   ```

3. **Try registration again:**
   ```
   http://localhost:3000/auth/signup
   ```

## 🆘 Common MongoDB Atlas Issues

### Issue 1: Wrong Username/Password
- Make sure you're using the database user credentials, not your Atlas account
- Create a new database user if needed

### Issue 2: IP Address Not Whitelisted
- Go to Network Access in Atlas
- Add your IP address or use `0.0.0.0/0` for all IPs (development only)

### Issue 3: Wrong Database Name
- Make sure the database name in the URI is correct
- Atlas will create the database automatically if it doesn't exist

### Issue 4: Cluster Not Running
- Make sure your Atlas cluster is active (not paused)

## 📞 Need Help?

If you're still having issues:
1. Share your MongoDB Atlas connection string (with credentials removed)
2. Check if your cluster is running
3. Verify your database user has the correct permissions
