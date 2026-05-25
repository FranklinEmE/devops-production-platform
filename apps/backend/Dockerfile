FROM node:20-alpine

WORKDIR /app

RUN apk update && apk upgrade

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
