FROM node:12.12-alpine

WORKDIR /home/app
COPY package.json ./package.json
COPY package-lock.json ./package-lock.json
RUN npm install