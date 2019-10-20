FROM node:alpine

RUN mkdir -p /src/app/project-client
WORKDIR /the/workdir/path

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]