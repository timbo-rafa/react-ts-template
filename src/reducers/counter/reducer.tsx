import { INCREMENT, CounterState, CounterActionTypes } from './types';

export const initialState = 0;

export function counterReducer(state = initialState, action: CounterActionTypes): CounterState {
    switch (action.type) {
        case INCREMENT:
            return state + action.amount;
        default:
            return state;
    }
}

export default counterReducer;
