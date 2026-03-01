# 🚀 HotelShift Pro - Developer Quick Reference

## 📍 Quick Navigation

### Pages
```
🏠 Home:           localhost:3000
👤 Employee Login: localhost:3000/login
🔐 Admin Login:    localhost:3000/admin/login

📱 EMPLOYEE APP
├─ Home:           localhost:3000/employee
├─ Timesheet:      localhost:3000/employee/timesheet
├─ Pay:            localhost:3000/employee/pay
├─ Vouchers:       localhost:3000/employee/vouchers
└─ Settings:       localhost:3000/employee/settings

👨‍💼 ADMIN PORTAL
├─ Overview:       localhost:3000/admin
├─ Employees:      localhost:3000/admin/employees
├─ Time Logs:      localhost:3000/admin/time-logs
├─ Payroll:        localhost:3000/admin/payroll
├─ Vouchers:       localhost:3000/admin/vouchers
├─ Audit Log:      localhost:3000/admin/audit
└─ Settings:       localhost:3000/admin/settings
```

## 🔑 Demo Credentials

| Role | Email | Password |
|------|-------|----------|
| Employee | `demo@hotelshift.app` | `password` |
| Admin | `admin@hotelshift.app` | `password` |

## 🎨 Common UI Components

### Import Statements
```tsx
// Glass UI components
import { GlassCard, StatusChip, KPITile, EmptyState } from '@/components/ui/GlassUI';

// Buttons & Modals
import { Button, BottomSheet, Drawer } from '@/components/ui/Button';

// Employee components
import { EmployeeNavBar } from '@/components/employee/EmployeeNavBar';
import { StatusCard } from '@/components/employee/StatusCard';
import { TimelineCalendar } from '@/components/employee/TimelineCalendar';

// Admin components
import { AdminSidebar } from '@/components/admin/AdminSidebar';

// Utilities
import { formatTime, formatDate, formatCurrency, formatDuration } from '@/lib/utils';
import toast from 'react-hot-toast';
```

### Component Usage

**Glass Card**
```tsx
<GlassCard variant="default" | "dark" | "elevated">
  Content here
</GlassCard>
```

**Button**
```tsx
<Button 
  variant="primary" | "secondary" | "tertiary" | "danger"
  size="sm" | "md" | "lg"
  isLoading={boolean}
/>
```

**Status Chip**
```tsx
<StatusChip status="live" | "completed" | "edited" | "pending" | "declined" />
```

**Bottom Sheet**
```tsx
<BottomSheet isOpen={bool} onClose={fn} title="Title">
  Content here
</BottomSheet>
```

**KPI Tile**
```tsx
<KPITile label="Label" value="123" change="+10" trend="up" />
```

## 📂 File Organization

```
src/
├── app/              Pages & routes
├── components/       Reusable UI + feature components
├── lib/              Utilities & clients
├── types/            TypeScript interfaces
├── store/            Zustand stores (empty, ready)
└── hooks/            Custom hooks (empty, ready)
```

## 🎨 Tailwind Classes

### Glass Effects
```html
<div class="glass">Standard glass</div>
<div class="glass-dark">Dark glass</div>
<div class="glass-md">Medium blur</div>
```

### Buttons
```html
<div class="btn btn-primary">Primary</div>
<div class="btn btn-secondary">Secondary</div>
<div class="btn btn-tertiary">Tertiary</div>
<div class="btn btn-danger">Danger</div>
```

### Status Chips
```html
<span class="chip-success">Success</span>
<span class="chip-warning">Warning</span>
<span class="chip-danger">Danger</span>
<span class="chip-live">Live</span>
```

### Cards
```html
<div class="card">Card content</div>
<div class="card-dark">Dark card</div>
```

### Typography
```html
<h1 class="text-display-md">Display heading</h1>
<h2 class="text-heading-md">Section heading</h2>
<p class="text-body-md">Body text</p>
<p class="text-caption-md">Caption text</p>
```

## 🔌 API Ready

