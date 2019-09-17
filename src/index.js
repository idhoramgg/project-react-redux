import React from 'react';
import { createStore } from 'redux'
import { render } from 'react-dom'
import App from './components/App';
import rootReducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
)