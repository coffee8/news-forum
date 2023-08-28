import { classNames } from 'shared/lib/classNames/classNames';
import SmallIcon from 'shared/assets/icons/small-20-20.svg';
import BigIcon from 'shared/assets/icons/big-20-20.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { memo } from 'react';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string,
    view: ArticleView,
    onViewClick?: (view: ArticleView) => void,
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: SmallIcon,
    },
    {
        view: ArticleView.BIG,
        icon: BigIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(viewType.view)}
                    key={viewType.view}
                >
                    <Icon
                        Svg={viewType.icon}
                        className={classNames('', { [cls.notSelected]: viewType.view === view })}
                    />
                </Button>
            ))}
        </div>
    );
});
