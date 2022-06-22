import React from 'react';
import PropType from 'prop-types';
import { Card, CardDeck } from '@edx/paragon';
// import photo2 from '../assets/photo2.png';
// import photo3 from '../assets/photo3.png';

import './index.scss';

const Cards = ({ card }) => (
  <>
    <div className="container-fluid">
      <CardDeck>
        <Card>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="label">{card.category}</label>
          <Card.ImageCap img src={card.image} />
          <Card.Header />
          <Card.Section className="header">
            <small className="text-muted">Accredited: {card.credits} points</small>
          </Card.Section>
          <Card.Section className="section">{card.description}</Card.Section>
          <Card.Footer className="footer">
            <small className="text-muted">BE-Key-{card.bekey}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  </>
);

Cards.defaultProps = {
  card: {
    id: 1,
    description: 'sqghueqygfnquzegfyafc sjfgsgfusfycgfg gchfgsfdfcchsg',
    category: 'sdfscf',
    credits: '2',
    bekey: '5',
    image: 'https://fv9-5.failiem.lv/thumb_show.php?i=4bss6bzk6&view',
  },
};

Cards.propTypes = {
  card: PropType.shape({
    id: PropType.number,
    description: PropType.string,
    credits: PropType.string,
    bekey: PropType.string,
    category: PropType.string,
    image: PropType.string,
  }),
};

export default Cards;
