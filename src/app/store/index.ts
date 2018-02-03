import { ActionReducerMap } from '@ngrx/store';
import { RouterReducerState, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { Params, RouterStateSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store'; 

import { CartState, cartReducer } from './cart.reducer';

import { PosterType } from '../shared/model/poster.type';

/** 
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
    cartContent: PosterType[];
}

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<State> = {
  routerReducer: fromRouter.routerReducer,
  cartContent: cartReducer
};

