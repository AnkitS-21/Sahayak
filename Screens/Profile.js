// Profile.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Footer from './Footer';  // Import the Footer component
import { useRoute } from '@react-navigation/native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }} style={styles.profileImage} />
          <Text style={styles.userName}>Ankit Singh</Text>
          <TouchableOpacity style={styles.settingsIcon}>
            <Image source={require('../assets/settings.png')} style={styles.settingsImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Personal Details</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Email Address</Text>
            <Text style={styles.detailValue}>akashpatel@gmail.com</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Date Of Birth</Text>
            <Text style={styles.detailValue}>23.05.1998</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Contact No.</Text>
            <Text style={styles.detailValue}>+91 - 8982515386</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Address</Text>
            <Text style={styles.detailValue}>Patrika Nagar , Hyderabad , Telangana</Text>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF0F8',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    backgroundColor: '#3B5998',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  settingsIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  settingsImage: {
    width: 30,
    height: 30,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3B5998',
    marginBottom: 20,
  },
  detailRow: {
    marginBottom: 20,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3B5998',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    color: '#3B5998',
  },
});

export default Profile;
