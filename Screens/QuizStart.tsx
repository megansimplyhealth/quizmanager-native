/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const QuizStart = ({navigation}: {navigation: any}) => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Welcome to Quiz Manager
      </Text>
    </View>
    <Separator />
    <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
        <Text>Start</Text>
      </TouchableOpacity>
    <Separator />
    <TouchableOpacity onPress={() => Alert.alert('Leader Board Pressed! Currently in progress')}>
        <Text>Leader Board</Text>
      </TouchableOpacity>
      <Separator />
      <View> 
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Back</Text>
      </TouchableOpacity>
      </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default QuizStart;