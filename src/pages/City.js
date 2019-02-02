// @flow
import React from 'react';

import type { ContextRouter } from 'react-router-dom';

import Header from '../components/Header';
import MainWrapper from '../components/MainWrapper';
import Card, {
  CardColumn,
  CardTitle as Title,
  CardSubTitle as SubTitle,
  CardText as Text,
} from '../components/Card';

import * as constants from '../constants';

export default (props: ContextRouter) => (
  <React.Fragment>
    <Header route={constants.CITY_ROUTE} />

    <MainWrapper>
      <Card>
        <CardColumn>
          <Title>Where to stay</Title>
          <SubTitle>Hotel Royal Versailles</SubTitle>
          <SubTitle>Best Western Hotel Europa</SubTitle>
          <SubTitle>Airbnb</SubTitle>

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

        <CardColumn>
          <Title>What to do</Title>

          <SubTitle>Old Port summer fun</SubTitle>
          <Text>
            Go enjoy Montreal&apos;s beautiful scenery at the Old Port and take
            part in the festivities, food trucks, and zip lining.
          </Text>

          <SubTitle>Mount-Royal</SubTitle>
          <Text>
            To get the best view of the city, you must go on top of Mount-Royal.
            Daytime is as beautiful as nighttime, but beware of racoons!
          </Text>

          <SubTitle>Botanical Garden</SubTitle>
          <Text>
            This is probably Jayne&apos;s favourite place in Montreal. You get
            to be surrounded by plants and sometimes butterflies.
          </Text>

          <Title>Uber</Title>
          <Text>
            Frank isn&apos;t a fan of Uber, but we still think it might be
            useful for you. Use the promo code JAYNEM943UE to request a ride.
            First riders get a free ride.
            <br />
            <br />

            Also, DON&apos;T DRINK AND DRIVE!
          </Text>
        </CardColumn>
      </Card>
    </MainWrapper>
  </React.Fragment>
);
