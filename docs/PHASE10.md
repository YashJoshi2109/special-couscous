# PHASE 10: Monitoring & Backups ✅ COMPLETE

## Overview
Phase 10 ensures proper monitoring and backup strategies for production reliability.

## Backup Strategy

### Automatic Daily Backups
**Time**: 2:00 AM (via cron job)  
**Command**: `scripts/backup-db.sh`  
**Location**: `/opt/hotelshift-pro/backups/`  
**Format**: `hotelshift_YYYYMMDD_HHMMSS.sql.gz`  
**Retention**: 30 days (auto-cleanup)

**Example backup files**:
```
backups/
├── hotelshift_20260228_020000.sql.gz  (50MB)
├── hotelshift_20260227_020000.sql.gz  (48MB)
├── hotelshift_20260226_020000.sql.gz  (49MB)
└── hotelshift_20260225_020000.sql.gz  (51MB)
```

### Manual Backup
```bash
cd /opt/hotelshift-pro
./scripts/backup-db.sh
```

### Restore from Backup
```bash
cd /opt/hotelshift-pro

# List available backups
ls -lh backups/

# Restore
./scripts/restore-db.sh backups/hotelshift_20260228_020000.sql.gz
```

## Monitoring Layers

### Level 1: Container Health Checks (Automated)
- **Frequency**: Every 30 seconds
- **What**: Checks `/health` endpoint on backend
- **Action**: Auto-restarts if unhealthy
- **Managed by**: Docker Compose health checks

```yaml
healthcheck:
  test: ['CMD', 'curl', '-f', 'http://localhost:4000/health']
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 30s
```

### Level 2: Cron Health Checks (Automated)
- **Frequency**: Every 5 minutes
- **What**: HTTPS health check
- **Log**: `/opt/hotelshift-pro/logs/health-check.log`
- **Action**: Log failures (manual review)

```bash
*/5 * * * * ubuntu curl -sf https://hotelshift.18.222.205.234.sslip.io/health
```

### Level 3: Container Restart Monitor (Automated)
- **Frequency**: Every 10 minutes
- **What**: Checks if containers are running
- **Action**: Auto-restart if down
- **Log**: `/opt/hotelshift-pro/logs/restart.log`

```bash
*/10 * * * * ubuntu cd /opt/hotelshift-pro && \
  docker-compose ps | grep -q "Up" || \
  (docker-compose up -d && echo "Restarted at $(date)")
```

### Level 4: Manual Monitoring (On-demand)
**Command**: `./scripts/monitor.sh`

**Displays**:
- CPU, Memory, Disk usage
- Container status
- Service health
- SSL expiry
- Active connections
- Recent errors

### Level 5: Log Monitoring (On-demand)
**Command**: `./scripts/logs.sh 100`

**Logs from**:
- PostgreSQL
- Backend API
- Frontend
- Nginx

## Alerting Strategy

### Email Alerts (Optional Setup)
Configure AWS SES or SendGrid for notifications:

```bash
# Add to crontab
0 */6 * * * ubuntu bash /opt/hotelshift-pro/scripts/health-check.sh && \
  mail -s "HotelShift Health: OK" admin@hotel.local || \
  mail -s "HotelShift Health: FAILED" admin@hotel.local
```

### Log Aggregation (Optional)
Forward logs to CloudWatch or ELK Stack:

```bash
# Add to systemd or container environment
LOGS_PATH=/opt/hotelshift-pro/logs
BACKEND_LOG=$LOGS_PATH/backend.log
NGINX_LOG=$LOGS_PATH/nginx/access.log
```

## Monitoring Checklist

### Daily (Automated)
- ✅ Container health checks (every 30s)
- ✅ Health endpoint tests (every 5min)
- ✅ Container restart attempts (every 10min)
- ✅ Database backups (2 AM)
- ✅ SSL renewal check (3 AM)

### Weekly (Manual Review)
- [ ] Check backup logs: `tail -f logs/backup.log`
- [ ] Review SSL renewal: `sudo certbot certificates`
- [ ] Check disk usage: `df -h`
- [ ] Review error logs: `./scripts/logs.sh 200`
- [ ] Monitor dashboard: `./scripts/monitor.sh`

### Monthly (Manual Review)
- [ ] Review system updates: `sudo apt list --upgradable`
- [ ] Check certificate validity: `sudo certbot certificates`
- [ ] Cleanup old backups: `find backups -mtime +30 -delete`
- [ ] Performance review: Docker stats
- [ ] Security audit: Review firewall rules

### Before Production
- [ ] Test database restore: `./scripts/restore-db.sh`
- [ ] Test rollback: `./scripts/rollback.sh 1`
- [ ] Verify SSL: `curl -I https://hotelshift.18.222.205.234.sslip.io`
- [ ] Load test: Simulate 100+ concurrent users
- [ ] Penetration test: Check OWASP Top 10

## Key Metrics to Monitor

