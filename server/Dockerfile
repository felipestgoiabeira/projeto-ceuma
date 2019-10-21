FROM node:alpine

RUN mkdir -p /srv/app
WORKDIR /srv/app

COPY package.json ./
COPY package-lock.json ./

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps

RUN npm install

COPY . .

EXPOSE 8000


CMD ["npm", "run", "dev"]