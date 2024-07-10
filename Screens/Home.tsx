/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { s } from "react-native-wind";

const Home = ({navigation}: {navigation: any}) => {

  const styles = {
    container: s`flex flex-col justify-between`,
    main: s `flex-1 items-center justify-center bg-slate-300`,
    title: s`mb-10 text-5xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white`,
    createBut: s`mb-10 py-10 px-16 bg-orange-500 border border-orange-700 rounded-xl`,
    quizBut: s`mb-10 py-10 px-16 bg-purple-500 border border-purple-700 rounded-xl`,
    butText: s`text-gray-200 font-bold text-3xl text-center`,
  };

  return (
  <SafeAreaView style={styles.main}>
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to Quiz Manager
      </Text>
    </View>
    <View style={styles.container}>
      <TouchableOpacity style={styles.quizBut} onPress={() => navigation.navigate('QuizStart')}>
      <Text style={styles.butText}>Play Questions</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.createBut} onPress={() => navigation.navigate('CreateQuestions')}>
      <Text style={styles.butText}>Create Questions</Text>
    </TouchableOpacity>
    </View>
  </SafeAreaView>
);
};

export default Home;
