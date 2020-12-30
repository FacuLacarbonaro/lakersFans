import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../Reducers";
import rootSaga from "../Sagas";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let mainEnhancers = compose(
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const store = createStore(persistedReducer, mainEnhancers);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
