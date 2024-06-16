import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { updateLocalStorage } from './actions';

const store = configureStore({ reducer: rootReducer });
updateLocalStorage(store);
export default store;
