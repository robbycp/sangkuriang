import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory, History } from 'history'
import logger from 'redux-logger'

import authReducer from 'redux/reducer/authSlice'
import counterReducer from 'redux/reducer/counterSlice';

function createRootReducer (history: History) {
  return combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    counter: counterReducer,
  })
}

export const history = createBrowserHistory()
const rootReducer = createRootReducer(history)

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(routerMiddleware(history))
    .concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
