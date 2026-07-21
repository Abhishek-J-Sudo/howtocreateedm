# syntax=docker/dockerfile:1

# --- Build stage ---
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies (leverages layer caching)
COPY package*.json ./
RUN npm ci

# Build the static site
COPY . .
RUN npm run build

# --- Runtime stage ---
FROM nginx:1.27-alpine AS runtime

# SPA-aware nginx config (falls back to index.html for client-side routes)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Serve the built assets
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
