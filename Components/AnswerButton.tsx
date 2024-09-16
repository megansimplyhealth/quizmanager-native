/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { s } from 'react-native-wind';

interface props {
    color: string;
    text: string;
    onPress: () => void;
    visibility: boolean;
    style?: string;
  }

  const AnswerButton: React.FC<props> = ({ color, text, onPress, visibility, style }) => {

    let customStyle = '';

    if (!visibility) {return null;}

    if (style != null) {
        customStyle = style;
    }

    return (
    <View style={s`${customStyle}`}>
        <TouchableOpacity
        style={[
            s`w-full h-1/4 bg-background-shaddow border-4 rounded-xl border-${color}`]}
            onPress={onPress}
        >
            <Text style={[
            s`font-bold bg-background-shaddow text-lg text-center text-wrap text-${color}`]}>
                {text}
            </Text>
        </TouchableOpacity>
      </View>
    );
  };

export default AnswerButton;
