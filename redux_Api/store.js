/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from './ProductSlice';
export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});


// store.js
// import { createStore, combineReducers } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { configureStore } from '@reduxjs/toolkit';

// import rootReducer from './reducers/rootReducer';
// import ProductReducer from './ProductSlice';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const mainReducer = combineReducers({
//   persisted: persistedReducer,
//   product: ProductReducer,
// });

// export const store = configureStore({
//   reducer: mainReducer,
// });

// export const persistor = persistStore(store);


