FROM node:16.18.1

RUN mkdir -p /usr/app && chown node:node /usr/app
WORKDIR /usr/app

USER node

COPY --chown=node:node ./package*.json ./
RUN npm install

COPY --chown=node:node . .


EXPOSE 5000

CMD ["npm","start"]
