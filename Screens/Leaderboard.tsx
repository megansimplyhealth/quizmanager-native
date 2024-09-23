/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { s } from 'react-native-wind';
import LeaderboardTable from '../Components/LeaderboardTable';


const Leaderboard = ({navigation}: {navigation: any}) => {

  const tableData = [
    { name: 'Al', score: 85, time: '12:30' },
    { name: 'Bob', score: 90, time: '1:15' },
  ];

  return(
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Quiz Manager
          </Text>
        </View>
        <View>
          <LeaderboardTable tableData={tableData} />
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
  container2: s `flex-1 p-4`,
  main: s `flex-1 items-center justify-center bg-background-main`,
  title: s`mb-10 text-6xl text-center font-extrabold leading-none tracking-tight text-titleText md:text-5xl lg:text-6xl dark:text-white`,
  backButtonContainer: s`felx-5 absolute bottom-6 w-full items-center bg-background-main`,
  backText: s`text-4xl font-extrabold text-red-600 bg-background-main`,
};

export default Leaderboard;
