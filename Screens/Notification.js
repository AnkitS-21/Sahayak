import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Footer from './Footer';
import { useNavigation, useRoute } from '@react-navigation/native';

const Notification = ({ navigation }) => {
    const route = useRoute();
    const { userName, userEmail } = route.params;

  return (
    <View style={styles.container}>
    <ScrollView>
        <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Profile', { userName, userEmail })}>
            <Text style={styles.backText}>&lt;</Text>
            </TouchableOpacity>
            <Text style={styles.headerText}>Notification</Text>
        </View>

        <View style={styles.content}>
            <Image source={require('../assets/notification.png')} style={styles.illustration} />
            <Text style={styles.message}>No Notifications Currently</Text>
            <Text style={styles.subMessage}>Create a fundraiser to receive timely tips and insights.</Text>
            <View style={styles.benefitsContainer}>
            <Text style={styles.benefitText}>Instant Updates</Text>
            <Text style={styles.benefitText}>Know Your Support</Text>
            <Text style={styles.benefitText}>Track Your Progress</Text>
            </View>
            <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('CampaignMain', { userName, userEmail })}>
            <Text style={styles.startButtonText}>Start A Fundraiser</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F6FB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E87E2',
    padding: 16,
    marginBottom: 20,
  },
  backButton: {
    padding: 8,
  },
  backText: {
    fontSize: 24,
    color: 'white',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 16,
  },
  content: {
    padding: 16,
    alignItems: 'center',
  },
  illustration: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subMessage: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  benefitsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  benefitText: {
    fontSize: 16,
  },
  startButton: {
    backgroundColor: '#FFC107',
    padding: 16,
    borderRadius: 8,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  footerText: {
    fontSize: 12,
  },
});

export default Notification;