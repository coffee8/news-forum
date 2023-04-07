import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'testname' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('testname')))
            .toEqual({ username: 'testname' });
    });
    test('set password', () => {
        const state: DeepPartial<LoginSchema> = { password: 'testpassword' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('testpassword')))
            .toEqual({ password: 'testpassword' });
    });
});
