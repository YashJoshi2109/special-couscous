# HotelShift Pro - Deployment Guide

## EC2 Instance Details

- **Instance ID**: i-040a6435a10782edb
- **Instance Type**: t2.micro (2 vCPU, 1GB RAM)
- **Region**: us-east-2 (Ohio)
- **Public IP**: 18.222.205.234
- **Private IP**: 172.31.23.104
- **Domain**: hotelshift.18.222.205.234.sslip.io
- **OS**: Ubuntu 24.04 LTS
- **Key Pair**: hotelshiftpro-texas-mbp-yash.pem

## Quick Start

### 1. Connect to EC2

```bash
ssh -i /Users/yash/Downloads/hotelshiftpro-texas-mbp-yash.pem ubuntu@18.222.205.234
```

### 2. Initial EC2 Setup (if not done via user data)

```bash
cd /opt/hotelshift-pro
bash scripts/ec2-setup.sh
```

### 3. Deploy Application

```bash
cd /Users/yash/Downloads/hotelshift-pro
bash scripts/deploy.sh
```

### 4. Generate SSL Certificate

```bash
cd /opt/hotelshift-pro
sudo certbot certonly --standalone -d hotelshift.18.222.205.234.sslip.io
sudo cp /etc/letsencrypt/live/hotelshift.18.222.205.234.sslip.io/fullchain.pem nginx/ssl/cert.pem
sudo cp /etc/letsencrypt/live/hotelshift.18.222.205.234.sslip.io/privkey.pem nginx/ssl/key.pem
sudo chown ubuntu:ubuntu nginx/ssl/*.pem
```

### 5. Start Containers

```bash
cd /opt/hotelshift-pro
docker-compose up -d
docker-compose logs -f
```

### 6. Setup Cron Jobs

```bash
cd /opt/hotelshift-pro
sudo bash scripts/setup-cron.sh
```

## Access Application

- **Frontend**: https://hotelshift.18.222.205.234.sslip.io
- **API**: https://hotelshift.18.222.205.234.sslip.io/api
- **Health**: https://hotelshift.18.222.205.234.sslip.io/health

## Useful Commands

### Docker Management

```bash
# View logs
docker-compose logs backend
docker-compose logs frontend
docker-compose logs nginx
docker-compose logs postgres

# Restart services
docker-compose restart

# Stop all services
docker-compose down

# Full restart with volume reset (WARNING: Deletes data!)
docker-compose down -v && docker-compose up -d
```

### Database Management

```bash
# Access PostgreSQL
docker exec -it hotelshift_postgres psql -U hotelshift_user -d hotelshift

# Create backup
bash scripts/backup-db.sh

# Restore from backup
bash scripts/restore-db.sh backups/hotelshift_20260301_020000.sql.gz
```

### SSL Certificates

```bash
# Check certificate expiry
sudo certbot certificates

# Manual renewal
sudo certbot renew --dry-run

# View Nginx SSL logs
docker exec hotelshift_nginx cat /var/log/nginx/access.log | grep "ssl_protocol"
```

### Monitoring

```bash
# System resources
htop

# Docker container stats
docker stats

# Network connections
netstat -tulpn | grep LISTEN

# Disk usage
df -h

# SSL certificate renewal logs
tail -f /opt/hotelshift-pro/logs/certbot-renew.log

# Database backup logs
tail -f /opt/hotelshift-pro/logs/backup.log
```

## Troubleshooting

### Containers won't start

```bash
# Check logs
docker-compose logs

# Verify .env file exists
cat /opt/hotelshift-pro/.env

# Check ports are not in use
sudo netstat -tulpn | grep -E ':(80|443|3000|4000|5432)'
```

### SSL Certificate Issues

```bash
# Check certificate validity
sudo certbot certificates

# View Nginx SSL configuration
docker exec hotelshift_nginx cat /etc/nginx/conf.d/hotelshift.conf

# Test SSL configuration
docker exec hotelshift_nginx nginx -t
```

### Database Connection Issues

```bash
# Test PostgreSQL connection
docker exec hotelshift_postgres psql -U hotelshift_user -d hotelshift -c "SELECT 1"

# Check database logs
docker-compose logs postgres

# Verify database exists
docker exec hotelshift_postgres psql -U hotelshift_user -l
```

### High Disk Usage

```bash
# Check disk space
df -h

# Find largest directories
du -sh /opt/hotelshift-pro/*

# Clean up Docker
docker system prune -a

# Clean up old backups
find /opt/hotelshift-pro/backups -name "hotelshift_*.sql.gz" -mtime +30 -delete
```

## Security Recommendations

1. **Change default passwords** in `.env` file immediately after deployment
2. **Enable 2FA** for AWS account and rotate access keys regularly
3. **Review security group rules** and restrict SSH access to your IP
4. **Monitor logs** regularly for suspicious activity
5. **Keep system updated**: `sudo apt-get update && sudo apt-get upgrade -y`
6. **Backup database** daily (configured via cron)
7. **Test SSL** at: https://www.ssllabs.com/ssltest/
8. **Check headers** at: https://securityheaders.com/

## Performance Tuning

### PostgreSQL

```bash
# Access PostgreSQL settings
docker exec hotelshift_postgres psql -U hotelshift_user -d hotelshift -c "SHOW config_file"

# Adjust shared_buffers for t2.micro (256MB RAM allocation for DB)
# Docker: Update environment in docker-compose.yml
```

### Nginx Caching

Current caching enabled:
- Static assets: Browser cache (1 year)
- API responses: No cache (backend controlled)
- Gzip compression: Enabled

### Docker Resource Limits

Add to `docker-compose.yml` if needed:

```yaml
services:
  backend:
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
  postgres:
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 256M
```

## Disaster Recovery

### Full System Restore

1. **Backup current system**:
```bash
docker-compose down
cd /opt/hotelshift-pro && bash scripts/backup-db.sh
tar -czf hotelshift-config-backup.tar.gz docker-compose.yml nginx/ scripts/ .env
```

2. **Restore if needed**:
```bash
tar -xzf hotelshift-config-backup.tar.gz
docker-compose up -d
bash scripts/restore-db.sh backups/hotelshift_[DATE].sql.gz
```

## Monitoring & Alerts

Set up CloudWatch alarms (optional):
- CPU > 80%
- Memory > 90%
- Disk > 85%
- Database connections > 15
- HTTP errors > 100 per minute

## Regular Maintenance Schedule

| Task | Frequency | Command |
|------|-----------|---------|
| System updates | Monthly | `sudo apt-get upgrade` |
| Security patches | As released | `sudo apt-get update && upgrade` |
| Database backup | Daily (auto) | Via cron job |
| SSL renewal | Monthly (auto) | Via cron job |
| Log rotation | Daily (auto) | Via logrotate |
| Disk cleanup | Monthly | `docker system prune` |

---

**Last Updated**: March 1, 2026  
**Status**: Deployment Ready
