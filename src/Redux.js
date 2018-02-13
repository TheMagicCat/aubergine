import React from 'react';
import { Provider, connect } from 'react-redux';
import Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import { defaultMemoize } from 'reselect';
import Promise from 'Bluebird';

import Vanilla from './Vanilla';

const CHANGE = 'CHANGE';

const select = defaultMemoize(state => state.get('fruit'));

const init = Immutable.fromJS({
  fruit: 'aubergine',
});

const reducer = (state = init, action) => {
  switch (action.type) {
    case (CHANGE):
      return state.set('fruit', 'grapefruit');
    default:
      return state;
  }
};

const store = createStore(reducer);

const async = () => (dispatch) => {
  dispatch({ type: CHANGE })
}

function mapStateToProps(state) {
  return {
    fruit: select(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    change: () => dispatch({ type: CHANGE }),
  };
}

{...store }

const Connected = connect(mapStateToProps, mapDispatchToProps)(Vanilla);

const ReduxApp = () => (
  <Provider store={store} >
    <Connected name="Redux" />
  </Provider>
);

export default ReduxApp;
