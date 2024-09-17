/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import CreateQuestions from './Screens/CreateQuestions';
import Home from './Screens/Home';
import QuizStart from './Screens/QuizStart';
import Quiz from './Screens/Quiz';
import { View } from 'react-native';
import { s } from 'react-native-wind';


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
        {/* { <Stack.Screen name="LeaderBoard" component={LeaderBoard} />} */}
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
};

export default App;
