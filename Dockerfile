FROM node:10

WORKDIR /cadenza/documents/FEC/CadenQuestionsAnswers

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3227

CMD ["npm", "start"]