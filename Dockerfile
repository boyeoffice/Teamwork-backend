# Pull node version 16
FROM node:gallium

RUN mkdir -p /usr/app && chown node:node /usr/app
WORKDIR /usr/app

USER node

COPY --chown=node:node ./package*.json ./
RUN npm install

COPY --chown=node:node . .


EXPOSE 3000

CMD ["npm","start"]
