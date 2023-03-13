import React, { Suspense, useState } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button } from 'shared/ui/Button';

function App() {
    const { theme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <Button onClick={() => setIsOpen(true)}>toggle</Button>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi architecto
                    asperiores earum
                    error esse facere id incidunt inventore iusto, laboriosam nemo nostrum numquam obcaecati
                    pariatur perferendis repellat veritatis vero.
                </Modal>
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
