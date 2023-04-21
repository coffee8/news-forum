import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string,
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames(cls.ArticlesPage, {}, [className])} />
        );
    }
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default memo(ArticlesPage);
