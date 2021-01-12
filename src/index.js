import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducer';
// import * as actions from './actions';
// import Counter from './components/counter';

import App from './components/app';


//const value = Math.floor(Math.random()*10)*Math.pow(-1,Math.floor(Math.random()*10))

let store = createStore(reducer)

// const {inc, dec, rnd} = bindActionCreators(actions, dispatch);



ReactDOM.render(
      <Provider store={store}><App/></Provider>, 
      document.getElementById('root')
);

