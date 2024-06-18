import React, { useEffect } from 'react';
import { View, ImageBackground, Pressable, Text, StyleSheet, Dimensions } from 'react-native';

const Welcome = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/welcome.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={styles.sahayak}>SAHAYAK</Text>
          <Text style={styles.quoteText}>Empowering hope, one donation at a time</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('OnboardingScreen')}
          >
            <Text style={styles.buttonText}>Let's Explore</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: windowHeight * 0.05,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    color: 'white',
  },
  sahayak: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  quoteText: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  buttonContainer: {
    marginBottom: windowHeight * 0.05,
  },
  button: {
    backgroundColor: 'cornflowerblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Welcome;