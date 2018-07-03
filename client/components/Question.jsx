import React from "react";
import styled from "styled-components";

const Div = styled.div`
  padding-left: 100px;
  font-size: 14px;
  color: #277cd8;
`;

const Question = props => {
  return <Div>{props.question.text}</Div>;
};

export default Question;
