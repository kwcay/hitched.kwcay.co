/**
 * Displays the invitation details.
 *
 * @flow
 */
import * as React from 'react';
import styled from 'styled-components';

import Card, {
  CardColumn,
  CardTitle as Title,
  CardSubTitle as SubTitle,
  CardText as Text,
} from '../components/Card';

import type { InvitationType } from '../constants';

type Props = {
  invite: InvitationType,
}

export default ({ invite }: Props) => {
  console.log(invite)

  return (
    <Card>
      <Wrapper>
        <CardColumnWrapper>
          <CardColumn>
            <Title>Ceremony &amp; Cocktail</Title>
            <Text>SEPTEMBER 7, 2019</Text>
            <Text>CEREMONY &amp; COCKTAIL</Text>
            <Text>19:00 - 21:00</Text>
          </CardColumn>
        </CardColumnWrapper>

        <CardColumnWrapper>
          {invite.hasReceptionInvite && (
            <CardColumn>
              <Title>Reception</Title>
              <SubTitle>Hotel Royal Versailles</SubTitle>
              <SubTitle>Ceremony &amp;s Cocktail</SubTitle>
              <SubTitle>7:00 P - 9:00 PM</SubTitle>

              <Title>Where to eat</Title>

              <SubTitle>Fourchette Antillaise</SubTitle>
              <Text>
                Frank&apos;s pick for the best Haitian food in town. They have
                amazing corrossol juices and of course Kola Couronne.
              </Text>

              <SubTitle>Le Nil Bleu</SubTitle>
              <Text>
                The best Ethiopian culinary experience in Montreal. One of
                Jayne&apos;s favourite date started there.
              </Text>

              <SubTitle>Agrikol</SubTitle>
              <Text>
                If you want great vibes and great food this is the place. But
                what&apos;s best about this place is the new Head Chef, Paul
                Toussaint.
              </Text>
            </CardColumn>
          )}
        </CardColumnWrapper>
      </Wrapper>
    </Card>
  );
};

// Supporting components
const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

const CardColumnWrapper = styled.div`
  flex-grow: 1;
`;
