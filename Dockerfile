# BUILD STAGE
FROM node:20.9.0 as builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# RUN STAGE
FROM node:alpine
COPY --from=builder /app/dist ./dist

EXPOSE 4000
CMD ["node", "dist/ng-blog/server/server.mjs"]
