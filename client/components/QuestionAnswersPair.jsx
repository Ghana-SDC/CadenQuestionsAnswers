import React from "react";
import Question from "./Question.jsx";
import AnswersList from "./AnswersList.jsx";
import styled from "styled-components";

const Div = styled.div`
  padding-left: 100px;
  margin-top: 20px
  font-family: arial,helvetica,sans-serif;
`;

const QuestionDiv = styled.div`
  margin-bottom: 20px;
`;

const QuestionText = styled.div`
  float: left;
  font-weight: bold;
  font-size: 15px;
`;
export default class QuestionAnswersPair extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: this.props.question,
      answer: this.props.answers[0]
    };
  }

  render() {
    return (
      <Div>
        <QuestionDiv>
          <QuestionText>Question:</QuestionText>
          <Question question={this.props.question} />
        </QuestionDiv>
        <AnswersList
          answers={this.props.answers.filter(
            answer => answer.question_id === this.props.question.id
          )}
        />
      </Div>
    );
  }
}
