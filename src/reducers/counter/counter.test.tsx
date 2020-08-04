import counter, { initialState } from './reducer';
import { INCREMENT } from './types';

describe('counter reducer', () => {
    it('should handle initial state', () => {
        expect(counter(undefined, { type: INCREMENT, amount: 0 })).toEqual(initialState);
    });

    it(`should handle ${INCREMENT}`, () => {
        expect(
            counter(initialState, {
                type: INCREMENT,
                amount: 2,
            }),
        ).toEqual(initialState + 2);
    });
});

// https://redux.js.org/basics/example
