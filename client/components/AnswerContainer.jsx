import React from 'react';
import styled from 'styled-components';
import ExpandedAnswer from './ExpandedAnswer.jsx';

const Div = styled.div`
  padding-left: 100px;
  font-size: 14px;
`

const AuthorDiv = styled.div`
  color: gray;
  font-size: 14px;
`
const Button = styled.button`
  font-size: 14px;
  border: none;
  color: #277cd8;
`
const CollapseButton = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  display: block;
  font-size: 14px;
  background: white;
  border-radius: 4px;
`
const I = styled.i`
  font-size: 10px;
  color: black;
  margin: 10px 8px 0 -10px;
`

export default class AnswerContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      answers: this.props.answers,
      answer: this.props.answers[0],
      viewCount: 1,
      isExpanded: false
    }
  }

  renderAnswers() {
    const array = this.state.answers.slice(0, this.state.viewCount);
    return (
      array.map(answer => <ExpandedAnswer answer={answer}/>)
    )
  }

  expandAnswers() {
    this.state.viewCount = this.state.viewCount + 2;
    this.state.isExpanded = true;
    const newState = Object.assign({}, this.state)
    this.setState(newState)
  }

  preventNegatives() {
    if (this.state.answers.length - this.state.viewCount <= 0) {
      return;
    } else {
      return (
        <Button onClick={this.expandAnswers.bind(this)}>
        <I className="fas fa-angle-down"></I>
          See more answers ({this.state.answers.length - this.state.viewCount})
        </Button>
      )
    }
  }

  collapseAnswers() {
    this.state.viewCount = 1;
    this.state.isExpanded = false;
    const newState = Object.assign({}, this.state)
    this.setState(newState);    
  }
  

  render() {
    if (this.state.answers.length === 0) {
      return (
        <div>
        </div>
      )
    }
    if (this.state.answers.length === 1) {
      return (
        <Div>
          {this.renderAnswers()}
        </Div>
      )
    } else if (this.state.isExpanded === false) {
      return (
        <Div>
          {this.renderAnswers()}
          {this.preventNegatives()}
        </Div>
      )
    } else {
      return (
        <Div>
          {this.renderAnswers()}
          {this.preventNegatives()}
          <CollapseButton onClick={this.collapseAnswers.bind(this)}>
            Collapse all answers
          </CollapseButton>
        </Div>
      )
    }
  }
}