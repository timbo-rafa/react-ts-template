export const INCREMENT = 'INCREMENT';

export type CounterState = number;

export interface CounterAction {
    type: typeof INCREMENT;
    amount: number;
}

export type CounterActionTypes = CounterAction;
