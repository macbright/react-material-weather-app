import { createStore, applyMiddleware , compose } from 'redux';

import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const middleware = [thunk]
const enhancers = [
   applyMiddleware(...middleware),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 ]
const store = createStore(
   rootReducer,
   compose(...enhancers),
);


  //store.dispatch(fetchPosts('reactjs')).then(() => console.log(store.getState()))
  export default store;