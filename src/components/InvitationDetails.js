/**
 * Displays the invitation details.
 *
 * @flow
 */
import * as React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import GuestAttendance from './GuestAttendance';
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
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <CardWrapper>
        <Card>
          <CardColumn>
            <Title>{t('invitation.ceremony')}</Title>

            <Text textAlign="center">
              {t('invitation.ceremonyDate').toUpperCase()}
            </Text>

            <Text textAlign="center">
              {t('invitation.ceremonyCocktail').toUpperCase()}
            </Text>

            <br />
            <Text textAlign="center">18H00 - 20H00</Text>
            <Text textAlign="center">{t('invitation.doorsOpenAt')}</Text>

            <br />
            <Text textAlign="center">12099 Camille-Tessier</Text>
            <Text textAlign="center">Montreal, QC H1E 6A2</Text>

            <Rsvp />

            {invite.guests.map(({ name, isAttendingCeremony }) => (
              <GuestAttendance name={name} isAttending={isAttendingCeremony} />
            ))}
          </CardColumn>
        </Card>
      </CardWrapper>

      {invite.hasReceptionInvite && (
        <CardWrapper>
          <Card>
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
          </Card>
        </CardWrapper>
      )}
    </React.Fragment>
  );
};

// Supporting components
const CardWrapper = styled.div`
  margin: auto;
  max-width: 480px;
`;
const RsvpText = styled.div`
  text-align: left;
  text-decoration: underline;
  margin-top: 10px;
`;

const Rsvp = () => (
  <RsvpText>
    RSVP
  </RsvpText>
);