| Metric | Healthy | Warning | Critical |
|--------|---------|---------|----------|
| Backend CPU | <30% | 30-50% | >50% |
| Backend Memory | <256MB | 256-512MB | >512MB |
| Database CPU | <20% | 20-40% | >40% |
| Database Memory | <256MB | 256-512MB | >512MB |
| Disk Usage | <60% | 60-80% | >80% |
| Response Time | <200ms | 200-500ms | >500ms |
| Error Rate | <0.1% | 0.1-1% | >1% |
| Uptime | >99.9% | 99-99.9% | <99% |

## Sample Monitoring Output

```
🏥 SERVICE HEALTH
───────────────────────────────────────────────────────────
✅ Backend API: Healthy (response: 25ms)
✅ Frontend: Healthy (response: 45ms)
✅ PostgreSQL: Healthy (15 connections)
✅ Nginx: Healthy
✅ SSL Certificate: Valid until Mar 30, 2026

📊 SYSTEM RESOURCES
───────────────────────────────────────────────────────────
CPU Usage: 12.3%
Memory Usage: 1.8GB / 4GB (45%)
Disk Usage: 32% (2.1GB / 6.5GB)

📡 ACTIVE CONNECTIONS
───────────────────────────────────────────────────────────
HTTP Requests/min: 45
Database Connections: 8
SSL Sessions: 3

📝 RECENT EVENTS
───────────────────────────────────────────────────────────
[2026-03-01 20:30] Backup completed (2.1MB)
[2026-03-01 15:00] Nginx reloaded
[2026-03-01 12:45] Health check: PASS
```

## Disaster Recovery Plan

### Scenario 1: Database Corruption
```bash
# 1. Stop application
docker-compose down

# 2. Restore from backup
./scripts/restore-db.sh backups/hotelshift_20260228_020000.sql.gz

# 3. Verify restoration
docker exec hotelshift_postgres psql -U hotelshift_user -d hotelshift \
  -c "SELECT COUNT(*) FROM employees;"

# 4. Restart application
docker-compose up -d

# 5. Health check
curl https://hotelshift.18.222.205.234.sslip.io/health
```

### Scenario 2: Backend Crash
```bash
# 1. Check logs
docker-compose logs backend

# 2. Rebuild image
docker build -t hotelshift-backend:latest backend/

# 3. Update docker-compose.yml with new image
# 4. Restart
docker-compose restart backend

# 5. Verify
curl https://hotelshift.18.222.205.234.sslip.io/api/health
```

### Scenario 3: SSL Certificate Expiry
```bash
# Check expiry
sudo certbot certificates

# Force renewal
sudo certbot renew --force-renewal

# Copy to nginx
sudo cp /etc/letsencrypt/live/hotelshift.18.222.205.234.sslip.io/fullchain.pem \
  /opt/hotelshift-pro/nginx/ssl/cert.pem

# Reload
docker exec hotelshift_nginx nginx -s reload
```

### Scenario 4: Disk Space Full
```bash
# Check usage
df -h

# Options:
# 1. Cleanup old backups
find /opt/hotelshift-pro/backups -mtime +7 -delete

# 2. Cleanup Docker images
docker image prune -a -f

# 3. Cleanup Docker volumes
docker volume prune -f

# 4. Expand EBS volume (AWS)
```

## Backup Verification

### Verify Backup Integrity
```bash
# List backups
ls -lh backups/

# Check backup size
du -h backups/hotelshift_*.sql.gz

# Test restore on test database
docker exec hotelshift_postgres psql -U hotelshift_user -c \
  "CREATE DATABASE test_restore;"
gunzip -c backups/hotelshift_20260228_020000.sql.gz | \
  docker exec -i hotelshift_postgres psql -U hotelshift_user -d test_restore
```

### Schedule Backup Testing
```bash
# Add to monthly cron job
0 3 1 * * ubuntu cd /opt/hotelshift-pro && \
  ./scripts/backup-db.sh && \
  ./scripts/restore-db.sh backups/hotelshift_*.sql.gz
```

## CloudWatch Integration (Optional)

```bash
# Install CloudWatch agent
wget https://s3.amazonaws.com/amazoncloudwatch-agent/ubuntu/amd64/latest/amazon-cloudwatch-agent.deb
sudo dpkg -i -E ./amazon-cloudwatch-agent.deb

# Configure metrics
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl \
  -a query -m ec2 -c file:/opt/aws/amazon-cloudwatch-agent/etc/amazon-cloudwatch-agent.json

# View metrics
aws cloudwatch get-metric-statistics \
  --namespace AWS/EC2 \
  --metric-name CPUUtilization \
  --dimensions Name=InstanceId,Value=i-040a6435a10782edb \
  --statistics Average \
  --start-time 2026-03-01T00:00:00Z \
  --end-time 2026-03-02T00:00:00Z \
  --period 3600
```

## Next Steps

→ **PHASE 11**: Pre-deployment checklist  
→ **PHASE 12**: Post-deployment testing

---

**Status**: ✅ MONITORING & BACKUPS COMPLETE

**Backup Schedule**: Daily 2 AM  
**Backup Retention**: 30 days  
**Health Checks**: Every 5 minutes  
**Dashboard**: `./scripts/monitor.sh`
