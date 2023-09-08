import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import cls from './Dropdown.module.scss';

export interface DropdownOptions {
    content?: ReactNode,
    disabled?: boolean,
    onClick?: () => void,
    href?: string
}

interface DropdownProps {
    className?: string,
    items: DropdownOptions[],
    direction?: DropdownDirection,
    trigger: ReactNode,
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom-left': cls.optionsBottomLeft,
    'bottom-right': cls.optionsBottomRight,
    'top-left': cls.optionsTopLeft,
    'top-right': cls.optionsTopRight,
};

export const Dropdown = (props: DropdownProps) => {
    const {
        className,
        items,
        trigger,
        direction = 'bottom-left',
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [className])}
        >
            <Menu.Button className={cls.button}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
                {items.map((item) => (
                    <Menu.Item
                        as={Fragment}
                        key={item.href}
                        disabled={item.disabled}
                    >
                        {({ active }) => (
                            <button
                                type="button"
                                className={classNames(cls.item, { [cls.active]: active })}
                            >
                                {item.content}
                            </button>
                        )}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    );
};
