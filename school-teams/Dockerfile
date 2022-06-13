FROM node:16-alpine

ENV APPLICATION_ROOT="/home/app"

RUN apk --no-cache add curl

RUN mkdir -p /home/app/node_modules && chown -R node:node /home/app

WORKDIR $APPLICATION_ROOT

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

EXPOSE 4000

CMD ["npm", "start"]