/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {
  TextInput,
  View,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { s } from 'react-native-wind';

interface props {
    colour: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    style?: string;
    placeholderColour?: string;
    password?: boolean;
  }

  const UserInputBox: React.FC<props> = ({ colour, value, onChange, style, placeholder, placeholderColour, password }) => {

    const [eyeIcon, setEyeIcon] = React.useState('eye');
    const [viewPassword, setViewPassword] = password ? React.useState(true) : React.useState(false);

    const passwordViewHandler = () => {
      setEyeIcon(eyeIcon === 'eye' ? 'eye-off' : 'eye');
      setViewPassword(!viewPassword);
    };

    let customStyle = '';

    if (style != null) {
        customStyle = style;
    }
    if (password) {
        return (
            <View style={[s`w-full flex-row items-center bg-background-shaddow border-2 rounded-xl border-${colour}`]}>
            <TextInput
              style={[s`flex-1 py-6 text-xl font-bold text-center text-wrap text-${colour}`]}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={placeholderColour}
              secureTextEntry={viewPassword}
            />
            <IconButton
              icon={eyeIcon}
              size={36}
              onPress={passwordViewHandler}
            />
          </View> 
        );
    } else {
        return (
        <View style={s`${customStyle}`}>
            <TextInput
            style={[s`w-full py-6 bg-background-shaddow border-2 rounded-xl border-${colour} text-xl font-bold text-center text-wrap text-${colour}`]}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={placeholderColour}
            />
        </View>
        );
    }
  };

export default UserInputBox;
