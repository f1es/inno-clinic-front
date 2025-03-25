import { createReducer, on } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';

export const setRole = createAction('[Role] Set', props<{ role: string }>());
export const clearRole = createAction('[Role] Clear');

const initialState: string = "";

export const roleReducer = createReducer(
  initialState,
  on(setRole, (_, { role }) => role),
  on(clearRole, () => "")
);
