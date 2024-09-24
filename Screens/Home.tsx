/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
} from 'react-native';
import { s } from 'react-native-wind';
import MainButton from '../Components/MainButton';

const Home = ({navigation}: {navigation: any}) => {
  return (
  <SafeAreaView style={styles.main}>
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to Quiz Manager
      </Text>
    </View>
    <View style={styles.container}>
      <MainButton
        color="playButton"
        text={'Play\nQuestions'}
        onPress={() => navigation.navigate('QuizStart')}
        visibility={true}
        style = "mb-10"
      />
      <MainButton
        color="createButton"
        text={'Create\nQuestions'}
        onPress={() => navigation.navigate('CreateQuestions')}
        visibility={true}
      />
    </View>
  </SafeAreaView>
);
};

const styles = {
  container: s`flex flex-col justify-between bg-background-main`,
  main: s `flex-1 items-center justify-center bg-background-main`,
  title: s`mb-10 text-6xl text-center font-extrabold leading-none tracking-tight text-titleText md:text-5xl lg:text-6xl dark:text-white`,
};

export default Home;

