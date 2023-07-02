import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../model/types/Article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string,
    article: Article,
    view: ArticleView,
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const { className, article, view } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleListItem, {}, [className])}>
            {article.title}
        </div>
    );
};
