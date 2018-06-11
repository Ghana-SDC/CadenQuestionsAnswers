import React from 'react';
import styled from 'styled-components';

const AuthorDiv = styled.div`
  color: gray;
  font-size: 14px;
`

const Div = styled.div`
  margin-bottom: 10px;
`

const ExpandedAnswer = (props) => {
  return (
    <Div>
      {props.answer.text}
      <AuthorDiv>
        By Amazon Customer on {props.answer.date}
      </AuthorDiv>
    </Div>
  )
}

export default ExpandedAnswer;