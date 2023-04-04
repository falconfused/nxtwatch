import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'mobx-react';
import { ThemeStore } from './stores/ThemeStore/ThemeStore';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const themeStore = new ThemeStore();
root.render(

  <App />
);

reportWebVitals();
