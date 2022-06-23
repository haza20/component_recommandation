/* eslint-disable react/no-array-index-key */
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  APP_INIT_ERROR, APP_READY, subscribe, initialize,
} from '@edx/frontend-platform';
import { AppProvider, ErrorPage } from '@edx/frontend-platform/react';
import ReactDOM from 'react-dom';

import Header, { messages as headerMessages } from '@edx/frontend-component-header';
import Footer, { messages as footerMessages } from '@edx/frontend-component-footer';

import appMessages from './i18n';
import Course from './example/Course';

import './index.scss';

const cardArr = [
  {
    id: 1,
    description: 'Maecenas sapien orci, elementum ullamcorper ipsum ut, condimentum varius leo.condimentum varius leo. ',
    category: 'e-learning',
    credits: '2',
    bekey: '0932738 ',
    image: 'https://fv9-5.failiem.lv/thumb_show.php?i=4bss6bzk6&view',
  },
  {
    id: 2,
    description: 'Maecenas sapien orci, elementum ullamcorper ipsum ut, condimentum varius leo.condimentum varius leo. ',
    category: 'e-learning',
    credits: '2',
    bekey: '0932738 ',
    image: 'https://fv9-5.failiem.lv/thumb_show.php?i=4bss6bzk6&view',
  },
];

subscribe(APP_READY, () => {
  ReactDOM.render(
    <AppProvider>
      <Header />
      <div className="container-fluid cards-container">
        <Course />
        {
      cardArr.map((el, i) => <Course card={el} key={i} />)
    }
      </div>
      <Footer />
    </AppProvider>,
    document.getElementById('root'),
  );
});

subscribe(APP_INIT_ERROR, (error) => {
  ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
});

initialize({
  messages: [
    appMessages,
    headerMessages,
    footerMessages,
  ],
});
