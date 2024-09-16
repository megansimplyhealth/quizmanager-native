/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import axios, { AxiosError } from 'axios';
import { RadioButton } from 'react-native-paper';
import { s } from 'react-native-wind';
import AnswerInputBox from '../Components/AnswerInputBox';

const CreateQuestions = ({navigation}: {navigation: any}) => {
  const [questionText, setQuestionText] = useState('');
  const [answerOne, setAnswerOne] = useState('');
  const [answerTwo, setAnswerTwo] = useState('');
  const [answerThree, setAnswerThree] = useState('');
  const [answerFour, setAnswerFour] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(0);
  //const answerList = ['Answer One', 'Answer Two', 'Answer Three', 'Answer Four'];

  const insertQuestion = async () => {
    if (questionText !== '' && answerFour !== '' && answerThree !== '' && answerTwo !== '' && answerOne !== '' && correctAnswer !== 0) {
        //alert("Question Added!" + " " + questionText + " " + answerOne + " " + answerTwo + " " + answerThree + " " + answerFour + " " + correctAnswer);

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
    setQuestionText('Question');
    setQuestionText('');
    setAnswerOne('');
    setAnswerTwo('');
    setAnswerThree('');
    setAnswerFour('');
    setCorrectAnswer(0);
    Alert.alert('Question Added! Please add more or go back to play');
    } else {
        Alert.alert('Please Fill Out All Fields!');
    }

};

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Text style={styles.title}>Welcome to Quiz Manager</Text>
      </View>
      <View>
        <TextInput
          style={s`py-5 px-20 w-full text-lg text-left text-slate-900 border-2 border-slate-900 rounded-xl`}
          value={questionText}
          onChangeText={setQuestionText}
          placeholder="Please Type Your Question"
        />
      </View>

      <View >
        <AnswerInputBox
          color= "answerColorOne"
          value= {answerOne}
          onChange={() => setAnswerOne}
          placeholder="Answer One"
        />
        <AnswerInputBox
          color= "answerColorTwo"
          value={answerTwo}
          onChange={() => setAnswerTwo}
          placeholder="Answer Two"
        />
        <AnswerInputBox
          color= "answerColorThree"
          value={answerThree}
          onChange={() => setAnswerThree}
          placeholder="Answer Tree"
        />
        <AnswerInputBox
          color= "answerColorFour"
          value={answerFour}
          onChange={() => setAnswerFour}
          placeholder="Answer Four"
        />
      </View>

      <View>
      <Text style={styles.radioLabel}> Please Select the Correct Answer</Text>
      <View style={styles.container}>
                <View style={radioStyle.radioButton}>
                    <RadioButton.Android
                        value="1"
                        status={correctAnswer.toString() === '1' ?
                                'checked' : 'unchecked'}
                        onPress={() => setCorrectAnswer(1)}
                        color="#3b82f6"
                    />
                    <Text style={styles.radioLabel1}>
                        One
                    </Text>
                </View>

                <View style={radioStyle.radioButton}>
                <RadioButton.Android
                        value="2"
                        status={correctAnswer.toString() === '2' ?
                                'checked' : 'unchecked'}
                        onPress={() => setCorrectAnswer(2)}
                        color="#ec4899"
                    />
                    <Text style={styles.radioLabel2}>
                        Two
                    </Text>
                </View>

                <View style={radioStyle.radioButton}>
                <RadioButton.Android
                        value="3"
                        status={correctAnswer.toString() === '3' ?
                                'checked' : 'unchecked'}
                        onPress={() => setCorrectAnswer(3)}
                        color="#eab308"
                    />
                    <Text style={styles.radioLabel3}>
                        Three
                    </Text>
                </View>
                <View style={radioStyle.radioButton}>
                <RadioButton.Android
                        value="4"
                        status={correctAnswer.toString() === '4' ?
                                'checked' : 'unchecked'}
                        onPress={() => setCorrectAnswer(4)}
                        color= "#d946ef"
                    />
                    <Text style={styles.radioLabel4}>
                        Four
                    </Text>
                </View>
            </View>
      </View>

      <View>
      <TouchableOpacity style={styles.submitBut} onPress={() => insertQuestion()}>
          <Text style={styles.butText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const radioStyle = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
}});

const styles = {
  container: s`m-4 mb-2 flex flex-row`,
  main: s `flex-1 items-center justify-center bg-slate-300`,
  title: s`mb-10 text-5xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white`,
  subTitle: s`mb-10 text-4xl text-center font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white`,
  questInput: s`py-5 px-20 w-full text-lg text-left text-slate-900 border-2 border-slate-900 rounded-xl`,
  ans1Input: s`m-2 py-4 px-10 w-1/2 text-lg text-left text-wrap text-blue-500 border-2 border-blue-500 rounded-xl`,
  ans2Input: s`m-2 py-4 px-10 w-1/2 text-lg text-left text-wrap text-pink-500 border-2 border-pink-500 rounded-xl`,
  ans3Input: s`m-2 py-4 px-10 w-1/2 text-lg text-left text-wrap text-yellow-500 border-2 border-yellow-500 rounded-xl`,
  ans4Input: s`m-2 py-4 px-10 w-1/2 text-lg text-left text-wrap text-purple-500 border-2 border-purple-500 rounded-xl`,
  submitBut: s`m-4 py-3 px-20 bg-green-500 border border-green-600 rounded-xl`,
  butText: s`text-gray-100 font-bold text-4xl text-center text-wrap`,
  backText: s`mt-8 text-4xl text-center font-bold leading-none tracking-tight text-red-700 md:text-5xl lg:text-6xl dark:text-white`,
  radioLabel: s`mt-4 text-2xl font-bold text-left text-wrap`,
  radioLabel1: s`text-2xl font-bold text-left text-wrap text-blue-500`,
  radioLabel2: s`text-2xl font-bold text-left text-wrap text-pink-500`,
  radioLabel3: s`text-2xl font-bold text-left text-wrap text-yellow-500`,
  radioLabel4: s`text-2xl font-bold text-left text-wrap text-purple-500`,
};

export default CreateQuestions;
