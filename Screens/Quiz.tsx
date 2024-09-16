/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { s } from 'react-native-wind';


const Quiz = ({navigation}: {navigation: any}) => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState('Question Text');
  const [answers, setAnswers] = useState({
    answer1: 'Answer One',
    answer2: 'Answer Two',
    answer3: 'Answer Three',
    answer4: 'Answer Four',
  });
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [score, setScore] = useState(0);

  //let host = '10.0.2.2:5054'; // TO DO PUT IN CONFIG FILE AND CALL

  const updateQuestion = async () => {
    let baseURL = 'http://10.0.2.2:5054/Questions';
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: baseURL,
      params: {
        questionId: index,
      },
      headers: {
      },
    };

    try{
      const response = await axios.request(config);
      const responseData = response.data[index];
      setQuestion(responseData.questionText);
        setAnswers({
          answer1: responseData.answerOne,
          answer2: responseData.answerTwo,
          answer3: responseData.answerThree,
          answer4: responseData.answerFour,
        });
      setIndex(index + 1);
      setCorrectAnswer(responseData.correctAnswer);

      //alert("Works!: " + " " + questText + " " + answers.answer1 + " " + answers.answer2 + " " + answers.answer3 + " " + answers.answer4);

    } catch (error) {
        //sendResponse();
      Alert.alert('No more Questions to show!');
      setIndex(0);
      return;
    }
  };

  const verifyAnswer = async (answer : number) => {
    if (answer === correctAnswer) {
      setScore(score + 5);
      let show = score + 5;
      Alert.alert('Correct 5 points to Griffindoor! You got ' + show + ' points!');
      setScore(score + 5);
      updateQuestion();
    } else if (answer === 0) {
      Alert.alert('ERROR HAS OCCURED');
    } else {
      setScore(score - 3);
      let show = score - 3;
      Alert.alert('Ooops Incorrect, you lose 3 points, try again! You got ' + show + ' points!');
      setScore(score - 3);
    }
  };

  useEffect(() => {
    updateQuestion();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
  <SafeAreaView style={styles.main}>
    <View>
      <Text style={styles.title}>
        Welcome to Quiz Manager
      </Text>
    </View>
    <Text style={styles.subTitle}>
        {question}
    </Text>

    <View style={styles.container}>
      <TouchableOpacity style={styles.answerBut1} onPress={() => verifyAnswer(1)}>
        <Text style={styles.butText}>{answers.answer1}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.answerBut2} onPress={() => verifyAnswer(2)}>
        <Text style={styles.butText}>{answers.answer2}</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
      <TouchableOpacity style={styles.answerBut3} onPress={() => verifyAnswer(3)}>
        <Text style={styles.butText}>{answers.answer3}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.answerBut4} onPress={() => verifyAnswer(4)}>
        <Text style={styles.butText}>{answers.answer4}</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('QuizStart')}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      </View>
  </SafeAreaView>
);};

const styles = {
  container: s`m-4 mb-2 flex flex-row`,
  main: s `flex-1 items-center justify-center bg-slate-300`,
  title: s`mb-10 text-5xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white`,
  subTitle: s`mb-10 text-4xl text-center font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white`,
  answerBut1: s`ml-2 mr-2 w-1/2 h-full py-12 bg-blue-500 border border-blue-700 rounded-xl`,
  answerBut2: s`ml-2 mr-2 w-1/2 h-full py-12 bg-pink-500 border border-pink-700 rounded-xl`,
  answerBut3: s`ml-2 mr-2 w-1/2 h-full py-12 bg-yellow-500 border border-yellow-700 rounded-xl`,
  answerBut4: s`ml-2 mr-2 w-1/2 h-full py-12 bg-purple-500 border border-purple-700 rounded-xl`,
  butText: s`text-gray-200 font-bold text-lg text-center text-wrap`,
  backText: s`mt-10 text-4xl text-center font-bold leading-none tracking-tight text-red-700 md:text-5xl lg:text-6xl dark:text-white`,
};

export default Quiz;
