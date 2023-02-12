import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLinkTheme, AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string,

}
export const Navbar = (props: NavbarProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to="/" className={cls.mainLink} theme={AppLinkTheme.SECONDARY}>Main</AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>About</AppLink>
            </div>

        </div>
    );
};
