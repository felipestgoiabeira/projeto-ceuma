FROM node:alpine

RUN mkdir -p /src/app/project-server
WORKDIR /the/workdir/path

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]