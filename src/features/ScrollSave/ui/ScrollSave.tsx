import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface ScrollSaveProps {
    className?: string,
}

export const ScrollSave = (props: ScrollSaveProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            {t('ScrollSave')}
        </div>
    );
};
