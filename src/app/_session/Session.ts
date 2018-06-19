import { IAppState, INITIAL_STATE } from '../_store/Store';
const APP_STATE = 'app-state';

// Store state in sessionStorage
export function persistState(state: IAppState) {
    sessionStorage.setItem(APP_STATE, JSON.stringify(state));
}

export function getPersistState() : IAppState {
   let state = sessionStorage.getItem(APP_STATE);
   if (state) {
    return JSON.parse(state);
   }
   return INITIAL_STATE;
}