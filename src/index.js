import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {carReducer} from './reducers/carReducer';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carReducer);
// console.log(store.getState())

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<Router>
<App />
</Router>
</Provider>
, rootElement);
