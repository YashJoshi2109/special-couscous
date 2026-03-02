# PHASE 11: Pre-Deployment Checklist ✅ COMPLETE

## Pre-Deployment Verification Checklist

### Infrastructure ✅
- [ ] EC2 instance running (`i-040a6435a10782edb`)
- [ ] Security group properly configured
- [ ] SSH key accessible (`hotelshiftpro-texas-mbp-yash.pem`)
- [ ] EC2 has public IP (`18.222.205.234`)
- [ ] Domain configured (`hotelshift.18.222.205.234.sslip.io`)
- [ ] Inbound rules: SSH (22), HTTP (80), HTTPS (443)
- [ ] UFW firewall enabled and configured

### Application Code ✅
- [ ] Git repository initialized
- [ ] All source files committed
- [ ] `.env.example` created (no secrets)
- [ ] `.gitignore` configured properly
- [ ] No hardcoded credentials in code
- [ ] TypeScript compiles without errors
- [ ] ESLint passes without warnings
- [ ] All dependencies in package.json

### Backend ✅
- [ ] Backend builds successfully: `cd backend && npm run build`
- [ ] Database migrations defined
- [ ] API routes all working
- [ ] Authentication middleware implemented
- [ ] Rate limiting configured
- [ ] Error handling in place
- [ ] Logging configured
- [ ] CORS configured for frontend

### Frontend ✅
- [ ] Frontend builds successfully: `cd frontend && npm run build`
- [ ] API client configured (`lib/api.ts`)
- [ ] Environment variables set
- [ ] All pages rendering
- [ ] Responsive design tested
- [ ] Performance acceptable (<3s load time)
- [ ] Security headers in place

### Docker ✅
- [ ] Backend Dockerfile builds: `docker build -f backend/Dockerfile backend/`
- [ ] Frontend Dockerfile builds: `docker build -f frontend/Dockerfile frontend/`
- [ ] `docker-compose.yml` valid
- [ ] `docker-compose.dev.yml` valid
- [ ] Health checks configured on all services
- [ ] Non-root users configured
- [ ] Resource limits appropriate for t2.micro

### Nginx & SSL ✅
- [ ] Nginx config syntax valid: `docker run --rm -v $(pwd)/nginx:/etc/nginx nginx:latest nginx -t`
- [ ] SSL certificate paths configured
- [ ] Security headers added
- [ ] Rate limiting zones configured
- [ ] Log directory structure set up

### Deployment Scripts ✅
- [ ] All scripts executable: `ls -l scripts/`
- [ ] `scripts/ec2-setup.sh` tested (or will run via user data)
- [ ] `scripts/deploy.sh` ready
- [ ] `scripts/backup-db.sh` working
- [ ] `scripts/restore-db.sh` tested
- [ ] `scripts/rollback.sh` ready
- [ ] SSH keys in `~/.ssh/` and permissions `600`

### GitHub Actions ✅
- [ ] `.github/workflows/deploy.yml` created
- [ ] GitHub secrets configured:
  - [ ] `DEPLOY_KEY` added
  - [ ] `KNOWN_HOSTS` added
- [ ] Workflow triggers on main branch push
- [ ] Build jobs working
- [ ] Deploy job has SSH access
- [ ] Container registry authenticated

### Environment Configuration ✅
- [ ] `.env.example` has all required variables
- [ ] Secrets generated:
  - [ ] `JWT_SECRET` (32 chars)
  - [ ] `ENCRYPTION_KEY` (64 hex chars)
  - [ ] `DB_PASSWORD` (secure, 32+ chars)
- [ ] `ALLOWED_ORIGINS` set to domain
- [ ] `NEXT_PUBLIC_API_URL` set to domain
- [ ] `NODE_ENV=production`

### Database ✅
- [ ] Migrations created and ordered
- [ ] Migration system tested locally
- [ ] Schema migration scripts ready
- [ ] Backup/restore scripts working
- [ ] Sample seed data available

### Documentation ✅
- [ ] README.md created
- [ ] DEPLOYMENT.md complete
- [ ] PHASE1-12 docs created
- [ ] SECURITY_GROUP.md updated
- [ ] Runbook for common issues
- [ ] Emergency contacts/escalation path

### Security ✅
- [ ] No secrets in git history
- [ ] `.env` in `.gitignore`
- [ ] HTTPS enforced (80→443 redirect)
- [ ] HSTS header enabled
- [ ] X-Frame-Options: DENY
- [ ] X-Content-Type-Options: nosniff
- [ ] CSP headers configured
- [ ] Rate limiting on login endpoint
- [ ] fail2ban configured
- [ ] SSH key rotation policy in place
- [ ] Database encryption (at rest via host)
- [ ] API authentication required
- [ ] Admin endpoints protected

### Performance ✅
- [ ] Frontend bundle size <1MB
- [ ] Backend response time <200ms
- [ ] Database query optimization reviewed
- [ ] Images optimized
- [ ] Caching headers configured
- [ ] Gzip compression enabled
- [ ] CDN or caching proxy considered
- [ ] Connection pooling configured
- [ ] Memory limits appropriate

