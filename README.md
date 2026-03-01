# HotelShift Pro - Premium Employee Management & Time Tracking

A production-grade employee management system with glassmorphism UI, real-time clocking, timesheet calendars, voucher scanning, and comprehensive admin dashboard.

## 🎯 Project Overview

HotelShift Pro is a modern PWA designed for hospitality staff and managers. It provides:

- **Employee App**: Clock in/out, timesheet tracking, paystub estimation, voucher scanning
- **Admin Portal**: Live ops dashboard, employee management, payroll processing, audit logs
- **Glass UI Design**: Premium, minimal, trustworthy interface
- **Real-time Sync**: WebSocket support for live presence tracking
- **Offline Support**: PWA with offline-first sync queue

## 🏗️ Architecture

### Tech Stack

```
Frontend: Next.js 14 + React 18 + TypeScript + Tailwind CSS
Backend: Next.js API Routes + Prisma ORM
Database: PostgreSQL
Styling: Tailwind CSS with custom Glass UI tokens
State: TanStack Query + Zustand
Real-time: Socket.io (optional, extensible)
```

### Folder Structure

```
src/
├── app/                          # Next.js app router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Landing page
│   ├── employee/                # Employee app routes
│   │   ├── page.tsx             # Home/clocking
│   │   ├── timesheet/           # Timesheet calendar
│   │   ├── pay/                 # Paystub estimation
│   │   ├── vouchers/            # Voucher scanning
│   │   └── settings/            # Employee settings
│   ├── admin/                   # Admin portal routes
│   │   ├── page.tsx             # Overview dashboard
│   │   ├── employees/           # Employee management
│   │   ├── time-logs/           # Time log audits
│   │   ├── payroll/             # Payroll processing
│   │   ├── vouchers/            # Voucher management
│   │   ├── audit/               # Audit logs
│   │   └── settings/            # Admin settings
│   ├── login/                   # Employee login
│   └── globals.css              # Global styles
│
├── components/
│   ├── ui/                      # Reusable UI components
│   │   ├── GlassUI.tsx          # Glass card, chips, KPI tiles
│   │   └── Button.tsx           # Button, BottomSheet, Drawer
│   ├── employee/                # Employee-specific components
│   │   ├── EmployeeNavBar.tsx   # Bottom navigation
│   │   ├── StatusCard.tsx       # Clocking status & timer
│   │   └── TimelineCalendar.tsx # Shift calendar grid
│   └── admin/
│       └── AdminSidebar.tsx     # Admin navigation
│
├── lib/
│   ├── api.ts                   # Typed API client (fetch + cookies)
│   ├── queryClient.ts           # TanStack Query setup
│   └── utils.ts                 # Helper functions
│
├── types/
│   └── index.ts                 # TypeScript definitions
│
├── store/                       # Zustand stores (auth, UI state)
└── hooks/                       # Custom React hooks
```

## 🎨 Design System

### Glass Effect Specification

```css
/* Glass Container */
.glass {
  background: rgba(255, 255, 255, 0.10-0.18);
  backdrop-filter: blur(16-24px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: subtle layered (2-3 shadows);
}
```

### Color Palette

- **Neutral Base**: Warm gray/slate (50-900)
- **Primary Accent**: Brand blue (50-900)
- **Semantic**: Success (green), Warning (amber), Danger (red), Info (cyan)

### Typography

- **Display**: 28-32px, Semibold
- **Heading**: 18-20px, Semibold
- **Body**: 14-16px, Regular
- **Caption**: 12-13px, Medium

### Spacing & Layout

- **Base Unit**: 8px
- **Border Radius**: 16px / 20px / 24px
- **Tap Targets**: 44×44px minimum (mobile)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 14+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your database URL

# Initialize database
npm run db:push

# Start dev server
npm run dev

# Start realtime socket server (new terminal)
npm run realtime
```

Visit `http://localhost:3001` (or the port shown in terminal) to access the application.

### Realtime Layer

HotelShift Pro now includes a dedicated Socket.IO realtime server for live updates across employee and admin screens.

- Realtime server: `scripts/realtime-server.js`
- Default realtime URL: `http://localhost:4001`
- Server emits are triggered from API mutations (`sessions`, `vouchers`, `admin/settings`)
- Client subscriptions are mounted globally in `EmployeeNavBar` and `AdminSidebar`

### Demo Credentials

**Employee:**
- Email: `john@hotelshift.com`
- Password: `employee123`

**Admin:**
- Email: `admin@hotelshift.com`
- Password: `admin123`

## 📱 Employee Features

### Home Screen
- **Status Card**: Live clock-in/out with active role/shift
- **Timer**: Real-time session duration tracking
- **Quick Actions**: Add tips, view pay estimate, scan voucher
- **Daily Summary**: Hours and earnings for the day
- **Weekly Summary**: Total hours and estimated gross

### Clock In/Out Flows
- **Clock In**: Select role (Front Desk/Shuttle) + shift type (Morning/Evening/Night/Shuttle)
- **Clock Out**: Optional tips input + room bonus tracking
- **Haptic Feedback**: Confirmation tactile response
- **Status Persistence**: Live indicator with subtle animation

