import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';

describe("SearchBar", () => {
    test('should render SearchBar', () => {
        const { getByText } = render(<SearchBar />);
        const searchElement = getByText(/Get recommendations/i);
        expect(searchElement).toBeInTheDocument();
    });

    test('should emit when search is clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<SearchBar onSearchSubmit={onClickMock}/>);
        const searchElement = getByText(/Get recommendations/i);
        searchElement.click()
        expect(onClickMock).toBeCalled();
        const callArgs = onClickMock.mock.calls[0][0]
        expect(callArgs.rating).toBeDefined();
        expect(Array.isArray(callArgs.categories)).toBe(true);
        expect(callArgs.birthDate).toBeDefined();
    });
})

