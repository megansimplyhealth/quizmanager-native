/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Button,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { s } from "react-native-wind";

const Home = ({navigation}: {navigation: any}) => {

  const styles = {
    container: s`flex gap-1`,
    main: s `flex-1 items-center justify-center`,
    title: s`mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white`,
    createBut: s`bg-orange-500 border-orange-700 rounded`,
    quizBut: s`bg-purple-500 border-purple-700 rounded`,
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
      <Text>Play Questions</Text>
    </TouchableOpacity>
    </View>

    <View style={styles.container}>
    <TouchableOpacity style={styles.createBut} onPress={() => navigation.navigate('CreateQuestions')}>
      <Text>Create Questions</Text>
    </TouchableOpacity>
    </View>
  </SafeAreaView>
);
};



export default Home;
