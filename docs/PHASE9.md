# PHASE 9: Additional Deployment Scripts ✅ COMPLETE

## Overview
Phase 9 provides additional utility scripts for deployment, monitoring, and disaster recovery.

## Scripts Created

### 1. **`scripts/rollback.sh`** - Commit Rollback
**Purpose**: Safely rollback to a previous commit

**Usage**:
```bash
./scripts/rollback.sh <commits_back>

# Example: Rollback 1 commit
./scripts/rollback.sh 1

# Example: Rollback 3 commits
./scripts/rollback.sh 3
```

**What it does**:
1. Creates database backup before rollback
2. Shows recent commits for selection
3. Resets to target commit
4. Stops all containers
5. Pulls images for target commit
6. Starts containers
7. Performs health check
8. Automatic recovery if health check fails

**Example output**:
```
⏮️  HotelShift Pro Rollback Script
====================================

Recent commits:
abc1234 Fix: Backend API response format
def5678 Feature: Add paystub calculation
ghi9012 Chore: Update dependencies

Rolling back 1 commit(s)...
Current commit: abc1234
Target commit: def5678
Rollback to def5678? (yes/no): yes

💾 Creating backup before rollback...
✅ Backup created

📝 Resetting to target commit...
🛑 Stopping containers...
📦 Pulling images...
🚀 Starting containers...
⏳ Waiting for services to start...
🏥 Performing health check...
✅ Rollback successful!
```

### 2. **`scripts/seed-db.sh`** - Database Seeding
**Purpose**: Populate database with sample data for testing

**Usage**:
```bash
./scripts/seed-db.sh
```

**Sample data created**:
- 4 employees (john.doe, jane.smith, admin.user, bob.manager)
- 2 shift sessions
- 3 bonus events

**Password hashes**: `$2b$10$salt.*` (test passwords)

**Use cases**:
- Test application without manual data entry
- Verify reports and calculations
- Load testing
- Training environments

### 3. **`scripts/logs.sh`** - Log Viewer
**Purpose**: View container logs with easy filtering

**Usage**:
```bash
# Last 20 lines (default)
./scripts/logs.sh

# Last 50 lines
./scripts/logs.sh 50

# Last 100 lines
./scripts/logs.sh 100
```

**Output includes**:
- PostgreSQL logs
- Backend API logs
- Frontend logs
- Nginx access/error logs

### 4. **`scripts/monitor.sh`** - Real-time Monitoring
**Purpose**: Interactive monitoring dashboard

**Usage**:
```bash
./scripts/monitor.sh
```

**Displays** (auto-refreshing every 5 seconds):
- System resources (CPU, memory, disk)
- Container status
- Service health checks
- SSL certificate expiry
- Active connections
- Recent errors/warnings

**Example**:
```
╔════════════════════════════════════════════════════════════╗
║         HotelShift Pro - Monitoring Dashboard              ║
║                                                            ║
║ Last updated: 2026-03-01 20:45:00                          ║
╚════════════════════════════════════════════════════════════╝

📊 SYSTEM RESOURCES
───────────────────────────────────────────────────────────
CPU Usage: 15.2%
Memory Usage: 2.1GB / 4GB (52%)
Disk Usage: 25% (/opt/hotelshift-pro)

🐳 CONTAINER STATUS
───────────────────────────────────────────────────────────
hotelshift_postgres    Up 2 hours
hotelshift_backend     Up 2 hours
hotelshift_frontend    Up 2 hours
hotelshift_nginx       Up 2 hours

🏥 SERVICE HEALTH
───────────────────────────────────────────────────────────
✅ Backend API: Healthy
✅ Frontend: Healthy
✅ PostgreSQL: Healthy
🔐 SSL Certificate expires: Mar 30 2026

📡 ACTIVE CONNECTIONS
───────────────────────────────────────────────────────────
Nginx connections: 12
Database connections: 3

📝 RECENT ERRORS (last 5)
───────────────────────────────────────────────────────────
No errors found
```

## Script Organization

All scripts located in: `/opt/hotelshift-pro/scripts/`

