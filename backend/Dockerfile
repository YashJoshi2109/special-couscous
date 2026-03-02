FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ── STAGE 2: Production ──
FROM node:20-alpine AS production
RUN apk add --no-cache dumb-init
WORKDIR /app
ENV NODE_ENV=production

# Create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S hotelshift -u 1001
RUN mkdir -p /var/log/hotelshift && chown -R hotelshift:nodejs /var/log/hotelshift

COPY --from=builder --chown=hotelshift:nodejs /app/dist ./dist
COPY --from=builder --chown=hotelshift:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=hotelshift:nodejs /app/package.json ./

USER hotelshift
EXPOSE 4000
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD node -e "require('http').get('http://localhost:4000/health', r => process.exit(r.statusCode === 200 ? 0 : 1))"

ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "dist/index.js"]
