import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string,
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const sidebarItemsList = useSelector(getSidebarItems);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => sidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed, sidebarItemsList]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.items}>
                {itemsList}
            </div>
            <Button
                data-testid="toggle"
                type="button"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.lang}
                    short={collapsed}
                />
            </div>

        </div>
    );
});
