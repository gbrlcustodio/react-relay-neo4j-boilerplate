FROM node:alpine

RUN mkdir -p /app
RUN apk add --no-cache libc6-compat
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000

WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY . /app

CMD [ "npm", "start" ]
