import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore';

export default function Details({ route, navigation }) {
  const { uid } = route.params;
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');

  const saveDetails = async () => {
    try {
      await firestore().collection('users').doc(uid).set({
        name,
        dob,
        gender,
      });
      navigation.navigate('HomePage', { userName: name });
    } catch (error) {
      console.log("Error in Saving Details", error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 40, marginTop: 150 }}>
        Enter Your Details:
      </Text>
      <TextInput
        style={{ height: 50, width: '100%', borderColor: 'black', borderWidth: 1, marginBottom: 30, paddingHorizontal: 10 }}
        placeholder='Name'
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={{ height: 50, width: '100%', borderColor: 'black', borderWidth: 1, marginBottom: 30, paddingHorizontal: 10 }}
        placeholder='Date of Birth'
        value={dob}
        onChangeText={setDob}
      />
      <TextInput
        style={{ height: 50, width: '100%', borderColor: 'black', borderWidth: 1, marginBottom: 30, paddingHorizontal: 10 }}
        placeholder='Gender'
        value={gender}
        onChangeText={setGender}
      />
      <TouchableOpacity
        onPress={saveDetails}
        style={{
          backgroundColor: '#0D42CA',
          padding: 10,
          borderRadius: 5,
          marginBottom: 20,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 22,
            fontWeight: "bold"
          }}
        >
          Save Details
        </Text>
      </TouchableOpacity>
    </View>
  );
}