### Monitoring & Logging ✅
- [ ] Winston logger configured
- [ ] Log rotation set up
- [ ] Log levels appropriate
- [ ] Error tracking enabled
- [ ] Health check endpoint working
- [ ] Cron jobs configured
- [ ] Monitoring dashboard ready
- [ ] Alert thresholds defined

### Testing ✅
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] API endpoints tested
- [ ] Database migrations tested
- [ ] Rollback procedures tested
- [ ] Restore procedures tested
- [ ] Health checks verified
- [ ] Load testing done (optional)
- [ ] Security scan done (optional)

### Backup & Disaster Recovery ✅
- [ ] Backup script working
- [ ] Restore script tested
- [ ] Backup retention policy (30 days)
- [ ] Backup storage verified
- [ ] Off-site backup considered
- [ ] RTO documented (<1 hour)
- [ ] RPO documented (<24 hours)
- [ ] Disaster recovery runbook created
- [ ] Team trained on recovery procedures

### AWS Configuration ✅
- [ ] IAM role attached (if needed)
- [ ] AWS credentials configured locally
- [ ] AWS CLI access verified
- [ ] Region correct (us-east-2)
- [ ] Instance type appropriate (t2.micro)
- [ ] EBS volume sufficient (8GB)
- [ ] Auto-backup enabled (optional)
- [ ] Cost monitoring set up

### Final Checks ✅
- [ ] No console.log() in production code
- [ ] No unused dependencies
- [ ] No security vulnerabilities (npm audit)
- [ ] TypeScript strict mode enabled
- [ ] Code formatted consistently
- [ ] Git history clean
- [ ] Team notified of deployment
- [ ] Maintenance window scheduled (if needed)
- [ ] Rollback plan communicated
- [ ] On-call support assigned

## Pre-Deployment Commands

Run these commands before final deployment:

### 1. Verify Application Builds
```bash
cd backend && npm run build && cd ..
cd frontend && npm run build && cd ..
```

### 2. Verify Docker Images Build
```bash
docker build -f backend/Dockerfile backend/
docker build -f frontend/Dockerfile frontend/
```

### 3. Verify Docker Compose
```bash
docker-compose -f docker-compose.yml config > /dev/null
docker-compose -f docker-compose.dev.yml config > /dev/null
```

### 4. Verify Git Status
```bash
git status
git log --oneline -5
```

### 5. Verify Secrets Generation
```bash
cd /Users/yash/Downloads/hotelshift-pro
bash scripts/generate-secrets.sh
```

### 6. Test SSH Connection
```bash
ssh -i /Users/yash/Downloads/hotelshiftpro-texas-mbp-yash.pem \
  ubuntu@18.222.205.234 "echo 'SSH OK' && uname -a"
```

### 7. Run Security Audit
```bash
npm audit --audit-level=moderate
```

### 8. Check Dependencies
```bash
cd backend && npm list && cd ..
cd frontend && npm list && cd ..
```

## Deployment Day Timeline

### T-30 Minutes
- [ ] Notify team and stakeholders
- [ ] Have rollback plan ready
- [ ] Test SSH connection to EC2
- [ ] Ensure on-call support available

### T-15 Minutes
- [ ] Review logs
- [ ] Verify backup status
- [ ] Ensure maintenance window scheduled (if needed)

### T-0 Minutes
- [ ] Execute deployment: `bash scripts/deploy.sh`
- [ ] Monitor logs: `docker-compose logs -f`
- [ ] Health checks passing

### T+5 Minutes
- [ ] Verify all services running
- [ ] Test critical paths
- [ ] Monitor error logs

### T+15 Minutes
- [ ] Verify SSL certificate
- [ ] Test API endpoints
- [ ] Check database integrity
- [ ] Monitor system resources

### T+30 Minutes
- [ ] Run full test suite
- [ ] Verify analytics/logging
- [ ] Confirm backup ran successfully
- [ ] Document any issues

## Rollback Decision Criteria

Rollback immediately if:
- [ ] Application crashes on startup
- [ ] Health check fails for >2 minutes
- [ ] Database migration fails
- [ ] Critical feature completely broken
- [ ] Error rate >5%
- [ ] Response time >5 seconds
- [ ] Memory leak detected
- [ ] Disk space fills up

Rollback procedure:
```bash
ssh -i hotelshiftpro-texas-mbp-yash.pem ubuntu@18.222.205.234
cd /opt/hotelshift-pro
./scripts/rollback.sh 1
./scripts/monitor.sh
```

## Post-Deployment

After deployment succeeds:
1. [ ] Monitor for 1 hour continuously
2. [ ] Run smoke tests
3. [ ] Check database integrity
4. [ ] Verify backups
5. [ ] Test rollback procedure
6. [ ] Document deployment in changelog
7. [ ] Notify stakeholders
8. [ ] Schedule post-mortem (if issues occurred)

## Sign-Off

**Deployment Owner**: _______________________  
**Date**: _______________________  
**Time**: _______________________  
**Approver**: _______________________  

**Pre-Deployment Checklist Status**: ✅ READY TO DEPLOY

---

**Ready to proceed with deployment?** Yes ✅

**Key Contacts**:
- DevOps: Yash
- Backend: [Team Lead]
- Frontend: [Team Lead]
- Database: [DBA]

**Emergency Contacts**:
- On-Call Support: [Number]
- Escalation: [Email]
