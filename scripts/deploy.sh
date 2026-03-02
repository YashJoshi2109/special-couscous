#!/bin/bash
# Deploy script
ssh -o StrictHostKeyChecking=no ubuntu@18.222.205.234 "mkdir -p /opt/hotelshift-pro"
rsync -avz --exclude="node_modules" --exclude=".git" --exclude=".next" ./ ubuntu@18.222.205.234:/opt/hotelshift-pro/
ssh ubuntu@18.222.205.234 \"cd /opt/hotelshift-pro && docker-compose up -d --build\"