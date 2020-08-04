import { INCREMENT, CounterActionTypes } from './types';

export function increment(amount: number): CounterActionTypes {
    return {
        type: INCREMENT,
        amount: amount,
    };
}

export type CounterActionFunction = (n:number) => CounterActionTypes;