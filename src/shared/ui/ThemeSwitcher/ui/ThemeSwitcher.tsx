import {classNames} from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';

interface ThemeSwitcherProps {
    className?: string,

}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className} = props;
    const {theme, toggleTheme} = useTheme();

    return (
        <button className={classNames(cls.ThemeSwitcher, {}, [className])}
                onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
        </button>
    );
};
