import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux'  
import thunk from 'redux-thunk'; 
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';

// const configureStore = () => {
//   const enhancer = composeWithDevTools();
//   return createStore(rootReducer, enhancer);
// }
// const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();