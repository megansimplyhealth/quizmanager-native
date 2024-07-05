/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const Home = ({navigation}: {navigation: any}) => {

  return (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Welcome to Quiz Manager
      </Text>
    </View>
    <Separator />
    <View>
      <Button
        title="Play Questions"
        color="#8e3563"
        onPress={() => navigation.navigate('QuizStart')}
      />
    </View>
    <Separator />
    <View>
      <Button
        title="Create Questions"
        color="#e47200"
        onPress={() => navigation.navigate('CreateQuestions')}
      />
    </View>
  </SafeAreaView>
);
};
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

export default Home;