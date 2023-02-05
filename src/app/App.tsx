import React from 'react';
import './styles/index.scss'
import {Routes, Route, Link} from 'react-router-dom';
import {Suspense} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";


const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change Theme</button>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <Suspense fallback={<h2>Loading...</h2>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}></Route>
                    <Route path={'/'} element={<MainPage/>}></Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;