import {createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";

import {persistReducer,persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {rootReducer} from './reducer/index';
const middleware = [thunk,logger];
const persitConfig={
    key:'persist-store',
    storage
}
const persistedReducer=persistReducer(persitConfig,rootReducer);
const store=createStore(persistedReducer,composeWithDevTools(applyMiddleware(...middleware)));
export const persistor=persistStore(store);
export default store;