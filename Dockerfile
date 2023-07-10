FROM node:18-alpine AS build-env

RUN mkdir  -p /app

WORKDIR /app

COPY *.json /app

RUN npm install 

COPY . /app

RUN npm run build

FROM nginx:1.17.1-alpine

COPY --from=build-env /app/dist/web-prodesa usr/share/nginx/html
