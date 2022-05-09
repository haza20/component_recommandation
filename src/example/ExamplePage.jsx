import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './index.scss';
import AllCards from './AllCards';

export default function ExamplePage() {
   const [cards, getCards] = useState([]);

    useEffect(() => {
    const getAllCards = async () => {
    // eslint-disable-next-line no-template-curly-in-string
      const { data } = await axios.get(`https://my-json-server.typicode.com/haza20/demo/cards`);

      getCards(data);
    };
    getAllCards();
  }, []);

  
  return (
    <div>
      <div>
        {cards.map((card) => (
          <AllCards card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}
