// @flow
import React from 'react';

import type { ContextRouter } from 'react-router-dom';

import Header from '../components/Header';
import MainWrapper from '../components/MainWrapper';
import Card, {
  CardColumn,
  CardTitle as Title,
  CardText as Text
} from '../components/Card';

import * as constants from '../constants';

export default (props: ContextRouter) => (
  <React.Fragment>
    <Header route={constants.FACTS_ROUTE} />

    <MainWrapper>
      <Card>
        <CardColumn>
          <Title>How we met</Title>
          <Text>
            Jayne&apos;s dream was to meet the man of her dreams at the library.
            Although Frank didn&apos;t stumble upon the same book as Jayne, we
            still met at the Concordia library (4th floor, orange zone for those
            who know!).
          </Text>

          <Title>Our first date</Title>
          <Text>
            Our first date was actually the day after we first met. But it
            wasn&apos;t really a date. More like two people that wanted to get
            to know each other at a random place on Saint-Laurent boulevard,
            enjoying Frank&apos;s friend&apos;s music. Go Paul!
          </Text>

          <Title>How Frank locked Jayne up</Title>
          <Text>
            Approximately 10 days before departing on a 6-month trip back home
            to Ghana (a trip that ended up being 9 months long), Frank thought
            it would be a great idea to ask Jayne to officially be his woman.
            Way to secure your girl, Frank!
          </Text>
        </CardColumn>

        <CardColumn>
          <Title>Our usual dates</Title>
          <Text>
            We are low-key geeks that don&apos;t have better to do than work on
            coding and design projects on date nights. A couple that works
            together, stays together, right?
          </Text>

          <Title>Our engagement</Title>
          <Text>
            In total Frank fashion, he proposed to Jayne in a deserted field
            right before baiting her with the promise of a mille-feuille
            (Jayne&apos;s favourite pastry). The way to a girl's heart truly is
            through her stomach!
          </Text>

          <Title>Perfect for each other</Title>
          <Text>
            Frank is probably the only man that can handle Jayne&apos;s antics
            and Jayne is probably the only woman that can understand Frank&apos;
            (slow) rhythm. We&apos;re not perfect, but we&apos;re definitely
            perfect for each other!
          </Text>
        </CardColumn>
      </Card>
    </MainWrapper>
  </React.Fragment>
);
