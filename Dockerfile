# Stage 1: Build the Nuxt app
FROM node:20.18.0-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the app
FROM node:20.18.0-alpine

WORKDIR /app

COPY --from=builder /app/.output .output
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json .

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
