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
      <FrameWrapper>
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
      </FrameWrapper>
    </Wrapper>
  );
}

// Supporting components

const Wrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

const FrameWrapper = styled.div`
  margin: auto;
  max-width: 550px;

  @media (min-width: ${constants.DEVICE_WIDTH_TABLET}) {
    max-width: 600px;
  }
`;


const Body = styled.div`
  box-sizing: border-box;
  display: inline-block;
  margin-top: 25%;
  padding: 10px;
  width: 100%;

  @media (min-width: ${constants.DEVICE_WIDTH_TABLET}) {
    margin-top: 20%;
  }
`;

const Label = styled.div`
  color: #d0c5c5;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const InputContainer = styled.form`
  display: inline-block;
  width: 100%;
`;

const inputHeight = '40px';

const Input = styled.input`
  appearance: none;
  background-color: black;
  border: none;
  border-radius: 0;
  display: inline-block;
  color: white;
  font-family: Lato;
  letter-spacing: 0.4rem;
  line-height: ${inputHeight};
  text-align: center;
  text-transform: uppercase;

  padding: 0px;
  height: ${inputHeight};
  max-width: 70%;
  vertical-align: middle;

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
