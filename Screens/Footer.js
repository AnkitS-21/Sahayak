// Footer.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
const Footer = () => {
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('HomePage')}>
        <Image source={require('../assets/HomeIcon.png')} style={styles.footerButtonIcon} />
        <Text style={styles.footerButtonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('CampaignMain')}>
        <Image source={require('../assets/Campaign.png')} style={styles.footerButtonIcon} />
        <Text style={styles.footerButtonText}>Campaign</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Withdraw')}>
        <Image source={require('../assets/withdraw.png')} style={styles.footerButtonIcon} />
        <Text style={styles.footerButtonText}>Withdraw</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Profile')}>
        <Image source={require('../assets/user.png')} style={styles.footerButtonIcon} />
        <Text style={styles.footerButtonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,

  },
  footerButton: {
    padding: 10,
    alignItems: 'center',
  },
  footerButtonIcon: {
    width: 20,
    height: 20,
  },
  footerButtonText: {
    color: '#7E98D1'
  },
});

export default Footer;
