
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from '@react-navigation/native';

const Otp = ({ route }) => {
  const { confirmation } = route.params;
  const [code, setCode] = useState('');
  const [isOTPVerified, setIsOTPVerified] = useState(false);
  const navigation = useNavigation();

  const confirmCode = async () => {
    try {
      await confirmation.confirm(code);
      const user = auth().currentUser;

      // Checking if the user is new or existing
      const userDocument = await firestore()
        .collection('users')
        .doc(user.uid)
        .get();

      if (userDocument.exists) {
        const userName = userDocument.data().name;
        navigation.navigate('HomePage', { userName });
      } else {
        navigation.navigate('Details', { uid: user.uid });
      }
    } catch (error) {
      console.log("Invalid Code: ", error);
    }
  };

  const handleChangeOTP = (otp) => {
    setCode(otp);
    // Assuming OTP is 6 digits long
    setIsOTPVerified(otp.length === 6);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter OTP</Text>
      <View style={styles.phoneNumberContainer}>
        <TextInput
          style={styles.phoneNumberInput}
          placeholder="Enter OTP"
          keyboardType="numeric"
          value={code}
          onChangeText={handleChangeOTP}
        />
      </View>
      <TouchableOpacity
        style={[styles.verifyOTPButton, isOTPVerified ? styles.validVerifyOTPButton : styles.invalidVerifyOTPButton]}
        onPress={confirmCode}>
        <Text style={styles.verifyOTPButtonText}>Verify OTP</Text>
      </TouchableOpacity>
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
  label: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: 16,
  },
  verifyOTPButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  validVerifyOTPButton: {
    backgroundColor: 'blue',
  },
  invalidVerifyOTPButton: {
    backgroundColor: '#ccc',
  },
  verifyOTPButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Otp;
