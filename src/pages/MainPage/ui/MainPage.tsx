import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';
import { Input } from 'shared/ui/Input/Input';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(val);
    };
    return (
        <div>
            <BugButton />
            {t('Главная страница')}
            <Input value={value} onChange={onChange} placeholder={t('Введите текст')} />
        </div>
    );
});

export default MainPage;
