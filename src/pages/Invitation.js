// @flow
import React from 'react';
import styled from 'styled-components';

import type { ContextRouter } from 'react-router-dom';

import Frame from '../components/Frame';
import Header from '../components/Header';
import MainWrapper from '../components/MainWrapper';

import * as constants from '../constants';

type State = {
  isFetching: bool,
}

export default class InvitationPage extends React.Component<ContextRouter, State> {
  state = {
    isFetching: false,
  }

  render = () => (
    <React.Fragment>
      <Header route={constants.INVITATION_ROUTE} />

      <MainWrapper>
        <Container>
          <Frame>
            <Body>
              <Label>
                Entrez votre code pour voir votre invitation
              </Label>

              <InputContainer>
                <Input type="text" required autoFocus />
                <Submit type="submit" value=">" />
              </InputContainer>
            </Body>
          </Frame>
        </Container>
      </MainWrapper>
    </React.Fragment>
  );
}

const Container = styled.div`
  max-width: 600px;
  margin: 0px auto;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Label = styled.div`
  color: #d0c5c5;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const InputContainer = styled.form`
  display: flex;
  align-items: center;
`;

const inputHeight = '40px';

const Input = styled.input`
  background-color: black;
  border: none;
  display: inline;
  color: white;
  font-family: Lato;
  letter-spacing: 5px;
  line-height: ${inputHeight};
  text-align: center;
  text-transform: uppercase;
  padding: 0px;
  width: 300px;
  height: ${inputHeight};
`;

const Submit = styled(Input)`
  cursor: pointer;
  font-size: 1.4em;
  line-height: ${inputHeight};
  width: ${inputHeight};
`;
