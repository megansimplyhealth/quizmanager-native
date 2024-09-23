/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { s } from 'react-native-wind';
import AnswerButton from '../Components/AnswerButton';


const Quiz = ({ route, navigation}: {route: any,navigation: any}) => {

  const {username} = route.params;

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
  <View style={styles.main}>
    <View style={styles.timerContainer}>
        <Text style={styles.timer}>
          00:00
        </Text>
    </View>

    <View style={styles.questionContainer}>
      <Text style={styles.question}>
        {question}
      </Text>
    </View>

    <View style={styles.answerContainer}>
      <AnswerButton
        color="answerColorOne"
        text={answers.answer1}
        onPress={() => verifyAnswer(1)}
        visibility={true}
        style = "mb-4 mt-4" />
      <AnswerButton
        color="answerColorTwo"
        text={answers.answer2}
        onPress={() => verifyAnswer(2)}
        visibility={true}
        style = "mb-4"  />
      <AnswerButton
        color="answerColorThree"
        text={answers.answer3}
        onPress={() => verifyAnswer(3)}
        visibility={true}
        style = "mb-4"  />
      <AnswerButton
        color="answerColorFour"
        text={answers.answer4}
        onPress={() => verifyAnswer(4)}
        visibility={true} />
    </View>

    <View style={styles.backButtonContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('QuizStart')}>
        <Text style={styles.backText}>BACK</Text>
      </TouchableOpacity>
    </View>
  </View>
);};

const styles = {
  main: s`flex-1 bg-background-main`,
  timerContainer: s`flex-2 mt-6 items-center justify-center bg-background-main`,
  timer: s`text-4xl font-extrabold text-red-600 bg-background-main`,
  questionContainer: s`flex-3 mt-12 items-center justify-center px-4 bg-background-main`,
  question: s`text-3xl font-extrabold text-titleText bg-background-main`,
  answerContainer: s`flex-4 absolute bottom-20 w-full px-4 space-y-4 mb-10 bg-background-main`,
  backButtonContainer: s`felx-5 absolute bottom-6 w-full items-center bg-background-main`,
  backText: s`text-4xl font-extrabold text-red-600 bg-background-main`,
};

export default Quiz;
