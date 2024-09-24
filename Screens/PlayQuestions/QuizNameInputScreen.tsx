/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { s } from 'react-native-wind';
import MainButton from '../../Components/MainButton';
import axios from 'axios';


const QuizNameInput = ({navigation}: {navigation: any}) => {

  const [username, setUsername] = useState('');
  const [questionAmount, setQuestionAmount] = useState(0);

  const getQuestionAmount = async () => {
    let baseURL = 'http://10.0.2.2:5054/Questions';
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: baseURL,
      params: {
      },
      headers: {
      },
    };

    try{
      const response = await axios.request(config);
      setQuestionAmount(response.data.length);
      console.log(response.data.length);
    } catch (error : any) { 
      console.log('Error: ', error);
    }
  };

  useEffect(() => {
    getQuestionAmount();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return(
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Quiz Manager
          </Text>
        </View>
        <Text style={styles.subTitle}>
            Please enter your name
        </Text>
        <View style={styles.container}>
            <TextInput
                style={styles.question}
                value={username}
                onChangeText={setUsername}
                placeholder="Insert Name Here"
                placeholderTextColor="white"
            />
          <MainButton
            color="playButton"
            text={'Start\nQuiz'}
            onPress={() => navigation.navigate('Quiz', { username: username, questionAmount: questionAmount })}
            visibility={true}
            style = "mb-12 mt-6"
          />
        </View>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('QuizStart')}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      </ScrollView>
);};

const styles = {
  container: s`flex flex-col justify-between bg-background-main`,
  main: s `flex-1 items-center justify-center bg-background-main`,
  question: s`flex-2 ml-2 items-center h-24 w-96 mb-20 bg-background-shaddow border-2 rounded-xl border-questionColor font-bold text-3xl text-center text-wrap text-questionColor bg-background-main`,
  title: s`mb-10 text-6xl text-center font-extrabold leading-none tracking-tight text-titleText md:text-5xl lg:text-6xl dark:text-white bg-background-main`,
  subTitle: s`mb-4 mt-16 text-4xl text-center font-extrabold leading-none tracking-tight text-titleText md:text-4xl lg:text-5xl dark:text-white bg-background-main`,
  backButtonContainer: s`felx-5 absolute bottom-6 w-full items-center bg-background-main`,
  backText: s`text-4xl font-extrabold text-red-600 bg-background-main`,
};

export default QuizNameInput;
