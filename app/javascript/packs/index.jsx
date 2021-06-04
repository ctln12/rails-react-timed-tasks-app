import React from 'react';
import ReactDOM from 'react-dom';
import 'tailwindcss/tailwind.css';
import "@fortawesome/fontawesome-free/css/all";
import '../stylesheets/application.scss';

import App from '../components/App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
