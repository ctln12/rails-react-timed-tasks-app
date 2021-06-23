import React from 'react';
import ReactDOM from 'react-dom';
import 'tailwindcss/tailwind.css';
import "@fortawesome/fontawesome-free/css/all";
import '../stylesheets/index.scss';

import App from '../components/App';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.createElement('div');
  rootElement.className = 'root';
  ReactDOM.render(
    <App />,
    document.body.appendChild(rootElement),
  )
})
