FROM node:10.16-alpine

RUN mkdir -p /srv/app/project-client
WORKDIR /srv/app/project-client

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 4000

CMD ["yarn", "start"]