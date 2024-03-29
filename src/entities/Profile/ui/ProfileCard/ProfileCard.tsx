import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input, InputTypes } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency } from 'entities/Currency/model/types/currency';
import { CurrencySelect } from 'entities/Currency/ui/CurrencySelect/CurrencySelect';
import { Country, CountrySelect } from 'entities/Country';
import { HStack, VStack } from 'shared/ui/Stack';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string,
    data?: Profile,
    isLoading?: boolean,
    error?: string,
    readonly?: boolean,
    onChangeFirstname?: (value?: string) => void,
    onChangeLastname?: (value?: string) => void,
    onChangeAge?: (value?: string | number) => void,
    onChangeCity?: (value?: string) => void,
    onChangeUsername?: (value?: string) => void,
    onChangeAvatar?: (value?: string) => void,
    onChangeCurrency?: (currency?: Currency) => void,
    onChangeCountry?: (country?: Country) => void,

}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profileCard');

    if (isLoading) {
        return (
            <HStack justify="center" className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" gap="4" className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке пользователя')}
                    text={t('Попробуйте перезагрузить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack max gap="4" className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar
                && (
                    <HStack justify="center" className={cls.avatarWrapper}>
                        <Avatar
                            src={data?.avatar}
                            alt={t('Фотография пользователя')}
                            size={100}
                        />
                    </HStack>
                )}
            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cls.input}
                readOnly={readonly}
                onChange={onChangeFirstname}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                readOnly={readonly}
                onChange={onChangeLastname}
                data-testid="ProfileCard.lastname"
            />
            <Input
                value={data?.age}
                placeholder={t('Возраст')}
                type={InputTypes.NUMBER}
                className={cls.input}
                readOnly={readonly}
                onChange={onChangeAge}
            />
            <Input
                value={data?.city}
                placeholder={t('Город')}
                className={cls.input}
                readOnly={readonly}
                onChange={onChangeCity}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Фотография')}
                className={cls.input}
                readOnly={readonly}
                onChange={onChangeAvatar}
            />
            <Input
                value={data?.username}
                placeholder={t('Ник')}
                className={cls.input}
                readOnly={readonly}
                onChange={onChangeUsername}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
