import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

<<<<<<< HEAD

import router3 from './routers/rootConsumer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router3}>
    <App />
  </RouterProvider>
=======
// import router2 from './routers/rootConsumer';
// import router from './routers/root';
import router2 from './routers/rootFarmer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <RouterProvider router={router2}>
      <App />
    </RouterProvider>
  </Provider>



>>>>>>> a5cbb7d8a3b5edec4f8d462238e29a850be7bbae
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
