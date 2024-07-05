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
  TextInput,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const CreateQuestions = ({navigation}: {navigation: any}) => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to Quiz Manager</Text>
      </View>
      <Separator />
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Question Placeholder"
        />
      </View>
      <Separator />
      <View style={styles.fixToText}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Answer 1 Placeholder"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Answer 2 Placeholder"
        />
      </View>
      <Separator />
      <View style={styles.fixToText}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Answer 3 Placeholder"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Answer 4 Placeholder"
        />
      </View>
      <Separator />
      <View>
        <Button
          title="Submit"
          onPress={() => Alert.alert('Submit button pressed')}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CreateQuestions;