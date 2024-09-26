import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Button as RNButton } from 'react-native'; // Note the import of Button from React Native
import firestore from '@react-native-firebase/firestore';
import Footer from './Footer';
import { Button } from 'react-native-paper'; // Paper button for donations

class CampaignList extends Component {
  state = {
    campaigns: [],
  };

  componentDidMount() {
    this.fetchCampaigns();
  }

  fetchCampaigns = async () => {
    try {
      const campaignsSnapshot = await firestore().collection('Campaigns').get();
      const campaigns = campaignsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      this.setState({ campaigns });
    } catch (error) {
      console.error('Error fetching campaigns: ', error);
    }
  };

  renderCampaigns = () => {
    const { campaigns } = this.state;

    if (campaigns.length === 0) {
      return <Text>No campaigns available.</Text>;
    }

    return campaigns.map((campaign) => (
      <View key={campaign.id} style={styles.campaignContainer}>
        <Text style={styles.campaignTitle}>Campaign for: {campaign.patientName}</Text>
        <Text>Reason: {campaign.reason}</Text>
        <Text>Required Amount: {campaign.requiredAmount}</Text>
        <Text>Disease: {campaign.diseaseName}</Text>
        <Text>Mobile: {campaign.mobile}</Text>
        <Text>Created by: {campaign.yourName}</Text>
        <Button onPress={() => this.handleDonate(campaign.id)}>Donate</Button>
      </View>
    ));
  };

  handleDonate = (campaignId) => {
    // Navigate to the donation screen with the campaign ID
    this.props.navigation.navigate('Donate', { campaignId });
  };

  render() {
    const { userName, userEmail } = this.props; // Destructure props

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {/* Start Fundraiser Button */}
          <RNButton
            title="Start Fundraiser"
            onPress={() => this.props.navigation.navigate('Campaign', { userName, userEmail })} // Ensure 'Campaign' is the correct route name
            color="#1BBF00" // Customize button color as needed
          />
          <Text style={styles.headerText}>All Campaigns</Text>
          {this.renderCampaigns()}
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF4FF',
  },
  scrollView: {
    padding: 20,
    paddingBottom: 60, // Space for footer
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#003198',
  },
  campaignContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  campaignTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1BBF00',
  },
});

export default CampaignList;
