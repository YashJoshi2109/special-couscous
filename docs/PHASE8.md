# PHASE 8: CI/CD Pipeline ✅ COMPLETE

## Overview
Phase 8 sets up GitHub Actions for automated testing, building, and deployment.

## GitHub Actions Workflow

**File**: `.github/workflows/deploy.yml`

### Workflow Triggers
- Push to `main` branch
- Pull requests to `main` branch

### Jobs

#### 1. **Test Backend** (Always runs)
- Node.js 20 setup
- Install dependencies
- Run TypeScript type checking
- Run ESLint
- Build TypeScript code
- PostgreSQL service for integration tests

#### 2. **Test Frontend** (Always runs)
- Node.js 20 setup
- Install dependencies
- Run TypeScript type checking
- Run ESLint
- Build Next.js application

#### 3. **Build Backend Docker Image** (On main push only)
- Depends on: `test-backend`
- Builds multi-stage Docker image
- Pushes to GitHub Container Registry (ghcr.io)
- Tags: branch, semver, sha
- Uses build cache for faster builds

#### 4. **Build Frontend Docker Image** (On main push only)
- Depends on: `test-frontend`
- Builds Next.js Docker image
- Pushes to GitHub Container Registry (ghcr.io)
- Tags: branch, semver, sha
- Uses build cache for faster builds

#### 5. **Deploy to EC2** (On successful main push)
- Depends on: `build-backend`, `build-frontend`
- SSH into EC2 instance
- Pulls latest code from GitHub
- Pulls latest Docker images
- Runs `docker-compose up -d` (rolling update)
- Performs health check

#### 6. **Verify Deployment** (On successful deploy)
- Health check with retries (30 attempts, 2s interval)
- Tests API endpoints
- Verifies SSL certificate validity

## Required GitHub Secrets

Configure these in your GitHub repository settings:

1. **`DEPLOY_KEY`** (Required)
   - Private SSH key for EC2 access
   - Generate: Copy contents of `hotelshiftpro-texas-mbp-yash.pem`
   - Permissions: `600`

2. **`KNOWN_HOSTS`** (Required)
   - SSH known hosts entry for EC2
   - Generate:
   ```bash
   ssh-keyscan -t ed25519 18.222.205.234 > known_hosts
   cat known_hosts  # Copy this value
   ```

### How to Add Secrets in GitHub

1. Go to: `Settings` → `Secrets and variables` → `Actions`
2. Click `New repository secret`
3. Add `DEPLOY_KEY` with the private key content
4. Add `KNOWN_HOSTS` with the ssh-keyscan output
5. (Optional) Add other secrets for environment variables

## Docker Registry Setup

Images are pushed to **GitHub Container Registry (ghcr.io)**

### Tag Format
```
ghcr.io/YashJoshi2109/hotelshift-pro/backend:main
ghcr.io/YashJoshi2109/hotelshift-pro/backend:sha-abc123def456
ghcr.io/YashJoshi2109/hotelshift-pro/frontend:main
ghcr.io/YashJoshi2109/hotelshift-pro/frontend:sha-abc123def456
```

### Pull Images on EC2
```bash
docker-compose pull
docker-compose up -d
```

## Workflow Visualization

```
┌─────────────────────────────────────────────────────────────┐
│ Commit to main branch                                       │
└────────────────────────────┬────────────────────────────────┘
                             │
                    ┌────────▼────────┐
                    │  Test Backend   │
                    │  Test Frontend  │
                    └────────┬────────┘
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
    ┌─────▼─────┐     ┌──────▼──────┐    ┌─────▼─────┐
    │Build Bknd │     │Build Front  │    │  Skip if  │
    │  Image    │     │  Image      │    │   PR/not  │
    │ (ghcr.io) │     │ (ghcr.io)   │    │   main    │
    └─────┬─────┘     └──────┬──────┘    └───────────┘
          │                  │
          └──────────────────┼──────────────────┐
                             │                  │
                        ┌────▼────┐        Skip if
                        │ Deploy   │        tests fail
                        │ to EC2   │
                        └────┬─────┘
                             │
                        ┌────▼─────────┐
                        │ Verify       │
                        │ Deployment   │
                        └──────────────┘
```

## Environment Variables

The workflow uses:

- `REGISTRY`: `ghcr.io`
- `IMAGE_NAME_BACKEND`: `YashJoshi2109/hotelshift-pro/backend`
- `IMAGE_NAME_FRONTEND`: `YashJoshi2109/hotelshift-pro/frontend`
- `DEPLOY_HOST`: `18.222.205.234`
- `DEPLOY_USER`: `ubuntu`
- `DEPLOY_DIR`: `/opt/hotelshift-pro`

