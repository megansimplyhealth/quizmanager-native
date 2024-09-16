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
    onChange: () => void;
    placeholder: string;
    style?: string;
  }

  const AnswerInputBox: React.FC<props> = ({ color, value, onChange, style, placeholder }) => {

    let customStyle = '';

    if (style != null) {
        customStyle = style;
    }

    return (
    <View style={s`${customStyle}`}>
        <TextInput
          style={[s`w-full py-6 bg-background-shaddow border-2 rounded-xl border-${color} text-lg text-left text-wrap text-${color}`]}
          onChangeText={onChange}
          value={value}
          placeholder={placeholder}
        />
      </View>
    );
  };

export default AnswerInputBox;
