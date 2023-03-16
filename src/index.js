import { ReactSession } from 'react-client-session';
import React from "react";
import './shopex.css';
import ReactDOM from "react-dom";
import App from './App';
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import store from "./app/store";




let persistor = persistStore(store);
ReactSession.setStoreType("sessionStorage");

//console.log(new Date().getTime());     
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
