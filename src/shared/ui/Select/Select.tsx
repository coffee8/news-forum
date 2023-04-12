import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOptions {
    value: string,
    content: string,
}
interface SelectProps {
    className?: string,
    label?: string,
    options?: SelectOptions[],
    value?: string,
    onChange?: (value: string) => void,
    readonly?: boolean,
}

export const Select = (props: SelectProps) => {
    const {
        className,
        label,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && (
                <span className={cls.laber}>
                    {`${label}>`}
                </span>
            )}
            <div className={cls.select}>
                <select
                    className={cls.select}
                    disabled={readonly}
                    value={value}
                    onChange={onChangeHandler}
                >
                    {optionsList}
                </select>
            </div>
        </div>
    );
};
