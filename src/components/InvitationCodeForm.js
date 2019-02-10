/**
 * Form to enter an invitation code.
 *
 * @flow
 */
import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import Frame from './Frame';

type Props = {

}

export default (props: Props) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Frame>
        <Body>
          <Label>
            {t('invitation.enterCode')}
          </Label>

          <InputContainer>
            <Input type="text" required autoFocus />
            <Submit type="submit" value=">" />
          </InputContainer>
        </Body>
      </Frame>
    </Wrapper>
  );
}

// Supporting components

const Wrapper = styled.div`
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
