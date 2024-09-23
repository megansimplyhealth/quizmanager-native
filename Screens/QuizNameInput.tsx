/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { s } from 'react-native-wind';
import MainButton from '../Components/MainButton';


const QuizNameInput = ({navigation}: {navigation: any}) => {

    const [username, setUsername] = useState('');

  return(
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
                placeholder="Insert here"
                placeholderTextColor="white"
            />
          <MainButton
            color="playButton"
            text="Play Questions"
            onPress={() => navigation.navigate('Quiz', { username: username })}
            visibility={true}
            style = "mb-10"
          />
        </View>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('QuizStart')}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
);};

const styles = {
  container: s`flex flex-col justify-between`,
  main: s `flex-1 items-center justify-center bg-background-main`,
  questionContainer: s`flex-3 mt-8 mb-8 items-center justify-center px-4 bg-background-main`,
  question: s`w-full py-12 bg-background-shaddow border-2 rounded-xl border-questionColor font-bold text-xl text-center text-wrap text-questionColor bg-background-main`,
  title: s`mb-10 text-6xl text-center font-extrabold leading-none tracking-tight text-titleText md:text-5xl lg:text-6xl dark:text-white`,
  subTitle: s`mb-10 text-5xl text-center font-extrabold leading-none tracking-tight text-titleText md:text-4xl lg:text-5xl dark:text-white`,
  backButtonContainer: s`felx-5 absolute bottom-6 w-full items-center bg-background-main`,
  backText: s`text-4xl font-extrabold text-red-600 bg-background-main`,
};

export default QuizNameInput;
