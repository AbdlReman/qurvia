'use client';

import React, { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';


interface User {
  _id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  isActive: boolean;
  createdAt: string;
  enrollments?: Array<{ courseId: number; courseTitle: string; enrolledAt: string }>;
  phone?: string;
  address?: string;
}

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'users' | 'enrollments'>('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({
    totalUsers: 0,
    students: 0,
    teachers: 0,
    admins: 0,
  });

  useEffect(() => {
    if (status === 'loading') return;

    if (!session || !session.user || (session.user as { role: string }).role !== 'admin') {
      router.push('/auth/signin');
      return;
    }

    fetchUsers();
  }, [session, status, router]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/admin/users', { cache: 'no-store' });
      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
        
        // Calculate stats
        const stats = {
          totalUsers: data.users.length,
          students: data.users.filter((u: User) => u.role === 'student').length,
          teachers: data.users.filter((u: User) => u.role === 'teacher').length,
          admins: data.users.filter((u: User) => u.role === 'admin').length,
        };
        setStats(stats);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role: newRole }),
      });

      if (response.ok) {
        fetchUsers(); // Refresh the list
      }
    } catch (error) {
      console.error('Error updating user role:', error);
    }
  };

  const handleToggleUserStatus = async (userId: string, isActive: boolean) => {
    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isActive: !isActive }),
      });

      if (response.ok) {
        fetchUsers(); // Refresh the list
      }
    } catch (error) {
      console.error('Error updating user status:', error);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!session || !session.user || (session.user as { role: string }).role !== 'admin') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">Q</span>
              </div>
              <h1 className="text-xl font-semibold">Qurvia Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <span className="text-gray-300 hidden sm:inline">Welcome, {session.user.name}</span>
              <button
                onClick={() => signOut()}
                className="bg-secondary-600 hover:bg-secondary-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-6">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-50 w-64 bg-gray-800 border border-gray-700 rounded-lg h-fit md:sticky md:top-6 transition-transform duration-300 ease-in-out md:transition-none`}>
          <div className="flex items-center justify-between p-4 border-b border-gray-700 md:hidden">
            <h2 className="text-lg font-semibold">Admin Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-md hover:bg-gray-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="p-4 space-y-1">
            <button onClick={() => setActiveTab('overview')} className={`w-full text-left px-3 py-2 rounded-md ${activeTab==='overview' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>Overview</button>
            <button onClick={() => setActiveTab('users')} className={`w-full text-left px-3 py-2 rounded-md ${activeTab==='users' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>Users</button>
            <button onClick={() => setActiveTab('enrollments')} className={`w-full text-left px-3 py-2 rounded-md ${activeTab==='enrollments' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}>Enrollments</button>
          </nav>
        </aside>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <div className="flex-1">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center">
              <div className="p-2 bg-blue-500 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-gray-400 text-sm">Total Users</p>
                <p className="text-2xl font-semibold">{stats.totalUsers}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center">
              <div className="p-2 bg-green-500 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-gray-400 text-sm">Students</p>
                <p className="text-2xl font-semibold text-green-400">{stats.students}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-500 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-gray-400 text-sm">Teachers</p>
                <p className="text-2xl font-semibold text-yellow-400">{stats.teachers}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center">
              <div className="p-2 bg-secondary-500 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-gray-400 text-sm">Admins</p>
                <p className="text-2xl font-semibold text-secondary-400">{stats.admins}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Users Table */}
        {activeTab === 'users' && (
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-lg">
            <div className="px-6 py-4 border-b border-gray-700 bg-gray-750">
              <h2 className="text-xl font-semibold text-white">User Management</h2>
              <p className="text-sm text-gray-400 mt-1">Manage user accounts, roles, and status</p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-750">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      User Details
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Contact Info
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Enrollments
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Role & Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  {users.map((user) => (
                    <tr key={user._id} className="hover:bg-gray-750 transition-colors duration-150">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg">
                            <span className="text-lg font-bold text-white">
                              {user.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="ml-4">
                            <div className="text-base font-semibold text-white">{user.name}</div>
                            <div className="text-sm text-gray-400">{user.email}</div>
                            <div className="text-xs text-gray-500 mt-1">
                              Joined {new Date(user.createdAt).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-2">
                          {user.phone && (
                            <div className="flex items-center text-sm text-gray-300">
                              <svg className="w-4 h-4 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              {user.phone}
                            </div>
                          )}
                          {user.address && (
                            <div className="flex items-start text-sm text-gray-300">
                              <svg className="w-4 h-4 mr-2 mt-0.5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="truncate max-w-32">{user.address}</span>
                            </div>
                          )}
                          {!user.phone && !user.address && (
                            <span className="text-sm text-gray-500 italic">No contact info</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {(user.enrollments?.length || 0) > 0 ? (
                          <div className="space-y-2">
                            {user.enrollments?.slice(0, 3).map((e) => (
                              <div key={`${user._id}-${e.courseId}`} className="flex items-center">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></div>
                                <span className="text-sm text-gray-300 truncate max-w-32">{e.courseTitle}</span>
                              </div>
                            ))}
                            {(user.enrollments?.length || 0) > 3 && (
                              <div className="text-xs text-emerald-400 font-medium">
                                +{(user.enrollments?.length || 0) - 3} more courses
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className="text-sm text-gray-500 italic">No enrollments</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-3">
                          <div>
                            <select
                              value={user.role}
                              onChange={(e) => handleRoleChange(user._id, e.target.value)}
                              className="w-full bg-gray-700 border border-gray-600 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                            >
                              <option value="student">Student</option>
                              <option value="teacher">Teacher</option>
                              <option value="admin">Admin</option>
                            </select>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                              user.isActive 
                                ? 'bg-emerald-100 text-emerald-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {user.isActive ? 'Active' : 'Inactive'}
                            </span>
                            <button
                              onClick={() => handleToggleUserStatus(user._id, user.isActive)}
                              className={`px-3 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
                                user.isActive
                                  ? 'bg-red-600 hover:bg-red-700 text-white hover:shadow-lg'
                                  : 'bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-lg'
                              }`}
                            >
                              {user.isActive ? 'Deactivate' : 'Activate'}
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Enrollments View */}
        {activeTab === 'enrollments' && (
          <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-lg">
            <div className="px-6 py-4 border-b border-gray-700 bg-gray-750">
              <h2 className="text-xl font-semibold text-white">Enrollments by Course</h2>
              <p className="text-sm text-gray-400 mt-1">View all student enrollments organized by course</p>
            </div>
            <div className="p-6">
              {(() => {
                const map: Record<string, { courseId: number; courseTitle: string; students: Array<{ _id: string; name: string; email: string; phone?: string; enrolledAt?: string }> }> = {};
                users.forEach(u => {
                  (u.enrollments || []).forEach(e => {
                    const key = String(e.courseId);
                    if (!map[key]) map[key] = { courseId: e.courseId, courseTitle: e.courseTitle, students: [] };
                    map[key].students.push({ _id: u._id, name: u.name, email: u.email, phone: u.phone, enrolledAt: e.enrolledAt });
                  });
                });
                const list = Object.values(map).sort((a,b) => a.courseTitle.localeCompare(b.courseTitle));
                if (list.length === 0) return (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-lg">No enrollments yet</p>
                    <p className="text-gray-500 text-sm mt-1">Students will appear here once they enroll in courses</p>
                  </div>
                );
                return (
                  <div className="space-y-6">
                    {list.map(course => (
                      <div key={course.courseId} className="border border-gray-700 rounded-lg bg-gray-750 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-700 bg-gradient-to-r from-gray-750 to-gray-700">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                                <span className="text-white font-bold text-lg">Q</span>
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-white">{course.courseTitle}</h3>
                                <p className="text-sm text-gray-400">Course ID: {course.courseId}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-emerald-400">{course.students.length}</div>
                              <div className="text-sm text-gray-400">{course.students.length === 1 ? 'student' : 'students'} enrolled</div>
                            </div>
                          </div>
                        </div>
                        <div className="divide-y divide-gray-700">
                          {course.students.map(s => (
                            <div key={s._id} className="px-6 py-4 hover:bg-gray-700 transition-colors duration-150">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center mb-2">
                                    <div className="h-8 w-8 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                                      <span className="text-sm font-medium text-white">{s.name.charAt(0).toUpperCase()}</span>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-white">{s.name}</div>
                                      <div className="text-sm text-gray-400">{s.email}</div>
                                    </div>
                                  </div>
                                  {s.phone && (
                                    <div className="flex items-center text-sm text-emerald-400 ml-11">
                                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                      </svg>
                                      {s.phone}
                                    </div>
                                  )}
                                </div>
                                <div className="text-right">
                                  {s.enrolledAt && (
                                    <div className="text-sm text-gray-400">
                                      Enrolled {new Date(s.enrolledAt).toLocaleDateString('en-US', { 
                                        year: 'numeric', 
                                        month: 'short', 
                                        day: 'numeric' 
                                      })}
                                    </div>
                                  )}
                                  <div className="mt-2">
                                    <button className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs rounded-md transition-colors duration-200">
                                      Contact Student
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
