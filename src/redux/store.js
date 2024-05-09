import { configureStore } from 'redux';
import reducers from './reducers/index';

const store = configureStore(reducers, {});

export default store;