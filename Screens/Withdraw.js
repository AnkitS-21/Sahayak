import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import Footer from './Footer';

const Withdraw = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/doctor_image.png')} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>No Amount To Withdraw !!</Text>
        <Text style={styles.text}>
          With a few simple steps, withdraw the raised amount at any point in your fundraising journey
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start A Fundraiser</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF4FF',
    justifyContent: 'space-between',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 400,
    resizeMode: 'cover',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#E42900', // Orange color
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#5F83D0'
  },
  button: {
    backgroundColor: '#FFDF39', // Yellow color
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    fontSize: 18,
    color: '#003198',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  footerIcon: {
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  footerText: {
    fontSize: 14,
  },
});

export default Withdraw;
