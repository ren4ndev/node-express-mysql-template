# .......Development Stage.......
FROM node:20-alpine as development

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install -g npm@latest

RUN npm install

RUN npm install -g ts-node

COPY . .

RUN npm run build

# .......Production Stage.......
FROM node:20-alpine as production

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --only=production

COPY . .
# Copy the build artifacts from the development stage to the production stage
COPY --from=development /app/build ./build

CMD npm run prod