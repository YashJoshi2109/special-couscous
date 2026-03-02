'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/lib/api';
import { toast } from 'react-hot-toast';

export default function Home() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'employee' | 'admin'>('employee');
  const [isLoading, setIsLoading] = useState(false);
  
  // Employee form
  const [empUsername, setEmpUsername] = useState('');
  const [empPassword, setEmpPassword] = useState('');
  const [showEmpPass, setShowEmpPass] = useState(false);
  
  // Admin form
  const [admEmail, setAdmEmail] = useState('');
  const [admPassword, setAdmPassword] = useState('');
  const [showAdmPass, setShowAdmPass] = useState(false);

  const openModal = (type: 'employee' | 'admin') => {
    setActiveTab(type);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  const handleLogin = async (role: 'employee' | 'admin') => {
    setIsLoading(true);
    try {
      const credentials = role === 'employee'
        ? { username: empUsername, password: empPassword, role: 'EMPLOYEE' as const }
        : { email: admEmail, password: admPassword, role: 'ADMIN' as const };

      const response = await api.auth.login(credentials);

      if (response.success) {
        toast.success('Login successful!');
        closeModal();
        setTimeout(() => {
          router.push(role === 'employee' ? '/employee' : '/admin');
        }, 300);
      }
    } catch (error: any) {
      toast.error(error.message || 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 transition-all duration-300 bg-white/80 backdrop-blur-xl border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/30">
              H
            </div>
            <span className="text-lg font-bold text-neutral-900">Hotel<span className="text-primary-600">Shift</span> Pro</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
            <a href="#features" className="hover:text-neutral-900 transition-colors">Features</a>
            <a href="#timesheet" className="hover:text-neutral-900 transition-colors">Timesheet</a>
            <a href="#paystub" className="hover:text-neutral-900 transition-colors">Paystub</a>
            <a href="#clockin" className="hover:text-neutral-900 transition-colors">Time Tracking</a>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => openModal('employee')} className="hidden sm:block px-4 py-2 rounded-full border border-neutral-300 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 transition-all">
              Sign In
            </button>
            <button onClick={() => openModal('employee')} className="px-5 py-2 rounded-full bg-neutral-900 text-white text-sm font-semibold hover:bg-primary-600 shadow-md hover:shadow-lg transition-all">
              Get Started →
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary-100/30 blur-3xl rounded-full" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-100/20 blur-3xl rounded-full" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full text-xs font-semibold text-primary-600 mb-6 shadow-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-white text-xs">✦</span>
            Super8 Bedford · Employee Management
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-neutral-900 mb-6 leading-tight tracking-tight">
            Track every shift.<br />
            <span className="italic text-primary-600">Get paid</span> what<br />
            <span className="font-light">you deserve.</span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Clock in, track earnings, scan vouchers and manage your paystub — all in one beautifully designed mobile app built for hotel teams.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <button onClick={() => openModal('employee')} className="px-8 py-4 rounded-2xl bg-neutral-900 text-white font-bold hover:bg-primary-600 shadow-xl shadow-neutral-900/20 hover:shadow-primary-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
              Start Tracking ↗
            </button>
            <button onClick={() => openModal('admin')} className="px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-neutral-300 text-neutral-900 font-semibold hover:bg-white hover:border-primary-300 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0">
              Admin Portal →
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-neutral-600">
            <div className="flex -space-x-2">
              {['A', 'M', 'J', 'P', 'S'].map((letter, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs">
                  {letter}
                </div>
              ))}
            </div>
            <div>
              <div>Used by <strong className="text-neutral-900">8 employees</strong> at Super8 Bedford</div>
              <div className="text-amber-500 text-xs">★★★★★ <span className="text-neutral-500">Loved by the whole team</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-primary-100 border border-primary-200 rounded-full text-xs font-bold text-primary-600 uppercase tracking-wide mb-4">
              ✦ Everything You Need
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
              Built for the<br /><span className="italic text-primary-600">hotel floor</span>
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Every feature designed around how Super8 Bedford actually works — shifts, bonuses, vouchers, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '⏱️', title: 'Smart Clock In/Out', desc: 'Tap to clock in, select your shift type, and every second is tracked. Shuttle drivers can clock in and out multiple times per shift.', tag: 'Real-time timer', color: 'primary' },
              { icon: '💵', title: 'Instant Paystub Estimates', desc: 'See your estimated earnings update live — base pay, room bonuses, voucher commissions, and sold-out bonuses all in one view.', tag: '$10/hr base + all bonuses', color: 'green' },
              { icon: '🎟️', title: 'QR Voucher Scanner', desc: 'Scan airline meal vouchers with your camera. Guest details auto-fill from the QR code. Room number and passenger count — done in seconds.', tag: '+$3 per voucher scanned', color: 'purple' },
              { icon: '🏨', title: 'Sold-Out Bonus', desc: 'When the hotel hits 100% occupancy, the manager triggers a $25 bonus for every employee clocked in. You get notified instantly.', tag: '$25 flat bonus per event', color: 'amber' },
              { icon: '📅', title: 'Visual Timesheet Calendar', desc: 'Color-coded weekly grid shows every shift at a glance — Morning, Evening, Night, Shuttle. Hover any block for full session details.', tag: '4 shift types supported', color: 'neutral' },
              { icon: '🛡️', title: 'Admin Control Panel', desc: 'Managers see all employees, edit clock times, trigger sold-out bonuses, export payroll reports, and view voucher logs across the team.', tag: 'Full override access', color: 'rose' }
            ].map((feature, i) => (
              <div key={i} className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl hover:border-primary-200 transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${
                  feature.color === 'primary' ? 'bg-primary-100' :
                  feature.color === 'green' ? 'bg-green-100' :
                  feature.color === 'purple' ? 'bg-purple-100' :
                  feature.color === 'amber' ? 'bg-amber-100' :
                  feature.color === 'rose' ? 'bg-rose-100' :
                  'bg-neutral-100'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-3">{feature.desc}</p>
                <div className="text-xs font-semibold text-primary-600 flex items-center gap-1">
                  ↗ {feature.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-neutral-100 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white border border-neutral-200 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-b from-primary-100/50 to-transparent blur-3xl" />
            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 bg-primary-100 border border-primary-200 rounded-full text-xs font-bold text-primary-600 uppercase tracking-wide mb-6">
                ✦ Ready to get started?
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-4">
                Every shift tracked.<br /><span className="italic text-primary-600">Every dollar counted.</span>
              </h2>
              <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                Join the Super8 Bedford team on HotelShift Pro. Clock in with confidence — your pay is always transparent.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => openModal('employee')} className="px-8 py-4 rounded-2xl bg-neutral-900 text-white font-bold hover:bg-primary-600 shadow-xl transition-all">
                  Sign In as Employee ↗
                </button>
                <button onClick={() => openModal('admin')} className="px-8 py-4 rounded-2xl bg-white border border-neutral-300 text-neutral-900 font-semibold hover:border-primary-300 shadow-md transition-all">
                  Admin Portal →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-600 to-primary-700 flex items-center justify-center text-white font-bold text-sm">
              H
            </div>
            <span className="text-sm font-bold text-neutral-900">Hotel<span className="text-primary-600">Shift</span> Pro</span>
          </div>
          <div className="text-sm text-neutral-500">© 2026 Super8 Bedford. All rights reserved.</div>
          <div className="flex gap-6 text-sm text-neutral-500">
            <a href="#" className="hover:text-primary-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-primary-600 transition-colors">Support</a>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-in fade-in duration-300" onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-md" onClick={closeModal} />
          <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-xl border border-white shadow-2xl rounded-3xl overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Gradient Strip */}
            <div className="h-1.5 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-500 bg-[length:200%_100%] animate-gradient" />
            
            <div className="p-8">
              {/* Close Button */}
              <button onClick={closeModal} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 transition-colors">
                ✕
              </button>

              {/* Tab Switcher */}
              <div className="flex gap-1 p-1 bg-neutral-100 rounded-2xl mb-6">
                <button onClick={() => setActiveTab('employee')} className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'employee' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
                }`}>
                  👤 Employee
                </button>
                <button onClick={() => setActiveTab('admin')} className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'admin' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-600 hover:text-neutral-900'
                }`}>
                  🛡️ Admin Portal
                </button>
              </div>

              {/* Employee Login */}
              {activeTab === 'employee' && (
                <div className="space-y-5">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-3 shadow-lg shadow-primary-500/30">
                      H
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-neutral-900">Welcome back</h2>
                    <p className="text-sm text-neutral-600 mt-1">Sign in to your HotelShift Pro account</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-2 tracking-wide">USERNAME</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">👤</span>
                      <input
                        type="text"
                        value={empUsername}
                        onChange={(e) => setEmpUsername(e.target.value)}
                        placeholder="john.rivera"
                        autoComplete="username"
                        className="w-full h-12 pl-11 pr-4 bg-white border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-2 tracking-wide">PASSWORD</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">🔒</span>
                      <input
                        type={showEmpPass ? 'text' : 'password'}
                        value={empPassword}
                        onChange={(e) => setEmpPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full h-12 pl-11 pr-11 bg-white border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                      <button onClick={() => setShowEmpPass(!showEmpPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600">
                        {showEmpPass ? '🙈' : '👁'}
                      </button>
                    </div>
                  </div>

                  <button onClick={() => handleLogin('employee')} disabled={isLoading} className="w-full h-12 rounded-xl bg-gradient-to-r from-neutral-900 to-neutral-800 text-white font-bold hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                    {isLoading ? 'Signing in...' : 'Sign In to Dashboard'}
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-neutral-200" />
                    <span className="text-xs text-neutral-500 font-medium">or</span>
                    <div className="flex-1 h-px bg-neutral-200" />
                  </div>

                  <button onClick={() => setActiveTab('admin')} className="w-full h-12 rounded-xl border border-neutral-200 text-neutral-900 font-semibold hover:bg-neutral-50 transition-all">
                    Go to Admin Portal →
                  </button>

                  <div className="mt-5 p-3 bg-primary-50 border border-primary-200 rounded-xl text-xs text-neutral-600 text-center">
                    Demo: <strong className="text-primary-600">john.rivera</strong> / <strong className="text-primary-600">employee123</strong>
                  </div>
                </div>
              )}

              {/* Admin Login */}
              {activeTab === 'admin' && (
                <div className="space-y-5">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center text-white text-xl mx-auto mb-3 shadow-lg">
                      🛡️
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-neutral-900">Admin Portal</h2>
                    <p className="text-sm text-neutral-600 mt-1">Manager access · Super8 Bedford</p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-2 tracking-wide">ADMIN EMAIL</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">✉️</span>
                      <input
                        type="email"
                        value={admEmail}
                        onChange={(e) => setAdmEmail(e.target.value)}
                        placeholder="manager@super8bedford.com"
                        autoComplete="email"
                        className="w-full h-12 pl-11 pr-4 bg-white border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-2 tracking-wide">PASSWORD</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">🔒</span>
                      <input
                        type={showAdmPass ? 'text' : 'password'}
                        value={admPassword}
                        onChange={(e) => setAdmPassword(e.target.value)}
                        placeholder="Admin password"
                        className="w-full h-12 pl-11 pr-11 bg-white border border-neutral-300 rounded-xl text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                      <button onClick={() => setShowAdmPass(!showAdmPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600">
                        {showAdmPass ? '🙈' : '👁'}
                      </button>
                    </div>
                  </div>

                  <button onClick={() => handleLogin('admin')} disabled={isLoading} className="w-full h-12 rounded-xl bg-gradient-to-r from-neutral-900 to-neutral-800 text-white font-bold hover:from-neutral-800 hover:to-neutral-700 shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                    {isLoading ? 'Signing in...' : 'Access Admin Panel'}
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-neutral-200" />
                    <span className="text-xs text-neutral-500 font-medium">or</span>
                    <div className="flex-1 h-px bg-neutral-200" />
                  </div>

                  <button onClick={() => setActiveTab('employee')} className="w-full h-12 rounded-xl border border-neutral-200 text-neutral-900 font-semibold hover:bg-neutral-50 transition-all">
                    ← Employee Sign In
                  </button>

                  <div className="mt-5 p-3 bg-primary-50 border border-primary-200 rounded-xl text-xs text-neutral-600 text-center">
                    Demo: <strong className="text-primary-600">admin@super8bedford.com</strong> / <strong className="text-primary-600">admin123</strong>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
