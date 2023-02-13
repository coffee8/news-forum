import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { useEffect, useState } from 'react';

interface BugButtonProps {
    className?: string,

}
export const BugButton = (props: BugButtonProps) => {
    const { className } = props;
    const [error, setError] = useState(false);
    const onThrow = () => {
        setError(true);
    };
    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);
    return (
        <Button
            onClick={onThrow}
            className={classNames('', {}, [className])}
        >
            Throw a bug!
        </Button>
    );
};
