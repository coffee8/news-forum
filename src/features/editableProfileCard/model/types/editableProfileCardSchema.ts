import { Profile } from 'entities/Profile';

export enum ValidateProfileError {
    NO_DATA = 'NO DATA',
    INCORRECT_USER_DATA = 'INCORRECT USER DATA',
    INCORRECT_AGE = 'INCORRECT AGE',
    INCORRECT_COUNTRY = 'INCORRECT COUNTRY',
    SERVER_ERROR = 'SERVER ERROR',
}

export interface ProfileSchema {
    data?: Profile,
    form?: Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    validateErrors?: ValidateProfileError[],
}
