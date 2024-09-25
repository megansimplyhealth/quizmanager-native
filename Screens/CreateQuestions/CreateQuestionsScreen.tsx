/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import axios, { AxiosError } from 'axios';
import { s } from 'react-native-wind';
import AnswerInputBox from '../../Components/AnswerInputBox';
import RadioButtonRow from '../../Components/RadioButtonRow';
import { SafeAreaView } from 'react-native-safe-area-context';

const CreateQuestions = ({navigation}: {navigation: any}) => {
  const [questionText, setQuestionText] = useState('');
  const [answerOne, setAnswerOne] = useState('');
  const [answerTwo, setAnswerTwo] = useState('');
  const [answerThree, setAnswerThree] = useState('');
  const [answerFour, setAnswerFour] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const submitButtonHandler = () => {
    if (questionText !== '' && answerFour !== '' && answerThree !== '' && answerTwo !== '' && answerOne !== '' && correctAnswer !== 0) {
      Alert.alert('Question Added! Please add more or go back to play');
      insertQuestion();
      setQuestionText('Question');
      setQuestionText('');
      setAnswerOne('');
      setAnswerTwo('');
      setAnswerThree('');
      setAnswerFour('');
      setCorrectAnswer(0);
    } else {
      Alert.alert('Please Fill Out All Fields!');
    }
  }

  const insertQuestion = async () => {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://10.0.2.2:5054/Questions',
      headers: {'Content-Type':'application/json','charset': 'utf-8'},
      data : JSON.stringify({
          questionText: questionText,
          answerOne: answerOne,
          answerTwo: answerTwo,
          answerThree: answerThree,
          answerFour: answerFour,
          correctAnswer: correctAnswer,
      }),
    };

  axios.request(config)
  .then(() => {
      console.log(JSON.stringify({
              questionText: questionText,
              answerOne: answerOne,
              answerTwo: answerTwo,
              answerThree: answerThree,
              answerFour: answerFour,
              correctAnswer: correctAnswer,
          }));
  })
  .catch((error: any) => {
      console.log(error);
      console.log(AxiosError);
  });
};

return (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.main}
  >
    <SafeAreaView style={styles.main}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.questionContainer}>
          <TextInput
            style={styles.question}
            value={questionText}
            onChangeText={setQuestionText}
            placeholder="Please Type Your Question"
            placeholderTextColor="white"
            testID="questionInputBox"
          />
        </View>

        <View style={styles.answerContainer}>
          <AnswerInputBox
            color="answerColorOne"
            value={answerOne}
            onChange={setAnswerOne}
            placeholder="Answer One"
            style={'mb-2'}
            placeholderColor="#3DC7F9"
            testID="answerOneInputBox"
          />
          <AnswerInputBox
            color="answerColorTwo"
            value={answerTwo}
            onChange={setAnswerTwo}
            placeholder="Answer Two"
            style={'mb-2'}
            placeholderColor="#692DF7"
            testID="answerTwoInputBox"
          />
          <AnswerInputBox
            color="answerColorThree"
            value={answerThree}
            onChange={setAnswerThree}
            placeholder="Answer Three"
            style={'mb-2'}
            placeholderColor="#C315EE"
            testID="answerThreeInputBox"
          />
          <AnswerInputBox
            color="answerColorFour"
            value={answerFour}
            onChange={setAnswerFour}
            placeholder="Answer Four"
            placeholderColor="#FB3EA6"
            testID="answerFourInputBox"
          />

          <RadioButtonRow
            colors={['answerColorOne', 'answerColorTwo', 'answerColorThree', 'answerColorFour']}
            correctAnswer={correctAnswer}
            setCorrectAnswer={setCorrectAnswer}
            testID="correctAnswerInput"
          />
        </View>
        <View style={styles.submitButtonContainer}>
          <TouchableOpacity testID="SubmitButton" onPress={() => submitButtonHandler()}>
            <Text style={styles.submitText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity testID="BackButton" onPress={() => navigation.navigate('Home')}>
            <Text style={styles.backText}>BACK</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  </KeyboardAvoidingView>
);};

const styles = {
  main: s`flex-1 bg-background-main`,
  backButtonContainer: s`flex-2 bg-background-main mt-6 items-center justify-center`,
  backText: s`text-4xl font-extrabold text-red-600 bg-background-main`,
  questionContainer: s`flex-3 mt-8 mb-8 items-center justify-center px-4 bg-background-main`,
  question: s`w-full py-12 bg-background-shaddow border-2 rounded-xl border-questionColor font-bold text-xl text-center text-wrap text-questionColor bg-background-main`,
  answerContainer: s`flex-4 w-full px-4 space-y-4 bg-background-main`,
  submitButtonContainer: s`flex-5 py-2 mr-4 ml-4 bg-leaderboardButton border-2 rounded-xl border-leaderboardButton`,
  submitText: s`text-4xl font-bold text-background-main text-center bg-leaderboardButton`,
};

export default CreateQuestions;
