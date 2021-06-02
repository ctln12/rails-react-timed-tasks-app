import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import '../stylesheets/application.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('main')),
  )
})
