import React from 'react';
import { Card, CardDeck } from '@edx/paragon';
import PropType from 'prop-types';
// import photo2 from '../assets/photo2.png';
// import photo3 from '../assets/photo3.png';

import './index.scss';

const Course = ({ card }) => (
  <div>
    <div className="card-container">
      <CardDeck>
        <Card>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="label">{card.category}</label>
          <Card.ImageCap img src={card.image} />
          <Card.Header />
          <Card.Section className="header">
            <small className="text-muted credits">Accredited: {card.credits} points</small>
          </Card.Section>
          <Card.Section className="section">{card.description}</Card.Section>
          <Card.Footer className="footer">
            <small className="text-muted">BE-Key-{card.bekey}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  </div>
);

Course.defaultProps = {
  card: {
    id: 1,
    description: 'Maecenas sapien orci, elementum ullamcorper ipsum ut, condimentum varius leo.condimentum varius leo. ',
    category: 'e-learning',
    credits: '2',
    bekey: '0932738 ',
    image: 'https://fv9-5.failiem.lv/thumb_show.php?i=4bss6bzk6&view',
  },
};

Course.propTypes = {
  card: PropType.shape({
    id: PropType.number,
    description: PropType.string,
    credits: PropType.string,
    bekey: PropType.string,
    category: PropType.string,
    image: PropType.string,
  }),
};

export default Course;
