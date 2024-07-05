/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const Quiz = ({navigation}: {navigation: any}) => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Welcome to Quiz Manager
      </Text>
    </View>
    <Separator />
    <Text style={styles.title}>
        Question Text
      </Text>
    <Separator />
    <View style={styles.fixToText}>
        <Button
          title="Answer One"
          onPress={() => Alert.alert('Answer 1 button pressed')}
        />
        <Button
          title="Answer Two"
          onPress={() => Alert.alert('Answer 2 button pressed')}
        />
      </View>
    <Separator />
    <View style={styles.fixToText}>
        <Button
          title="Answer Three"
          onPress={() => Alert.alert('Answer 3 button pressed')}
        />
        <Button
          title="Answer Four"
          onPress={() => Alert.alert('Answer 4 button pressed')}
        />
      </View>
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

export default Quiz;