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
import { GoogleSignin} from '@react-native-google-signin/google-signin';
import UserInputBox from '../../Components/UserInputBox';



const Login = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');

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
    setUserId(user.uid);
    //console.log('uid',userId);
    navigation.navigate('Home', {userId: userId});
    } else {
      console.log('idToken is null');
      setUserId('');
      Alert.alert('Error', 'Google Signin failed');
    }

  }

  async function firebaseVerifyUser () {
    //console.log('Verifying user...');
    await auth()
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      //console.log(userCredential);
      const user = userCredential.user;
      setUserId(user.uid);
      //console.log('UID:', userId);
    })
    .catch(error => {
      console.error('Login error:', error);
      setUserId('');
    });
  }

  const verifyLogin = async () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter email and password');
    } else {
      await firebaseVerifyUser();
      if (userId !== '') {
        setEmail('');
        setPassword('');
        navigation.navigate('Home', {userId: userId});
      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    }
  };

  return (
  <SafeAreaView style={styles.main}>
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to Quiz Manager
      </Text>
    </View>
    <View style={styles.container}>
      <UserInputBox
        colour="#FB3EA6"
        value={email}
        onChange={setEmail}
        placeholder="email"
        style={'mb-5'}
      />
      <UserInputBox
        colour="#FB3EA6"
        value={password}
        onChange={setPassword}
        placeholder="Password"
        password={true}
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
