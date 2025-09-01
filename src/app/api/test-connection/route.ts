import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';

export async function GET(request: NextRequest) {
  try {
    console.log('Testing database connection...');
    
    // Test database connection
    await dbConnect();
    
    console.log('Database connection successful');
    
    return NextResponse.json(
      { 
        message: 'Database connection successful',
        timestamp: new Date().toISOString(),
        environment: {
          nodeEnv: process.env.NODE_ENV,
          hasMongoUri: !!process.env.MONGODB_URI,
          hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET,
          hasNextAuthUrl: !!process.env.NEXTAUTH_URL
        }
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Database connection test failed:', error);
    
    return NextResponse.json(
      { 
        error: 'Database connection failed',
        details: error.message,
        timestamp: new Date().toISOString(),
        environment: {
          nodeEnv: process.env.NODE_ENV,
          hasMongoUri: !!process.env.MONGODB_URI,
          hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET,
          hasNextAuthUrl: !!process.env.NEXTAUTH_URL
        }
      },
      { status: 500 }
    );
  }
}
