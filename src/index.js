import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/* The following line can be included in a src/App.scss */
import 'bootstrap/scss/bootstrap.scss';
// import 'bootstrap' // bu import static olarak kullanılacak  bu  kullanılıor dinamik yontemde gerek yok

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

