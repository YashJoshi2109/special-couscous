# HotelShift Pro - Security Group Configuration
# AWS Security Group Rules for EC2 instance

**Instance ID:** i-040a6435a10782edb  
**Security Group:** sg-0211c3b97c34409a4 (hotel-shift-pro-sg)

## Inbound Rules

| Protocol | Port Range | Source | Purpose |
|----------|-----------|--------|---------|
| TCP | 22 | 0.0.0.0/0 | SSH Access |
| TCP | 80 | 0.0.0.0/0 | HTTP (redirects to HTTPS) |
| TCP | 443 | 0.0.0.0/0 | HTTPS (SSL/TLS) |
| TCP | 5432 | 172.31.0.0/16 | PostgreSQL (VPC only) |

## Outbound Rules

| Protocol | Port Range | Destination | Purpose |
|----------|-----------|-------------|---------|
| TCP | 443 | 0.0.0.0/0 | HTTPS (package downloads, API calls) |
| TCP | 80 | 0.0.0.0/0 | HTTP (package downloads) |
| TCP | 53 | 0.0.0.0/0 | DNS |
| UDP | 53 | 0.0.0.0/0 | DNS |

## AWS CLI Commands to Apply Rules

```bash
# Create security group (if needed)
aws ec2 create-security-group \
  --group-name hotel-shift-pro-sg \
  --description "HotelShift Pro Security Group" \
  --region us-east-2

# SSH
aws ec2 authorize-security-group-ingress \
  --group-id sg-0211c3b97c34409a4 \
  --protocol tcp --port 22 --cidr 0.0.0.0/0 \
  --region us-east-2

# HTTP
aws ec2 authorize-security-group-ingress \
  --group-id sg-0211c3b97c34409a4 \
  --protocol tcp --port 80 --cidr 0.0.0.0/0 \
  --region us-east-2

# HTTPS
aws ec2 authorize-security-group-ingress \
  --group-id sg-0211c3b97c34409a4 \
  --protocol tcp --port 443 --cidr 0.0.0.0/0 \
  --region us-east-2

# PostgreSQL (internal only)
aws ec2 authorize-security-group-ingress \
  --group-id sg-0211c3b97c34409a4 \
  --protocol tcp --port 5432 --cidr 172.31.0.0/16 \
  --region us-east-2
```

## Current Security Group Rules (via AWS CLI)

```bash
# View current rules
aws ec2 describe-security-groups \
  --group-ids sg-0211c3b97c34409a4 \
  --region us-east-2 \
  --query 'SecurityGroups[0].[IpPermissions,IpPermissionsEgress]' \
  --output json
```
