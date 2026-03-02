import type { Config } from 'tailwindcss';

const config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neutral base (warm gray/slate)
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Primary accent (brand - adjust as needed)
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Semantic states
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        danger: {
          50: '#fef2f2',
          100: '#fee2e2',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
        },
        info: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
      },
      spacing: {
        // Base 8px unit
        xs: '0.5rem', // 8px
        sm: '1rem', // 16px
        md: '1.5rem', // 24px
        lg: '2rem', // 32px
        xl: '3rem', // 48px
      },
      borderRadius: {
        xs: '0.5rem', // 8px
        sm: '0.75rem', // 12px
        base: '1rem', // 16px
        lg: '1.25rem', // 20px
        xl: '1.5rem', // 24px
      },
      fontSize: {
        // Display / H1
        'display-lg': ['32px', { lineHeight: '40px', fontWeight: '600' }],
        'display-md': ['28px', { lineHeight: '36px', fontWeight: '600' }],
        // H2
        'heading-lg': ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'heading-md': ['18px', { lineHeight: '26px', fontWeight: '600' }],
        // Body
        'body-lg': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-md': ['14px', { lineHeight: '22px', fontWeight: '400' }],
        // Caption / Meta
        'caption-md': ['13px', { lineHeight: '20px', fontWeight: '500' }],
        'caption-sm': ['12px', { lineHeight: '18px', fontWeight: '500' }],
      },
      backdropFilter: {
        glass: 'blur(24px)',
        'glass-md': 'blur(16px)',
        'glass-sm': 'blur(8px)',
      },
      boxShadow: {
        glass:
          '0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 13px rgba(0, 0, 0, 0.1)',
        'glass-lg':
          '0 10px 15px rgba(0, 0, 0, 0.1), 0 20px 25px rgba(0, 0, 0, 0.15)',
        'glass-xl':
          '0 20px 25px rgba(0, 0, 0, 0.15), 0 25px 50px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
export default config;
