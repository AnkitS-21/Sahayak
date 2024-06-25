import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import Footer from './Footer';

const CampaignThankYou = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/thank_you.png')} style={styles.headerImage} />
        <Text style={styles.thankyou}> Thank You !</Text>
        <Text style={styles.headerText}>
          Dear <Text style={styles.userName}>Rinku Patel</Text>, your fundraiser has just been started
        </Text>
      </View>

      <View style={styles.content}>
        
        
        <View style={styles.uploadSection}>
            <Text style={styles.title}>Help Rinku Patel to fight with NICU Care</Text>
          <TouchableOpacity style={styles.uploadButton}>
            <Image source={require('../assets/uploadfile.png')} style={styles.uploadIcon} />
            <Text style={styles.uploadText}>Upload</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.goToCampaignButton}>
              <Text style={styles.buttonText}>Go To Campaign</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.goToDashboardButton}>
              <Text style={styles.buttonText}>Go To Dashboard</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.infoText}>
          Ask Your Friend And Family to join you in supporting this cause. 
          <Text style={styles.highlightedText}> Every Social media Can bring 5 more donations</Text> 
          and help reach the goal faster.
        </Text>

        <TouchableOpacity style={styles.shareWhatsAppButton}>
          <Text style={styles.shareButtonText}>Share On What's app</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareFacebookButton}>
          <Text style={styles.shareButtonText}>Share On Facebook</Text>
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
  },
  header: {
    backgroundColor: '#3B5998',
    paddingBottom: 20,
    paddingTop: 50,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  thankyou: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  userName: {
    color: '#FFC107',
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3B5998',
    textAlign: 'center',
    marginBottom: 20,
  },
  uploadSection: {
    width: '100%',
    padding: 20,
    backgroundColor: '#B1CFE7',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  uploadButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 14,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  goToCampaignButton: {
    backgroundColor: '#3B5998',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  goToDashboardButton: {
    backgroundColor: '#FFDF39',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  infoText: {
    fontSize: 14,
    color: '#575757',
    textAlign: 'center',
    marginBottom: 20,
  },
  highlightedText: {
    color: '#B89B00',
    fontWeight: 'bold',
  },
  shareWhatsAppButton: {
    backgroundColor: '#1BBF00',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  shareFacebookButton: {
    backgroundColor: '#163E9C',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CampaignThankYou;
