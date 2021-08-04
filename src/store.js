import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'primary',
    storage: storage,
    whitelist: ['login__state','char__state','spisode__state','location__state'] // which reducer want to store
  };


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
export const persistor = persistStore(store);

// export default {store, persistor};

// export default ()=>{
//     const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))
//     const persistor = persistStore(store);
    
// }


