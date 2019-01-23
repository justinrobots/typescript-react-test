import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk, { ThunkAction, ThunkDispatch as DefaultThunkDispatch} from 'redux-thunk';

import { USER_ACTION } from './User/UserActions';
import { UserReducer, UserState } from './User/UserReducer';

// R is the return type of the thunk, in case you want to return a promise or something
export type ThunkResult<R> = ThunkAction<R, IRootState, null, ROOT_ACTION>;
export type ThunkDispatch = DefaultThunkDispatch<IRootState, null, ROOT_ACTION>;

export interface IRootState {
  User: UserState;
}

const rootReducer = combineReducers<IRootState>({
  User: UserReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(ReduxThunk),
  ),
);

// this would be a union of all the action types from the various action files
export type  ROOT_ACTION = USER_ACTION;
