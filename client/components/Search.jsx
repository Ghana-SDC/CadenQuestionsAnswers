import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  position: absolute;
  float: left;
  margin-top: 16px;
  margin-left: 16px;
  color: gray;
`
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 3px;
  width: 60%;
  height: 14px;
  font-size: 90%;
  padding-left: 30px;
`


const Search = (props) => {
  if (props.noQuestions) {
    return (
      <form>
        <Span><i class="fas fa-search"></i></Span>
        <Input type="text" maxlength="150"></Input>
      </form>
    )
  } else {
    return (
        <form>
          <Span><i class="fas fa-search"></i></Span>
          <Input type="text" maxlength="150" placeholder="Have a question? Search for answers"></Input>
        </form>
    )
  }
}

export default Search;