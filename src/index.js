import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QuestProvider } from './QuestsContext';

import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QuestProvider>
      <App />
    </QuestProvider>
  </React.StrictMode>
);

reportWebVitals();