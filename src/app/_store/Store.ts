import { IHeroes } from '../_model/Heroes';
import { SAVE, DELETE , DELETE_ALL } from './Actions';

export interface IAppState {
    heroes: IHeroes[],
    lastUpdated: Date
}

export const INITIAL_STATE : IAppState = {
    heroes: [],
    lastUpdated: null
}

export function rootReducer(state: IAppState, action) : IAppState {
    switch(action.type) {
        case SAVE:
            action.hero.id = state.heroes.length + 1;
            return Object.assign({}, state, {
                heroes: state.heroes.concat(Object.assign({}, action.hero)),
                lastUpdated: new Date()  
            });
        case DELETE:
            return Object.assign({}, state, {
                heroes: state.heroes.filter(h => h.id !== action.id),
                lastUpdated: new Date()
            });
        case DELETE_ALL:
            return Object.assign({}, state, INITIAL_STATE);
    }
    return state;
}