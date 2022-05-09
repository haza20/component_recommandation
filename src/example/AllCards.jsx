import React from 'react';
import PropType from 'prop-types';
import { Card, CardDeck } from '@edx/paragon';

import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';
import photo3 from '../assets/photo3.png';

import './index.scss';

const AllCards = ({ card }) => (
  <>
    <div className="container-fluid">
      <CardDeck>
        <Card>
          <label className="label">e-learning</label>
          <Card.ImageCap img src={photo1} />
          <Card.Header />
          <Card.Section className="header">
            <small className="text-muted">Accredited: 2 points</small>
          </Card.Section>
          <Card.Section className="section">{card.card}</Card.Section>
          <Card.Footer className="footer">
            <small className="text-muted">BE-Key-0925485</small>
          </Card.Footer>
        </Card>
        <Card>
          <label className="label">live webinar</label>
          <Card.ImageCap img src={photo2} />
          <Card.Header />

          <Card.Section className="section">
            Maecenas sapien orci, elementum ullamcorper ipsumut, condimentum
            varius leo.
          </Card.Section>
          <Card.Footer className="footer">
            <small className="text-muted">BE-Key-0925485</small>
          </Card.Footer>
        </Card>
        <Card>
          <label className="label">e-learning</label>
          <Card.ImageCap img src={photo3} />
          <Card.Header />
          <Card.Section className="header">
            <small className="text-muted">Accredited: 2 points</small>
          </Card.Section>
          <Card.Section className="section">
            Maecenas sapien orci, elementum ullamcorper ipsumut, condimentum
            varius leo.
          </Card.Section>
          <Card.Footer className="footer">
            <small className="text-muted">BE-Key-0925485</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  </>
);



export default AllCards;
