import { useTranslation } from 'react-i18next';
import { Listbox as HListBox } from '@headlessui/react';
import { useState } from 'react';
import cls from './ListBox.module.scss';

const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
];

interface ListBoxProps {
    className?: string,
}

export const ListBox = (props: ListBoxProps) => {
    const { className } = props;
    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    const { t } = useTranslation();
    return (
        <HListBox
            as="div"
            className={cls.ListBox}
            value={selectedPerson}
            onChange={setSelectedPerson}
        >
            <HListBox.Button
                className={cls.trigger}
            >
                {selectedPerson.name}
            </HListBox.Button>
            <HListBox.Options
                className={cls.options}
            >
                {people.map((person) => (
                    <HListBox.Option
                        className={cls.item}
                        key={person.id}
                        value={person}
                        disabled={person.unavailable}
                    >
                        {person.name}
                    </HListBox.Option>
                ))}
            </HListBox.Options>
        </HListBox>
    );
};
