# Qurvia Academy - Authentication System Setup

## 🚀 Overview

This document explains the complete authentication system implemented for Qurvia Academy with role-based access control (RBAC) and MongoDB integration.

## 📋 Features

- **Role-based Authentication**: Student, Teacher, and Admin roles
- **MongoDB Integration**: Secure user data storage
- **NextAuth.js**: Modern authentication with JWT
- **Dark Admin Dashboard**: Professional admin interface
- **User Management**: Admin can manage all users
- **Secure Registration**: Role selection during signup

## 🛠️ Setup Instructions

### 1. Environment Variables

The following environment variables are already configured in `.env.local`:

```env
MONGODB_URI=mongodb+srv://qurviaacademy:qurviaacademy@cluster0.rs4fswn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
NEXTAUTH_SECRET=your-secret-key-here-change-this-in-production
NEXTAUTH_URL=http://localhost:3000
```

### 2. Dependencies Installed

The following packages have been installed:
- `mongodb` - MongoDB driver
- `mongoose` - MongoDB ODM
- `next-auth` - Authentication framework
- `bcryptjs` - Password hashing
- `@types/bcryptjs` - TypeScript types

### 3. Create Admin User

To create the initial admin user, make a POST request to:
```
POST /api/admin/create-admin
```

Or visit: `http://localhost:3000/api/admin/create-admin`

**Default Admin Credentials:**
- Email: `admin@qurvia.com`
- Password: `admin123`

## 🔐 Authentication Flow

### User Registration
1. Users visit `/auth/signup`
2. Select role: Student or Teacher
3. Fill in registration form
4. Account created with selected role

### User Login
1. Users visit `/auth/signin`
2. Enter credentials
3. Redirected based on role:
   - **Admin**: `/admin/dashboard`
   - **Student/Teacher**: `/dashboard`

### Role-Based Access
- **Students**: Can access courses, view progress
- **Teachers**: Can manage courses, view students
- **Admins**: Full system access, user management

## 🎨 User Interfaces

### 1. Authentication Pages
- **Sign In**: `/auth/signin` - Clean, modern login form
- **Sign Up**: `/auth/signup` - Registration with role selection

### 2. Dashboards
- **Admin Dashboard**: `/admin/dashboard` - Dark theme with user management
- **User Dashboard**: `/dashboard` - Light theme for students/teachers

### 3. Navigation
- **Navbar**: Dynamic authentication state
- **Role-based buttons**: Login/Register or Dashboard/Sign Out

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/[...nextauth]` - NextAuth handler
- `POST /api/auth/register` - User registration

### Admin Management
- `GET /api/admin/users` - Fetch all users
- `PATCH /api/admin/users/[id]` - Update user role/status
- `POST /api/admin/create-admin` - Create admin user

## 🗄️ Database Schema

### User Model
```typescript
interface User {
  name: string;
  email: string;
  password: string;
  role: 'student' | 'teacher' | 'admin';
  profileImage?: string;
  phone?: string;
  address?: string;
  dateOfBirth?: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
```

## 🎯 Usage Examples

### 1. Register as Student
```javascript
fetch('/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    role: 'student'
  })
});
```

### 2. Register as Teacher
```javascript
fetch('/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
    role: 'teacher'
  })
});
```

### 3. Admin User Management
```javascript
// Update user role
fetch('/api/admin/users/userId', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ role: 'teacher' })
});

// Toggle user status
fetch('/api/admin/users/userId', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ isActive: false })
});
```

## 🔒 Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Tokens**: Secure session management
- **Role Validation**: Server-side role checks
- **Input Validation**: Form validation and sanitization
- **Protected Routes**: Role-based access control

## 🚀 Getting Started

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Create admin user:**
   - Visit: `http://localhost:3000/api/admin/create-admin`
   - Or use the API endpoint

3. **Test the system:**
   - Visit: `http://localhost:3000`
   - Click "Join Now" to register
   - Or click "Login" to sign in

4. **Access admin dashboard:**
   - Login with admin credentials
   - Access: `http://localhost:3000/admin/dashboard`

## 📱 Responsive Design

All authentication pages and dashboards are fully responsive:
- Mobile-first design
- Tablet and desktop optimized
- Touch-friendly interfaces

## 🎨 Design Features

### Admin Dashboard
- Dark theme with professional styling
- Real-time user statistics
- Interactive user management table
- Role and status management
- Responsive data visualization

### User Dashboard
- Light, clean design
- Role-specific content
- Activity tracking
- Quick action buttons
- Progress indicators

## 🔄 State Management

- **NextAuth Session**: Global authentication state
- **React Hooks**: Local component state
- **API Integration**: Real-time data fetching
- **Error Handling**: Comprehensive error states

## 📈 Future Enhancements

- Email verification
- Password reset functionality
- Two-factor authentication
- Social login providers
- Advanced user profiles
- Course enrollment system
- Payment integration

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check `.env.local` file
   - Verify MongoDB URI
   - Ensure network connectivity

2. **Authentication Errors**
   - Clear browser cookies
   - Check console for errors
   - Verify environment variables

3. **Build Errors**
   - Run `npm install` to ensure dependencies
   - Check TypeScript types
   - Verify file paths

### Support

For technical support or questions about the authentication system, please refer to the code comments or create an issue in the repository.

---

**🎉 Congratulations!** Your Qurvia Academy authentication system is now fully functional with role-based access control and a professional admin dashboard.
