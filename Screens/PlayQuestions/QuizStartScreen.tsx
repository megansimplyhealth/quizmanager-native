/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { s } from 'react-native-wind';
import MainButton from '../../Components/MainButton';


const QuizStart = ({navigation}: {navigation: any}) => {

  return(
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Quiz Manager
          </Text>
        </View>
        <View style={styles.container}>
          <MainButton
            color="playButton"
            text={'Play\nQuestions'}
            onPress={() => navigation.navigate('QuizNameInput')}
            visibility={true}
            style = "mb-10"
          />
          <MainButton
            color="leaderboardButton"
            text={'View\nLeaderboard'}
            onPress={() => navigation.navigate('Leaderboard')}
            visibility={true}
            style = "mb-6"
          />
        </View>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
);};

const styles = {
  container: s`flex flex-col justify-between bg-background-main`,
  main: s `flex-1 items-center justify-center bg-background-main`,
  title: s`mb-10 text-6xl text-center font-extrabold leading-none tracking-tight text-titleText md:text-5xl lg:text-6xl dark:text-white bg-background-main`,
  backButtonContainer: s`felx-5 absolute bottom-6 w-full items-center bg-background-main`,
  backText: s`text-4xl font-extrabold text-red-600 bg-background-main`,
};

export default QuizStart;
