/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { s } from 'react-native-wind';
import LeaderboardTable from '../../Components/LeaderboardTable';
import axios from 'axios';


const Leaderboard = ({navigation}: {navigation: any}) => {

  interface tableDataProps {
    name: string;
    score: number;
    time: string;
    date: string;
  }

  const [tableData, setTabledata] = useState<tableDataProps[]>([]);

  const updateLeaderboard = async () => {
    let baseURL = 'http://10.0.2.2:5054/Responses';
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: baseURL,
      params: {
      },
      headers: {
      },
    };
    //alert("Works!");
    try{
      const response = await axios.request(config);
      // console.log(response.data);
      // console.log(response.data.length);

      for(let i = 0; i <= (response.data.length - 1); i++) {
        let tableDataFormat : tableDataProps = {
          name: response.data[i].responseName,
          score: response.data[i].responseScore,
          time: response.data[i].responseTime,
          date: response.data[i].responseDate,
        };
        setTabledata((tableData) => [...tableData, tableDataFormat]);
        console.log(tableDataFormat);
      }
      console.log(tableData.length);
      console.log(tableData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateLeaderboard();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
      <SafeAreaView style={styles.main}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Quiz Manager
          </Text>
        </View>
        <View style={styles.tableContainer}>
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
  container: s`flex flex-col justify-between bg-background-main`,
  tableContainer: s `flex-1 p-4 bg-background-main`,
  main: s `flex-1 items-center justify-center bg-background-main`,
  title: s`mb-10 text-6xl text-center font-extrabold leading-none tracking-tight text-titleText md:text-5xl lg:text-6xl dark:text-white`,
  backButtonContainer: s`felx-5 absolute bottom-6 w-full items-center bg-background-main`,
  backText: s`text-4xl font-extrabold text-red-600 bg-background-main`,
};

export default Leaderboard;
