/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RadioButton} from 'react-native-paper'; 
import { s } from 'react-native-wind';

interface props {
    colors: string[];
    correctAnswer: number;
    setCorrectAnswer: (value: number) => void;
    style?: string;
  }

const RadioButtonRow: React.FC<props> = ({ colors, correctAnswer, setCorrectAnswer, style }) => {
    let customStyle = '';

    if (style != null) {
        customStyle = style;
    }

    return (
    <View style={s`${customStyle}`}>
      <Text style={styles.radioLabel}>Please Select the Correct Answer</Text>
      <View style={styles.container}>
        <View style={radioStyle.radioButton}>
          <RadioButton.Android
            value="1"
            status={correctAnswer.toString() === '1' ? 'checked' : 'unchecked'}
            onPress={() => setCorrectAnswer(1)}
            color={'#3DC7F9'}
          />
          <Text style={[s`text-2xl font-bold text-left text-wrap text-${colors[0]}`]}>One</Text>
        </View>
        <View style={radioStyle.radioButton}>
          <RadioButton.Android
            value="2"
            status={correctAnswer.toString() === '2' ? 'checked' : 'unchecked'}
            onPress={() => setCorrectAnswer(2)}
            color={'#692DF7'}
          />
          <Text style={[s`text-2xl font-bold text-left text-wrap text-${colors[1]}`]}>Two</Text>
        </View>

        <View style={radioStyle.radioButton}>
          <RadioButton.Android
            value="3"
            status={correctAnswer.toString() === '3' ? 'checked' : 'unchecked'}
            onPress={() => setCorrectAnswer(3)}
            color={'#C315EE'}
          />
          <Text style={[s`text-2xl font-bold text-left text-wrap text-${colors[2]}`]}>Three</Text>
        </View>

        <View style={radioStyle.radioButton}>
          <RadioButton.Android
            value="4"
            status={correctAnswer.toString() === '4' ? 'checked' : 'unchecked'}
            onPress={() => setCorrectAnswer(4)}
            color={'#FB3EA6'}
          />
          <Text style={[s`font-bold text-2xl text-left text-wrap text-${colors[3]}`]}>Four</Text>
        </View>
      </View>
    </View>
  );
};

const radioStyle = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  radioLabel: {
    marginTop: 16,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default RadioButtonRow;
