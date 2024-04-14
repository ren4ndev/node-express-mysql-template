# Development Stage
FROM node:20-alpine as development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Production Stage
FROM node:20-alpine as production

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=development /app/build ./build

CMD ["node", "build/index.js"]