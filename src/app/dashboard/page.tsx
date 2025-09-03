'use client';

import React, { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Enrollment = { courseId: number; courseTitle: string; enrolledAt: string };

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) {
      router.push('/auth/signin');
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((session.user as any)?.role === 'admin') {
      router.push('/admin/dashboard');
      return;
    }
    const load = async () => {
      try {
        const res = await fetch('/api/users/enroll', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          setEnrollments(data.enrollments || []);
        }
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [session, status, router]);

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-secondary-500"></div>
      </div>
    );
  }

  if (!session) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = session.user as any;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 border-r border-gray-700 hidden md:block">
          <div className="p-6 border-b border-gray-700">
            <div className="h-10 w-10 bg-secondary-600 rounded-lg flex items-center justify-center mb-2">
              <span className="text-white font-bold">Q</span>
            </div>
            <h2 className="text-lg font-semibold">Student Dashboard</h2>
          </div>
          <nav className="p-4 space-y-1">
            <Link href="/dashboard" className="block px-3 py-2 rounded-md bg-gray-700 text-white">Overview</Link>
            <Link href="/courses" className="block px-3 py-2 rounded-md hover:bg-gray-700">Courses</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md hover:bg-gray-700">Support</Link>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1">
          {/* Top bar */}
          <header className="bg-gray-800 border-b border-gray-700">
            <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <h1 className="text-xl font-semibold">Welcome, {user?.name}</h1>
              <button onClick={() => signOut()} className="bg-secondary-600 hover:bg-secondary-700 px-4 py-2 rounded-md text-sm font-medium">Sign Out</button>
            </div>
          </header>

          <div className="px-4 sm:px-6 lg:px-8 py-6">
            {/* Personal Info */}
            <section className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Personal Info</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                <div className="bg-gray-900 rounded-md p-4 border border-gray-700">
                  <p className="text-gray-400">Name</p>
                  <p className="font-medium">{user?.name}</p>
                </div>
                <div className="bg-gray-900 rounded-md p-4 border border-gray-700">
                  <p className="text-gray-400">Email</p>
                  <p className="font-medium">{user?.email}</p>
                </div>
                <div className="bg-gray-900 rounded-md p-4 border border-gray-700">
                  <p className="text-gray-400">Role</p>
                  <p className="font-medium capitalize">{user?.role}</p>
                </div>
              </div>
            </section>

            {/* Enrollments */}
            <section className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">My Enrolled Courses</h2>
                <Link href="/courses" className="text-sm bg-secondary-600 hover:bg-secondary-700 px-3 py-1 rounded-md">Browse Courses</Link>
              </div>
              {enrollments.length === 0 ? (
                <p className="text-gray-400">You have not enrolled in any course yet. Browse courses and enroll. Admin will contact you for live Zoom classes.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {enrollments.map((e) => (
                    <div key={e.courseId} className="bg-gray-900 border border-gray-700 rounded-md p-4">
                      <h3 className="font-semibold mb-1">{e.courseTitle}</h3>
                      <p className="text-xs text-gray-400">Enrolled on {new Date(e.enrolledAt).toLocaleDateString()}</p>
                      <div className="mt-3 text-sm text-gray-300">
                        {(() => {
                          const enrolledDate = new Date(e.enrolledAt);
                          const now = new Date();
                          const oneDayInMs = 24 * 60 * 60 * 1000;
                          const isWithinOneDay = (now.getTime() - enrolledDate.getTime()) < oneDayInMs;
                          
                          return isWithinOneDay ? (
                            <span className="text-emerald-400">Team will contact you to schedule live sessions.</span>
                          ) : (
                            <span className="text-gray-500">Enrollment confirmed</span>
                          );
                        })()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
