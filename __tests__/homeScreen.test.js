/* eslint-disable prettier/prettier */
import {expect, it} from '@jest/globals';
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Home from '../Screens/Home';
import { describe } from 'node:test';


describe('Home Screen Navigation Tests', () => {
    const navigation = {navigate: jest.fn()};
    let spyNavigation,playButton, createButton;

    beforeEach(() => {
        const screen = render(<Home navigation={navigation} />);
        playButton = screen.getByTestId('PlayButton');
        createButton = screen.getByTestId('CreateButton');
        spyNavigation = jest.spyOn(navigation, 'navigate');
    });

    afterEach(() => {
        spyNavigation.mockClear();
    });

    it('Play button navigation should work', () => {
        fireEvent.press(playButton);
        expect(spyNavigation).toHaveBeenCalledWith('QuizStart');
    });

    it('Create button navigation should work', () => {
        fireEvent.press(createButton);
        expect(spyNavigation).toHaveBeenCalledWith('CreateQuestions');
    });
});
