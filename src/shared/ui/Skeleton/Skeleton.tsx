import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CSSProperties } from 'react';

interface SkeletonProps {
    className?: string,
    height?: string | number,
    width?: string | number,
    border?: string | number,
}

export const Skeleton = (props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        border,
    } = props;

    const styles: CSSProperties = {
        height,
        width,
        borderRadius: border,
    };
    const { t } = useTranslation();
    return (
        <div
            className={classNames('', {}, [className])}
            style={styles}
        />
    );
};
