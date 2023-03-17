import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string,

}

export const PageError = (props: PageErrorProps) => {
    const { className } = props;
    const { t } = useTranslation('pageError');
    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            {t('Что-то пошло не так')}
            <Button onClick={reloadPage}>{t('Перезагрузить страницу')}</Button>
        </div>
    );
};
