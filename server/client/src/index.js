import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from '../src/utils/Router';
import '../src/styles/index.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Router />
      </BrowserRouter>


);

