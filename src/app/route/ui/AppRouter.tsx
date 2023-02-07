import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                        <Route
                            path={path}
                            element={element}
                            key={path}
                        />
                    )
                )}
            </Routes>
        </Suspense>
    );
};

