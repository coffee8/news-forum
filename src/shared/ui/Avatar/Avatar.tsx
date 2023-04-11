import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string,
    size?: number,
    alt?: string,
    src?: string,
}

export const Avatar = (props: AvatarProps) => {
    const {
        className,
        size,
        alt,
        src,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            className={classNames(cls.Avatar, {}, [className])}
            alt={alt}
            src={src}
            style={styles}
        />
    );
};
