FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Disable Next.js anonymous telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source and build
COPY . .
RUN node -r ts-node/register tools/generate_drizzle_json.js
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Disable Next.js anonymous telemetry at runtime
ENV NEXT_TELEMETRY_DISABLED=1

# Enable pnpm for runtime scripts
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install dependencies (include devDeps so drizzle-kit is available at runtime)
COPY package.json pnpm-lock.yaml ./

# Copy built app and public assets
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/tools ./tools
COPY --from=builder /usr/src/app/sql ./sql
COPY --from=builder /usr/src/app/drizzle.config.json ./drizzle.config.json

EXPOSE 3000
# Start Next (migrations are run by the `migrator` service in Docker Compose)
CMD ["sh", "-lc", "pnpm start"]
