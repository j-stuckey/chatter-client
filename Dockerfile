FROM node:11

COPY . /usr/src/app

WORKDIR /usr/src/app

RUN npm install

RUN npm run build

EXPOSE 3000