```
scripts/
├── ec2-setup.sh           # EC2 initial setup
├── deploy.sh              # Main deployment
├── rollback.sh            # ✨ NEW - Rollback to previous commit
├── certbot-renew.sh       # SSL renewal
├── backup-db.sh           # Database backup
├── restore-db.sh          # Database restore
├── seed-db.sh             # ✨ NEW - Populate sample data
├── setup-cron.sh          # Cron job setup
├── generate-secrets.sh    # Generate secrets
├── health-check.sh        # Health check
├── logs.sh                # ✨ NEW - View logs
├── monitor.sh             # ✨ NEW - Dashboard monitoring
└── ...
```

## Common Usage Patterns

### Emergency Rollback
```bash
# SSH to EC2
ssh -i hotelshiftpro-texas-mbp-yash.pem ubuntu@18.222.205.234

# Rollback 1 commit
cd /opt/hotelshift-pro
./scripts/rollback.sh 1

# Verify
docker-compose ps
curl https://hotelshift.18.222.205.234.sslip.io/health
```

### Testing with Sample Data
```bash
# SSH to EC2
ssh -i hotelshiftpro-texas-mbp-yash.pem ubuntu@18.222.205.234

# Seed database
cd /opt/hotelshift-pro
./scripts/seed-db.sh

# Now test API with: john.doe/jane.smith
```

### Monitor in Production
```bash
# SSH to EC2
ssh -i hotelshiftpro-texas-mbp-yash.pem ubuntu@18.222.205.234

# Start monitoring dashboard
cd /opt/hotelshift-pro
./scripts/monitor.sh
```

### Troubleshoot Issues
```bash
# SSH to EC2
ssh -i hotelshiftpro-texas-mbp-yash.pem ubuntu@18.222.205.234

# View logs
cd /opt/hotelshift-pro
./scripts/logs.sh 50

# Or follow specific service
docker-compose logs -f backend
```

## Error Recovery Workflow

If deployment fails:

```
1. Check logs
   ./scripts/logs.sh 100

2. Identify issue
   - Backend errors?
   - Frontend build failed?
   - Database issues?
   - Nginx config?

3. Quick recovery options:

   a) Restart containers
      docker-compose restart

   b) Reset and redeploy
      docker-compose down
      docker-compose up -d

   c) Rollback to previous version
      ./scripts/rollback.sh 1

   d) Restore from database backup
      ./scripts/restore-db.sh backups/hotelshift_[DATE].sql.gz

4. Verify
   ./scripts/monitor.sh
   curl https://hotelshift.18.222.205.234.sslip.io/health
```

## Automation with Cron

Scripts automatically run on schedule (set by `setup-cron.sh`):

```
0 3 * * * ubuntu bash /opt/hotelshift-pro/scripts/certbot-renew.sh
0 2 * * * ubuntu bash /opt/hotelshift-pro/scripts/backup-db.sh
*/5 * * * * ubuntu curl -sf https://hotelshift.18.222.205.234.sslip.io/health
*/10 * * * * ubuntu cd /opt/hotelshift-pro && docker-compose ps | grep -q "Up"
```

## Performance Considerations

- **rollback.sh**: Takes ~2-3 minutes (includes health check)
- **seed-db.sh**: Takes ~5 seconds
- **logs.sh**: Instant
- **monitor.sh**: Real-time (refreshes every 5s)

## Security Notes

✅ All scripts run with proper permissions
✅ Database backups stored in `/opt/hotelshift-pro/backups/`
✅ Backups are not pushed to Git (in .gitignore)
✅ Rollback requires confirmation
✅ Health checks prevent bad deployments

## Troubleshooting Scripts

### Script won't execute
```bash
# Fix permissions
chmod +x /opt/hotelshift-pro/scripts/*.sh

# Verify
ls -lh /opt/hotelshift-pro/scripts/
```

### Script produces no output
```bash
# Run with debug flag
bash -x ./scripts/monitor.sh

# Or check logs directly
docker-compose logs --tail=100 backend
```

### Docker command not found
```bash
# Docker might not be in PATH
# Use full path or add to PATH
/usr/bin/docker-compose ps
```

## Next Steps

→ **PHASE 10**: Monitoring & backups  
→ **PHASE 11**: Pre-deployment checklist  
→ **PHASE 12**: Post-deployment testing

---

**Status**: ✅ DEPLOYMENT SCRIPTS COMPLETE

**Total Scripts**: 12  
**New in Phase 9**: 4 (rollback, seed, logs, monitor)  
**All Executable**: ✅ Yes
