import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData, UserRoles, getUserRoles } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useMemo } from 'react';

interface RequireAuthProps {
    children: JSX.Element;
    roles?: UserRoles[]
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
    const auth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);
    const location = useLocation();

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRoles) => {
            const hasRole = userRoles?.includes(requiredRoles);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }

    return children;
}
