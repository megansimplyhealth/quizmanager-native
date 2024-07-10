/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { s } from 'react-native-wind';


const QuizStart = ({navigation}: {navigation: any}) => {

  return(
  <SafeAreaView style={styles.main}>
    <View>
      <Text style={styles.title}>
        Welcome to Quiz Manager
      </Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.startText}>Start</Text>
      </TouchableOpacity>
    <TouchableOpacity onPress={() => Alert.alert('Leader Board Pressed! Currently in progress')}>
        <Text style={styles.leadText}>Leader Board</Text>
      </TouchableOpacity>
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      </View>
  </SafeAreaView>
);};

const styles = {
  main: s `flex-1 items-center justify-top bg-slate-300`,
  title: s`mt-20 mb-10 text-5xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white`,
  startText: s`m-5 mt-10 text-5xl text-center font-bold leading-none tracking-tight text-green-700 md:text-5xl lg:text-6xl dark:text-white`,
  leadText: s`m-5 mt-10  text-5xl text-center font-bold leading-none tracking-tight text-orange-700 md:text-5xl lg:text-6xl dark:text-white`,
  backText: s`m-5 mt-10  text-5xl text-center font-bold leading-none tracking-tight text-red-700 md:text-5xl lg:text-6xl dark:text-white`,
};


export default QuizStart;
