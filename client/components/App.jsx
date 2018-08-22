import React from "react";
import Search from "./Search.jsx";
import QuestionsAnswersVotesContainer from "./QuestionsAnswersVotesContainer.jsx";
import styled from "styled-components";
import axios from "axios";

const ContainerDiv = styled.div`
  border-bottom: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
  padding: 10px 20px 38px 100px;
`;
const H2 = styled.h2`
  padding-left: 10px;
  font-family: verdana, arial, helvetica, sans-serif;
  font-size: 20px;
`;

const Div = styled.div`
  padding-left: 10px;
  font-family: verdana, arial, helvetica, sans-serif;
  font-size: 12px;
  padding-bottom: 10px;
`;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      productId: 20,
      questions: [],
      answers: []
    };
    this.getQuestionData();
  }

  getQuestionData() {
    axios
      .get(`/sti?product_id=${this.state.productId}`)
      .then(data => {
        data.data.sort((a, b) => a.id - b.id);
        this.setState({
          questions: data.data
        });
      })
      .then(() => {
        axios
          .get(
            `/sti/answers?question_ids=${JSON.stringify(this.state.questions)}`
          )
          .then(data => {
            this.setState({
              answers: data.data
            });
          })
          .catch(err =>
            console.log("failed to get answer data in client", err)
          );
      })
      .catch(err => {
        console.log("failed to get question data in client", err);
      });
  }

  render() {
    if (this.state.questions.length > 0) {
      return (
        <ContainerDiv id="app-component">
          <H2>Customer questions & answers</H2>
          <Search />
          {this.state.questions.map((question, index) => (
            <QuestionsAnswersVotesContainer
              votes={question.votes}
              question={question}
              getQuestionData={this.getQuestionData.bind(this)}
              answers={this.state.answers}
              key={index}
            />
          ))}
        </ContainerDiv>
      );
    } else {
      return (
        <ContainerDiv id="app-component">
          <H2>Have a question?</H2>
          <Div>Find answers in product info, Q&As, reviews</Div>
          <Search noQuestions={true} />
        </ContainerDiv>
      );
    }
  }
}

export default App;
