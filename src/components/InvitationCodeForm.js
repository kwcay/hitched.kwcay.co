/**
 * Form to enter an invitation code.
 *
 * @flow
 */
import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Frame from './Frame';
import * as constants from '../constants';

type Props = {
  isLoading: bool,
  onSubmit: (code: string) => void,
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

          <InputContainer onSubmit={props.onSubmit}>
            <Input
              name="code"
              type="text"
              disabled={props.isLoading}
              required
              autoFocus
            />

            {!props.isLoading && (
              <Submit type="submit" value=">" />
            )}
          </InputContainer>
        </Body>
      </Frame>
    </Wrapper>
  );
}

// Supporting components

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 600px;
  margin: 0px auto;

  @media (min-width: ${constants.DEVICE_WIDTH_TABLET}) {
    // transform: rotate(0deg);
  }
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
  max-width: 90%;
`;

const inputHeight = '40px';

const Input = styled.input`
  background-color: black;
  border: none;
  display: inline-block;
  color: white;
  font-family: Lato;
  letter-spacing: 5px;
  line-height: ${inputHeight};
  text-align: center;
  text-transform: uppercase;

  flex-grow: 1;
  padding: 0px;
  height: ${inputHeight};
  max-width: 80%;

  &:disabled {
    color: gray;
  }
`;

const Submit = styled(Input)`
  cursor: pointer;
  font-size: 1.4em;
  line-height: ${inputHeight};
  width: ${inputHeight};
`;
