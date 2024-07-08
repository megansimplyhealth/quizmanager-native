/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import axios, { AxiosError } from 'axios';
import { RadioButton } from 'react-native-paper';

const Separator = () => <View style={styles.separator} />;

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
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to Quiz Manager</Text>
      </View>
      <Separator />
      <View>
        <TextInput
          style={styles.input}
          value={questionText}
          onChangeText={setQuestionText}
          placeholder="Please Type Your Question"
        />
      </View>
      <Separator />
      <View style={styles.fixToText}>
        <TextInput
          style={styles.input}
          onChangeText={setAnswerOne}
          value={answerOne}
          placeholder="Please Type Answer 1"
        />
        <TextInput
          style={styles.input}
          onChangeText={setAnswerTwo}
          value={answerTwo}
          placeholder="Please Type Answer 2"
        />
      </View>
      <Separator />
      <View style={styles.fixToText}>
        <TextInput
          style={styles.input}
          onChangeText={setAnswerThree}
          value={answerThree}
          placeholder="Please Type Answer 3"
        />
        <TextInput
          style={styles.input}
          onChangeText={setAnswerFour}
          value={answerFour}
          placeholder="Please Type Answer 4"
        />
      </View>
      <Separator />
      <View>
      <Text style={styles.radioLabel}> Please Select the Correct Answer</Text>
      <View style={styles.radioGroup}>
                <View style={styles.radioButton}>
                    <RadioButton.Android
                        value="1"
                        status={correctAnswer.toString() === '1' ?
                                'checked' : 'unchecked'}
                        onPress={() => setCorrectAnswer(1)}
                        color="#007BFF"
                    />
                    <Text style={styles.radioLabel}>
                        One
                    </Text>
                </View>

                <View style={styles.radioButton}>
                <RadioButton.Android
                        value="2"
                        status={correctAnswer.toString() === '2' ?
                                'checked' : 'unchecked'}
                        onPress={() => setCorrectAnswer(2)}
                        color="#007BFF"
                    />
                    <Text style={styles.radioLabel}>
                        Two
                    </Text>
                </View>

                <View style={styles.radioButton}>
                <RadioButton.Android
                        value="3"
                        status={correctAnswer.toString() === '3' ?
                                'checked' : 'unchecked'}
                        onPress={() => setCorrectAnswer(3)}
                        color="#007BFF"
                    />
                    <Text style={styles.radioLabel}>
                        Three
                    </Text>
                </View>
                <View style={styles.radioButton}>
                <RadioButton.Android
                        value="4"
                        status={correctAnswer.toString() === '4' ?
                                'checked' : 'unchecked'}
                        onPress={() => setCorrectAnswer(4)}
                        color="#007BFF"
                    />
                    <Text style={styles.radioLabel}>
                        Four
                    </Text>
                </View>
            </View>
      </View>
      <Separator />
      <View>
        <Button
          title="Submit"
          onPress={() => insertQuestion()}
        />
      </View>
      <Separator />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: 'white',
    padding: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
},
radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
},
radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
},
});

export default CreateQuestions;
