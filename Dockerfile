FROM node:10

WORKDIR /Users/colemichaels/Desktop/SDC\ project/CadenQuestionsAnswers

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3227

CMD ["npm", "start"]