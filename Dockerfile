FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./.next ./next

ENV PORT 3000

EXPOSE $PORT

CMD ["npm", "run", "dev"]

