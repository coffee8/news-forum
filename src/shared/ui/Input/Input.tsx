import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

export enum InputTypes {
    TEXT = 'text',
    NUMBER = 'number',
}

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string | number,
    onChange?: (value: string) => void,
    type?: InputTypes,
    placeholder?: string,
    autofocus?: boolean,
    readonly?: boolean,
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = InputTypes.TEXT,
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    const mods: Mods = {
        [cls.readony]: readonly,
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.InputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <input
                ref={ref}
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                readOnly={readonly}
                {...otherProps}
            />
        </div>

    );
});
