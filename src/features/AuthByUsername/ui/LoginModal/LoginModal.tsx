import { Modal } from 'shared/ui/Modal/Modal';
import React, { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string,
    isOpen?: boolean,
    onClose?: () => void,
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, onClose, isOpen } = props;

    return (
        <Modal
            onClose={onClose}
            isOpen={isOpen}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
