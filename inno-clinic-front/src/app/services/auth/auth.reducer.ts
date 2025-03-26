import { createReducer, on } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';

export const setIsAuth = createAction('[boolean] Set', props<{ isAuth: boolean }>());

const initialState: boolean = false;

export const authReducer = createReducer(
  initialState,
  on(setIsAuth, (_, { isAuth }) => isAuth)
);
