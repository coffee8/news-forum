import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ProfilePageProps {
    className?: string,
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames('', {}, [className])}>
            { t('Страница профиля') }
        </div>
    );
});

export default ProfilePage;
