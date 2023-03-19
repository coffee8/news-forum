import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
    test('should return incremented value', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });
});

describe('counterSlice.test', () => {
    test('should return decremented value', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });
});

describe('counterSlice.test', () => {
    test('should work with empty value', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
