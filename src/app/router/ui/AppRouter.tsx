import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
    <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    path={path}
                    element={<div className="page-wrapper">{element}</div>}
                    key={path}
                />
            ))}
        </Routes>
    </Suspense>
);
