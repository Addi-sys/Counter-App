import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

const initialState = {
  count: 0,
  boxArray: [],
  backgroundColor: '',
}

function reducer(state = initialState, action) {
  // switch case:

  switch (action.type) {
    case "INCREMENT":
      state.count++
      state.boxArray.push("")
      break
    case "DECREMENT":
      if (state.count < 0) {
        state.count = 0
      } else {
        state.count--
        state.boxArray.pop()   //remove the last element from array
      }
      break
    case "RESET":
      state.boxArray = []
      state.count = 0
      break
    case "COLOR":
      state.backgroundColor = action.payload;
      break;
      case "SINGLECOLOR":
        state.boxArray[action.payload.id] = action.payload.color
        break
    default:
      console.log('test')
  }
  console.log(state.count)
  return { ...state }


}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
