FROM node:17-alpine

RUN npm i -g nodemon

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 3001

CMD ["npm", "run", "dev"]
