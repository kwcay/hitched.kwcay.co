/**
 * Allows guests to mark themselves as attending or not.
 *
 * @flow
 */
import * as React from 'react';
import styled from 'styled-components';
import * as constants from '../constants';

type Props = {
  name: string,
  isAttending: bool,
}

export default (props: Props) => (
  <Wrapper>
    <Name>{props.name}</Name>
    <Button>Accept</Button>
    <Button>Decline</Button>
  </Wrapper>
);

// Supporting components
const Wrapper = styled.div`
  display: flex;
  margin: 0.7rem 0;
`;

const Name = styled.div`
  text-align: left;
  width: 12rem;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #acaca9;
  color: #acaca9;
  cursor: pointer;
  font-size: 0.8rem;
  text-transform: uppercase;
  transition: border-bottom-color ${constants.TRANSITION_TIME},
    color ${constants.TRANSITION_TIME};

  margin: 0 0.2rem;
  padding: 0;
  width: 5rem;

  &:hover {
    border-bottom-color: ${constants.ACTIVE_COLOUR};
    color: ${constants.ACTIVE_COLOUR};
  }
`;
