FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source and build
COPY . .
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Enable pnpm for runtime scripts
RUN corepack enable && corepack prepare pnpm@latest --activate

# Install production deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Copy built app and public assets
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/next.config.js ./next.config.js
COPY --from=builder /usr/src/app/node_modules ./node_modules

EXPOSE 3000
CMD ["pnpm", "start"]
