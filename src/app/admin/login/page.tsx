'use client';

import React from 'react';
import Link from 'next/link';
import { GlassCard } from '@/components/ui/GlassUI';
import { Button } from '@/components/ui/Button';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('admin@hotelshift.app');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Admin login successful');
      // TODO: Redirect to admin dashboard
    } catch (error) {
      toast.error('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-display-lg font-bold text-neutral-900 mb-2">
            HotelShift Pro
          </h1>
          <p className="text-body-md text-neutral-600">Admin Portal</p>
        </div>

        {/* Login Card */}
        <GlassCard variant="elevated" className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-body-md font-medium text-neutral-900 mb-2">
                Admin Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="admin@hotelshift.app"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-body-md font-medium text-neutral-900 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Login Button */}
            <Button
              variant="primary"
              className="w-full"
              isLoading={isLoading}
              type="submit"
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-neutral-200" />
            <span className="text-caption-sm text-neutral-600">or</span>
            <div className="flex-1 h-px bg-neutral-200" />
          </div>

          {/* Employee Login Link */}
          <Link href="/login" className="block text-center">
            <Button variant="secondary" className="w-full">
              Employee Portal
            </Button>
          </Link>
        </GlassCard>

        {/* Footer */}
        <p className="text-center text-caption-sm text-neutral-600 mt-6">
          Demo: admin@hotelshift.app / password
        </p>
      </div>
    </main>
  );
}
