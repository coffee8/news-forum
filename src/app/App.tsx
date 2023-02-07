import React from 'react';
import './styles/index.scss'
import {Link} from 'react-router-dom';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/route/ui/AppRouter";


const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change Theme</button>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <AppRouter/>
        </div>
    );
};

export default App;