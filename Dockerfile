FROM node

WORKDIR /app

COPY package.json .
RUN npm i

COPY . .

EXPOSE 5555

CMD ["npm", "run", "dev"]