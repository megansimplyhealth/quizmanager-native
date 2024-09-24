/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import CreateQuestions from './Screens/CreateQuestions/CreateQuestionsScreen';
import Home from './Screens/Home';
import QuizStart from './Screens/PlayQuestions/QuizStartScreen';
import Quiz from './Screens/PlayQuestions/QuizScreen';
import { View } from 'react-native';
import { s } from 'react-native-wind';
import Leaderboard from './Screens/PlayQuestions/LeaderboardScreen';
import QuizNameInput from './Screens/PlayQuestions/QuizNameInputScreen';


const Stack = createStackNavigator();


const App = () => {

  return (
    <View style={s`flex-1 bg-background-main`}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateQuestions" component={CreateQuestions} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="QuizStart" component={QuizStart} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
        <Stack.Screen name="QuizNameInput" component={QuizNameInput} />
        {/* { <Stack.Screen name="LeaderBoard" component={LeaderBoard} />} */}
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
};

export default App;
