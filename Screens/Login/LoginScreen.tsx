/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { s } from 'react-native-wind';
import AnswerInputBox from '../../Components/AnswerInputBox';
import { GoogleSignin} from '@react-native-google-signin/google-signin';



const Login = ({navigation}: {navigation: any}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  GoogleSignin.configure({
    webClientId: '339462350846-thgh4n1kkci4bsfkvglvof6bvvvc3c9b.apps.googleusercontent.com',
    offlineAccess: true,
  });

  async function onGoogleButtonPress() {
    // Check device supports Google Play and get google token
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const userInfo = await GoogleSignin.signIn();
    let idToken = userInfo.data?.idToken;

    if (idToken != null) {
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    //console.log(userInfo);
    //console.log(idToken);
    //console.log(googleCredential);

    const userCredential = await auth().signInWithCredential(googleCredential);
    //console.log(userCredential);
    const user = userCredential.user;
    const userId = user.uid;
    //console.log('uid',userId);
    //navigation.navigate('Home', {userId: userId});
    navigation.navigate('Home');
    } else {
      console.log('idToken is null');
    }

  }

  // async function signIn () {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     setUserInfo(userInfo);
  //     console.log(userInfo);
  //   } catch (error : any) {
  //     console.log(error);
  //     console.log(error.code);
  //     console.log(error.message);
  //   }
  // };

  const verifyLogin = async () => {
    if (username !== '' && password !== '') {
      setUsername('');
      setPassword('');
      navigation.navigate('Home');
    } else {
      Alert.alert('Please enter a username and password');
    }
  }

  return (
  <SafeAreaView style={styles.main}>
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to Quiz Manager
      </Text>
    </View>
    <View style={styles.container}>
    <AnswerInputBox
            color="answerColorThree"
            value={username}
            onChange={setUsername}
            placeholder="Username"
            style={'mb-5'}
            placeholderColor="#C315EE"
          />
          <AnswerInputBox
            color="answerColorFour"
            value={password}
            onChange={setPassword}
            placeholder="Password"
            placeholderColor="#FB3EA6"
          />
        </View>
        <View style={styles.submitButtonContainer}>
          <TouchableOpacity onPress={() => verifyLogin()}>
            <Text style={styles.submitText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.googleButtonContainer}>
          <TouchableOpacity onPress={() => onGoogleButtonPress()}>
            <Text style={styles.submitText}>GOOGLE LOGIN</Text>
          </TouchableOpacity>
        </View>
  </SafeAreaView>
);
};

const styles = {
  container: s`flex-2 mb-10 flex-col w-96 justify-between bg-background-main`,
  main: s `flex-1 items-center justify-center bg-background-main`,
  title: s`mb-10 text-6xl text-center font-extrabold leading-none tracking-tight text-titleText md:text-5xl lg:text-6xl dark:text-white bg-background-main`,
  submitButtonContainer: s`flex-5 w-96 py-2 mr-4 ml-4 bg-leaderboardButton border-2 rounded-xl border-leaderboardButton`,
  submitText: s`text-4xl font-bold text-background-main text-center `,
  googleButtonContainer: s`flex-5 mt-10 w-96 py-2 mr-4 ml-4 bg-white border-2 rounded-xl border-white`,
};

export default Login;