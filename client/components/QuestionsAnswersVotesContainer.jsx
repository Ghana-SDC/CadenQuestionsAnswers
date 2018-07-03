import React from "react";
import QuestionAnswersPair from "./QuestionAnswersPair.jsx";
import Votes from "./Votes.jsx";
import styled from "styled-components";
import axios from "axios";

const Div = styled.div`
  overflow: hidden;
  width: 100%;
`;

export default class QuestionsAnswersVotesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: this.props.votes,
      isUpvoted: false,
      isDownvoted: false
    };
  }

  postVote(id, direction) {
    let vote = this.state.votes;
    if (direction === "up") {
      vote++;
    }
    if (direction === "down" && vote >= 0) {
      vote--;
    }
    console.log(id, vote);
    axios
      .put(`/sti?votes=${vote}&id=${id}`)
      .then(() => {
        this.props.getQuestionData();
        if (direction === "up") {
          this.setState({
            votes: vote,
            isUpvoted: true,
            isDownvoted: false
          });
        } else if (direction === "down" && vote >= 0) {
          this.setState({
            votes: vote,
            isUpvoted: false,
            isDownvoted: true
          });
        }
        console.log("success put from client");
      })
      .catch(err => {
        console.log("failed to put from client", err);
      });
  }

  renderUpvote() {
    if (this.state.isUpvoted === false) {
      this.setState({
        votes: this.state.votes,
        isUpvoted: true,
        isDownvoted: false
      });
      this.postVote(this.props.question.id, "up");
    }
  }

  renderDownvote() {
    if (this.state.isDownvoted === false) {
      this.setState({
        votes: this.state.votes,
        isUpvoted: false,
        isDownvoted: true
      });
      this.postVote(this.props.question.id, "down");
    }
  }

  renderColor(direction) {
    if (direction === "up") {
      return this.state.isUpvoted ? "#e59f37" : "gray";
    } else if (direction === "down") {
      return this.state.isDownvoted ? "#e59f37" : "gray";
    }
  }

  render() {
    if (this.props.votes !== null) {
      return (
        <Div>
          <Votes
            votes={this.state.votes}
            renderUpvote={this.renderUpvote.bind(this)}
            renderDownvote={this.renderDownvote.bind(this)}
            renderColor={this.renderColor.bind(this)}
          />
          <QuestionAnswersPair
            question={this.props.question}
            answers={this.props.answers}
          />
        </Div>
      );
    } else {
      return <div />;
    }
  }
}