### Timesheet Calendar
- **Week View**: 7-day grid with date columns and session rows
- **Session Blocks**: Time blocks showing start → end, role, shift, duration
- **Daily Totals**: Hours and earnings per day
- **Multi-session**: Shuttle shifts stack vertically
- **Session Details**: Tap block → drawer with earnings breakdown & audit metadata

### Pay Estimation
- **Itemized Breakdown**:
  - Base pay (hours × rate)
  - Tips
  - Room bonus
  - Voucher bonus
  - Sold-out bonus
- **Export**: PDF/Share summary
- **Adjustment Workflow**: Mark declined vouchers, update estimates

### Voucher Scanning
- **Camera Interface**: Full-screen scanner with guidance overlay
- **Parse Preview**: Masked card info confirmation
- **Bonus Tracking**: Room number + passenger count → bonus amount
- **Decline Handling**: Mark declined, update pay estimate
- **Voucher Log**: History with room, time, status, bonus amount

### Settings
- Profile management
- Notification preferences
- Sign out

## 🛡️ Admin Features

### Overview Dashboard
- **Live Presence**: Real-time employee list with clock-in time & duration
- **KPI Tiles**: Clocked in now, hours today, voucher scans, estimated payroll
- **Exception Flags**: Missing clock-out, conflicts highlighted
- **Quick Actions**: Edit time, trigger bonuses, export reports

### Employees Management
- Employee directory with role, hourly rate, status
- Edit employee details and preferences
- Deactivate/reactivate accounts

### Time Logs Audit
- Review all time sessions
- Edit times (with audit trail: who/when/why)
- Resolve conflicts (overlapping sessions)
- Add notes to sessions

### Payroll Processing
- Generate payroll for a period
- View itemized breakdown by employee
- Export payroll reports (CSV/PDF)
- Lock period when finalized

### Voucher Management
- Review all scanned vouchers
- Decline vouchers with reason
- Track bonus adjustments
- Generate voucher reports

### Audit Log
- Complete action history (clock-in/out, edits, overrides)
- Filter by employee, action, date range
- View change details with before/after values
- Compliance-ready export

## 🔌 API Structure

### Authentication
```
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me
```

### Employee Routes
```
POST /api/sessions
PATCH /api/sessions/:id
GET /api/sessions?startDate=&endDate=
GET /api/pay/estimate
POST /api/vouchers
GET /api/vouchers
PATCH /api/vouchers/:id
```

### Admin Routes
```
GET /api/admin/dashboard
GET /api/admin/employees
GET /api/admin/time-logs
GET /api/admin/payroll
GET /api/admin/vouchers
GET /api/admin/audit
GET /api/admin/settings
PATCH /api/admin/settings
```

## 🗄️ Database Schema

### Core Models

**User**: Authentication + basic profile
**Employee**: Time tracking, pay rates, role assignments
**Session**: Clock in/out sessions with role & shift tracking
**TimeLog**: Granular time tracking with modifiers
**Voucher**: Guest voucher scans with bonus tracking
**PayEstimate**: Per-period earnings breakdown
**AuditLog**: Compliance-ready action history

See `prisma/schema.prisma` for complete schema.

## 🎨 Component Examples

### Status Card (Clocking)
```tsx
<StatusCard
  isClockedIn={isClockedIn}
  activeRole="FRONT_DESK"
  activeShiftType="MORNING"
  clockInTime={new Date()}
  onClockIn={handleClockIn}
  onClockOut={handleClockOut}
/>
```

### Timeline Calendar
```tsx
<TimelineCalendar
  sessions={sessions}
  onSessionTap={(session) => setSelected(session)}
/>
```

### Glass Card
```tsx
<GlassCard variant="elevated">
  {/* Content */}
</GlassCard>
```

## 📈 Accessibility

- ✅ WCAG 2.1 AA compliance
- ✅ Color contrast ratios ≥ 4.5:1
- ✅ Keyboard navigation (admin tables)
- ✅ Reduced motion support
- ✅ Touch-friendly targets (44×44px)

## 🧪 Testing & Quality

```bash
# Run tests
npm test

# Check linting
npm run lint

# Format code
npm run format
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
vercel deploy
```

### Docker

```bash
docker build -t hotelshift-pro .
docker run -p 3000:3000 hotelshift-pro
```

### Environment Setup

```bash
# .env.production
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=<generated-secret>
NEXTAUTH_URL=https://yourdomain.com
NODE_ENV=production
```

## 📝 Next Steps / Roadmap

- [ ] Real-time WebSocket for live presence
- [ ] QR code barcode scanning (integrate ml-kit)
- [ ] Offline PWA sync queue
- [ ] Email/SMS notifications
- [ ] Advanced reporting & analytics
- [ ] Multi-location support
- [ ] Shift swapping / request management
- [ ] Mobile app (React Native)

## 📄 License

Proprietary - HotelShift Pro

## 👥 Support

For questions or issues, contact: support@hotelshift.app

---

**Built with ❤️ for hospitality teams**
