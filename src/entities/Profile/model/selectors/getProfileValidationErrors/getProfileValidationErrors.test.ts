import { StateSchema } from 'app/providers/StoreProvider';
import { validateProfileData, ValidateProfileError } from 'entities/Profile';
import { getProfileValidationErrors } from './getProfileValidationErrors';

describe('getProfileValidationErrors.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.INCORRECT_COUNTRY,
                ],
            },
        };
        expect(getProfileValidationErrors(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidationErrors(state as StateSchema)).toEqual(undefined);
    });
});
