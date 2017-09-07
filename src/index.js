import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
const createStoreWithMidleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMidleware(reducers)}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
