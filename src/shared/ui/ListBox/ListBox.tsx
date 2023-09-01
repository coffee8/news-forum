import { useTranslation } from 'react-i18next';
import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import { Button } from '../Button/Button';
import cls from './ListBox.module.scss';

export interface ListBoxOptions {
    value: string,
    content: ReactNode,
    disabled?: boolean,
}

interface ListBoxProps {
    className?: string,
    items?: ListBoxOptions[],
    label?: string,
    readonly?: boolean,
    value?: string,
    defaultValue?: string,
    onChange: (value: string) => void,
}

export const ListBox = (props: ListBoxProps) => {
    const {
        className,
        items,
        label,
        readonly,
        value,
        defaultValue,
        onChange,
    } = props;

    const { t } = useTranslation();

    return (
        <HStack gap="4">
            {label && <span>{`${label}>>`}</span>}
            <HListBox
                as="div"
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <HListBox.Button className={cls.trigger} disabled={readonly}>
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={cls.options}>
                    {items?.map((item) => (
                        <HListBox.Option
                            as={Fragment}
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li className={classNames(cls.item, {
                                    [cls.active]: active,
                                    [cls.disabled]: item.disabled,
                                }, [])}
                                >
                                    {selected && '*'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>

    );
};
