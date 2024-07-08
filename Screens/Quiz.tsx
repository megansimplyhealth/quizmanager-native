/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios from 'axios';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';


const Separator = () => <View style={styles.separator} />;

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

  let host = '10.0.2.2:5054'; // TO DO PUT IN CONFIG FILE AND CALL

  const updateQuestion = async () => {
    let baseURL = 'http://' + host + '/questions';
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
      // } else {
      //   console.log(error);
      //   Alert.alert('E: ' + error);
      // }
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
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Welcome to Quiz Manager
      </Text>
    </View>
    <Separator />
    <Text style={styles.title}>
        {question}
      </Text>
    <Separator />
    <View style={styles.fixToText}>
        <Button
          title={answers.answer1}
          onPress={() => verifyAnswer(1)}
          // onPress={() => verifyAnswer(1)}
        />
        <Button
          title={answers.answer2}
          onPress={() => verifyAnswer(2)}
        />
      </View>
    <Separator />
    <View style={styles.fixToText}>
        <Button
          title={answers.answer3}
          onPress={() => verifyAnswer(3)}
        />
        <Button
          title={answers.answer4}
          onPress={() => verifyAnswer(4)}
        />
      </View>
      <Separator />
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Back</Text>
      </TouchableOpacity>
      </View>
  </SafeAreaView>
);};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Quiz;
