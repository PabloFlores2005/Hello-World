FROM node:22-alpine

ENV NODE_ENV=production
WORKDIR /app

# Install dependencies first to take advantage of layer caching
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application source
COPY index.js ./

# Run as the non-root user provided by the base image
USER node

EXPOSE 3000
CMD ["node", "index.js"]