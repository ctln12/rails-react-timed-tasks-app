import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../stylesheets/application.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('main')),
  )
})
