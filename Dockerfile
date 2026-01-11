# Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build TypeScript app
RUN npm run build

# Start the app
CMD ["node", "dist/main.js"]