All endpoints are documented in `/src/lib/api.ts`

Common patterns:
```tsx
import apiClient from '@/lib/api';

// GET request
const { data } = await apiClient.get('/api/endpoint');

// POST request
const { data } = await apiClient.post('/api/endpoint', { body });

// Error handling (auto-redirects on 401)
try {
  // ...
} catch (error) {
  toast.error('Operation failed');
}
```

## 📊 Data Types

Main types defined in `/src/types/index.ts`:
- `ClockingResponse`
- `SessionStatus`
- `PayEstimateData`
- `VoucherScanData`
- `EmployeeSession`
- `TimelineDay`

## 🎬 Common Patterns

### Loading State
```tsx
const [isLoading, setIsLoading] = useState(false);
<Button isLoading={isLoading}>Action</Button>
```

### Toast Notifications
```tsx
import toast from 'react-hot-toast';

toast.success('Success message');
toast.error('Error message');
toast.loading('Loading...');
```

### useState for Modal
```tsx
const [isOpen, setIsOpen] = useState(false);
<BottomSheet isOpen={isOpen} onClose={() => setIsOpen(false)} />
```

### Navigate Between Screens
```tsx
import Link from 'next/link';

<Link href="/employee/timesheet">Go to timesheet</Link>
```

## ✅ Pre-built Features

| Feature | Status | Location |
|---------|--------|----------|
| Glass UI system | ✅ Done | `/components/ui/` |
| Clock in/out | ✅ Done | `/employee/page.tsx` |
| Timesheet calendar | ✅ Done | `/employee/timesheet/` |
| Pay estimation | ✅ Done | `/employee/pay/` |
| Voucher scanning | ✅ Done | `/employee/vouchers/` |
| Admin dashboard | ✅ Done | `/admin/page.tsx` |
| Employee directory | ✅ Done | `/admin/employees/` |
| Authentication UI | ✅ Done | `/login/`, `/admin/login/` |
| Database schema | ✅ Done | `/prisma/schema.prisma` |
| API client setup | ✅ Done | `/lib/api.ts` |

## 🔧 Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# Code Quality
npm run lint             # Run ESLint
npm run format           # Format with Prettier

# Database
npm run db:push          # Push schema to DB
npm run db:generate      # Generate Prisma client
npm run db:studio        # Open Prisma Studio
```

## 📝 Environment Variables

Create `.env.local`:
```bash
DATABASE_URL="postgresql://user:password@localhost:5432/hotelshift_pro"
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"
NODE_ENV="development"
```

## 🐛 Debugging Tips

### Check TypeScript errors
```bash
npm run lint
```

### View component props
Check `.tsx` files directly - all props are TypeScript annotated

### Mock data locations
- Employee sessions: `/src/app/employee/timesheet/page.tsx`
- Pay data: `/src/app/employee/pay/page.tsx`
- Vouchers: `/src/app/employee/vouchers/page.tsx`
- Admin presence: `/src/admin/page.tsx`

### Style debugging
Use browser DevTools → Elements to inspect:
- Glass effect layers
- Tailwind classes
- CSS grid/flex layouts

## 📚 Documentation Files

- **README.md**: Full feature overview
- **GETTING_STARTED.md**: Setup instructions
- **BUILD_SUMMARY.md**: What was built
- **DESIGN_TOKENS.md**: Design system reference

## 🎯 Next Development Task

1. **Implement API routes** in `/src/pages/api/`
2. **Connect Prisma** to PostgreSQL
3. **Add authentication** logic
4. **Replace mock data** with real API calls
5. **Test end-to-end** flows
6. **Deploy** to Vercel or hosting platform

## 💡 Pro Tips

- Use `className={cn(...)}` for conditional Tailwind classes
- All components are fully typed (check imports)
- Toast notifications auto-dismiss after 3 seconds
- Mock data is easy to swap for API calls
- Timesheet calendar is fully functional for demo
- Admin sidebar is sticky - good for UX

---

**Everything is ready to go. Happy coding! 🚀**
