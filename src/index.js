import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';




function rerenderEntireTree(store){
  

    ReactDOM.render(
      <React.StrictMode>
        <App store={store} />
      </React.StrictMode>,
      document.getElementById('root')
    );

};

rerenderEntireTree(store);
store.subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
