import React from 'react';
import AnswerContainer from './AnswerContainer.jsx';
import styled from 'styled-components';

const Div = styled.div`
  float: left;
  font-weight: bold;
  font-size: 15px;
`

const AnswersDiv = styled.div`
  margin-bottom: 20px;
  font-family: arial,helvetica,sans-serif;
`


const AnswersList = (props) => {
  return (
    <AnswersDiv>
      <Div>
        Answer:
      </Div>
      <AnswerContainer answer={props.answers[0]} answers={props.answers}/>
    </AnswersDiv>
  )
}

export default AnswersList;