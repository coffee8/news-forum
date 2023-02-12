import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import React from 'react';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string,
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className } = props;

    const { t, i18n } = useTranslation();
    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={onToggle}
            theme={ThemeButton.CLEAR}
        >
            {t('Русский')}
        </Button>
    );
};
