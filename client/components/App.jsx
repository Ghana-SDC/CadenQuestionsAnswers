import React from 'react';
import Search from './Search.jsx';
import QuestionsAnswersVotesContainer from './QuestionsAnswersVotesContainer.jsx';
import styled from 'styled-components';
import axios from 'axios';

const ContainerDiv = styled.div`
  border-bottom: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
  padding: 10px 20px 38px 100px;
`
const H2 = styled.h2`
  padding-left: 10px;
  font-family: verdana,arial,helvetica,sans-serif;
  font-size: 20px;
`

const Div = styled.div`
  padding-left: 10px;
  font-family: verdana,arial,helvetica,sans-serif;
  font-size: 12px;
  padding-bottom: 10px;
`

export default class App extends React.Component {
  constructor() {
    super()
    
    this.state = {
      productId: 74,
      questions: [],
      answers: [],
    }
    this.getQuestionData();
  }

  getQuestionData() {
    this.getAnswerData();
    axios.get('/questions/' + this.state.productId).then(data => {
      data.data.sort((a, b) => {
        return a.id - b.id
      })
      this.setState({
        productId: this.state.productId,
        questions: data.data,
        answers: this.state.answers
      })
    })
    .catch(err => {
      console.log('failed to get question data in client', err)
    })
  }

  getAnswerData() {
    axios.get('/answers').then(data => {
      this.setState({
        productId: this.state.productId,
        questions: this.state.questions,
        answers: data.data
      })
    })
    .catch(err => {
      console.log('failed to get answer data in client', err)
    })
  }

  render() {
    if (this.state.questions.length > 0) {
      return ( 
        <ContainerDiv id="app-component">
          <H2>Customer questions & answers</H2>
          <Search />
          {this.state.questions.map((question, index)=> <QuestionsAnswersVotesContainer votes={question.votes} question={question} getQuestionData={this.getQuestionData.bind(this)} answers={this.state.answers} key={index} />)}
        </ContainerDiv>
      )
    } else {
      return (
        <ContainerDiv id="app-component">
          <H2>Have a question?</H2>
          <Div>Find answers in product info, Q&As, reviews</Div>
          <Search noQuestions={true}/>
        </ContainerDiv>
      )
    }
  } 
}
