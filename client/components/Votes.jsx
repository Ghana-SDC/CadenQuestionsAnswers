import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  padding-left: 22px;
  width: 50px;
  float: left;
  border-right: 1px solid lightgray;
`
const Li = styled.li`
  font-family: verdana,arial,helvetica,sans-serif;
  list-style: none;
  font-size: 13px;
  padding-left: 12px;
`

const CaretLi = styled.li`
  list-style: none;
  font-size: 16px;
  padding-left: 4px;
  color: gray;
`

const VotesLi = styled.li`
  font-family: verdana,arial,helvetica,sans-serif;
  font-size: 13px;
  list-style: none;
  padding-top: 2px;
`

const I = styled.i`
  margin-top: -8px;
  font-size: 40px;
`

const Votes = (props) => {
  return (
    <Ul>
      <CaretLi style={{'color': props.renderColor('up')}} onClick={props.renderUpvote}>
        <I className="fas fa-caret-up"></I>
      </CaretLi>
      <Li>
        {props.votes || 0}
      </Li>
      <VotesLi>
        votes
      </VotesLi>
      <CaretLi style={{'color': props.renderColor('down')}} onClick={props.renderDownvote}>
        <I className="fas fa-caret-down"></I>
      </CaretLi>
    </Ul>
  )
}

export default Votes;