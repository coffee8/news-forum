import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string,
    value?: Country,
    onChange?: (value: Country) => void,
    readonly?: boolean,
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.USA, content: Country.USA },
    { value: Country.Turkey, content: Country.Turkey },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        if (onChange) {
            onChange?.(value as Country);
        }
    }, [onChange]);

    const { t } = useTranslation();

    return (
        <ListBox
            className={classNames('', {}, [className])}
            onChange={onChangeHandler}
            value={value}
            readonly={readonly}
            items={options}
            label={t('Укажите страну')}
            defaultValue={t('Укажите страну')}
        />
    );

    // return (
    //     <Select
    //         className={classNames('', {}, [className])}
    //         label={t('Укажите страну')}
    //         options={options}
    //         value={value}
    //         onChange={onChangeHandler}
    //         disabled={readonly}
    //     />
    // );
});
