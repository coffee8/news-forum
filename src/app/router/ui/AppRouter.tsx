import React, {
    memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'shared/ui/PageLoader';
import { routeConfig, AppRoutesProps } from 'shared/config/routeConfig/routeConfig';
import { RequireAuth } from 'app/router/ui/RequireAuth';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                path={route.path}
                key={route.path}
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
});
