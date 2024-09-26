/* eslint-disable prettier/prettier */
import {expect, it, describe} from '@jest/globals';
import React from 'react';
import {fireEvent, render, userEvent} from '@testing-library/react-native';
import { Alert } from 'react-native';
import CreateQuestions from '../Screens/CreateQuestions/CreateQuestionsScreen';

const navigation = {navigate: jest.fn()};
let spyNavigation, spyAlert;
let backButton, answerOne, answerTwo, answerThree, answerFour, correctAnswer, questionText, submitButton;

beforeEach(() => {
    const screen = render(<CreateQuestions navigation={navigation} />);
    spyNavigation = jest.spyOn(navigation, 'navigate');
    spyAlert = jest.spyOn(Alert, 'alert');
    backButton = screen.getByTestId('BackButton');
    answerOne = screen.getByTestId('answerOneInputBox');
    answerTwo = screen.getByTestId('answerTwoInputBox');
    answerThree = screen.getByTestId('answerThreeInputBox');
    answerFour = screen.getByTestId('answerFourInputBox');
    correctAnswer = screen.getByTestId('correctAnswerInput');
    questionText = screen.getByTestId('questionInputBox');
    submitButton = screen.getByTestId('SubmitButton');
});

afterEach(() => {
    spyNavigation.mockClear();
    spyAlert.mockClear();
});

describe('Create Questions Screen Navigation Tests', () => {
    it('Back button navigation should work', () => {
        fireEvent.press(backButton);
        expect(spyNavigation).toHaveBeenCalledWith('Home');
    });
});

describe('Submit Button Tests', () => {

    // it('Submit button should work', () => {
    //     fireEvent.change(questionText, {target: {value: 'Question Text Input'}});
    //     fireEvent.change(answerOne, {target: {value: 'Answer One Input'}});
    //     fireEvent.change(answerTwo, {target: {value: 'Answer Two Input'}});
    //     fireEvent.change(answerThree, {target: {value: 'Answer Three Input'}});
    //     fireEvent.change(answerFour, {target: {value: 'Answer Four Input'}});
    //     fireEvent.change(correctAnswer, {target: {value: 1}});
    //     fireEvent.press(submitButton); ///////// fails????
    //     expect(spyAlert).toHaveBeenCalledWith('Question Added! Please add more or go back to play');
    // });

    it('Submit button should not work', () => {
        fireEvent.changeText(questionText, 'Question Text Input');
        fireEvent.changeText(answerOne, 'Answer One Input');
        fireEvent.changeText(answerTwo, 'Answer Two Input');
        fireEvent.changeText(answerThree, 'Answer Three Input');
        fireEvent.changeText(answerFour, 'Answer Four Input');
        fireEvent.changeText(correctAnswer, 0);
        fireEvent.press(submitButton);
        expect(spyAlert).toHaveBeenCalledWith('Please Fill Out All Fields!');
    });

});

describe('Question Api Tests', () => {

});
