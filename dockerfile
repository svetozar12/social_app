FROM node:16

WORKDIR /rest_api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm i typescript -g

RUN tsc --build

EXPOSE 8080

CMD [ "npm", "run", "dev" ]
