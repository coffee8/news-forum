import { classNames } from './classNames';

describe('classNames', () => {
    test('with first param only', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass additional-class';
        expect(classNames('someClass', {}, ['additional-class'])).toBe(expected);
    });
    test('with mods', () => {
        const expected = 'someClass hovered scrollable';
        expect(classNames('someClass', { hovered: true, scrollable: true })).toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'someClass hovered';
        expect(classNames('someClass', { hovered: true, scrollable: false })).toBe(expected);
    });
    test('with mods false and additional class', () => {
        const expected = 'someClass additional hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['additional'],
        )).toBe(expected);
    });
    test('with mods undefined and additional class', () => {
        const expected = 'someClass additional hovered';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined },
            ['additional'],
        )).toBe(expected);
    });
});
