import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './index.scss';
import Cards from './Card';

export default function AllCards() {
  const [cards, getCards] = useState([]);

  useEffect(() => {
    const getAllCards = async () => {
      // eslint-disable-next-line no-template-curly-in-string
      const { data } = await axios.get(
        'https://my-json-server.typicode.com/haza20/demo/cards',
      );

      getCards(data);
    };
    getAllCards();
  }, []);

  return (
    <div>
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Cards card={card} key={card.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
