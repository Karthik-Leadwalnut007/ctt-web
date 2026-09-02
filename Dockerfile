# ---- Base ----
FROM node:20-alpine AS base
WORKDIR /app

# ---- Dependencies for production (runner) ----
FROM base AS deps
ENV NODE_ENV=production
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev --legacy-peer-deps

# ---- Builder stage (full deps for build) ----
FROM base AS builder
ENV NODE_ENV=production
COPY package.json package-lock.json* ./
RUN npm ci --include=dev --legacy-peer-deps
COPY . .
RUN npm run build

# ---- Runner stage ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup -g 1001 nodejs && adduser -u 1001 -G nodejs -s /bin/sh -D nextjs

COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

RUN chown -R nextjs:nodejs /app/.next

USER nextjs
EXPOSE 3000
CMD ["npm", "start"]