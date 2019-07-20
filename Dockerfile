FROM node:10-alpine as build

# Install server dependencies
WORKDIR /server
COPY package*.json .
COPY src/server.js src/
RUN npm install

# Install app dependencies
WORKDIR /ui
COPY src/ui .
RUN npm install
RUN npm run prod

# --- MAIN IMAGE ---
FROM node:10-alpine

WORKDIR /usr/app
COPY --from=build /server .
COPY --from=build /ui/public src/ui/public

EXPOSE 4000

CMD ["npm", "run", "server"]
