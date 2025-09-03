'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface EnrollButtonProps {
  courseId: number;
  className?: string;
  variant?: 'primary' | 'list';
}

export default function EnrollButton({ courseId, className = '', variant = 'primary' }: EnrollButtonProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage('');
  }, [courseId]);

  useEffect(() => {
    const checkEnrollment = async () => {
      if (status !== 'authenticated') return;
      try {
        const res = await fetch('/api/users/enroll', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          const isEnrolled = (data.enrollments || []).some((e: { courseId: number }) => e.courseId === courseId);
          if (isEnrolled) setEnrolled(true);
        }
      } catch {
        // ignore
      }
    };
    checkEnrollment();
  }, [status, courseId]);

  const handleEnroll = async () => {
    if (status === 'loading') return;
    if (!session) {
      router.push('/auth/signin');
      return;
    }
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('/api/users/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId }),
      });
      const data = await res.json();
      if (res.ok) {
        setEnrolled(true);
        setMessage(data.message || 'Enrolled successfully');
      } else {
        // If API indicates already enrolled, reflect state
        if ((data.message || '').toLowerCase().includes('already')) {
          setEnrolled(true);
          setMessage('Already enrolled');
        } else {
          setMessage(data.error || 'Failed to enroll');
        }
      }
    } catch {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const baseClasses =
    variant === 'primary'
      ? 'w-full bg-emerald-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-base sm:text-lg hover:bg-emerald-700 transition-colors'
      : 'inline-flex items-center justify-center bg-emerald-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-emerald-700 transition-colors';

  return (
    <div className={className}>
      <button onClick={handleEnroll} disabled={loading || enrolled} className={`${baseClasses} ${loading || enrolled ? 'opacity-70 cursor-not-allowed' : ''}`}>
        {enrolled ? 'Enrolled' : loading ? 'Enrolling…' : 'Enroll Now'}
      </button>
      {message && (
        <p className="mt-2 text-sm text-emerald-700">{message}</p>
      )}
      {!message && enrolled && (
        <p className="mt-2 text-sm text-emerald-700">Team will contact you to schedule live sessions.</p>
      )}
    </div>
  );
}


