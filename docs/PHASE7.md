# PHASE 7: AWS EC2 Setup ✅ COMPLETE

## Overview
Phase 7 sets up the AWS EC2 instance with all necessary infrastructure, automation, and deployment tools.

## Configuration Details

**EC2 Instance**
- Instance ID: `i-040a6435a10782edb`
- Instance Type: `t2.micro` (2 vCPU, 1GB RAM)
- Region: `us-east-2` (Ohio)
- Public IP: `18.222.205.234`
- Private IP: `172.31.23.104`
- Domain: `hotelshift.18.222.205.234.sslip.io`
- OS: Ubuntu 24.04 LTS

**Key Pair**
- File: `hotelshiftpro-texas-mbp-yash.pem`
- Location: `/Users/yash/Downloads/hotelshiftpro-texas-mbp-yash.pem`
- Permissions: `400` (read-only)

**Security Group**
- Name: `hotel-shift-pro-sg`
- ID: `sg-0211c3b97c34409a4`
- Inbound: SSH (22), HTTP (80), HTTPS (443), PostgreSQL (5432, VPC only)
- Outbound: All traffic allowed

## Files Created

### EC2 Setup Scripts
1. **`scripts/ec2-setup.sh`** - Initial EC2 configuration
   - Installs Docker, Docker Compose, Certbot
   - Configures fail2ban, UFW firewall, log rotation
   - Creates systemd service for auto-start
   - Generates `.env` file with secure secrets

2. **`scripts/deploy.sh`** - Main deployment script
   - Syncs project files to EC2 via rsync + SSH
   - Generates SSL certificate via Certbot
   - Starts Docker containers
   - Performs health check verification

3. **`scripts/certbot-renew.sh`** - SSL certificate renewal
   - Runs automatic Let's Encrypt renewal
   - Updates Nginx with new certificates
   - Scheduled daily at 3 AM (cron)

4. **`scripts/backup-db.sh`** - Database backup
   - Creates daily PostgreSQL dumps
   - Compresses backups (.sql.gz)
   - Retains last 30 days
   - Scheduled daily at 2 AM (cron)

5. **`scripts/restore-db.sh`** - Database restoration
   - Restores from compressed SQL dumps
   - Interactive confirmation (safety check)
   - Drops and recreates database

6. **`scripts/setup-cron.sh`** - Cron job configuration
   - SSL renewal: Daily 3 AM
   - Database backup: Daily 2 AM
   - Health checks: Every 5 minutes
   - Container health: Every 10 minutes

### Nginx Configuration
7. **`nginx/conf.d/hotelshift.conf`** - Updated with domain
   - HTTP → HTTPS redirect
   - SSL/TLS configuration
   - Security headers (HSTS, CSP, etc.)
   - Rate limiting (30r/m general, 5r/m login)
   - API reverse proxy (backend:4000)
   - Frontend reverse proxy (frontend:3000)

### Documentation
8. **`docs/DEPLOYMENT.md`** - Complete deployment guide
   - Quick start instructions
   - Useful commands (Docker, database, SSL)
   - Troubleshooting steps
   - Security recommendations
   - Performance tuning
   - Disaster recovery procedures

9. **`docs/SECURITY_GROUP.md`** - AWS security group rules
   - Inbound/outbound rules table
   - AWS CLI commands
   - Current configuration reference

10. **`.env.example`** - Updated with domain
    - `ALLOWED_ORIGINS=https://hotelshift.18.222.205.234.sslip.io`
    - `NEXT_PUBLIC_API_URL=https://hotelshift.18.222.205.234.sslip.io`

## Deployment Steps

### Step 1: Connect to EC2
```bash
ssh -i /Users/yash/Downloads/hotelshiftpro-texas-mbp-yash.pem ubuntu@18.222.205.234
```

### Step 2: Run Setup Script (if using user data)
```bash
# Already done if launched with user data script, otherwise:
cd /opt/hotelshift-pro
bash scripts/ec2-setup.sh
```

### Step 3: Deploy Application
```bash
cd /Users/yash/Downloads/hotelshift-pro
bash scripts/deploy.sh
```

### Step 4: Verify Deployment
```bash
# Check services running
docker-compose ps

# View logs
docker-compose logs -f

# Test health endpoint
curl https://hotelshift.18.222.205.234.sslip.io/health
```

## Automated Tasks

All automated via cron jobs (set by `setup-cron.sh`):

| Task | Schedule | Log File |
|------|----------|----------|
| SSL Certificate Renewal | Daily 3 AM | `logs/certbot-renew.log` |
| Database Backup | Daily 2 AM | `logs/backup.log` |
| Health Checks | Every 5 min | `logs/health-check.log` |
| Container Restart | Every 10 min | `logs/restart.log` |

## Accessing the Application

- **Frontend**: https://hotelshift.18.222.205.234.sslip.io
- **API**: https://hotelshift.18.222.205.234.sslip.io/api
- **Health**: https://hotelshift.18.222.205.234.sslip.io/health

## Security Features

✅ **SSL/TLS** - Let's Encrypt (auto-renewing)  
✅ **Firewall** - UFW with strict rules  
✅ **Intrusion Detection** - fail2ban active  
✅ **Rate Limiting** - Nginx (30r/m general, 5r/m login)  
✅ **Log Rotation** - Daily with 14-day retention  
✅ **HTTPS Only** - HTTP redirects to HTTPS  
✅ **Security Headers** - HSTS, CSP, X-Frame-Options, etc.  
✅ **Non-root Containers** - All services run as unprivileged users  
✅ **Docker Secrets** - Sensitive data in .env (not in code)  

## Monitoring & Alerts

Key commands for monitoring:

```bash
# System resources
htop

# Docker container stats
docker stats

# View recent logs
docker-compose logs --tail=50 backend
docker-compose logs --tail=50 frontend
docker-compose logs --tail=50 postgres

# Check SSL certificate expiry
sudo certbot certificates

# Check disk usage
df -h /opt/hotelshift-pro
```

## Troubleshooting

Common issues and solutions:

**Containers won't start**
```bash
docker-compose down
docker-compose up -d
docker-compose logs
```

**SSL certificate issues**
```bash
sudo certbot certificates
sudo certbot renew --dry-run
```

**Database connection errors**
```bash
docker exec hotelshift_postgres psql -U hotelshift_user -d hotelshift -c "SELECT 1"
```

**Disk space low**
```bash
docker system prune -a
find /opt/hotelshift-pro/backups -mtime +30 -delete
```

## Next Steps

→ **PHASE 8**: CI/CD Pipeline (GitHub Actions)  
→ **PHASE 9**: Additional deployment scripts  
→ **PHASE 10**: Monitoring & backups verification  
→ **PHASE 11**: Pre-deployment checklist  
→ **PHASE 12**: Post-deployment testing

## Files Summary

**Total files created in Phase 7**: 10
- 6 Bash scripts (ec2-setup, deploy, certbot-renew, backup-db, restore-db, setup-cron)
- 2 Configuration files (Nginx, .env.example)
- 2 Documentation files (DEPLOYMENT.md, SECURITY_GROUP.md)

**Status**: ✅ READY FOR DEPLOYMENT

---

**Deployment Date**: March 1, 2026  
**Domain**: hotelshift.18.222.205.234.sslip.io  
**EC2 IP**: 18.222.205.234  
**SSH Access**: `ssh -i hotelshiftpro-texas-mbp-yash.pem ubuntu@18.222.205.234`
