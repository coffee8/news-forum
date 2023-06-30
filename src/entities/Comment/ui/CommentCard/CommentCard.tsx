import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { routeConfig, RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string,
    comment?: Comment,
    isLoading?: boolean
}

export const CommentCard = (props: CommentCardProps) => {
    const { className, comment, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton className={cls.username} height={16} width={100} />
                </div>
                <Skeleton className={cls.text} width="100%" height={30} />
            </div>
        );
    }

    if (!comment) {
        return null;
    }
    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment?.user.id}`} className={cls.header}>
                {comment?.user.avatar ? <Avatar size={30} src={comment?.user.avatar} /> : null}
                <Text title={comment?.user.username} />
            </AppLink>
            <Text text={comment?.text} className={cls.text} />
        </div>
    );
};
