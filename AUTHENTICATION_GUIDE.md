# Authentication System Guide

## Overview

This authentication system provides a complete, secure, and user-friendly authentication experience with the following features:

- **User Registration** with comprehensive validation
- **User Login** with account lockout protection
- **Email Verification** for new accounts
- **Password Reset** functionality
- **Rate Limiting** to prevent abuse
- **Account Security** features
- **Role-based Access Control**

## Features

### 🔐 Security Features

1. **Password Security**
   - Minimum 8 characters
   - Must contain uppercase, lowercase, number, and special character
   - Bcrypt hashing with salt rounds of 12
   - Password confirmation validation

2. **Account Protection**
   - Account lockout after 5 failed login attempts (2-hour lock)
   - Rate limiting on registration (5 attempts per 15 minutes)
   - Email verification required for new accounts
   - Secure token-based password reset

3. **Input Validation**
   - Real-time form validation
   - Server-side validation
   - XSS protection
   - SQL injection protection (MongoDB)

### 📧 Email Features

1. **Email Verification**
   - Automatic email verification on registration
   - 24-hour verification token expiry
   - Secure verification links

2. **Password Reset**
   - Secure password reset via email
   - 1-hour reset token expiry
   - No information disclosure about account existence

### 👥 User Management

1. **User Roles**
   - Student (default)
   - Teacher
   - Admin (created via script)

2. **User Profile**
   - Name, email, phone, address, date of birth
   - Profile image support
   - Account status tracking

## API Endpoints

### Authentication

#### POST `/api/auth/register`
Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!",
  "role": "student",
  "phone": "+1234567890",
  "address": "123 Main St",
  "dateOfBirth": "1990-01-01"
}
```

**Response:**
```json
{
  "message": "User registered successfully. Please check your email to verify your account.",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "student",
    "isEmailVerified": false,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### POST `/api/auth/verify-email`
Verify user email address.

**Request Body:**
```json
{
  "token": "verification_token_here"
}
```

#### POST `/api/auth/forgot-password`
Request password reset email.

**Request Body:**
```json
{
  "email": "john@example.com"
}
```

#### POST `/api/auth/reset-password`
Reset password using token.

**Request Body:**
```json
{
  "token": "reset_token_here",
  "password": "NewSecurePass123!"
}
```

## Pages

### Authentication Pages

1. **`/auth/signin`** - User login with forgot password
2. **`/auth/signup`** - User registration with validation
3. **`/auth/verify-email?token=...`** - Email verification
4. **`/auth/reset-password?token=...`** - Password reset
5. **`/auth/error`** - Authentication error handling

## User Model Schema

```typescript
interface IUser {
  name: string;                    // Required, 2-50 chars, letters only
  email: string;                   // Required, unique, validated
  password: string;                // Required, hashed, validated
  role: 'student' | 'teacher' | 'admin';
  profileImage?: string;
  phone?: string;                  // Optional, validated format
  address?: string;                // Optional, max 200 chars
  dateOfBirth?: Date;              // Optional, age validation
  isActive: boolean;               // Account status
  isEmailVerified: boolean;        // Email verification status
  emailVerificationToken?: string; // For email verification
  emailVerificationExpires?: Date; // Token expiry
  passwordResetToken?: string;     // For password reset
  passwordResetExpires?: Date;     // Token expiry
  lastLogin?: Date;                // Last login timestamp
  loginAttempts: number;           // Failed login attempts
  lockUntil?: Date;                // Account lock expiry
  createdAt: Date;
  updatedAt: Date;
}
```

## Security Best Practices

### 1. Password Requirements
- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number
- At least one special character (@$!%*?&)

### 2. Account Protection
- Automatic account lockout after 5 failed attempts
- 2-hour lockout period
- Rate limiting on registration
- Secure token generation for verification/reset

### 3. Data Protection
- Passwords never stored in plain text
- Sensitive tokens excluded from JSON responses
- Input sanitization and validation
- No information disclosure in error messages

### 4. Session Management
- JWT-based sessions
- 24-hour session expiry
- Secure session handling

## Environment Variables

Required environment variables:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# NextAuth
NEXTAUTH_SECRET=your_nextauth_secret_key
NEXTAUTH_URL=http://localhost:3000

# Email (for production)
# EMAIL_SERVER_HOST=smtp.example.com
# EMAIL_SERVER_PORT=587
# EMAIL_SERVER_USER=your_email@example.com
# EMAIL_SERVER_PASSWORD=your_email_password
# EMAIL_FROM=noreply@example.com
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create a `.env.local` file with required variables.

### 3. Database Setup
Ensure MongoDB is running and accessible.

### 4. Create Admin User
```bash
node scripts/create-admin.js
```

### 5. Start Development Server
```bash
npm run dev
```

## Email Integration

To enable email functionality in production:

1. **Install email package:**
   ```bash
   npm install nodemailer
   ```

2. **Configure email service** in the registration and password reset APIs

3. **Update environment variables** with email server details

## Testing

### Manual Testing Checklist

- [ ] User registration with valid data
- [ ] User registration with invalid data (validation)
- [ ] User login with correct credentials
- [ ] User login with incorrect credentials (lockout)
- [ ] Email verification flow
- [ ] Password reset flow
- [ ] Rate limiting on registration
- [ ] Account lockout after failed attempts
- [ ] Role-based access control

### Test Accounts

Create test accounts for different roles:
- Student account
- Teacher account
- Admin account

## Troubleshooting

### Common Issues

1. **MongoDB Connection**
   - Check MONGODB_URI environment variable
   - Ensure MongoDB is running
   - Check network connectivity

2. **NextAuth Issues**
   - Verify NEXTAUTH_SECRET is set
   - Check NEXTAUTH_URL configuration
   - Ensure proper callback URLs

3. **Email Issues**
   - Check email server configuration
   - Verify SMTP credentials
   - Test email delivery

### Debug Mode

Enable debug mode in development:
```typescript
debug: process.env.NODE_ENV === 'development'
```

## Future Enhancements

1. **Two-Factor Authentication (2FA)**
2. **Social Login Integration**
3. **Advanced Role Permissions**
4. **Audit Logging**
5. **Account Recovery Options**
6. **Session Management Dashboard**

## Support

For issues or questions:
1. Check the troubleshooting section
2. Review error logs
3. Test with minimal configuration
4. Contact development team
