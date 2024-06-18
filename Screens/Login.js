import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({ webClientId: '322687737496-67sq6o16segenbfmufm4ljud0fd7j3q8.apps.googleusercontent.com' });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo(userInfo);

      // Firebase authentication with the Google ID token
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
      await auth().signInWithCredential(googleCredential);

      // After successful sign-in, navigate to the Homepage
      navigation.navigate('HomePage', { userName: userInfo.user.name });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("User cancelled the login flow");
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("Sign in is in progress already");
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("Play services not available or outdated");
      } else {
        console.error("Some other error happened:", error);
      }
    }
  };

  const signInWithPhoneNumber = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      navigation.navigate('Otp', { confirmation });
    } catch (error) {
      console.log("Error Sending Code: ", error);
    }
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      const user = auth().currentUser;

      // Checking if the user is new or existing
      const userDocument = await firestore()
        .collection('users')
        .doc(user.uid)
        .get();

      if (userDocument.exists) {
        navigation.navigate('HomePage');
      } else {
        navigation.navigate('Details', { uid: user.uid });
      }
    } catch (error) {
      console.log("Invalid Code: ", error);
    }
  };

  const handleChangePhoneNumber = (number) => {
    setPhoneNumber(number);
    setIsValidPhoneNumber(number.length > 0);
  };

  const signInWithFacebook = async () => {
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/sahayak-01.png')} style={styles.logo} />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Your Mobile No.</Text>
        <View style={styles.phoneNumberContainer}>
          <TextInput
            style={styles.phoneNumberInput}
            placeholder="+91"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={handleChangePhoneNumber}
          />
        </View>
        <TouchableOpacity
          style={[styles.sendOTPButton, isValidPhoneNumber ? styles.validSendOTPButton : styles.invalidSendOTPButton]}
          onPress={signInWithPhoneNumber}
        >
          <Text style={styles.sendOTPButtonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dividerContainer}>
        <Text style={styles.dividerText}>----------- or -----------</Text>
      </View>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]} onPress={signIn}>
          <FontAwesome5 name="google" size={24} color="white" />
          <Text style={styles.socialButtonText}>Login with Google</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 20 }} />
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]} onPress={signInWithFacebook}>
          <MaterialIcons name="facebook" size={24} color="white" />
          <Text style={styles.socialButtonText}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 300,
    height: 150,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: 16,
  },
  sendOTPButton: {
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  validSendOTPButton: {
    backgroundColor: 'blue',
  },
  invalidSendOTPButton: {
    backgroundColor: '#ccc',
  },
  sendOTPButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dividerContainer: {
    marginVertical: 20,
  },
  dividerText: {
    fontSize: 16,
  },
  socialLoginContainer: {
    flexDirection: 'row',
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  googleButton: {
    backgroundColor: 'red',
  },
  facebookButton: {
    backgroundColor: 'blue',
  },
  socialButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Login;