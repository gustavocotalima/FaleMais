import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

import logoFaleMais30 from './assets/LogoFaleMais30.svg';
import logoFaleMais60 from './assets/LogoFaleMais60.svg';
import logoFaleMais120 from './assets/LogoFaleMais120.svg';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/plans', () => {
      return [
        {
          id:1,
          name:'FaleMais 30',
          description:'30 Minutos Grátis',
          logo:logoFaleMais30,
          freeTime: 30
        },
        {
          id:2,
          name:'FaleMais 60',
          description:'60 Minutos Grátis',
          logo:logoFaleMais60,
          freeTime: 60
        },
        {
          id:3,
          name:'FaleMais 120',
          description:'120 Minutos Grátis',
          logo:logoFaleMais120,
          freeTime: 120
        }
      ]
    })

    this.get('/DDDs', () => {
      return [
        {
          id: 1,
          code: '011',
        },
        {
          id: 2,
          code: '016',
        },
        {
          id: 3,
          code: '017',
        },
        {
          id: 4,
          code: '018',
        }
      ]
    })

    this.get('/callvalues', () => {
      return [
        {
          id: 1,
          origin: 1,
          destination: 2,
          value: 1.90
        },
        {
          id: 2,
          origin: 2,
          destination: 1,
          value: 2.90
        },
        {
          id: 3,
          origin: 1,
          destination: 3,
          value: 1.70
        },
        {
          id: 4,
          origin: 3,
          destination: 1,
          value: 2.70
        },
        {
          id: 5,
          origin: 1,
          destination: 4,
          value: 0.90
        },
        {
          id: 6,
          origin: 4,
          destination: 1,
          value: 1.90
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);