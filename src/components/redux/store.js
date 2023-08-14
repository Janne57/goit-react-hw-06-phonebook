
// import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  
  import { configureStore } from "@reduxjs/toolkit";
  import  contactsReducer from './contactSlice';
  // import contactSlice from './contactSlice.js';

// export default configureStore({
//   reducer: {
//     contact: contactsReducer,
//   },
// })

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, contactsReducer)
  
  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  
  export const persistor = persistStore(store)


//   import { createStore } from "redux";
//   import { devToolsEnhancer } from "@redux-devtools/extension";
// // Начальное значение состояния Redux для корневого редюсера,
// // если не передать параметр preloadedState.
// const initialState = {
//   tasks: [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ],
//   filters: {
//     status: "all",
//   },
// };
// // Пока что используем редюсер который
// // только возвращает полученное состояние
// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// const enhancer = devToolsEnhancer();  
// export const store = createStore(rootReducer);