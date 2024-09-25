/* eslint-disable prettier/prettier */
import React from 'react';
import {
  TextInput,
  View,
} from 'react-native';
import { s } from 'react-native-wind';

interface props {
    color: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    style?: string;
    placeholderColor?: string;
    testID: string;
  }

  const AnswerInputBox: React.FC<props> = ({ color, value, onChange, style, placeholder, placeholderColor, testID }) => {

    let customStyle = '';

    if (style != null) {
        customStyle = style;
    }

    return (
    <View style={s`${customStyle}`}>
        <TextInput
          style={[s`w-full py-6 bg-background-shaddow border-2 rounded-xl border-${color} text-xl font-bold text-center text-wrap text-${color}`]}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          testID={testID}
        />
      </View>
    );
  };

export default AnswerInputBox;
