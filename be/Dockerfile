FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN ls -R

ENV PORT=5000
ENV MONGODB_URI=mongodb://mongodb:27017/products

EXPOSE 5000

CMD ["npm", "start", "seed"]
