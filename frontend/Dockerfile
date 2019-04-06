FROM node:alpine

RUN mkdir -p /app
RUN apk add --no-cache libc6-compat
ENV NODE_ENV production
ENV PORT 3001
EXPOSE 3001

WORKDIR /app

COPY package*.json /app/
RUN npm install

COPY . /app
RUN npm run build

CMD [ "npm", "run", "dev", "--", "-p", "3001" ]