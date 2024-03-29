import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

import { UserRoles } from '../../model/consts/consts';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoles, (roles) => {
    return Boolean(roles?.includes(UserRoles.ADMIN));
});
export const isUserManager = createSelector(getUserRoles, (roles) => {
    return Boolean(roles?.includes(UserRoles.MANAGER));
});