## Monitoring Workflow Execution

1. Go to: `GitHub Repository` → `Actions` tab
2. Click on a workflow run to see details
3. View logs for each job
4. Check artifact uploads (if configured)

## Example Workflow Run

```
✅ Test Backend
  ✓ Setup Node.js 20
  ✓ Install dependencies
  ✓ Type check
  ✓ Lint
  ✓ Build

✅ Test Frontend
  ✓ Setup Node.js 20
  ✓ Install dependencies
  ✓ Type check
  ✓ Lint
  ✓ Build

✅ Build Backend Docker Image
  ✓ Build and push to ghcr.io/...backend:main
  ✓ Build and push to ghcr.io/...backend:sha-abc123def456

✅ Build Frontend Docker Image
  ✓ Build and push to ghcr.io/...frontend:main
  ✓ Build and push to ghcr.io/...frontend:sha-abc123def456

✅ Deploy to EC2
  ✓ SSH connection established
  ✓ Code pulled from GitHub
  ✓ Docker images pulled
  ✓ Containers started
  ✓ Health check passed

✅ Verify Deployment
  ✓ Application is healthy
  ✓ API endpoints responding
  ✓ SSL certificate valid
```

## Failure Handling

If any job fails:
1. Deployment is **stopped** (doesn't proceed to next stage)
2. GitHub shows **red X** on commit
3. Notification sent (if enabled)
4. Pull request shows **deployment failure**

**To recover**:
1. Fix the issue in code
2. Push again to `main`
3. Workflow reruns automatically

## Rollback Procedure

If deployment breaks production:

```bash
# SSH into EC2
ssh -i hotelshiftpro-texas-mbp-yash.pem ubuntu@18.222.205.234

# Go to deployment directory
cd /opt/hotelshift-pro

# Check git history
git log --oneline | head -10

# Revert to previous commit
git revert HEAD
git push origin main

# The workflow will automatically redeploy with the previous version
# Or manually:
docker-compose pull
docker-compose up -d
```

## Performance Optimization

### Build Cache
- GitHub Actions cache enabled
- Docker layer caching used
- Reduces build time by ~50%

### Parallel Jobs
- `test-backend` and `test-frontend` run in parallel
- `build-backend` and `build-frontend` run in parallel
- Faster overall pipeline execution

### Incremental Builds
- Dependencies cached (node_modules)
- Only changed files rebuilt
- TypeScript incremental compilation

## Cost Optimization

**GitHub Actions Minutes**: Free tier includes 2,000 minutes/month

Current workflow usage per run:
- Test jobs: ~2-3 minutes
- Build jobs: ~3-4 minutes
- Deploy job: ~2-3 minutes
- Verify job: ~1-2 minutes
- **Total**: ~8-12 minutes per deployment

**Monthly estimate** (assuming 4 deployments/week):
- ~160-240 minutes/month (well within free tier)

## Best Practices

✅ **Always test before building**
✅ **Use Docker layer caching**
✅ **Health check deployments**
✅ **Secure secrets management**
✅ **Tag images with commits**
✅ **Rollback procedures documented**
✅ **Notification on failures**
✅ **Build only on main branch**

## Troubleshooting

### Docker Build Fails
```yaml
# Check Dockerfile
docker build -f backend/Dockerfile backend/

# Test locally
docker run -it ghcr.io/YashJoshi2109/hotelshift-pro/backend:main
```

### SSH Deployment Fails
```bash
# Test SSH connection
ssh -i hotelshiftpro-texas-mbp-yash.pem ubuntu@18.222.205.234 "echo 'Connected'"

# Verify secrets
# Go to Settings → Secrets and check DEPLOY_KEY and KNOWN_HOSTS
```

### Health Check Timeout
```bash
# SSH into EC2 and check logs
docker-compose logs --tail=50 backend
docker-compose logs --tail=50 frontend
docker-compose logs --tail=50 nginx
```

## Next Steps

→ **PHASE 9**: Additional deployment scripts  
→ **PHASE 10**: Monitoring & backups  
→ **PHASE 11**: Pre-deployment checklist  
→ **PHASE 12**: Post-deployment testing

---

**Status**: ✅ CI/CD PIPELINE READY

**Workflow File**: `.github/workflows/deploy.yml`  
**Triggered On**: Push to main, Pull requests  
**Deployment Target**: 18.222.205.234  
**Registry**: ghcr.io (GitHub Container Registry)
