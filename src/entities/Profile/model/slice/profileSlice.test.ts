import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from 'entities/Profile';
import { ProfileSchema, ValidateProfileError } from '../types/Profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    username: 'admin',
    age: 33,
    country: Country.Turkey,
    lastname: 'Lastname',
    first: 'Firstname',
    city: 'Istanbul',
    currency: Currency.TRY,
};

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
            .toEqual({ readonly: true });
    });
    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({
                readonly: true,
                validateErrors: undefined,
                data,
                form: data,
            });
    });
    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: 'test name' } };
        expect(profileReducer(state as ProfileSchema, profileActions.updateForm({ username: 'change test name' })))
            .toEqual({
                form: { username: 'change test name' },
            });
    });
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            validateErrors: [ValidateProfileError.SERVER_ERROR],
            isLoading: false,
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
            .toEqual({
                isLoading: true,
                validateErrors: undefined,
            });
    });
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
            .toEqual({
                isLoading: false,
                validateErrors: undefined,
                readonly: true,
                form: data,
                data,
            });
    });
});
