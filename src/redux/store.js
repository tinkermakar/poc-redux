import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './rootReducer';
import rootReducer from './rootReducer';
import preloadedState from './preloadedState';

const middleware = applyMiddleware(thunk);

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, preloadedState, composeEnhancers(middleware));

export default store;
